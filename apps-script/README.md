# Google Apps Script backend

Ce script ajoute l’envoi des demandes par e-mail et le verrouillage des créneaux. Il garde dans Google Sheets uniquement la date, l’heure, la durée et l’horodatage; les coordonnées restent dans le courriel de réservation.

## Configuration

1. Ouvrir [script.google.com](https://script.google.com/) avec le compte Google du salon et créer un projet.
2. Remplacer le contenu de `Code.gs` par celui de ce dossier.
3. Dans l’éditeur, sélectionner `setup`, cliquer sur **Exécuter** et autoriser l’accès à Google Sheets. Une feuille de créneaux est créée.
4. Dans **Paramètres du projet > Propriétés du script**, ajouter `RECIPIENT_EMAIL` avec l’adresse qui doit recevoir les formulaires. Ne pas ajouter cette adresse dans le site public.
5. Déployer > **Nouveau déploiement** > type **Application web**. Exécuter en tant que propriétaire et choisir l’accès public (toute personne, y compris anonyme). Autoriser l’envoi de courriels quand demandé.
6. Copier l’URL se terminant par `/exec`. Le site l’utilisera comme endpoint public.

Le propriétaire du script reçoit les demandes via son compte Google. Les quotas Apps Script s’appliquent. La feuille doit rester accessible au compte qui possède le script.
