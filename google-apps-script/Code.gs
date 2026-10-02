const TIME_ZONE = 'Europe/Paris';
const CALENDAR_ID = 'primary'; // Remplacer si l'agenda du salon n'est pas l'agenda principal.
const SLOT_STEP_MINUTES = 15;
const BOOKING_HORIZON_DAYS = 90;
const OPENING_MINUTES = {
  1: [570, 1140], 2: [570, 1140], 3: [570, 1140],
  4: [570, 1140], 5: [570, 1140], 6: [540, 900]
};

const SERVICE_CATALOG = [
  {
    "id": "0",
    "name": "Balayage + patine + brushing - Cheveux mi longs",
    "minutes": 195,
    "price": "110 €",
    "provider": "Sandra"
  },
  {
    "id": "1",
    "name": "Balayage + patine + brushing - Cheveux longs",
    "minutes": 255,
    "price": "125 €",
    "provider": "Sandra"
  },
  {
    "id": "2",
    "name": "Balayage + patine + brushing + coupe - Cheveux mi longs",
    "minutes": 195,
    "price": "124 €",
    "provider": "Sandra"
  },
  {
    "id": "3",
    "name": "Balayage + patine + brushing + coupe - Cheveux longs",
    "minutes": 255,
    "price": "139 €",
    "provider": "Sandra"
  },
  {
    "id": "4",
    "name": "Shampooing",
    "minutes": 5,
    "price": "3 €",
    "provider": "Sandra"
  },
  {
    "id": "5",
    "name": "Soin profond",
    "minutes": 5,
    "price": "10 €",
    "provider": "Sandra"
  },
  {
    "id": "6",
    "name": "Double patine ou gloss supplémentaire",
    "minutes": 15,
    "price": "À partir de 15 €",
    "provider": "Sandra"
  },
  {
    "id": "7",
    "name": "Supplément lissage / wavy",
    "minutes": 15,
    "price": "5 €",
    "provider": "Sandra"
  },
  {
    "id": "8",
    "name": "Supplément mousse",
    "minutes": 5,
    "price": "5 €",
    "provider": "Sandra"
  },
  {
    "id": "9",
    "name": "Mèches + patine + brushing - Cheveux courts",
    "minutes": 100,
    "price": "85 €",
    "provider": "Sandra"
  },
  {
    "id": "10",
    "name": "Mèches + platine + brushing - Cheveux mi longs",
    "minutes": 165,
    "price": "95 €",
    "provider": "Sandra"
  },
  {
    "id": "11",
    "name": "Mèches + patine + brushing - Cheveux longs",
    "minutes": 180,
    "price": "110 €",
    "provider": "Sandra"
  },
  {
    "id": "12",
    "name": "Mèches + patine + coupe + brushing - Cheveux courts",
    "minutes": 165,
    "price": "99 €",
    "provider": "Sandra"
  },
  {
    "id": "13",
    "name": "Mèches + patine + coupe + brushing - Cheveux mi longs",
    "minutes": 175,
    "price": "109 €",
    "provider": "Sandra"
  },
  {
    "id": "14",
    "name": "Mèches + patine + coupe + brushing - Cheveux longs",
    "minutes": 180,
    "price": "125 €",
    "provider": "Sandra"
  },
  {
    "id": "15",
    "name": "Shampoing",
    "minutes": 3,
    "price": "5 €",
    "provider": "Sandra"
  },
  {
    "id": "16",
    "name": "Soin profond",
    "minutes": 5,
    "price": "10 €",
    "provider": "Sandra"
  },
  {
    "id": "17",
    "name": "Double patine ou gloss supplémentaire",
    "minutes": 15,
    "price": "À partir de 15 €",
    "provider": "Sandra"
  },
  {
    "id": "18",
    "name": "Supplément lissage / wavy",
    "minutes": 15,
    "price": "5 €",
    "provider": "Sandra"
  },
  {
    "id": "19",
    "name": "Supplément mousse",
    "minutes": 5,
    "price": "5 €",
    "provider": "Sandra"
  },
  {
    "id": "20",
    "name": "Coloration + brushing - Cheveux courts",
    "minutes": 90,
    "price": "À partir de 49 €",
    "provider": "Sandra"
  },
  {
    "id": "21",
    "name": "Coloration + brushing - Cheveux mi-long",
    "minutes": 100,
    "price": "À partir de 65 €",
    "provider": "Sandra"
  },
  {
    "id": "22",
    "name": "Coloration + brushing - Cheveux longs",
    "minutes": 110,
    "price": "À partir de 75 €",
    "provider": "Sandra"
  },
  {
    "id": "23",
    "name": "Coloration + brushing + coupe - Cheveux courts",
    "minutes": 105,
    "price": "À partir de 72 €",
    "provider": "Sandra"
  },
  {
    "id": "24",
    "name": "Coloration + brushing + coupe - Cheveux mi-long",
    "minutes": 100,
    "price": "À partir de 78 €",
    "provider": "Sandra"
  },
  {
    "id": "25",
    "name": "Coloration + brushing + coupe - Cheveux longs",
    "minutes": 110,
    "price": "À partir de 88 €",
    "provider": "Sandra"
  },
  {
    "id": "26",
    "name": "Coloration + mèches + brushing - Cheveux courts",
    "minutes": 125,
    "price": "15 €",
    "provider": "Sandra"
  },
  {
    "id": "27",
    "name": "Coloration + mèches + brushing - Cheveux mi-longs",
    "minutes": 170,
    "price": "15 €",
    "provider": "Sandra"
  },
  {
    "id": "28",
    "name": "Coloration + mèches + brushing - Cheveux longs",
    "minutes": 215,
    "price": "15 €",
    "provider": "Sandra"
  },
  {
    "id": "29",
    "name": "Coloration + mèches + brushing + coupe - Cheveux courts",
    "minutes": 135,
    "price": "15 €",
    "provider": "Sandra"
  },
  {
    "id": "30",
    "name": "Coloration + mèches + brushing + coupe - Cheveux mi-long",
    "minutes": 180,
    "price": "15 €",
    "provider": "Sandra"
  },
  {
    "id": "31",
    "name": "Coloration + mèches + brushing + coupe - Cheveux longs",
    "minutes": 215,
    "price": "15 €",
    "provider": "Sandra"
  },
  {
    "id": "32",
    "name": "Shampoing",
    "minutes": 5,
    "price": "3 €",
    "provider": "Sandra"
  },
  {
    "id": "33",
    "name": "Soin profond",
    "minutes": 5,
    "price": "10 €",
    "provider": "Sandra"
  },
  {
    "id": "34",
    "name": "Double patine ou gloss supplémentaire",
    "minutes": 15,
    "price": "À partir de 15 €",
    "provider": "Sandra"
  },
  {
    "id": "35",
    "name": "Supplément lissage / wavy",
    "minutes": 15,
    "price": "5 €",
    "provider": "Sandra"
  },
  {
    "id": "36",
    "name": "Supplément mousse",
    "minutes": 5,
    "price": "5 €",
    "provider": "Sandra"
  },
  {
    "id": "37",
    "name": "Brushing",
    "minutes": 45,
    "price": "Tarif à confirmer",
    "provider": "Sandra"
  },
  {
    "id": "38",
    "name": "Shampoing  + Brushing",
    "minutes": 30,
    "price": "Tarif à confirmer",
    "provider": "Sandra"
  },
  {
    "id": "39",
    "name": "Coupe bébé jusqu'à 2 ans",
    "minutes": 15,
    "price": "8 €",
    "provider": "Sandra"
  },
  {
    "id": "40",
    "name": "Coupe fillette jusqu'à 12 ans",
    "minutes": 15,
    "price": "15 €",
    "provider": "Sandra"
  },
  {
    "id": "41",
    "name": "Coupe garçon jusqu'à 12 ans",
    "minutes": 15,
    "price": "12 €",
    "provider": "Sandra"
  },
  {
    "id": "42",
    "name": "Dégradé, taper, etc... jusqu'à 12 ans",
    "minutes": 30,
    "price": "20 €",
    "provider": "Sandra"
  },
  {
    "id": "43",
    "name": "Shampooing coupe coiffage (court)",
    "minutes": 30,
    "price": "30 €",
    "provider": "Sandra"
  },
  {
    "id": "44",
    "name": "Shampooing coupe coiffage (mi long)",
    "minutes": 30,
    "price": "38 €",
    "provider": "Sandra"
  },
  {
    "id": "45",
    "name": "Shampooing coupe coiffage (long)",
    "minutes": 45,
    "price": "45 €",
    "provider": "Sandra"
  },
  {
    "id": "46",
    "name": "Brushing cheveux court",
    "minutes": 30,
    "price": "25 €",
    "provider": "Sandra"
  },
  {
    "id": "47",
    "name": "Brushing cheveux mi-long",
    "minutes": 30,
    "price": "30 €",
    "provider": "Sandra"
  },
  {
    "id": "48",
    "name": "Brushing cheveux long",
    "minutes": 30,
    "price": "35 €",
    "provider": "Sandra"
  },
  {
    "id": "49",
    "name": "Soin cheveux court",
    "minutes": 5,
    "price": "6 €",
    "provider": "Sandra"
  },
  {
    "id": "50",
    "name": "Soin cheveux mi long",
    "minutes": 5,
    "price": "8 €",
    "provider": "Sandra"
  },
  {
    "id": "51",
    "name": "Soin cheveux long",
    "minutes": 5,
    "price": "10 €",
    "provider": "Sandra"
  },
  {
    "id": "52",
    "name": "Soin Serviette Chaude",
    "minutes": 10,
    "price": "13 €",
    "provider": "Sandra"
  },
  {
    "id": "53",
    "name": "Frange",
    "minutes": 10,
    "price": "5 €",
    "provider": "Sandra"
  },
  {
    "id": "54",
    "name": "Supplément lissage / wavy",
    "minutes": 15,
    "price": "6 €",
    "provider": "Sandra"
  },
  {
    "id": "55",
    "name": "Supplément mousse",
    "minutes": 5,
    "price": "5 €",
    "provider": "Sandra"
  },
  {
    "id": "56",
    "name": "Coupe classique sans shampooing",
    "minutes": 30,
    "price": "16 €",
    "provider": "Sandra"
  },
  {
    "id": "57",
    "name": "Dégradé américain, taper etc",
    "minutes": 30,
    "price": "20 €",
    "provider": "Sandra"
  },
  {
    "id": "58",
    "name": "Coupe + traçage barbe",
    "minutes": 30,
    "price": "28 €",
    "provider": "Sandra"
  },
  {
    "id": "59",
    "name": "Traçage barbe",
    "minutes": 15,
    "price": "12 €",
    "provider": "Sandra"
  },
  {
    "id": "60",
    "name": "Rasage complet à l'ancienne",
    "minutes": 30,
    "price": "25 €",
    "provider": "Sandra"
  },
  {
    "id": "61",
    "name": "Shampooing + coupe",
    "minutes": 30,
    "price": "20 €",
    "provider": "Sandra"
  },
  {
    "id": "62",
    "name": "Rituel barbier",
    "minutes": 20,
    "price": "20 €",
    "provider": "Sandra"
  },
  {
    "id": "63",
    "name": "Rituel Barbier + Coupe",
    "minutes": 45,
    "price": "40 €",
    "provider": "Sandra"
  },
  {
    "id": "64",
    "name": "Coloration barbe",
    "minutes": 15,
    "price": "15 €",
    "provider": "Sandra"
  },
  {
    "id": "65",
    "name": "Coupe + coloration",
    "minutes": 55,
    "price": "45 €",
    "provider": "Sandra"
  },
  {
    "id": "66",
    "name": "Coupe + décoloration",
    "minutes": 155,
    "price": "60 €",
    "provider": "Sandra"
  },
  {
    "id": "67",
    "name": "Coupe + permanente",
    "minutes": 95,
    "price": "55 €",
    "provider": "Sandra"
  },
  {
    "id": "68",
    "name": "Coupe + mèches",
    "minutes": 75,
    "price": "52 €",
    "provider": "Sandra"
  },
  {
    "id": "69",
    "name": "Soin",
    "minutes": 5,
    "price": "6 €",
    "provider": "Sandra"
  },
  {
    "id": "70",
    "name": "Shampoing serviette chaude",
    "minutes": 10,
    "price": "10 €",
    "provider": "Sandra"
  },
  {
    "id": "71",
    "name": "Supplément cheveux long",
    "minutes": 30,
    "price": "6 €",
    "provider": "Sandra"
  },
  {
    "id": "72",
    "name": "Épilation nez / oreilles",
    "minutes": 10,
    "price": "À partir de 7 €",
    "provider": "Sandra"
  },
  {
    "id": "73",
    "name": "👀 POSE COMPLETE RUSSE",
    "minutes": 150,
    "price": "90 €",
    "provider": "Lauralyne"
  },
  {
    "id": "74",
    "name": "Remplissage 2 semaines russe",
    "minutes": 90,
    "price": "45 €",
    "provider": "Lauralyne"
  },
  {
    "id": "75",
    "name": "Remplissage 3 semaines russe",
    "minutes": 90,
    "price": "55 €",
    "provider": "Lauralyne"
  },
  {
    "id": "76",
    "name": "Remplissage 4 semaines russe",
    "minutes": 105,
    "price": "65 €",
    "provider": "Lauralyne"
  },
  {
    "id": "77",
    "name": "👀 POSE COMPLETE MIXTE",
    "minutes": 120,
    "price": "75 €",
    "provider": "Lauralyne"
  },
  {
    "id": "78",
    "name": "Remplissage 2 semaines mixte",
    "minutes": 90,
    "price": "35 €",
    "provider": "Lauralyne"
  },
  {
    "id": "79",
    "name": "Remplissage 3 semaines mixte",
    "minutes": 90,
    "price": "45 €",
    "provider": "Lauralyne"
  },
  {
    "id": "80",
    "name": "Remplissage 4 semaines mixte",
    "minutes": 105,
    "price": "55 €",
    "provider": "Lauralyne"
  },
  {
    "id": "81",
    "name": "👀 POSE COMPLETE CIL A CIL",
    "minutes": 90,
    "price": "60 €",
    "provider": "Lauralyne"
  },
  {
    "id": "82",
    "name": "Remplissage 2 semaines cil a cil",
    "minutes": 60,
    "price": "50 €",
    "provider": "Lauralyne"
  },
  {
    "id": "83",
    "name": "Remplissage 3 semaines cil a cil",
    "minutes": 90,
    "price": "40 €",
    "provider": "Lauralyne"
  },
  {
    "id": "84",
    "name": "Remplissage 4 semaines cil a cil",
    "minutes": 105,
    "price": "50 €",
    "provider": "Lauralyne"
  },
  {
    "id": "85",
    "name": "👀 POSE COMPLETE LINER",
    "minutes": 150,
    "price": "100 €",
    "provider": "Lauralyne"
  },
  {
    "id": "86",
    "name": "Remplissage 2 semaines LINER",
    "minutes": 90,
    "price": "45 €",
    "provider": "Lauralyne"
  },
  {
    "id": "87",
    "name": "Remplissage 3 semaines LINER",
    "minutes": 105,
    "price": "55 €",
    "provider": "Lauralyne"
  },
  {
    "id": "88",
    "name": "Remplissage 4 semaines LINER",
    "minutes": 120,
    "price": "65 €",
    "provider": "Lauralyne"
  },
  {
    "id": "89",
    "name": "Dépose cils",
    "minutes": 20,
    "price": "10 €",
    "provider": "Lauralyne"
  },
  {
    "id": "90",
    "name": "Réhaussement de cil + soin + teinture",
    "minutes": 60,
    "price": "50 €",
    "provider": "Lauralyne"
  },
  {
    "id": "91",
    "name": "Lash lift coréen",
    "minutes": 90,
    "price": "60 €",
    "provider": "Lauralyne"
  },
  {
    "id": "92",
    "name": "Création sourcils",
    "minutes": 240,
    "price": "180 €",
    "provider": "Lauralyne"
  },
  {
    "id": "93",
    "name": "Retouche",
    "minutes": 120,
    "price": "80 €",
    "provider": "Lauralyne"
  },
  {
    "id": "94",
    "name": "Retouche 6 à 8 mois",
    "minutes": 30,
    "price": "90 €",
    "provider": "Lauralyne"
  },
  {
    "id": "95",
    "name": "Retouche 12 mois et plus",
    "minutes": 120,
    "price": "110 €",
    "provider": "Lauralyne"
  },
  {
    "id": "96",
    "name": "Sourcils",
    "minutes": 30,
    "price": "7 €",
    "provider": "Lauralyne"
  },
  {
    "id": "97",
    "name": "Sourcils + teinture",
    "minutes": 30,
    "price": "15 €",
    "provider": "Lauralyne"
  },
  {
    "id": "98",
    "name": "Lèvres",
    "minutes": 5,
    "price": "7 €",
    "provider": "Lauralyne"
  },
  {
    "id": "99",
    "name": "Lissage brésilien",
    "minutes": 150,
    "price": "Sur devis",
    "provider": "Sandra"
  }
];

