<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Le Magicien du Style — boutique de mode en ligne.">
<title>Le Magicien du Style | Boutique en ligne</title>
<style>
:root{--ink:#202020;--muted:#777;--line:#e9e9e9;--soft:#f7f7f7;--accent:#f28c28;--accent-dark:#d96d0b;--white:#fff;--green:#26734d}
*{box-sizing:border-box}html{s-croll-behavior:smooth}body{margin:0;color:var(--ink);font-family:Arial,Helvetica,sans-serif;background:#fff}button,input,select,textarea{font:inherit}button{cursor:pointer}a{color:inherit;text-decoration:none}.announcement{background:#202020;color:#fff;text-align:center;padding:9px 12px;font-size:12px;letter-spacing:.2px}.header{display:grid;grid-template-columns:220px minmax(180px,1fr) auto;gap:22px;align-items:center;padding:18px 5%;border-bottom:1px solid var(--line)}.brand{display:flex;align-items:center;gap:10px;font-weight:800}.brand-mark{background:var(--accent);color:white;border-radius:7px;padding:11px 9px;font-size:15px}.brand-name{font-size:16px;line-height:1.2}.brand-name small{display:block;font-size:11px;letter-spacing:1.5px;margin-top:4px;color:var(--accent-dark)}.search{display:flex;border:1px solid #ddd;border-radius:3px;overflow:hidden}.search input{width:100%;min-width:0;border:0;outline:0;padding:12px}.search button{border:0;background:#eee;padding:0 16px}.cart-top{border:0;background:var(--ink);color:#fff;border-radius:3px;padding:12px 15px;white-space:nowrap}.cart-top span{display:inline-grid;place-items:center;min-width:22px;height:22px;border-radius:50%;background:var(--accent);margin-left:5px;font-size:12px}.nav{display:flex;gap:28px;justify-content:center;padding:14px;border-bottom:1px solid var(--line);font-size:13px}.nav a:hover{color:var(--accent-dark)}.hero{position:relative;min-height:340px;display:flex;align-items:center;padding:48px 7%;color:white;overflow:hidden;background:#333}.hero>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}.hero:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.08));z-index:0}.hero-copy{position:relative;z-index:1;max-width:580px}.eyebrow{font-size:11px;font-weight:bold;letter-spacing:2px;color:var(--accent-dark)}.hero .eyebrow{color:#ffc27f}.hero h1{font-size:clamp(32px,5vw,54px);line-height:1.1;margin:12px 0}.hero p{line-height:1.6}.btn{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:3px;background:var(--accent);color:#fff;padding:12px 18px;font-weight:bold;font-size:13px}.btn:hover{background:var(--accent-dark)}.btn.dark{background:var(--ink)}.btn.light{background:#eee;color:var(--ink)}.section{padding:42px 5%}.section-head{text-align:center;margin-bottom:25px}.section-head h2{font-size:28px;margin:8px 0}.section-head p{color:var(--muted);font-size:14px}.filters{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin:20px 0 26px}.filter{border:1px solid #ddd;background:#fff;border-radius:30px;padding:9px 17px;font-size:12px}.filter.active,.filter:hover{background:var(--ink);color:#fff;border-color:var(--ink)}.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.product{border:1px solid var(--line);background:white;min-width:0;display:flex;flex-direction:column}.product-photo{position:relative;background:#f4f4f4;aspect-ratio:3/4;overflow:hidden}.product-photo img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s}.product:hover .product-photo img{transform:scale(1.035)}.tag{position:absolute;top:10px;left:10px;background:#fff;padding:6px 8px;font-size:10px;font-weight:bold}.product-info{padding:13px;display:flex;flex-direction:column;flex:1}.product-category{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--muted)}.product h3{font-size:14px;line-height:1.35;margin:7px 0;min-height:37px}.price-line{display:flex;align-items:center;gap:8px;margin:2px 0 12px}.price{font-size:18px;font-weight:800}.old-price{font-size:12px;color:#999;text-decoration:line-through}.product label,.field label{font-size:11px;font-weight:bold;margin:8px 0 5px}.product select{width:100%;padding:9px;border:1px solid #ddd;background:#fff;border-radius:2px;font-size:12px}.product .add{width:100%;margin-top:12px}.empty-results{text-align:center;grid-column:1/-1;color:var(--muted);padding:40px}.benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;padding:30px 5%;background:var(--soft)}.benefit{text-align:center;padding:10px}.benefit strong{display:block;margin:8px}.benefit p{font-size:12px;color:var(--muted);margin:5px}.footer{background:#202020;color:white;text-align:center;padding:28px 15px;font-size:12px}.footer p{color:#ccc}.overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:40}.drawer{position:fixed;right:0;top:0;height:100dvh;width:min(470px,100%);background:#fff;z-index:41;display:flex;flex-direction:column;transform:translateX(105%);transition:transform .25s;box-shadow:-5px 0 30px #0002}.drawer.open{transform:translateX(0)}.drawer-head{display:flex;justify-content:space-between;align-items:center;padding:18px 20px;border-bottom:1px solid var(--line)}.drawer-head h2{font-size:20px;margin:0}.x{border:0;background:#eee;width:34px;height:34px;font-size:22px;border-radius:50%}.cart-lines{padding:0 20px;overflow:auto;flex:1}.cart-empty{text-align:center;padding:35px;color:var(--muted)}.cart-row{display:grid;grid-template-columns:78px 1fr;gap:12px;padding:15px 0;border-bottom:1px solid var(--line)}.cart-row img{width:78px;height:100px;object-fit:cover;background:#eee}.cart-row h3{font-size:13px;margin:0 0 6px}.variant{font-size:11px;color:var(--muted);margin:3px 0}.cart-subtotal{font-weight:bold;font-size:13px;margin:7px 0}.qty{display:inline-flex;align-items:center;border:1px solid #ddd;gap:12px;padding:3px;border-radius:3px}.qty button{border:0;background:#f1f1f1;width:25px;height:25px;font-size:17px}.qty span{font-size:12px;min-width:12px;text-align:center}.remove{display:block;border:0;background:none;padding:6px 0;color:#a22;text-decoration:underline;font-size:11px}.drawer-bottom{border-top:1px solid var(--line);padding:16px 20px}.total{display:flex;justify-content:space-between;font-weight:bold;font-size:17px;margin-bottom:12px}.drawer-bottom .btn{width:100%;margin:4px 0}.small-note{font-size:10px;line-height:1.5;color:var(--muted)}.modal-wrap{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:center;padding:15px;background:#0008}.modal{background:white;width:min(650px,100%);max-height:92dvh;overflow:auto;border-radius:5px}.modal-head{position:sticky;top:0;background:white;display:flex;align-items:center;justify-content:space-between;padding:17px 20px;border-bottom:1px solid var(--line)}.modal-head h2{font-size:20px;margin:0}.checkout-form{padding:20px}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.field{display:flex;flex-direction:column}.field.full{grid-column:1/-1}.field input,.field select,.field textarea{border:1px solid #ddd;border-radius:3px;padding:11px;width:100%;background:#fff}.field textarea{min-height:75px;resize:vertical}.payment-options{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0}.payment-option{border:1px solid #ddd;border-radius:4px;padding:11px;font-size:12px;display:flex;gap:8px;align-items:flex-start}.payment-option:has(input:checked){border-color:var(--accent);background:#fff8f0}.payment-instructions{background:#fff6eb;padding:12px;border-left:3px solid var(--accent);font-size:12px;line-height:1.6;margin:12px 0}.order-summary{background:var(--soft);padding:12px;margin:14px 0;font-size:13px}.notice{font-size:11px;line-height:1.6;color:var(--muted)}.success{padding:24px;text-align:center}.success h3{font-size:22px}.success code{background:#f4f4f4;padding:5px}.hidden{display:none!important}
@media(max-width:1000px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}.header{grid-template-columns:1fr auto}.search{grid-column:1/-1;grid-row:2}}
@media(max-width:680px){.header{padding:13px 4%;gap:12px}.brand-name{font-size:13px}.brand-mark{padding:9px 7px}.cart-top{font-size:11px;padding:10px}.nav{gap:13px;flex-wrap:wrap;font-size:11px}.hero{min-height:300px;padding:35px 6%}.section{padding:32px 4%}.grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.product-info{padding:9px}.product h3{font-size:12px}.price{font-size:16px}.product select{padding:8px 4px;font-size:11px}.product .add{padding:10px 5px;font-size:11px}.benefits{grid-template-columns:1fr;gap:3px}.form-grid{grid-template-columns:1fr}.field.full{grid-column:auto}.payment-options{grid-template-columns:1fr}.section-head h2{font-size:24px}}
/* GALERÍA DE PRODUCTOS */
.product-photo img {
  cursor: zoom-in;
}

.gallery-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.gallery-modal.hidden {
  display: none;
}

.gallery-content {
  position: relative;
  max-width: 900px;
  width: 100%;
  text-align: center;
}

.gallery-main {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
}

.gallery-close,
.gallery-prev,
.gallery-next {
  position: absolute;
  border: 0;
  background: white;
  color: black;
  font-size: 26px;
  padding: 8px 14px;
  cursor: pointer;
}

.gallery-close {
  top: 0;
  right: 0;
}

.gallery-prev {
  left: 0;
  top: 45%;
}

.gallery-next {
  right: 0;
  top: 45%;
}

.gallery-thumbnails {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.gallery-thumbnails img {
  width: 60px;
  height: 75px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid white;
}

</style>
</head>
<!-- Botón flotante de WhatsApp -->
<a href="https://wa.me/8097163439?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20un%20producto"
   target="_blank"
   rel="noopener noreferrer"
   id="whatsapp-store"
   aria-label="Contactar por WhatsApp">
  WhatsApp
</a>

<!-- Botón para abrir el chatbox -->
<button id="store-chat-toggle" type="button">
  💬 Avez-vous besoin d'aide?
</button>

<!-- Ventana del chatbox -->
<div id="store-chatbox" style="display:none;">
  <div class="store-chat-header">
    service à la clientèle
    <button id="store-chat-close" type="button" aria-label="Cerrar chat">×</button>
  </div>
  <div id="store-chat-messages">
    <p><strong>Le Magicien du Style:</strong> Bonjour ! Comment pouvons-nous vous aider?</p>
  </div>
  <form id="store-chat-form">
    <input id="store-chat-input" type="text"
           placeholder="Escribe tu pregunta..." required>
    <button type="submit">Envoyer</button>
  </form>
  <p class="store-chat-note">
    « Ce chat est une démonstration. Pour recevoir des messages, contactez-nous par WhatsApp. »
  </p>
</div>

<style>
#whatsapp-store {
  position: fixed;
  right: 18px;
  bottom: 85px;
  z-index: 9999;
  background: #168447;
  color: white;
  padding: 13px 18px;
  border-radius: 28px;
  text-decoration: none;
  font-weight: bold;
}
#store-chat-toggle {
  position: fixed;
  right: 18px;
  bottom: 20px;
  z-index: 9999;
  background: #222;
  color: white;
  border: 0;
  border-radius: 25px;
  padding: 13px 18px;
  cursor: pointer;
}
#store-chatbox {
  position: fixed;
  right: 18px;
  bottom: 75px;
  width: 310px;
  max-width: calc(100vw - 36px);
  background: white;
  color: #222;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 18px #0002;
  z-index: 10000;
  overflow: hidden;
  font-family: Arial, sans-serif;
}
.store-chat-header {
  background: #222;
  color: white;
  padding: 14px;
  display: flex;
  justify-content: space-between;
}
#store-chat-close {
  background: transparent;
  color: white;
  border: 0;
  font-size: 22px;
  cursor: pointer;
}
#store-chat-messages {
  padding: 12px;
  min-height: 90px;
  max-height: 220px;
  overflow-y: auto;
}
#store-chat-form {
  display: flex;
  gap: 5px;
  padding: 10px;
}
#store-chat-input {
  min-width: 0;
  width: 100%;
  padding: 9px;
}
#store-chat-form button {
  background: #222;
  color: white;
  border: 0;
  padding: 9px;
  cursor: pointer;
}
.store-chat-note {
  font-size: 11px;
  color: #666;
  padding: 0 10px 10px;
}
</style>
<script>
const chatToggle = document.getElementById("store-chat-toggle");
const chatBox = document.getElementById("store-chatbox");
const chatClose = document.getElementById("store-chat-close");
const chatForm = document.getElementById("store-chat-form");
const chatInput = document.getElementById("store-chat-input");
const chatMessages = document.getElementById("store-chat-messages");

