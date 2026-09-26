const CONFIG = PropertiesService.getScriptProperties();

function setup() {
  const existingId = CONFIG.getProperty('SPREADSHEET_ID');
  if (existingId) {
    Logger.log('Réservations : https://docs.google.com/spreadsheets/d/' + existingId);
    return;
  }
  const spreadsheet = SpreadsheetApp.create('Sandra Coiffure — Réservations');
  const sheet = spreadsheet.getSheets()[0];
  sheet.setName('Créneaux');
  sheet.appendRow(['Date', 'Heure', 'Durée (minutes)', 'Créé le']);
  CONFIG.setProperty('SPREADSHEET_ID', spreadsheet.getId());
  Logger.log('Feuille créée : ' + spreadsheet.getUrl());
}

function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};
  const callback = String(params.callback || '');
  if (!/^[A-Za-z_$][A-Za-z0-9_$]{0,80}$/.test(callback)) {
    return ContentService.createTextOutput('/* callback invalide */')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  try {
    if (params.action !== 'slots') throw new Error('Action inconnue.');
    const date = String(params.date || '');
    const duration = clampDuration_(params.duration);
    validateAppointment_(date, '09h30', duration, false);
    const sheet = getBookingSheet_();
    const values = sheet.getDataRange().getValues().slice(1);
    const requestedDate = date;
    const startSlots = getStartSlots_(date, duration);
    const taken = new Set();
    values.forEach(function(row) {
      if (String(row[0]) !== requestedDate) return;
      const existingStart = parseSlot_(String(row[1]));
      const existingDuration = Number(row[2]) || 30;
      startSlots.forEach(function(candidate) {
        const start = parseSlot_(candidate);
        if (start < existingStart + existingDuration && start + duration > existingStart) {
          taken.add(candidate);
        }
      });
    });
    return jsonp_(callback, { ok: true, taken: Array.from(taken) });
  } catch (error) {
    return jsonp_(callback, { ok: false, error: safeMessage_(error) });
  }
}

function doPost(e) {
  const p = e && e.parameter ? e.parameter : {};
  const token = String(p.token || '');
  if (!/^[A-Za-z0-9_-]{12,100}$/.test(token)) {
    return frameResponse_('', { ok: false, error: 'Formulaire invalide.' });
  }
  if (String(p.website || '').trim()) {
    return frameResponse_(token, { ok: true });
  }

  try {
    const recipient = CONFIG.getProperty('RECIPIENT_EMAIL');
    if (!recipient || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
      throw new Error('La réception des courriels n’est pas configurée.');
    }
    if (p.action === 'contact') {
      const name = requiredText_(p.name, 'Nom', 100);
      const email = requiredEmail_(p.email);
      const message = requiredText_(p.message, 'Message', 3000);
      MailApp.sendEmail({
        to: recipient,
        replyTo: email,
        name: 'Formulaire Sandra Coiffure',
        subject: 'Nouveau message depuis le site — ' + name,
        body: 'Nom : ' + name + '\nE-mail : ' + email + '\n\n' + message
      });
      return frameResponse_(token, { ok: true, message: 'Votre message a bien été envoyé.' });
    }
    if (p.action !== 'book') throw new Error('Action inconnue.');

    const name = requiredText_(p.name, 'Nom', 100);
    const phone = requiredText_(p.phone, 'Téléphone', 40);
    const services = requiredText_(p.services, 'Prestations', 500);
    const date = String(p.date || '');
    const slot = String(p.slot || '');
    const duration = clampDuration_(p.duration);
    const total = requiredText_(p.total, 'Total', 40);
    validateAppointment_(date, slot, duration, true);

    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    let rowNumber = 0;
    try {
      const sheet = getBookingSheet_();
      const rows = sheet.getDataRange().getValues().slice(1);
      const requestedStart = parseSlot_(slot);
      const collision = rows.some(function(row) {
        if (String(row[0]) !== date) return false;
        const existingStart = parseSlot_(String(row[1]));
        const existingDuration = Number(row[2]) || 30;
        return requestedStart < existingStart + existingDuration &&
          requestedStart + duration > existingStart;
      });
      if (collision) {
        return frameResponse_(token, {
          ok: false,
          conflict: true,
          error: 'Ce créneau vient d’être réservé. Choisissez-en un autre.'
        });
      }

      rowNumber = sheet.getLastRow() + 1;
      sheet.appendRow([date, slot, duration, new Date()]);
      try {
        MailApp.sendEmail({
          to: recipient,
          name: 'Réservation Sandra Coiffure',
          subject: 'Nouvelle réservation — ' + date + ' à ' + slot,
          body: 'Une réservation a été enregistrée.\n\n' +
            'Nom : ' + name + '\nTéléphone : ' + phone + '\nDate : ' + date +
            '\nHeure : ' + slot + '\nDurée : ' + duration + ' min\nPrestations : ' +
            services + '\nTotal estimé : ' + total + '\n\n' +
            'Le créneau a été bloqué dans le calendrier du site.'
        });
      } catch (mailError) {
        sheet.deleteRow(rowNumber);
        throw new Error('Le courriel n’a pas pu être envoyé; le créneau n’a pas été bloqué. Réessayez ou appelez le salon.');
      }
    } finally {
      lock.releaseLock();
    }
    return frameResponse_(token, { ok: true, message: 'Votre demande de réservation a été envoyée au salon.' });
  } catch (error) {
    return frameResponse_(token, { ok: false, error: safeMessage_(error) });
  }
}