function doGet(e) {
  var ids = [];
  var errorMessage = '';
  try {
    ids = JSON.parse((e && e.parameter && e.parameter.ids) || '[]');
    getSelectedServices_(ids);
  } catch (error) {
    errorMessage = error.message || 'La sélection de prestations est invalide.';
  }
  var selected = [];
  var durationMinutes = 0;
  if (!errorMessage) {
    selected = getSelectedServices_(ids);
    durationMinutes = selected.reduce(function(total, item) { return total + item.minutes; }, 0);
  }
  var template = HtmlService.createTemplateFromFile('Booking');
  template.idsJson = JSON.stringify(ids);
  template.summaryHtml = selected.map(function(item) {
    return '<li>' + escapeHtml_(item.name) + ' <span>' + item.minutes + ' min</span></li>';
  }).join('');
  template.durationMinutes = durationMinutes;
  template.errorMessage = errorMessage;
  return template.evaluate()
    .setTitle('Réserver — VL’BEAUTY & SV COIFFURE')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getAvailableSlots(dateText, ids) {
  try {
    var selected = getSelectedServices_(ids);
    var duration = selected.reduce(function(total, item) { return total + item.minutes; }, 0);
    var slots = findAvailableSlots_(dateText, duration);
    return {ok: true, slots: slots, durationMinutes: duration};
  } catch (error) {
    return {ok: false, error: error.message || 'Impossible de vérifier les disponibilités.'};
  }
}

function createBooking(payload) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    return {ok: false, error: 'Une réservation est en cours. Réessaie dans quelques secondes.'};
  }
  try {
    if (!payload || payload.website) {
      return {ok: false, error: 'La demande n’a pas pu être traitée.'};
    }
    var selected = getSelectedServices_(payload.ids);
    var duration = selected.reduce(function(total, item) { return total + item.minutes; }, 0);
    var name = String(payload.name || '').trim().slice(0, 80);
    var email = String(payload.email || '').trim().slice(0, 160);
    var phone = String(payload.phone || '').trim().slice(0, 40);
    if (name.length < 2) return {ok: false, error: 'Indique ton prénom et ton nom.'};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return {ok: false, error: 'Indique une adresse e-mail valide.'};
    if (phone.replace(/\D/g, '').length < 8) return {ok: false, error: 'Indique un numéro de téléphone valide.'};

    var start = parseLocalDateTime_(payload.date, payload.time);
    var end = new Date(start.getTime() + duration * 60000);
    if (!withinOpeningHours_(payload.date, start, end)) {
      return {ok: false, error: 'Cette heure ne permet pas de terminer la prestation avant la fermeture.'};
    }
    if (start.getTime() <= Date.now()) return {ok: false, error: 'Choisis un créneau à venir.'};

    var calendar = getCalendar_();
    if (!isFree_(calendar, start, end)) {
      return {ok: false, error: 'Ce créneau vient d’être réservé. Choisis-en un autre.'};
    }
    var providers = selected.map(function(item) { return item.provider; }).filter(function(value, index, list) { return list.indexOf(value) === index; });
    var serviceLines = selected.map(function(item) {
      return '• ' + item.name + ' — ' + item.minutes + ' min — ' + item.price;
    });
    var bookingPrice = formatBookingPrice_(selected);
    var dateLabel = Utilities.formatDate(start, TIME_ZONE, 'dd/MM/yyyy');
    var startLabel = Utilities.formatDate(start, TIME_ZONE, 'HH:mm');
    var endLabel = Utilities.formatDate(end, TIME_ZONE, 'HH:mm');
    var description = [
      'Réservation depuis le site VL’BEAUTY & SV COIFFURE',
      'Client : ' + name,
      'Téléphone : ' + phone,
      'E-mail : ' + email,
      'Intervenante(s) : ' + providers.join(' et '),
      'Date : ' + dateLabel,
      'Horaire : ' + startLabel + ' – ' + endLabel,
      'Prestations :',
      serviceLines.join('\n'),
      'Durée totale : ' + duration + ' min',
      'Prix total indicatif : ' + bookingPrice
    ].join('\n');
    var event = calendar.createEvent(
      'Réservation — ' + providers.join(' et ') + ' — ' + name,
      start,
      end,
      {description: description, guests: email, sendInvites: true}
    );
    return {
      ok: true,
      message: 'Rendez-vous confirmé. Une invitation vient d’être envoyée par e-mail.',
      start: Utilities.formatDate(start, TIME_ZONE, 'yyyy-MM-dd HH:mm'),
      end: Utilities.formatDate(end, TIME_ZONE, 'HH:mm'),
      eventId: event.getId()
    };
  } catch (error) {
    return {ok: false, error: error.message || 'La réservation a échoué. Réessaie.'};
  } finally {
    lock.releaseLock();
  }
}