chatToggle.addEventListener("click", () => {
  chatBox.style.display = "block";
});
chatClose.addEventListener("click", () => {
  chatBox.style.display = "none";
});
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;

  const line = document.createElement("p");
  line.textContent = "Tú: " + message;
  chatMessages.appendChild(line);
  chatInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
});
</script>


<body>
<div class="announcement">NOUVELLE COLLECTION · Le style que vous méritez</div>
<header class="header">
  <a class="brand" href="#accueil" aria-label="Le Magicien du Style, accueil">
    <span class="brand-mark">LMS</span><span class="brand-name">Le Magicien<small>DU STYLE</small></span>
  </a>
  <form class="search" id="search-form">
<input id="search-input"
       type="search"
       list="search-suggestions"
       placeholder="Rechercher vêtements, sacs, chaussures..."
       aria-label="Rechercher des produits"
       autocomplete="off">

<datalist id="search-suggestions"></datalist>    <button type="submit">⌕</button>
  </form>
  <button class="cart-top" id="open-cart" type="button">🛒 Panier <span id="cart-count">0</span></button>
</header>
<nav class="nav">
  <a href="#accueil">Accueil</a><a href="#boutique">Nouveautés</a><a href="#boutique">Femme</a><a href="#boutique">Homme</a><a href="#boutique">Accessoires</a><a href="#infos">Contact</a>
</nav>
<main>
  <section class="hero" id="accueil">
    <img src="imagen/accueil 1.png" alt="Collection Le Magicien du Style">
    <div class="hero-copy">
      <div class="eyebrow">Votre style
