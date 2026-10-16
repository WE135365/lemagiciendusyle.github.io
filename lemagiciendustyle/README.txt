LE MAGICIEN DU STYLE — VERSION INTÉGRÉE (BOUTIQUE + ADMIN)

CONTENU
- index.html : votre boutique actuelle, avec synchronisation du catalogue admin et envoi des commandes au serveur.
- admin.html : panneau d’administration protégé (produits, commandes, paramètres).
- server.js : serveur Node.js et API.
- data/products.json : copie initiale des produits détectés dans votre boutique actuelle.
- data/orders.json : commandes reçues par le serveur.
- data/settings.json : paramètres de la boutique.

AVANT DE COMMENCER
1. Faites une copie de sauvegarde de tout votre dossier actuel.
2. Copiez index.html, admin.html et server.js dans le dossier principal du projet, là où se trouve votre dossier imagen.
3. Copiez les fichiers de code dans le dossier principal. Pour le dossier data, ne remplacez jamais un fichier orders.json existant. Copiez data/initial-products.json dans votre dossier data; au premier démarrage, le serveur importera automatiquement ces 137 fiches uniquement si data/products.json est absent ou vide. Si products.json contient déjà des produits, il ne sera pas écrasé. Gardez une sauvegarde de vos fichiers data.
4. Ne supprimez ni ne renommez votre dossier imagen. Les chemins des photos restent relatifs, par exemple imagen/robe.jpg.
5. Si votre fichier principal actuel s’appelle index.html.html, sauvegardez-le d’abord. Placez ensuite la version préparée sous le nom exact index.html, car le serveur attend ce nom.

DÉMARRER SUR WINDOWS / TERMINAL VS CODE (PowerShell)
Dans le terminal, entrez une ligne à la fois (remplacez les valeurs par vos propres secrets) :
$env:ADMIN_USER="admin"
$env:ADMIN_PASSWORD="Mettez-ici-un-mot-de-passe-long-unique-de-12-caracteres-minimum"
$env:SESSION_SECRET="Mettez-ici-une-cle-aleatoire-de-32-caracteres-minimum"
node .\server.js

Puis ouvrez :
- Boutique : http://localhost:3000
- Administration : http://localhost:3000/admin

Connectez-vous avec l’identifiant choisi dans ADMIN_USER et le mot de passe choisi dans ADMIN_PASSWORD. Le serveur refuse de démarrer si les secrets ne sont pas configurés.

UTILISATION
- Les produits déjà présents dans la dernière boutique envoyée ont été copiés dans data/products.json.
- Pour modifier ou ajouter un produit, ouvrez Administration > Produits. Indiquez le chemin d’image tel que imagen/nom-de-la-photo.jpeg. Les modifications apparaissent dans la vitrine après actualisation de la page.
- Les nouvelles commandes finalisées sur la boutique sont envoyées à data/orders.json et apparaissent dans Administration > Commandes. Une commande n’est pas un paiement confirmé : il faut vérifier le paiement manuellement.
- Configurez votre vrai numéro WhatsApp dans Administration > Paramètres. Ne laissez pas le champ vide si vous voulez utiliser le bouton WhatsApp.
- Les paramètres de cette version ne configurent pas automatiquement les coordonnées NatCash, Western Union ou bancaires; vérifiez les instructions de paiement avant d’accepter des commandes.

SÉCURITÉ ET LIMITES
- Cette version convient pour tester localement ou comme prototype. Elle ne remplace pas un hébergement sécurisé avec HTTPS, base de données, sauvegardes et protections supplémentaires pour un commerce public.
- Ne publiez jamais ADMIN_PASSWORD ni SESSION_SECRET dans le code ou un dépôt public. Sur un hébergement, configurez-les comme variables d’environnement.
- Les anciennes commandes qui existent seulement dans le localStorage d’un ancien navigateur ne sont pas importées automatiquement.
- Si vous utilisez Live Server au lieu de node server.js, les API admin et l’enregistrement serveur des commandes ne fonctionneront pas.
