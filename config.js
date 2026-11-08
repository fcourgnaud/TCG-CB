/* Configuration partagée de ScanCartes (identique pour tous les joueurs).
   - firebaseApiKey / firebaseProjectId : registre mondial des illustrations (Firestore).
     Vide = mode local, les cartes restent sur le téléphone.
   - promptSheetId : Google Sheet « ScanCartes – Prompts par rareté » d'où l'app lit ses prompts.
     Le sheet doit être partagé « Toute personne disposant du lien : lecteur ».
   - promptLanguage : "en" (colonne English, conseillé pour les générateurs) ou "fr". */
window.SCANCARTES_CONFIG = {
  firebaseApiKey: "AIzaSyCrpe4ybpE9BKmlo52XIrlSmDFGMRvcj5M",
  firebaseProjectId: "tcg-cb",
  promptSheetId: "1hGa_vnRRn6TgcXY_us1pK5J0TActoNSXn07PFt9cj-w",
  promptLanguage: "en"
};