votre élégance
votre Magie !</div>
      <h1>votre style,  votre élégance,  votre Magie!  </h1>
      <p>Découvrez des vêtements et accessoires pour toutes vos occasions. Choisissez votre article, votre taille et votre couleur.</p>
      <a class="btn" href="#boutique">ACHETER MAINTENANT</a>
    </div>
  </section>
  <section class="section" id="boutique">
    <div class="section-head"><div class="eyebrow">LA SÉLECTION LMS</div><h2>Nos articles</h2><p>Choisissez vos articles et ajoutez-les à votre panier.</p><p style="font-size:11px;color:#8a4307">livraison estimée entre 15 et 20 jours.(free shipping)</p></div>
    <div class="filters" id="filters">
      <button class="filter active" data-category="Tous">Tout voir</button>
      <button class="filter" data-category="Femme">Femme</button>
      <button class="filter" data-category="Homme">Homme</button>
      <button class="filter" data-category="Chaussures">Chaussures</button>
      <button class="filter" data-category="Accessoires">Accessoires</button>
      <button class="filter" data-category="Maison">Maison</button>
    </div>
    <!-- CATALOGUE SANS LIMITE FIXE (1000+ produits/images possibles).
      POUR CHANGER UNE PHOTO : modifiez le chemin dans <img src="imagen/nom-photo.jpg" ...>.
      POUR AJOUTER UN PRODUIT : copiez un bloc <article class="product"> complet dans cette grille,
      donnez un data-id unique (13, 14, 15 ... jusqu'à 1001, 1002, 1003 ...), puis mettez à jour
      data-size/data-color/data-fabric/data-add, leurs identifiants HTML, le nom, le prix et le chemin img src.
      Les photos restent dans le dossier imagen; aucune limite fixe de 500 ou 1000 n'est imposée par le code. -->
    <div class="grid" id="product-grid" aria-live="polite">
    <article class="product" data-id="1">
      <div class="product-photo"> 
        <img src="imagen/Robe elegante 0.jpeg" alt="Costume femme">
       
<div class="gallery-sources" hidden>
  <img src="imagen/Robe elegante 1.jpeg" alt="Foto 1">
  <img src="imagen/Robe elegante 2.jpeg" alt="Foto 2">
  <img src="imagen/Robe elegante 3.jpeg" alt="Foto 3">
  <img src="imagen/Robe elegante 3.jpeg" alt="Foto 4">
</div>

        <span class="tag">TENDANCE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Femme</span>
        <h3>Robe élégante</h3>
        <div class="price-line"><span class="price">$35.00</span><span class="old-price">$49.00</span></div>
        <label for="size-1">Taille</label><select id="size-1" data-size="1"><option value="XS">XS</option><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option></select>
        <label for="color-1">Couleur</label><select id="color-1" data-color="1"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Rouge">Rouge</option><option value="Beige">Beige</option></select>
        <label for="fabric-1">Tissu / matière</label><select id="fabric-1" data-fabric="1"><option value="polyester">95 % polyester, 5 % élasthanne</option><option value="Gabardine">Gabardine</option><option value="Wool England">Wool England</option></select>
        <button class="btn add" type="button" data-add="1">AJOUTER AU PANIER</button>
      </div>
    </article>
    <article class="product" data-id="2">
      <div class="product-photo">
        <img src="imagen/robe papiyon 2.avif">
        <div class="gallery-sources" hidden>
  <img src="imagen/robe papiyon 1.avif" alt="Foto 1">
  <img src="imagen/robe papiyon 2.avif" alt="Foto 2">
  <img src="imagen/robe papiyon 3.avif" alt="Foto 3">
  <img src="imagen/robe papiyon 4.avif" alt="Foto 4">
</div>

        <span class="tag">ÉLÉGANT</span>
      </div>
      <div class="product-info">
        <span class="product-category">Femme</span>
        <h3>kilot</h3>
        <div class="price-line"><span class="price">$18.00</span><span class="old-price">$35.00</span></div>
        <label for="size-2">Taille</label><select id="size-2" data-size="2"><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option></select>
        <label for="color-2">Couleur</label><select id="color-2" data-color="2"><option value="Noir">Noir</option><option value="Bleu marine">Bleu marine</option><option value="Gris">Gris</option></select>
        <label for="fabric-2">Tissu / matière</label><select id="fabric-2" data-fabric="2"><option value="polyester">polyester</option><option value="Gabardine">Gabardine</option><option value="Wool England">Wool England</option></select>
        <button class="btn add" type="button" data-add="2">AJOUTER AU PANIER</button>
      </div>

       </article>
    <article class="product" data-id="3">
      <div class="product-photo">
        <img src="imagen/ki1.jpeg">
        <div class="gallery-sources" hidden>
  <img src="imagen/k2.jpeg" alt="Foto 1">
  <img src="imagen/k3.jpeg" alt="Foto 2">
  <img src="imagen/k2.jpeg" alt="Foto 3">
  <img src="imagen/k3.jpeg" alt="Foto 4">
</div>

        <span class="tag">ÉLÉGANT</span>
      </div>
      <div class="product-info">
        <span class="product-category">Femme</span>
        <h3>Jupe longue sirène épaules dénudées, style luxueux</h3>
        <div class="price-line"><span class="price">$18.00</span><span class="old-price">$35.00</span></div>
        <label for="size-2">Taille</label><select id="size-3" data-size="3"><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option></select>
        <label for="color-2">Couleur</label><select id="color-3" data-color="3"><option value="Noir">Noir</option><option value="Bleu marine">Bleu marine</option><option value="Gris">Gris</option></select>
        <label for="fabric-2">Tissu / matière</label><select id="fabric-3" data-fabric="3"><option value="polyester">polyester</option><option value="Gabardine">Gabardine</option><option value="Wool England">Wool England</option></select>
        <button class="btn add" type="button" data-add="3">AJOUTER AU PANIER</button>
      </div>
    </article>
    <article class="product" data-id="4">
      <div class="product-photo">
        <img src="imagen/dress 1.avif">
<div class="gallery-sources" hidden>
  <img src="imagen/dress 3.avif" alt="Foto 1">
  <img src="imagen/dress 4.avif" alt="Foto 2">
  <img src="imagen/dress 4.avif" alt="Foto 3">
  <img src="imagen/dress2.avif" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">femme</span>
        <h3>Robe longue argentée à fines bretelles pour femme, fendue, style aristocratique</h3>
        <div class="price-line"><span class="price">$18.99</span><span class="old-price">$59.20</span></div>
        <label for="size-3">Taille</label><select id="size-4" data-size="4"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-4" data-color="4"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-4" data-fabric="4"><option value="polyester">polyester</option><option value="polyester">polyester</option></select>
        <button class="btn add" type="button" data-add="4">AJOUTER AU PANIER</button>
      </div>
      </article>
    <article class="product" data-id="5">
      <div class="product-photo">
        <img src="imagen/top 1.jpeg">
      <div class="gallery-sources" hidden>
  <img src="imagen/top 2.jpeg" alt="Foto 1">
  <img src="imagen/top 3.jpeg" alt="Foto 2">
  <img src="imagen/top 4.jpeg" alt="Foto 3">
  <img src="imagen/top 4.jpeg" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Femme</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-5" data-size="5"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-5" data-color="5"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-5" data-fabric="5"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="5">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="6">
      <div class="product-photo">
        <img src="imagen/kilot 1.jpeg" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/kilot.jpeg" alt="Foto 1">
  <img src="imagen" alt="Foto 2">
  <img src="imagen/" alt="Foto 3">
  <img src="imagen/" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Femme</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-6" data-size="6"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-6" data-color="6"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-6" data-fabric="6"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="6">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="7">
      <div class="product-photo">
        <img src="imagen/sexi.jpeg" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <div class="gallery-sources" hidden>
  <img src="imagen/sexi1.jpeg" alt="Foto 1">
  <img src="imagen/sexi 2 (2).jpeg" alt="Foto 2">
  <img src="imagen/sexi 2.jpeg" alt="Foto 3">
  <img src="imagen" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-7" data-size="7"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-7" data-color="7"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-7" data-fabric="7"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="7">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="8">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-8" data-size="8"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-8" data-color="8"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-8" data-fabric="8"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="8">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="9">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-9" data-size="9"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-9" data-color="9"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-9" data-fabric="9"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="9">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="10">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-10" data-size="10"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-10" data-color="10"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-10" data-fabric="10"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="10">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="11">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-11" data-size="11"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-11" data-color="11"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-11" data-fabric="11"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="11">AJOUTER AU PANIER</button> </div>
      </article>
    <article class="product" data-id="12">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-12" data-size="12"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-12" data-color="12"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-12" data-fabric="12"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="12">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="13">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-13" data-size="13"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-13" data-color="13"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-13" data-fabric="13"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="13">AJOUTER AU PANIER</button>

         </div>
      </article>
    <article class="product" data-id="14">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-14" data-size="14"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-14" data-color="14"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-14" data-fabric="14"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="14">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="15">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-15" data-size="15"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-15" data-color="15"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-15" data-fabric="15"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="15">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="16">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-16" data-size="16"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-16" data-color="16"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-16" data-fabric="16"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="16">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="17">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-17" data-size="17"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-17" data-color="17"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-17" data-fabric="17"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="17">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="18">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-18" data-size="18"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-18" data-color="18"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-18" data-fabric="18"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="18">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="19">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
      <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-19" data-size="19"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-19" data-color="19"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-19" data-fabric="19"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="19">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="20">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-20" data-size="20"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-20" data-color="20"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-20" data-fabric="20"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="20">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="21">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-21" data-size="21"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-21" data-color="21"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-21" data-fabric="21"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="21">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="22">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-22" data-size="22"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-22" data-color="22"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-22" data-fabric="22"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="22">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="23">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-23" data-size="23"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-23" data-color="23"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-23" data-fabric="23"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="23">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="24">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
      <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-24" data-size="24"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-24" data-color="24"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-24" data-fabric="24"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="24">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="25">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
      <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-25" data-size="25"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-25" data-color="25"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-25" data-fabric="25"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="25">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="26">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
      <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-26" data-size="26"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-26" data-color="26"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-26" data-fabric="26"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="26">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="27">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
       <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-27" data-size="27"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-27" data-color="27"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-27" data-fabric="27"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="27">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="28">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
       <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-28" data-size="28"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-28" data-color="28"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-28" data-fabric="28"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="28">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="29">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-29" data-size="29"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-29" data-color="29"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-29" data-fabric="29"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="29">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="30">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
      <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-30" data-size="30"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-30" data-color="30"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-30" data-fabric="30"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="30">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="31">
      <div class="product-photo">
        
      <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
      <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

      <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-31" data-size="31"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-31" data-color="31"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-31" data-fabric="31"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="31">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="32">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-32" data-size="32"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-32" data-color="32"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-32" data-fabric="32"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="32">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="33">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-33" data-size="33"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-33" data-color="33"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-33" data-fabric="33"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="33">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="34">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-34" data-size="34"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-34" data-color="34"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-34" data-fabric="34"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="34">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="35">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-35" data-size="35"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-35" data-color="35"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-35" data-fabric="35"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="35">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="36">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-36" data-size="36"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-36" data-color="36"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-36" data-fabric="36"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="36">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="37">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-37" data-size="37"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-37" data-color="37"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-37" data-fabric="37"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="37">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="38">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-38" data-size="38"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-38" data-color="38"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-38" data-fabric="38"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="38">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="39">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-39" data-size="39"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-39" data-color="39"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-39" data-fabric="39"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="39">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="40">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-40" data-size="40"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-40" data-color="40"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-40" data-fabric="40"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="40">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="41">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-41" data-size="41"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-41" data-color="41"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-41" data-fabric="41"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="41">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="42">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-42" data-size="42"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-42" data-color="42"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-42" data-fabric="42"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="42">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="43">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-43" data-size="43"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-43" data-color="43"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-43" data-fabric="43"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="43">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="44">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
       <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-44" data-size="44"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-44" data-color="44"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-44" data-fabric="44"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="44">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="45">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
       <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-45" data-size="45"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-45" data-color="45"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-45" data-fabric="45"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="45">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="46">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
       <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-46" data-size="46"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-46" data-color="46"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-46" data-fabric="46"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="46">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="47">
      <div class="product-photo">
       
       <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
      <div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

       <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-47" data-size="47"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-47" data-color="47"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-47" data-fabric="47"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="47">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="48">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-48" data-size="48"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-48" data-color="48"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-48" data-fabric="48"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="48">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="49">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-49" data-size="49"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-49" data-color="49"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-49" data-fabric="49"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="49">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="50">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-50" data-size="50"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-50" data-color="50"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-50" data-fabric="50"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="50">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="51">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-51" data-size="51"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-51" data-color="51"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-51" data-fabric="51"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="51">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="52">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-52" data-size="52"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-52" data-color="52"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-52" data-fabric="52"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="52">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="53">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-53" data-size="53"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-53" data-color="53"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-53" data-fabric="53"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="53">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="54">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-54" data-size="54"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-54" data-color="54"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-54" data-fabric="54"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="54">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="55">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-55" data-size="55"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-55" data-color="55"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-55" data-fabric="55"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="55">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="56">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-56" data-size="56"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-56" data-color="56"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-56" data-fabric="56"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="56">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="57">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-57" data-size="57"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-57" data-color="57"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-57" data-fabric="57"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="57">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="58">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-58" data-size="58"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-58" data-color="58"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-58" data-fabric="58"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="58">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="59">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-59" data-size="59"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-59" data-color="59"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-59" data-fabric="59"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="59">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="60">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-60" data-size="60"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-60" data-color="60"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-60" data-fabric="60"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="60">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="61">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-61" data-size="61"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-61" data-color="61"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-61" data-fabric="61"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="61">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="62">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-62" data-size="62"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-62" data-color="62"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-62" data-fabric="62"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="62">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="63">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-63" data-size="63"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-63" data-color="63"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-63" data-fabric="63"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="63">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="64">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-64" data-size="64"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-64" data-color="64"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-64" data-fabric="64"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="64">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="65">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-65" data-size="65"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-65" data-color="65"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-65" data-fabric="65"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="65">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="66">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-66" data-size="66"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-66" data-color="66"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-66" data-fabric="66"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="66">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="67">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-67" data-size="67"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-67" data-color="67"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-67" data-fabric="67"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="67">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="68">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-68" data-size="68"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-68" data-color="68"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-68" data-fabric="68"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="68">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="69">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-69" data-size="69"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-69" data-color="69"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-69" data-fabric="69"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="69">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="70">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
<div class="gallery-sources" hidden>
  <img src="imagen/pr10.png" alt="Foto 1">
  <img src="imagen/pr4.png" alt="Foto 2">
  <img src="imagen/pr5.png" alt="Foto 3">
  <img src="imagen/pr6.png" alt="Foto 4">
</div>

        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-70" data-size="70"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-70" data-color="70"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-70" data-fabric="70"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="70">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="71">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-71" data-size="71"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-71" data-color="71"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-71" data-fabric="71"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="71">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="72">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-72" data-size="72"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-72" data-color="72"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-72" data-fabric="72"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="72">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="73">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-73" data-size="73"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-73" data-color="73"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-73" data-fabric="73"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="73">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="74">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-74" data-size="74"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-74" data-color="74"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-74" data-fabric="74"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="74">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="75">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-75" data-size="75"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-75" data-color="75"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-75" data-fabric="75"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="75">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="76">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-76" data-size="76"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-76" data-color="76"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-76" data-fabric="76"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="76">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="77">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-77" data-size="77"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-77" data-color="77"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-77" data-fabric="77"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="77">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="78">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-78" data-size="78"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-78" data-color="78"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-78" data-fabric="78"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="78">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="79">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-79" data-size="79"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-79" data-color="79"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-79" data-fabric="79"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="79">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="80">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-80" data-size="80"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-80" data-color="80"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-80" data-fabric="80"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="80">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="81">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-81" data-size="81"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-81" data-color="81"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-81" data-fabric="81"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="81">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="82">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-82" data-size="82"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-82" data-color="82"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-82" data-fabric="82"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="82">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="83">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-83" data-size="83"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-83" data-color="83"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-83" data-fabric="83"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="83">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="84">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-84" data-size="84"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-84" data-color="84"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-84" data-fabric="84"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="84">AJOUTER AU PANIER</button>
         </div>
         </article>
    <article class="product" data-id="85">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-85" data-size="85"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-85" data-color="85"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-85" data-fabric="85"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="85">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="86">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-86" data-size="86"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-86" data-color="86"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-86" data-fabric="86"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="86">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="87">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-87" data-size="87"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-87" data-color="87"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-87" data-fabric="87"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="87">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="88">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-88" data-size="88"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-88" data-color="88"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-88" data-fabric="88"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="88">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="89">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-89" data-size="89"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-89" data-color="89"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-89" data-fabric="89"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="89">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="90">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-90" data-size="90"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-90" data-color="90"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-90" data-fabric="90"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="90">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="91">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-91" data-size="91"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-91" data-color="91"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-91" data-fabric="91"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="91">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="92">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-92" data-size="92"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-92" data-color="92"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-92" data-fabric="92"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="92">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="93">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-93" data-size="93"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-93" data-color="93"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-93" data-fabric="93"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="93">AJOUTER AU PANIER</button> </div>
      </article>
    <article class="product" data-id="94">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-94" data-size="94"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-94" data-color="94"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-94" data-fabric="94"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="94">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="95">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-95" data-size="95"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-95" data-color="95"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-95" data-fabric="95"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="95">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="96">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-96" data-size="96"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-96" data-color="96"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-96" data-fabric="96"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="96">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="97">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-97" data-size="97"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-97" data-color="97"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-97" data-fabric="97"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="97">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="98">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-98" data-size="98"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-98" data-color="98"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-98" data-fabric="98"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="98">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="99">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-99" data-size="99"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-99" data-color="99"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-99" data-fabric="99"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="99">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="100">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-100" data-size="100"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-100" data-color="100"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-100" data-fabric="100"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="100">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="101">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-101" data-size="101"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-101" data-color="101"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-101" data-fabric="101"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="101">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="102">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-102" data-size="102"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-102" data-color="102"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-102" data-fabric="102"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="102">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="103">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-103" data-size="103"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-103" data-color="103"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-103" data-fabric="103"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="103">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="104">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-104" data-size="104"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-104" data-color="104"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-104" data-fabric="104"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="104">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="105">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-105" data-size="105"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-105" data-color="105"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-105" data-fabric="105"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="105">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="106">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-106" data-size="106"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-106" data-color="106"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-106" data-fabric="106"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="106">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="107">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-107" data-size="107"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-107" data-color="107"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-107" data-fabric="107"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="107">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="108">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-108" data-size="108"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-108" data-color="108"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-108" data-fabric="108"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="108">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="109">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-109" data-size="109"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-109" data-color="109"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-109" data-fabric="109"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="109">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="110">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-110" data-size="110"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-110" data-color="110"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-110" data-fabric="110"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="110">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="111">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-111" data-size="111"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-111" data-color="111"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-111" data-fabric="111"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="111">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="112">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-112" data-size="112"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-112" data-color="112"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-112" data-fabric="112"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="112">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="113">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-113" data-size="113"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-113" data-color="113"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-113" data-fabric="113"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="113">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="114">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-114" data-size="114"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-114" data-color="114"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-114" data-fabric="114"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="114">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="115">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-115" data-size="115"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-115" data-color="115"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-115" data-fabric="115"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="115">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="116">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-116" data-size="116"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-116" data-color="116"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-116" data-fabric="116"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="116">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="117">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-117" data-size="117"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-117" data-color="117"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-117" data-fabric="117"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="117">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="118">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-118" data-size="118"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-118" data-color="118"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-118" data-fabric="118"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="118">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="119">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-119" data-size="119"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-119" data-color="119"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-119" data-fabric="119"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="119">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="120">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-120" data-size="120"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-120" data-color="120"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-120" data-fabric="120"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="120">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="121">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-121" data-size="121"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-121" data-color="121"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-121" data-fabric="121"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="121">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="122">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-122" data-size="122"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-122" data-color="122"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-122" data-fabric="122"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="122">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="123">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-123" data-size="123"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-123" data-color="123"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-123" data-fabric="123"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="123">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="124">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-124" data-size="124"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-124" data-color="124"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-124" data-fabric="124"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="124">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="125">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-125" data-size="125"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-125" data-color="125"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-125" data-fabric="125"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="125">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="126">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-126" data-size="126"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-126" data-color="126"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-126" data-fabric="126"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="126">AJOUTER AU PANIER</button>
         </div>
      </article>
    <article class="product" data-id="127">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-127" data-size="127"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-127" data-color="127"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-127" data-fabric="127"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="127">AJOUTER AU PANIER</button>
         </div>
         
      </article>
    <article class="product" data-id="128">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Sac à main moderne" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">POPULAIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Sac à main moderne</h3>
        <div class="price-line"><span class="price">$28.00</span><span class="old-price">$39.00</span></div>
        <label for="size-3">Taille</label><select id="size-128" data-size="128"><option value="Unique">Unique</option></select>
        <label for="color-3">Couleur</label><select id="color-128" data-color="128"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Marron">Marron</option><option value="Beige">Beige</option></select>
        <label for="fabric-3">Tissu / matière</label><select id="fabric-128" data-fabric="128"><option value="Cuir synthétique">Cuir synthétique</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="128">AJOUTER AU PANIER</button>
    </article>
    <article class="product" data-id="129">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Chemise classique" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">ESSENTIEL</span>
      </div>
      <div class="product-info">
        <span class="product-category">Homme</span>
        <h3>Chemise classique</h3>
        <div class="price-line"><span class="price">$25.00</span><span class="old-price">$32.00</span></div>
        <label for="size-4">Taille</label><select id="size-129" data-size="129"><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option></select>
        <label for="color-4">Couleur</label><select id="color-129" data-color="129"><option value="Blanc">Blanc</option><option value="Noir">Noir</option><option value="Bleu">Bleu</option><option value="Rose">Rose</option></select>
        <label for="fabric-4">Tissu / matière</label><select id="fabric-129" data-fabric="129"><option value="Coton">Coton</option><option value="Armani">Armani</option><option value="Gabardine">Gabardine</option></select>
        <button class="btn add" type="button" data-add="129">AJOUTER AU PANIER</button>
      </div>
    </article>
    <article class="product" data-id="130">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Ensemble chic femme" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">NOUVEAU</span>
      </div>
      <div class="product-info">
        <span class="product-category">Femme</span>
        <h3>Ensemble chic femme</h3>
        <div class="price-line"><span class="price">$48.00</span><span class="old-price">$65.00</span></div>
        <label for="size-5">Taille</label><select id="size-130" data-size="130"><option value="XS">XS</option><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option></select>
        <label for="color-5">Couleur</label><select id="color-130" data-color="130"><option value="Noir">Noir</option><option value="Blanc">Blanc</option><option value="Beige">Beige</option><option value="Rose">Rose</option></select>
        <label for="fabric-5">Tissu / matière</label><select id="fabric-130" data-fabric="130"><option value="Armani">Armani</option><option value="Gabardine">Gabardine</option><option value="Wool England">Wool England</option></select>
        <button class="btn add" type="button" data-add="130">AJOUTER AU PANIER</button>
      </div>
    </article>
    <article class="product" data-id="131">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Montre classique" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">ACCESSOIRE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Montre classique</h3>
        <div class="price-line"><span class="price">$32.00</span><span class="old-price">$45.00</span></div>
        <label for="size-6">Taille</label><select id="size-131" data-size="131"><option value="Unique">Unique</option></select>
        <label for="color-6">Couleur</label><select id="color-131" data-color="131"><option value="Noir">Noir</option><option value="Argent">Argent</option><option value="Or">Or</option></select>
        <label for="fabric-6">Tissu / matière</label><select id="fabric-131" data-fabric="131"><option value="Acier">Acier</option><option value="Cuir">Cuir</option></select>
        <button class="btn add" type="button" data-add="131">AJOUTER AU PANIER</button>
      </div>
    </article>
    <article class="product" data-id="132">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Veste tendance homme" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">STYLE</span>
      </div>
      <div class="product-info">
        <span class="product-category">Homme</span>
        <h3>Veste tendance homme</h3>
        <div class="price-line"><span class="price">$55.00</span><span class="old-price">$72.00</span></div>
        <label for="size-7">Taille</label><select id="size-132" data-size="132"><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option></select>
        <label for="color-7">Couleur</label><select id="color-132" data-color="132"><option value="Noir">Noir</option><option value="Gris">Gris</option><option value="Bleu marine">Bleu marine</option></select>
        <label for="fabric-7">Tissu / matière</label><select id="fabric-132" data-fabric="132"><option value="Armani">Armani</option><option value="Gabardine">Gabardine</option><option value="Wool England">Wool England</option></select>
        <button class="btn add" type="button" data-add="132">AJOUTER AU PANIER</button>
      </div>
    </article>
    <article class="product" data-id="133">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Chaussures élégantes" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">CONFORT</span>
      </div>
      <div class="product-info">
        <span class="product-category">Chaussures</span>
        <h3>Chaussures élégantes</h3>
        <div class="price-line"><span class="price">$42.00</span><span class="old-price">$56.00</span></div>
        <label for="size-8">Taille</label><select id="size-133" data-size="133"><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option></select>
        <label for="color-8">Couleur</label><select id="color-133" data-color="133"><option value="Noir">Noir</option><option value="Marron">Marron</option><option value="Blanc">Blanc</option></select>
        <label for="fabric-8">Tissu / matière</label><select id="fabric-133" data-fabric="133"><option value="Cuir">Cuir</option><option value="Cuir synthétique">Cuir synthétique</option></select>
        <button class="btn add" type="button" data-add="133">AJOUTER AU PANIER</button>
      </div>
    </article>
    <article class="product" data-id="134">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Robe de soirée" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">OCCASION</span>
      </div>
      <div class="product-info">
        <span class="product-category">Femme</span>
        <h3>Robe de soirée</h3>
        <div class="price-line"><span class="price">$60.00</span><span class="old-price">$79.00</span></div>
        <label for="size-9">Taille</label><select id="size-134" data-size="134"><option value="XS">XS</option><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option></select>
        <label for="color-9">Couleur</label><select id="color-134" data-color="134"><option value="Noir">Noir</option><option value="Rouge">Rouge</option><option value="Bleu">Bleu</option><option value="Vert">Vert</option></select>
        <label for="fabric-9">Tissu / matière</label><select id="fabric-134" data-fabric="134"><option value="Satin">Satin</option><option value="Armani">Armani</option><option value="Wool England">Wool England</option></select>
        <button class="btn add" type="button" data-add="134">AJOUTER AU PANIER</button>
      </div>
    </article>
    <article class="product" data-id="135">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Lunettes de soleil" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">PETIT PRIX</span>
      </div>
      <div class="product-info">
        <span class="product-category">Accessoires</span>
        <h3>Lunettes de soleil</h3>
        <div class="price-line"><span class="price">$18.00</span><span class="old-price">$25.00</span></div>
        <label for="size-10">Taille</label><select id="size-135" data-size="135"><option value="Unique">Unique</option></select>
        <label for="color-10">Couleur</label><select id="color-135" data-color="135"><option value="Noir">Noir</option><option value="Marron">Marron</option><option value="Or">Or</option></select>
        <label for="fabric-10">Tissu / matière</label><select id="fabric-135" data-fabric="135"><option value="Plastique">Plastique</option><option value="Métal">Métal</option></select>
        <button class="btn add" type="button" data-add="135">AJOUTER AU PANIER</button>
      </div>
    </article>
    <article class="product" data-id="136">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Pull doux" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">CONFORT</span>
      </div>
      <div class="product-info">
        <span class="product-category">Femme</span>
        <h3>Pull doux</h3>
        <div class="price-line"><span class="price">$30.00</span><span class="old-price">$40.00</span></div>
        <label for="size-11">Taille</label><select id="size-136" data-size="136"><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option></select>
        <label for="color-11">Couleur</label><select id="color-136" data-color="136"><option value="Crème">Crème</option><option value="Noir">Noir</option><option value="Gris">Gris</option><option value="Rose">Rose</option></select>
        <label for="fabric-11">Tissu / matière</label><select id="fabric-136" data-fabric="136"><option value="Maille">Maille</option><option value="Laine mélangée">Laine mélangée</option></select>
        <button class="btn add" type="button" data-add="136">AJOUTER AU PANIER</button>
      </div>
    </article>
    <article class="product" data-id="137">
      <div class="product-photo">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;w=700&amp;q=80" alt="Baskets décontractées" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f4f4f4/333?text=Le+Magicien+du+Style'">
        <span class="tag">CASUAL</span>
      </div>
      <div class="product-info">
        <span class="product-category">Chaussures</span>
        <h3>Baskets décontractées</h3>
        <div class="price-line"><span class="price">$39.00</span><span class="old-price">$52.00</span></div>
        <label for="size-12">Taille</label><select id="size-137" data-size="137"><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option></select>
        <label for="color-12">Couleur</label><select id="color-137" data-color="137"><option value="Rouge">Rouge</option><option value="Noir">Noir</option><option value="Blanc">Blanc</option></select>
        <label for="fabric-12">Tissu / matière</label><select id="fabric-137" data-fabric="137"><option value="Textile">Textile</option><option value="Synthétique">Synthétique</option></select>
        <button class="btn add" type="button" data-add="137">AJOUTER AU PANIER</button>
      </div>
    </article>
    </div>
    <p id="no-products" class="empty-results hidden">Aucun article ne correspond à votre recherche.</p>
  </section>
  <section class="benefits" id="infos">
    <div class="benefit"><strong>✦ Style et choix</strong><p>Des articles pour différents goûts et occasions.</p></div>
    <div class="benefit"><strong>✓ Commande simple</strong><p>Consultez votre panier avant de confirmer.</p></div>
    <div class="benefit"><strong>♡ Service client</strong><p>
Notre équipe est à votre écoute pour répondre à vos questions concernant nos produits, vos commandes, les paiements et la livraison.
Nous sommes heureux de vous accompagner et de vous offrir une expérience d'achat agréable chez Le Magicien du Style.

Votre satisfaction est notre priorité !.</p></div>
  </section>
</main>
<footer class="footer">
  <div class="brand" style="justify-content:center"><span class="brand-mark">LMS</span><span class="brand-name">Le Magicien<small>DU STYLE</small></span></div>
  <p>Votre style, votre élégance, votre magie !</p>
  <p>© <span id="year"></span> Le Magicien du Style</p>
</footer>

<div id="overlay" class="overlay hidden"></div>
<aside id="cart-drawer" class="drawer" aria-hidden="true">
  <div class="drawer-head"><h2>Votre panier</h2><button class="x" id="close-cart" aria-label="Fermer le panier">×</button></div>
  <div class="cart-lines" id="cart-lines"></div>
  <div class="drawer-bottom">
    <div class="total"><span>Total des articles</span><span id="cart-total">$0.00</span></div>
    <p class="small-note">🚚 Informations de livraison

:🇭🇹 Cap-Haïtien :🇩🇴 République dominicaine : livraison estimée entre 15 et 20 jours.(free shipping)

Les délais sont estimatifs et peuvent varier selon la destination et le transporteur.</p>
    <button class="btn" id="checkout-button">CONTINUER LA COMMANDE</button>
    <button class="btn light" id="clear-cart">Vider le panier</button>
  </div>
</aside>

<div id="checkout-modal" class="modal-wrap hidden" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
  <div class="modal">
    <div class="modal-head"><h2 id="checkout-title">Finaliser la commande</h2><button class="x" id="close-checkout" aria-label="Fermer">×</button></div>
    <form id="checkout-form" class="checkout-form">
      <div class="form-grid">
        <div class="field"><label for="customer-name">Nom complet *</label><input id="customer-name" name="name" required autocomplete="name"></div>
        <div class="field"><label for="customer-phone">Téléphone / WhatsApp *</label><input id="customer-phone" name="phone" required autocomplete="tel"></div>
        <div class="field full"><label for="customer-address">Adresse / zone de livraison *</label><input id="customer-address" name="address" required autocomplete="street-address" placeholder="Ville, commune, quartier..."></div>
        <div class="field full"><label for="customer-email">E-mail (facultatif)</label><input id="customer-email" name="email" type="email" autocomplete="email"></div>
      </div>
      
<div class="field full">
  <label for="delivery-country">Pays de livraison *</label>
  <select id="delivery-country" name="deliveryCountry" required>
    <option value="">Choisir le pays</option>
    <option value="Haïti">Haïti</option>
    <option value="Cap-Haïtien">Cap-Haïtien</option>
    <option value="République dominicaine">République dominicaine</option>
  </select>
</div>

<div class="field full" id="delivery-duration" style="display:none;">
  <p><strong>🚚 Délai estimé de livraison :</strong></p>
  <p id="delivery-duration-text"></p>
</div>

      <h3>Choisissez votre mode de paiement</h3>
      <div class="payment-options">
        <label class="payment-option"><input type="radio" name="payment" value="NatCash" required> <span><strong>NatCash +5095620-4275</strong><br>Transfert mobile</span></label>
        <label class="payment-option"><input type="radio" name="payment" value="Dépôt bancaire"> <span><strong>Dépôt bancaire capital bank </strong><br>Au guichet de la banque</span></label>
        <label class="payment-option"><input type="radio" name="payment" value="Western Union"> <span><strong>Western Union wendersen Altidor</strong><br>Transfert d'argent</span></label>
        <label class="payment-option"><input type="radio" name="payment" value="Virement bancaire"> <span><strong>Virement bancaire</strong><br>Transfert de compte à compte</span></label>
      </div>
      <div id="payment-instructions" class="payment-instructions">Sélectionnez un mode de paiement pour voir les instructions. Le propriétaire doit ajouter ici ses coordonnées officielles avant d'accepter les paiements.</div>
      <div class="field"><label for="customer-note">Note pour la commande (facultatif)</label><textarea id="customer-note" name="note" placeholder="Couleur, taille ou instructions supplémentaires..."></textarea></div>
      <div class="order-summary" id="checkout-summary"></div>
      <p class="notice">Cette version enregistre la commande sur cet appareil et prépare un récapitulatif à copier. Elle ne traite pas de paiement en ligne, n'envoie pas automatiquement la commande au vendeur et ne confirme pas la réception d'argent.</p>
      <button class="btn" style="width:100%;margin-top:10px" type="submit">Finaliser la commande</button>
    </form>
    <div id="order-success" class="success hidden" aria-live="polite"></div>
    <button id="send-order-whatsapp" class="btn"
style="background:#25D366;color:white;width:100%;margin-top:10px">
  ENVOYER LA COMMANDE SUR WHATSAPP
</button>
  </div>
</div>
<div id="gallery-modal" class="gallery-modal hidden">
  <div class="gallery-content">
    <button class="gallery-close" id="gallery-close" type="button">×</button>
    <button class="gallery-prev" id="gallery-prev" type="button">‹</button>
    <img id="gallery-main" class="gallery-main" src="" alt="Photo du produit">
    <button class="gallery-next" id="gallery-next" type="button">›</button>
    <div id="gallery-thumbnails" class="gallery-thumbnails"></div>
  </div>
</div>
<script>
"use strict";

/* MODIFIEZ CETTE LISTE POUR CHANGER LES ARTICLES, PRIX, TAILLES, COULEURS ET TISSUS.
   Les prix sont des exemples en dollars US. Les images nécessitent Internet. */
const $ = id => document.getElementById(id);
const grid = $("product-grid");
// Aucun plafond de 500 produits : tous les blocs .product présents dans le catalogue sont chargés.
/*__LMS_ADMIN_SYNC__*/
const PRODUCTS = Array.from(grid.querySelectorAll(".product")).map(card => {
  const id = Number(card.dataset.id);
  const image = card.querySelector(".product-photo img");
  const prices = card.querySelectorAll(".price-line span");
  const getOptions = selector => Array.from(card.querySelectorAll(selector + " option")).map(o => o.value);
  return {
    id,
    name: card.querySelector("h3").textContent.trim(),
    category: card.querySelector(".product-category").textContent.trim(),
    price: Number(prices[0].textContent.replace(/[^0-9.]/g, "")),
    oldPrice: Number(prices[1].textContent.replace(/[^0-9.]/g, "")),
    tag: card.querySelector(".tag").textContent.trim(),
  images: [
  ...card.querySelectorAll(".gallery-sources img")
].map(img => img.getAttribute("src")),
    sizes: getOptions(`[data-size="137"]`),
    colors: getOptions(`[data-color="137"]`),
    fabrics: getOptions(`[data-fabric="137"]`),
    card
  };
});

const suggestions = $("search-suggestions");

const searchWords = [...new Set(
  PRODUCTS.flatMap(p => [
    p.name,
    p.category,
    p.tag,
    ...(p.colors || []),
    ...(p.fabrics || []),
    ...(p.sizes || [])
  ])
)].filter(Boolean);

suggestions.innerHTML = searchWords
  .map(word => `<option value="${escapeHTML(word)}"></option>`)
  .join("");

PRODUCTS.forEach(product => {
  const mainImage = product.card.querySelector(".product-photo img");

  const extraImages = Array.from(
    product.card.querySelectorAll(".gallery-sources img")
  ).map(img => img.getAttribute("src"));

  product.image = mainImage.getAttribute("src");

  product.gallery = [
    product.image,
    ...extraImages.filter(src => src && src !== product.image)
  ];

  product.defaultImage = product.image;
});

/* Les images se changent directement dans le HTML, dans chaque balise <img src="imagen/nom-de-photo.jpg">. Aucune limite fixe de produits : copiez un bloc <article class="product"> et donnez un data-id unique. */
// Ajoutez vos vrais numéros, banque et instructions ici avant publication.
// Ne demandez jamais au client son PIN NatCash, son mot de passe ou ses codes bancaires.
const PAYMENT_DETAILS = {
  "NatCash": "À compléter par le vendeur : nom du bénéficiaire et numéro NatCash officiel. Le client doit confirmer le transfert selon les instructions du vendeur.",
  "Dépôt bancaire": "À compléter par le vendeur : nom de la banque, nom du titulaire, numéro de compte et référence à indiquer.",
  "Western Union": "À compléter par le vendeur : nom complet du bénéficiaire et pays de réception. Transmettez le numéro de contrôle uniquement par un canal sûr si nécessaire.",
  "Virement bancaire": "À compléter par le vendeur : nom de la banque, titulaire du compte, numéro de compte et autres coordonnées bancaires requises."
};

const cartDrawer = $("cart-drawer");
const overlay = $("overlay");
const cartLines = $("cart-lines");
const cartCount = $("cart-count");
const cartTotal = $("cart-total");
const noProducts = $("no-products");
const checkoutModal = $("checkout-modal");
const checkoutForm = $("checkout-form");
let category = "Tous";
let query = "";
let cart = [];

try {
  const stored = JSON.parse(localStorage.getItem("lms_shop_cart") || "[]");
  if (Array.isArray(stored)) cart = stored.filter(item =>
    item && typeof item.key === "string" &&
    Number.isFinite(Number(item.id)) &&
    Number.isFinite(Number(item.price)) &&
    Number.isFinite(Number(item.qty)) && Number(item.qty) > 0
  );
} catch (_) { cart = []; }

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}
function money(n) { return "$" + Number(n).toFixed(2); }
/* GALERÍA DES IMAGES */
let galleryImages = [];
let galleryIndex = 0;

