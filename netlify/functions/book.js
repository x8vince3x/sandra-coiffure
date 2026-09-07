const { getStore, connectLambda } = require('@netlify/blobs');

exports.handler = async (event) => {
  connectLambda(event);
  const store = getStore('bookings');

  // ---------- GET : renvoie les créneaux déjà pris pour une date ----------
  if (event.httpMethod === 'GET') {
    const date = event.queryStringParameters && event.queryStringParameters.date;
    if (!date) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Paramètre date manquant' }) };
    }
    const { blobs } = await store.list({ prefix: `${date}_` });
    const taken = blobs.map(b => b.key.slice(date.length + 1));
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taken })
    };
  }

  // ---------- POST : réserve le créneau puis envoie la notification mail ----------
  if (event.httpMethod === 'POST') {
    let data;
    try {
      data = JSON.parse(event.body || '{}');
    } catch (e) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Corps de requête invalide' }) };
    }

    const { date, slot, nom, telephone, prestations, total } = data;
    if (!date || !slot) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Date ou créneau manquant' }) };
    }

    const key = `${date}_${slot}`;

    const written = await store.setJSON(
      key,
      { date, slot, nom: nom || '', telephone: telephone || '', prestations: prestations || '', total: total || '' },
      { onlyIfNew: true }
    );

    if (!written) {
      return {
        statusCode: 409,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Ce créneau vient d\'être réservé par quelqu\'un d\'autre.' })
      };
    }

    const [y, m, d] = date.split('-');
    const dateFr = `${d}/${m}/${y}`;

    let mailError = null;
    try {
      const siteURL = process.env.URL || `https://${event.headers.host}`;
      const mailRes = await fetch(`${siteURL}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'reservations',
          nom: nom || '',
          telephone: telephone || '',
          date: dateFr,
          creneau: slot,
          prestations: prestations || '',
          total: total || ''
        }).toString()
      });
      if (!mailRes.ok) {
        mailError = `Erreur ${mailRes.status} lors de l'envoi de la notification.`;
      }
    } catch (e) {
      mailError = `Exception : ${e.message}`;
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, mailError })
    };
  }

  return { statusCode: 405, body: 'Method not allowed' };
};
