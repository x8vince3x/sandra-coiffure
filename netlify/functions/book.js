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

  // ---------- POST : réserve le créneau (sans envoi de mail, géré côté client) ----------
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

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true })
    };
  }

  // ---------- DELETE : outil de nettoyage pour libérer un créneau de test ----------
  if (event.httpMethod === 'DELETE') {
    const date = event.queryStringParameters && event.queryStringParameters.date;
    const slot = event.queryStringParameters && event.queryStringParameters.slot;
    if (!date || !slot) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Date ou créneau manquant' }) };
    }
    await store.delete(`${date}_${slot}`);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  }

  return { statusCode: 405, body: 'Method not allowed' };
};
