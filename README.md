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
