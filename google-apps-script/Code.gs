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
    "minutes": 195
  },
  {
    "id": "1",
    "name": "Balayage + patine + brushing - Cheveux longs",
    "minutes": 255
  },
  {
    "id": "2",
    "name": "Balayage + patine + brushing + coupe - Cheveux mi longs",
    "minutes": 195
  },
  {
    "id": "3",
    "name": "Balayage + patine + brushing + coupe - Cheveux longs",
    "minutes": 255
  },
  {
    "id": "4",
    "name": "Shampooing",
    "minutes": 5
  },
  {
    "id": "5",
    "name": "Soin profond",
    "minutes": 5
  },
  {
    "id": "6",
    "name": "Double patine ou gloss supplémentaire",
    "minutes": 15
  },
  {
    "id": "7",
    "name": "Supplément lissage / wavy",
    "minutes": 15
  },
  {
    "id": "8",
    "name": "Supplément mousse",
    "minutes": 5
  },
  {
    "id": "9",
    "name": "Mèches + patine + brushing - Cheveux courts",
    "minutes": 100
  },
  {
    "id": "10",
    "name": "Mèches + platine + brushing - Cheveux mi longs",
    "minutes": 165
  },
  {
    "id": "11",
    "name": "Mèches + patine + brushing - Cheveux longs",
    "minutes": 180
  },
  {
    "id": "12",
    "name": "Mèches + patine + coupe + brushing - Cheveux courts",
    "minutes": 165
  },
  {
    "id": "13",
    "name": "Mèches + patine + coupe + brushing - Cheveux mi longs",
    "minutes": 175
  },
  {
    "id": "14",
    "name": "Mèches + patine + coupe + brushing - Cheveux longs",
    "minutes": 180
  },
  {
    "id": "15",
    "name": "Shampoing",
    "minutes": 3
  },
  {
    "id": "16",
    "name": "Soin profond",
    "minutes": 5
  },
  {
    "id": "17",
    "name": "Double patine ou gloss supplémentaire",
    "minutes": 15
  },
  {
    "id": "18",
    "name": "Supplément lissage / wavy",
    "minutes": 15
  },
  {
    "id": "19",
    "name": "Supplément mousse",
    "minutes": 5
  },
  {
    "id": "20",
    "name": "Coloration + brushing - Cheveux courts",
    "minutes": 90
  },
  {
    "id": "21",
    "name": "Coloration + brushing - Cheveux mi-long",
    "minutes": 100
  },
  {
    "id": "22",
    "name": "Coloration + brushing - Cheveux longs",
    "minutes": 110
  },
  {
    "id": "23",
    "name": "Coloration + brushing + coupe - Cheveux courts",
    "minutes": 105
  },
  {
    "id": "24",
    "name": "Coloration + brushing + coupe - Cheveux mi-long",
    "minutes": 100
  },
  {
    "id": "25",
    "name": "Coloration + brushing + coupe - Cheveux longs",
    "minutes": 110
  },
  {
    "id": "26",
    "name": "Coloration + mèches + brushing - Cheveux courts",
    "minutes": 125
  },
  {
    "id": "27",
    "name": "Coloration + mèches + brushing - Cheveux mi-longs",
    "minutes": 170
  },
  {
    "id": "28",
    "name": "Coloration + mèches + brushing - Cheveux longs",
    "minutes": 215
  },
  {
    "id": "29",
    "name": "Coloration + mèches + brushing + coupe - Cheveux courts",
    "minutes": 135
  },
  {
    "id": "30",
    "name": "Coloration + mèches + brushing + coupe - Cheveux mi-long",
    "minutes": 180
  },
  {
    "id": "31",
    "name": "Coloration + mèches + brushing + coupe - Cheveux longs",
    "minutes": 215
  },
  {
    "id": "32",
    "name": "Shampoing",
    "minutes": 5
  },
  {
    "id": "33",
    "name": "Soin profond",
    "minutes": 5
  },
  {
    "id": "34",
    "name": "Double patine ou gloss supplémentaire",
    "minutes": 15
  },
  {
    "id": "35",
    "name": "Supplément lissage / wavy",
    "minutes": 15
  },
  {
    "id": "36",
    "name": "Supplément mousse",
    "minutes": 5
  },
  {
    "id": "37",
    "name": "Brushing",
    "minutes": 45
  },
  {
    "id": "38",
    "name": "Shampoing  + Brushing",
    "minutes": 30
  },
  {
    "id": "39",
    "name": "Coupe bébé jusqu'à 2 ans",
    "minutes": 15
  },
  {
    "id": "40",
    "name": "Coupe fillette jusqu'à 12 ans",
    "minutes": 15
  },
  {
    "id": "41",
    "name": "Coupe garçon jusqu'à 12 ans",
    "minutes": 15
  },
  {
    "id": "42",
    "name": "Dégradé, taper, etc... jusqu'à 12 ans",
    "minutes": 30
  },
  {
    "id": "43",
    "name": "Shampooing coupe coiffage (court)",
    "minutes": 30
  },
  {
    "id": "44",
    "name": "Shampooing coupe coiffage (mi long)",
    "minutes": 30
  },
  {
    "id": "45",
    "name": "Shampooing coupe coiffage (long)",
    "minutes": 45
  },
  {
    "id": "46",
    "name": "Brushing cheveux court",
    "minutes": 30
  },
  {
    "id": "47",
    "name": "Brushing cheveux mi-long",
    "minutes": 30
  },
  {
    "id": "48",
    "name": "Brushing cheveux long",
    "minutes": 30
  },
  {
    "id": "49",
    "name": "Soin cheveux court",
    "minutes": 5
  },
  {
    "id": "50",
    "name": "Soin cheveux mi long",
    "minutes": 5
  },
  {
    "id": "51",
    "name": "Soin cheveux long",
    "minutes": 5
  },
  {
    "id": "52",
    "name": "Soin Serviette Chaude",
    "minutes": 10
  },
  {
    "id": "53",
    "name": "Frange",
    "minutes": 10
  },
  {
    "id": "54",
    "name": "Supplément lissage / wavy",
    "minutes": 15
  },
  {
    "id": "55",
    "name": "Supplément mousse",
    "minutes": 5
  },
  {
    "id": "56",
    "name": "Coupe classique sans shampooing",
    "minutes": 30
  },
  {
    "id": "57",
    "name": "Dégradé américain, taper etc",
    "minutes": 30
  },
  {
    "id": "58",
    "name": "Coupe + traçage barbe",
    "minutes": 30
  },
  {
    "id": "59",
    "name": "Traçage barbe",
    "minutes": 15
  },
  {
    "id": "60",
    "name": "Rasage complet à l'ancienne",
    "minutes": 30
  },
  {
    "id": "61",
    "name": "Shampooing + coupe",
    "minutes": 30
  },
  {
    "id": "62",
    "name": "Rituel barbier",
    "minutes": 20
  },
  {
    "id": "63",
    "name": "Rituel Barbier + Coupe",
    "minutes": 45
  },
  {
    "id": "64",
    "name": "Coloration barbe",
    "minutes": 15
  },
  {
    "id": "65",
    "name": "Coupe + coloration",
    "minutes": 55
  },
  {
    "id": "66",
    "name": "Coupe + décoloration",
    "minutes": 155
  },
  {
    "id": "67",
    "name": "Coupe + permanente",
    "minutes": 95
  },
  {
    "id": "68",
    "name": "Coupe + mèches",
    "minutes": 75
  },
  {
    "id": "69",
    "name": "Soin",
    "minutes": 5
  },
  {
    "id": "70",
    "name": "Shampoing serviette chaude",
    "minutes": 10
  },
  {
    "id": "71",
    "name": "Supplément cheveux long",
    "minutes": 30
  },
  {
    "id": "72",
    "name": "Épilation nez / oreilles",
    "minutes": 10
  },
  {
    "id": "73",
    "name": "👀 POSE COMPLETE RUSSE",
    "minutes": 150
  },
  {
    "id": "74",
    "name": "Remplissage 2 semaines russe",
    "minutes": 90
  },
  {
    "id": "75",
    "name": "Remplissage 3 semaines russe",
    "minutes": 90
  },
  {
    "id": "76",
    "name": "Remplissage 4 semaines russe",
    "minutes": 105
  },
  {
    "id": "77",
    "name": "👀 POSE COMPLETE MIXTE",
    "minutes": 120
  },
  {
    "id": "78",
    "name": "Remplissage 2 semaines mixte",
    "minutes": 90
  },
  {
    "id": "79",
    "name": "Remplissage 3 semaines mixte",
    "minutes": 90
  },
  {
    "id": "80",
    "name": "Remplissage 4 semaines mixte",
    "minutes": 105
  },
  {
    "id": "81",
    "name": "👀 POSE COMPLETE CIL A CIL",
    "minutes": 90
  },
  {
    "id": "82",
    "name": "Remplissage 2 semaines cil a cil",
    "minutes": 60
  },
  {
    "id": "83",
    "name": "Remplissage 3 semaines cil a cil",
    "minutes": 90
  },
  {
    "id": "84",
    "name": "Remplissage 4 semaines cil a cil",
    "minutes": 105
  },
  {
    "id": "85",
    "name": "👀 POSE COMPLETE LINER",
    "minutes": 150
  },
  {
    "id": "86",
    "name": "Remplissage 2 semaines LINER",
    "minutes": 90
  },
  {
    "id": "87",
    "name": "Remplissage 3 semaines LINER",
    "minutes": 105
  },
  {
    "id": "88",
    "name": "Remplissage 4 semaines LINER",
    "minutes": 120
  },
  {
    "id": "89",
    "name": "Dépose cils",
    "minutes": 20
  },
  {
    "id": "90",
    "name": "Réhaussement de cil + soin + teinture",
    "minutes": 60
  },
  {
    "id": "91",
    "name": "Lash lift coréen",
    "minutes": 90
  },
  {
    "id": "92",
    "name": "Création sourcils",
    "minutes": 240
  },
  {
    "id": "93",
    "name": "Retouche",
    "minutes": 120
  },
  {
    "id": "94",
    "name": "Retouche 6 à 8 mois",
    "minutes": 30
  },
  {
    "id": "95",
    "name": "Retouche 12 mois et plus",
    "minutes": 120
  },
  {
    "id": "96",
    "name": "Sourcils",
    "minutes": 30
  },
  {
    "id": "97",
    "name": "Sourcils + teinture",
    "minutes": 30
  },
  {
    "id": "98",
    "name": "Lèvres",
    "minutes": 5
  },
  {
    "id": "99",
    "name": "Lissage brésilien",
    "minutes": 150
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
    var serviceNames = selected.map(function(item) { return item.name; });
    var description = [
      'Réservation depuis le site VL’BEAUTY & SV COIFFURE',
      'Client : ' + name,
      'Téléphone : ' + phone,
      'E-mail : ' + email,
      'Prestations :',
      serviceNames.map(function(service) { return '• ' + service; }).join('\n'),
      'Durée totale : ' + duration + ' min'
    ].join('\n');
    var event = calendar.createEvent(
      'Réservation salon — ' + name,
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