function getBookingSheet_() {
  const id = CONFIG.getProperty('SPREADSHEET_ID');
  if (!id) throw new Error('Initialisez la feuille de réservations en exécutant setup().');
  const sheet = SpreadsheetApp.openById(id).getSheetByName('Créneaux');
  if (!sheet) throw new Error('La feuille Créneaux est introuvable.');
  return sheet;
}

function getStartSlots_(date, duration) {
  const day = new Date(date + 'T12:00:00').getDay();
  if (day === 0 || day === 1) return [];
  const close = day === 6 ? 18 * 60 : 19 * 60;
  const slots = [];
  for (let start = 9 * 60 + 30; start + duration <= close; start += 30) {
    if (start === 12 * 60 + 30 || start === 13 * 60) continue;
    if (start < 13 * 60 + 30 && start + duration > 12 * 60 + 30) continue;
    slots.push(formatSlot_(start));
  }
  return slots;
}

function validateAppointment_(date, slot, duration, checkSlot) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error('Choisissez une date valide.');
  }
  const parsedDate = new Date(date + 'T12:00:00Z');
  if (isNaN(parsedDate.getTime()) ||
      Utilities.formatDate(parsedDate, 'UTC', 'yyyy-MM-dd') !== date) {
    throw new Error('Choisissez une date valide.');
  }
  const todayText = Utilities.formatDate(new Date(), 'Europe/Paris', 'yyyy-MM-dd');
  const today = new Date(todayText + 'T12:00:00Z');
  const latest = new Date(today.getTime());
  latest.setUTCDate(latest.getUTCDate() + 45);
  if (parsedDate < today || parsedDate > latest) {
    throw new Error('Choisissez une date dans les 45 prochains jours.');
  }
  const day = parsedDate.getUTCDay();
  if (day === 0 || day === 1) {
    throw new Error('Le salon est fermé le dimanche et le lundi.');
  }
  if (checkSlot && getStartSlots_(date, duration).indexOf(slot) === -1) {
    throw new Error('Cette heure n’est pas disponible pour la durée choisie.');
  }
}

function clampDuration_(value) {
  const duration = Number(value);
  if (!Number.isInteger(duration) || duration < 15 || duration > 300) {
    throw new Error('Durée de réservation invalide.');
  }
  return duration;
}

function parseSlot_(slot) {
  const match = /^(\d{2})h(\d{2})$/.exec(slot);
  if (!match) throw new Error('Heure invalide.');
  return Number(match[1]) * 60 + Number(match[2]);
}

function formatSlot_(minutes) {
  return String(Math.floor(minutes / 60)).padStart(2, '0') + 'h' +
    String(minutes % 60).padStart(2, '0');
}

function requiredText_(value, label, maxLength) {
  const text = String(value || '').trim();
  if (!text || text.length > maxLength) throw new Error(label + ' invalide.');
  return text;
}

function requiredEmail_(value) {
  const email = requiredText_(value, 'E-mail', 254);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Adresse e-mail invalide.');
  return email;
}

function safeMessage_(error) {
  return error && error.message ? String(error.message).slice(0, 240) : 'Une erreur est survenue.';
}

function jsonp_(callback, data) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return ContentService.createTextOutput(callback + '(' + json + ');')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function frameResponse_(token, result) {
  const data = JSON.stringify({ token: token, result: result }).replace(/</g, '\\u003c');
  const html = '<!doctype html><meta charset="utf-8"><script>' +
    'window.top.postMessage(' + data + ', "*");</script>';
  return HtmlService.createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