function openGallery(images, index = 0) {
  galleryImages = images;
  galleryIndex = index;
  showGalleryImage();
  document.getElementById("gallery-modal").classList.remove("hidden");
}

function showGalleryImage() {
  document.getElementById("gallery-main").src = galleryImages[galleryIndex];

  document.getElementById("gallery-thumbnails").innerHTML =
    galleryImages.map((url, i) =>
      `<img src="${escapeHTML(url)}" data-gallery-index="${i}" alt="Photo ${i + 1}">`
    ).join("");
}

document.getElementById("product-grid").addEventListener("click", function(event) {
  const img = event.target.closest(".product-photo img");
  if (!img) return;

  const product = PRODUCTS.find(p => p.id === Number(img.closest(".product").dataset.id));
  if (!product) return;

  openGallery(product.gallery || [product.image]);
});

document.getElementById("gallery-close").addEventListener("click", () => {
  document.getElementById("gallery-modal").classList.add("hidden");
});

document.getElementById("gallery-prev").addEventListener("click", () => {
  galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
  showGalleryImage();
});

document.getElementById("gallery-next").addEventListener("click", () => {
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
  showGalleryImage();
});

document.getElementById("gallery-thumbnails").addEventListener("click", event => {
  const thumb = event.target.closest("[data-gallery-index]");
  if (!thumb) return;
  galleryIndex = Number(thumb.dataset.galleryIndex);
  showGalleryImage();
});

