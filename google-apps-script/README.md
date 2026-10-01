# Réservation avec Google Agenda

Le site est hébergé sur GitHub Pages, donc il ne peut pas accéder seul au compte Google ni écrire dans un agenda. Ce projet Apps Script est le petit service privé qui tourne sous le compte Google du salon.

## Fichiers
- `Code.gs` : lit les créneaux du calendrier principal, recalcule les durées depuis le catalogue des 100 prestations, puis crée l'événement dans Google Agenda.
- `Booking.html` : formulaire de réservation intégré dans le site.

## Déploiement (dans le compte Google qui a créé le lien d'agenda)
1. Ouvrir [script.google.com](https://script.google.com/) et créer un projet.
2. Remplacer le contenu de `Code.gs` par le fichier de ce dossier.
3. Ajouter un fichier HTML nommé exactement `Booking`, puis y copier `Booking.html`.
4. Dans les paramètres du projet, régler le fuseau horaire sur **Europe/Paris**.
5. Choisir **Déployer → Nouveau déploiement → Application Web**. Exécuter l'application en tant que **moi** et autoriser l'accès aux utilisateurs concernés (si le choix **Tout le monde** est disponible, le sélectionner pour que les clients puissent réserver).
6. Autoriser l'accès à Google Agenda lors du premier lancement. Copier l'URL qui finit par `/exec`.

Le script utilise l'agenda Google principal du compte qui le déploie. Si le lien de réservation fourni utilise un autre agenda, remplacer `primary` par l'ID de cet agenda dans `CALENDAR_ID`.

## Sécurité et fonctionnement
- Le serveur recalcule la durée à partir des identifiants de prestation du site; il ne fait pas confiance à une durée envoyée par le navigateur.
- Les rendez-vous déjà présents dans le calendrier bloquent les créneaux; une vérification sous verrou est répétée au moment de confirmer pour éviter deux réservations simultanées.
- Les heures utilisées sont celles du salon: lundi–vendredi 9 h 30–19 h, samedi 9 h–15 h, dimanche fermé. Les créneaux commencent toutes les 15 minutes.
- Une invitation Google est envoyée à l'adresse e-mail du client.
- Après déploiement, transmettre l'URL `/exec` afin que l'intégration soit reliée au site.