function formatBookingPrice_(selected) {
  var total = 0;
  var startsAt = false;
  var quote = false;
  selected.forEach(function(item) {
    var label = String(item.price || '').trim();
    if (/devis/i.test(label)) {
      quote = true;
      return;
    }
    if (/partir/i.test(label)) startsAt = true;
    var amount = label.match(/[0-9]+(?:[,.][0-9]+)?/);
    if (amount) total += Number(amount[0].replace(',', '.'));
  });
  if (quote) return 'sur devis';
  return (startsAt ? 'à partir de ' : '') + total + ' €';
}

function findAvailableSlots_(dateText, durationMinutes) {
  if (!Number.isInteger(durationMinutes) || durationMinutes < 5 || durationMinutes > 720) {
    throw new Error('La durée de la sélection est invalide.');
  }
  var day = parseLocalDateTime_(dateText, '12:00');
  var daysAhead = Math.floor((day.getTime() - parseLocalDateTime_(Utilities.formatDate(new Date(), TIME_ZONE, 'yyyy-MM-dd'), '12:00').getTime()) / 86400000);
  if (daysAhead < 0 || daysAhead > BOOKING_HORIZON_DAYS) throw new Error('Choisis une date dans les 90 prochains jours.');
  var weekday = Number(Utilities.formatDate(day, TIME_ZONE, 'u'));
  if (!OPENING_MINUTES[weekday]) return [];
  var bounds = OPENING_MINUTES[weekday];
  var dateString = Utilities.formatDate(day, TIME_ZONE, 'yyyy-MM-dd');
  var opening = parseLocalDateTime_(dateString, minutesToTime_(bounds[0]));
  var closing = parseLocalDateTime_(dateString, minutesToTime_(bounds[1]));
  var calendar = getCalendar_();
  var events = calendar.getEvents(opening, closing);
  var slots = [];
  for (var minute = bounds[0]; minute + durationMinutes <= bounds[1]; minute += SLOT_STEP_MINUTES) {
    var start = parseLocalDateTime_(dateString, minutesToTime_(minute));
    var end = new Date(start.getTime() + durationMinutes * 60000);
    if (start.getTime() > Date.now() && !events.some(function(event) {
      return event.getStartTime().getTime() < end.getTime() &&
        event.getEndTime().getTime() > start.getTime();
    })) {
      slots.push(Utilities.formatDate(start, TIME_ZONE, 'HH:mm'));
    }
  }
  return slots;
}