document.getElementById("gallery-modal").addEventListener("click", event => {
  if (event.target.id === "gallery-modal") {
    event.currentTarget.classList.add("hidden");
  }
});
function saveCart() {
  try { localStorage.setItem("lms_shop_cart", JSON.stringify(cart)); }
  catch (e) { console.warn("Le panier ne peut pas être sauvegardé.", e); }
}
 


function renderProducts() {
  let visible = 0;

  const searchText = query
    .trim()
    .toLocaleLowerCase("fr");

  PRODUCTS.forEach(p => {
    const productText = [
      p.name,
      p.category,
      p.tag,
      ...(p.sizes || []),
      ...(p.colors || []),
      ...(p.fabrics || [])
    ].join(" ").toLocaleLowerCase("fr");

    const matchesCategory =
      category === "Tous" || p.category === category;

    const matchesSearch =
      productText.includes(searchText);

    const matches = matchesCategory && matchesSearch;

    p.card.classList.toggle("hidden", !matches);

    if (matches) visible++;
  });

  noProducts.classList.toggle("hidden", visible !== 0);
}

function addToCart(id, size, color, fabric) {
  const p = PRODUCTS.find(item => item.id === Number(id));
  if (!p) return;
  const key = JSON.stringify([p.id,size,color,fabric]);
  const found = cart.find(item => item.key === key);
  if (found) found.qty += 1;
  else cart.push({key,id:p.id,name:p.name,category:p.category,price:p.price,image:p.image,size,color,fabric,qty:1});
  renderCart();
  openCart();
}
grid.addEventListener("click", event => {
  const btn = event.target.closest("[data-add]");
  if (!btn) return;
  const id = Number(btn.dataset.add);
  addToCart(id, $(`size-${id}`).value, $(`color-${id}`).value, $(`fabric-${id}`).value);
});
function renderCart() {
  let total = 0, count = 0;
  if (!cart.length) cartLines.innerHTML = '<p class="cart-empty">Votre panier est vide. Ajoutez un article pour commencer.</p>';
  else cartLines.innerHTML = cart.map(item => {
    const subtotal = Number(item.price) * Number(item.qty);
    total += subtotal; count += Number(item.qty);
    return `<article class="cart-row">
      <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}" onerror="this.style.visibility='hidden'">
      <div>
        <h3>${escapeHTML(item.name)}</h3>
        <p class="variant">Taille : ${escapeHTML(item.size)} · Couleur : ${escapeHTML(item.color)}</p>
        <p class="variant">Tissu : ${escapeHTML(item.fabric)}</p>
        <p class="cart-subtotal">${money(subtotal)}</p>
        <div class="qty">
          <button type="button" data-action="minus" data-key="${escapeHTML(item.key)}" aria-label="Diminuer">−</button>
          <span>${item.qty}</span>
          <button type="button" data-action="plus" data-key="${escapeHTML(item.key)}" aria-label="Augmenter">+</button>
        </div>
        <button class="remove" type="button" data-action="remove" data-key="${escapeHTML(item.key)}">Supprimer cet article</button>
      </div>
    </article>`;
  }).join("");
  cartCount.textContent = count;
  cartTotal.textContent = money(total);
  saveCart();
}
cartLines.addEventListener("click", event => {
  const b = event.target.closest("[data-action]");
  if (!b) return;
  const {action,key} = b.dataset;
  const item = cart.find(i => i.key === key);
  if (action === "remove") cart = cart.filter(i => i.key !== key);
  else if (item && action === "plus") item.qty++;
  else if (item && action === "minus") {
    item.qty--;
    if (item.qty <= 0) cart = cart.filter(i => i.key !== key);
  }
  renderCart();
});
function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden","false");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden","true");
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
}
$("open-cart").addEventListener("click", openCart);
$("close-cart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeCart(); closeCheckout(); } });
$("clear-cart").addEventListener("click", () => {
  if (!cart.length) return;
  if (confirm("Voulez-vous vider le panier ?")) { cart = []; renderCart(); }
});


$("search-form").addEventListener("submit", e => {
  e.preventDefault();

  query = $("search-input").value.trim().toLocaleLowerCase("fr");

  renderProducts();

  $("boutique").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
$("filters").addEventListener("click", e => {
  const b = e.target.closest("[data-category]");
  if (!b) return;
  category = b.dataset.category;
  document.querySelectorAll(".filter").forEach(el => el.classList.toggle("active", el === b));
  renderProducts();
});
function openCheckout() {
  if (!cart.length) { alert("Votre panier est vide."); return; }
  closeCart();
  $("checkout-summary").innerHTML = `<strong>Résumé de votre commande</strong><br>${cart.map(i=>`${escapeHTML(i.name)} × ${i.qty} — ${money(i.price*i.qty)}`).join("<br>")}<hr><strong>Total des articles : ${money(cart.reduce((s,i)=>s+i.price*i.qty,0))}</strong>`;
  $("order-success").classList.add("hidden");
  checkoutForm.classList.remove("hidden");
  checkoutModal.classList.remove("hidden");
}
function closeCheckout() { checkoutModal.classList.add("hidden"); }
$("checkout-button").addEventListener("click", openCheckout);
$("close-checkout").addEventListener("click", closeCheckout);
checkoutModal.addEventListener("click", e => { if (e.target === checkoutModal) closeCheckout(); });
document.querySelectorAll('input[name="payment"]').forEach(radio => {
  radio.addEventListener("change", () => {
    $("payment-instructions").textContent = PAYMENT_DETAILS[radio.value] || "Contactez le vendeur pour les instructions.";
  });
});
checkoutForm.addEventListener("submit", async e => {
  e.preventDefault();
  if (!cart.length) { alert("Le panier est vide."); closeCheckout(); return; }
  const data = new FormData(checkoutForm);
  const payment = data.get("payment");
  const orderId = "LMS-" + Date.now().toString().slice(-8);
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const lines = cart.map(i => `- ${i.name} | Taille: ${i.size} | Couleur: ${i.color} | Tissu: ${i.fabric} | Qté: ${i.qty} | ${money(i.price*i.qty)}`).join("\n");
  const summary = `COMMANDE ${orderId}\nLe Magicien du Style\nNom: ${data.get("name")}\nTéléphone: ${data.get("phone")}\nAdresse: ${data.get("address")}\nE-mail: ${data.get("email") || "Non fourni"}\nPaiement choisi: ${payment}\n\nARTICLES:\n${lines}\n\nTOTAL DES ARTICLES: ${money(total)}\nNote: ${data.get("note") || "Aucune"}\n\nCommande non payée/non confirmée. Le vendeur doit confirmer la disponibilité, les frais et la réception du paiement.`;
  const orders = (() => { try { return JSON.parse(localStorage.getItem("lms_demo_orders") || "[]"); } catch (_) { return []; } })();
  orders.push({orderId,createdAt:new Date().toISOString(),name:data.get("name"),phone:data.get("phone"),address:data.get("address"),payment,total,status:"À confirmer",summary});
  try { localStorage.setItem("lms_demo_orders", JSON.stringify(orders)); } catch (_) {}
  let serverSaved = false;
  try {
    const response = await fetch("/api/orders", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderId,createdAt:new Date().toISOString(),name:data.get("name"),phone:data.get("phone"),address:data.get("address"),email:data.get("email")||"",payment,total,status:"À confirmer",summary,items:cart})});
    serverSaved = response.ok;
  } catch (err) { console.warn("Commande non transmise au serveur.", err); }
  checkoutForm.classList.add("hidden");
  const success = $("order-success");
  success.classList.remove("hidden");
  success.innerHTML = `<h3>Récapitulatif créé</h3><p>Référence : <code>${orderId}</code></p><p>Montant des articles : <strong>${money(total)}</strong></p><p>Mode choisi : ${escapeHTML(payment)}</p><p>${serverSaved ? "La commande a été enregistrée sur le serveur pour le panneau admin. Le vendeur doit confirmer la disponibilité et le paiement." : "La commande est enregistrée uniquement dans ce navigateur; le serveur n’a pas confirmé sa réception. Aucun paiement n’a été traité."}</p><textarea id="order-copy-text" style="width:100%;min-height:210px;padding:10px">${escapeHTML(summary)}</textarea><button class="btn" type="button" id="copy-order" style="margin-top:12px">COPIER LE RÉCAPITULATIF</button><button class="btn light" type="button" id="finish-order" style="margin:12px 0 0 8px">Retour à la boutique</button>`;
  $("copy-order").addEventListener("click", async () => {
    const text = $("order-copy-text").value;
    try { await navigator.clipboard.writeText(text); alert("Récapitulatif copié."); }
    catch (_) { $("order-copy-text").select(); alert("Sélectionnez le texte et copiez-le manuellement."); }
  });
  $("finish-order").addEventListener("click", () => {
    cart = [];
    renderCart();
    closeCheckout();
    window.scrollTo({top:0,behavior:"smooth"});
  });
});
$("send-order-whatsapp").addEventListener("click", () => {
  const recap = $("order-success").innerText;
  const message = "🛍️ NOUVELLE COMMANDE - LE MAGICIEN DU STYLE\\n\\n" + recap;
  const wa = String(window.LMS_ADMIN_SETTINGS?.whatsapp || "").replace(/[^0-9]/g, "");
  if (!wa) { alert("Le numéro WhatsApp doit être configuré dans Administration > Paramètres."); return; }
  window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(message), "_blank");
});

$("year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
</script>
</body>
</html>
