# ScanCartes

Scanne un code-barres avec ton téléphone et obtiens une carte à collectionner du produit.

- Recherche du produit : Open Food Facts, Open Beauty Facts, Open Products Facts
- Rareté tirée selon un drop rate (Commune, Peu commune, Rare, Épique, Légendaire), modifiable dans Réglages
- Illustration générée par OpenAI (clé API à saisir dans Réglages, stockée uniquement sur le téléphone)
- Collection gardée sur le téléphone, export PNG de chaque carte

L'app tient dans `index.html`. Elle est servie par GitHub Pages (Settings → Pages → branche `main`).

## Versions

La version affichée dans l'app (`APP_VERSION` dans `index.html`) et celle de `version.json` doivent toujours être identiques.
À chaque mise à jour : augmenter les deux, et décrire le changement en une ligne dans `notes`.
L'app compare sa version à `version.json` au démarrage et propose le bouton « Mettre à jour » si une version plus récente est en ligne.

## Registre mondial (une carte par produit pour tous)

Chaque joueur a sa propre app et sa propre collection ; la base est commune. Chaque scan tire une rareté pour le joueur. Chaque couple produit + rareté a une illustration unique : le premier joueur au monde qui obtient ce produit dans cette rareté la génère, et tous les joueurs suivants reçoivent la même.
Stockage : Firebase Firestore (offre gratuite Spark), via son API REST.

1. Créer un projet sur console.firebase.google.com, puis une base Firestore (mode production).
2. Coller le contenu de `firestore.rules` dans l'onglet Règles de Firestore et publier.
3. Ajouter une app Web au projet et recopier `apiKey` et `projectId` dans `config.js`.

Sans configuration, l'app fonctionne en mode local (même règle, limitée au téléphone).

## Prompts

L'app lit ses prompts dans le Google Sheet « ScanCartes – Prompts par rareté » (identifiant dans `config.js`) :
lignes 6 à 11 de chaque onglet de rareté (colonne English par défaut) et onglet Contextes.
Le sheet doit être partagé « Toute personne disposant du lien : lecteur ». Si le sheet est injoignable,
l'app garde la dernière version lue, sinon elle utilise le prompt intégré.