function isFree_(calendar, start, end) {
  return calendar.getEvents(start, end).every(function(event) {
    return event.getStartTime().getTime() >= end.getTime() ||
      event.getEndTime().getTime() <= start.getTime();
  });
}

function withinOpeningHours_(dateText, start, end) {
  var day = parseLocalDateTime_(dateText, '12:00');
  var weekday = Number(Utilities.formatDate(day, TIME_ZONE, 'u'));
  var bounds = OPENING_MINUTES[weekday];
  if (!bounds) return false;
  var dateString = Utilities.formatDate(day, TIME_ZONE, 'yyyy-MM-dd');
  var opening = parseLocalDateTime_(dateString, minutesToTime_(bounds[0]));
  var closing = parseLocalDateTime_(dateString, minutesToTime_(bounds[1]));
  return start.getTime() >= opening.getTime() && end.getTime() <= closing.getTime();
}

function parseLocalDateTime_(dateText, timeText) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(dateText)) || !/^\d{2}:\d{2}$/.test(String(timeText))) {
    throw new Error('La date ou l’heure est invalide.');
  }
  var value = Utilities.parseDate(dateText + ' ' + timeText, TIME_ZONE, 'yyyy-MM-dd HH:mm');
  if (Utilities.formatDate(value, TIME_ZONE, 'yyyy-MM-dd HH:mm') !== dateText + ' ' + timeText) {
    throw new Error('La date ou l’heure est invalide.');
  }
  return value;
}

function minutesToTime_(minutes) {
  return ('0' + Math.floor(minutes / 60)).slice(-2) + ':' + ('0' + (minutes % 60)).slice(-2);
}

function getSelectedServices_(ids) {
  if (!Array.isArray(ids) || ids.length < 1 || ids.length > 20) {
    throw new Error('Choisis au moins une prestation.');
  }
  var seen = {};
  return ids.map(function(rawId) {
    var id = String(rawId);
    if (!/^\d+$/.test(id) || seen[id] || !SERVICE_CATALOG[Number(id)]) {
      throw new Error('Une prestation sélectionnée est invalide.');
    }
    seen[id] = true;
    return SERVICE_CATALOG[Number(id)];
  });
}

function getCalendar_() {
  var calendar = CALENDAR_ID === 'primary'
    ? CalendarApp.getDefaultCalendar()
    : CalendarApp.getCalendarById(CALENDAR_ID);
  if (!calendar) throw new Error('L’agenda Google configuré est introuvable.');
  return calendar;
}

function escapeHtml_(value) {
  return String(value).replace(/[&<>"']/g, function(character) {
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character];
  });
}
