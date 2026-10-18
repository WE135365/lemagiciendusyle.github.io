// Le Magicien du Style — serveur local / production Node.js (sans dépendances externes)
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = __dirname;
const DATA = path.join(ROOT, 'data');
const ORDERS_FILE = path.join(DATA, 'orders.json');
const PRODUCTS_FILE = path.join(DATA, 'products.json');
const SETTINGS_FILE = path.join(DATA, 'settings.json');
const PORT = Number(process.env.PORT || 3000);
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const SESSION_SECRET = process.env.SESSION_SECRET;
if (!ADMIN_PASSWORD || ADMIN_PASSWORD.length < 12) {
  console.error('SECURITÉ: définissez ADMIN_PASSWORD (12 caractères minimum) avant de démarrer.');
  console.error('PowerShell: $env:ADMIN_PASSWORD="un-mot-de-passe-long-et-unique"; node server.js');
  process.exit(1);
}
if (!SESSION_SECRET || SESSION_SECRET.length < 32) {
  console.error('SECURITÉ: définissez SESSION_SECRET (32 caractères minimum) avant de démarrer.');
  console.error('PowerShell: $env:SESSION_SECRET="une-cle-secrete-longue-de-32-caracteres-minimum"; node server.js');
  process.exit(1);
}
fs.mkdirSync(DATA, {recursive:true});
function readJson(file, fallback) { try { return JSON.parse(fs.readFileSync(file,'utf8')); } catch { return fallback; } }
function writeJson(file, value) { fs.writeFileSync(file, JSON.stringify(value,null,2), {mode:0o600}); }
if (!fs.existsSync(ORDERS_FILE)) writeJson(ORDERS_FILE, []);
if (!fs.existsSync(PRODUCTS_FILE)) writeJson(PRODUCTS_FILE, []);
// Importer une seule fois le catalogue initial sans écraser un catalogue déjà existant.
const SEED_FILE = path.join(DATA, 'initial-products.json');
const SEED_MARKER = path.join(DATA, '.initial-products-imported');
if (!fs.existsSync(SEED_MARKER)) {
 const existingProducts = readJson(PRODUCTS_FILE, []);
 const initialProducts = readJson(SEED_FILE, []);
 if (existingProducts.length === 0 && initialProducts.length > 0) writeJson(PRODUCTS_FILE, initialProducts);
 fs.writeFileSync(SEED_MARKER, new Date().toISOString(), {mode:0o600});
}
if (!fs.existsSync(SETTINGS_FILE)) writeJson(SETTINGS_FILE, {storeName:'Le Magicien du Style',whatsapp:'',delivery:'15–20 jours',currency:'USD'});
const sessions = new Map();
const attempts = new Map();
function parseCookies(req) { return Object.fromEntries((req.headers.cookie||'').split(';').map(v=>v.trim()).filter(Boolean).map(v=>{const i=v.indexOf('=');return [v.slice(0,i),decodeURIComponent(v.slice(i+1))]})); }
function send(res,status,data,headers={}) { const body=typeof data==='string'?data:JSON.stringify(data); res.writeHead(status,{'Content-Type':typeof data==='string'?'text/html; charset=utf-8':'application/json; charset=utf-8','X-Content-Type-Options':'nosniff','X-Frame-Options':'DENY','Referrer-Policy':'same-origin','Cache-Control':'no-store',...headers}); res.end(body); }
function bodyJson(req) { return new Promise((resolve,reject)=>{let raw='';req.on('data',c=>{raw+=c;if(raw.length>1e6){reject(new Error('Payload trop volumineux'));req.destroy();}});req.on('end',()=>{try{resolve(JSON.parse(raw||'{}'))}catch{reject(new Error('JSON invalide'))}});}); }
function isAdmin(req) { const sid=parseCookies(req).lms_session; const s=sessions.get(sid); return !!(s && s.exp>Date.now()); }
function auth(req,res) { if(!isAdmin(req)){send(res,401,{error:'Connexion administrateur requise'});return false;} return true; }
function safeText(v,max=500) { return String(v??'').trim().slice(0,max); }
function validProduct(p) {
 return p && safeText(p.name,120) && Number.isFinite(Number(p.price)) && Number(p.price)>=0 &&
   safeText(p.category,60) && safeText(p.image,300) && !/^(javascript:|data:text\/html)/i.test(String(p.image));
}
const server=http.createServer(async(req,res)=>{
 try {
  const url=new URL(req.url,'http://localhost');
  if(req.method==='GET' && url.pathname==='/admin') return send(res,200,fs.readFileSync(path.join(ROOT,'admin.html'),'utf8'));
  if(req.method==='GET' && (url.pathname==='/' || url.pathname==='/index.html')) {
   let html=fs.readFileSync(path.join(ROOT,'index.html'),'utf8');
   const catalog=readJson(PRODUCTS_FILE,[]), settings=readJson(SETTINGS_FILE,{});
   const syncScript=`window.LMS_ADMIN_PRODUCTS=${JSON.stringify(catalog)};window.LMS_ADMIN_SETTINGS=${JSON.stringify(settings)};`;
   html=html.replace('/*__LMS_ADMIN_SYNC__*/', () => syncScript + `\n/* Synchronisation catalogue admin -> boutique */\n(function(){const catalog=Array.isArray(window.LMS_ADMIN_PRODUCTS)?window.LMS_ADMIN_PRODUCTS:[];const grid=document.getElementById('product-grid');if(!grid)return;const list=v=>Array.isArray(v)?v.map(String):String(v||'').split(',').map(x=>x.trim()).filter(Boolean);const esc=v=>String(v??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]));const setOptions=(attr,vals,id)=>{const el=Array.from(grid.querySelectorAll('select['+attr+']')).find(x=>String(x.getAttribute(attr))===String(id));if(!el)return;const arr=list(vals);el.innerHTML=arr.map(v=>'<option value=\"'+esc(v)+'\">'+esc(v)+'</option>').join('');};const existing=Array.from(grid.querySelectorAll('.product'));for(const c of existing){if(!catalog.some(p=>String(p.id)===String(c.dataset.id)&&p.active!==false))c.remove();}for(const p of catalog){if(p.active===false)continue;let card=Array.from(grid.querySelectorAll('.product')).find(c=>String(c.dataset.id)===String(p.id));if(!card){card=document.createElement('article');card.className='product';card.dataset.id=String(p.id);card.innerHTML='<div class=\"product-photo\"><img><div class=\"gallery-sources\" hidden></div><span class=\"tag\"></span></div><div class=\"product-info\"><span class=\"product-category\"></span><h3></h3><div class=\"price-line\"><span class=\"price\"></span><span class=\"old-price\"></span></div><label>Taille</label><select data-size=\"'+esc(p.id)+'\" id=\"size-'+esc(p.id)+'\"></select><label>Couleur</label><select data-color=\"'+esc(p.id)+'\" id=\"color-'+esc(p.id)+'\"></select><label>Tissu / matière</label><select data-fabric=\"'+esc(p.id)+'\" id=\"fabric-'+esc(p.id)+'\"></select><button class=\"btn add\" type=\"button\" data-add=\"'+esc(p.id)+'\">AJOUTER AU PANIER</button></div>';grid.appendChild(card);}const image=card.querySelector('.product-photo>img');image.src=p.image||'';image.alt=p.name||'Produit';card.querySelector('.product-category').textContent=p.category||'';card.querySelector('h3').textContent=p.name||'';card.querySelector('.price').textContent='$'+Number(p.price||0).toFixed(2);card.querySelector('.old-price').textContent=p.oldPrice?'$'+Number(p.oldPrice).toFixed(2):'';card.querySelector('.tag').textContent=p.tag||'NOUVEAU';const gallery=card.querySelector('.gallery-sources');gallery.innerHTML=list(p.gallery&&p.gallery.length?p.gallery:[p.image]).filter(Boolean).map(src=>'<img src=\"'+esc(src)+'\" alt=\"\">').join('');setOptions('data-size',p.sizes,p.id);setOptions('data-color',p.colors,p.id);setOptions('data-fabric',p.fabrics,p.id);}})();`);
   return send(res,200,html);
  }
  if(req.method==='GET' && url.pathname==='/api/session') return send(res,200,{authenticated:isAdmin(req),user:ADMIN_USER});
  if(req.method==='POST' && url.pathname==='/api/login') {
   const ip=req.socket.remoteAddress||'unknown', now=Date.now(), a=attempts.get(ip)||{count:0,until:0};
   if(a.until>now) return send(res,429,{error:'Trop de tentatives. Réessayez plus tard.'});
   const b=await bodyJson(req);
   const suppliedHash=crypto.createHash('sha256').update(String(b.password||'')).digest();
   const expectedHash=crypto.createHash('sha256').update(ADMIN_PASSWORD).digest();
   const ok=safeText(b.username,100)===ADMIN_USER && crypto.timingSafeEqual(suppliedHash,expectedHash);
   if(!ok){a.count++; if(a.count>=6){a.until=now+10*60*1000;a.count=0;} attempts.set(ip,a); return send(res,401,{error:'Identifiants incorrects'});}
   attempts.delete(ip);
   const sid=crypto.randomBytes(32).toString('hex'); sessions.set(sid,{exp:now+8*60*60*1000});
   return send(res,200,{ok:true},{'Set-Cookie':`lms_session=${sid}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800`});
  }
  if(req.method==='POST' && url.pathname==='/api/logout') {
   const sid=parseCookies(req).lms_session; if(sid)sessions.delete(sid);
   return send(res,200,{ok:true},{'Set-Cookie':'lms_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0'});
  }
  if(req.method==='POST' && url.pathname==='/api/orders') {
   const b=await bodyJson(req);
   if(!safeText(b.orderId,60)||!safeText(b.name,120)||!safeText(b.phone,60)) return send(res,400,{error:'Informations de commande manquantes'});
   const orders=readJson(ORDERS_FILE,[]);
   if(orders.some(o=>o.orderId===b.orderId)) return send(res,200,{ok:true,duplicate:true});
   orders.unshift({orderId:safeText(b.orderId,60),createdAt:new Date().toISOString(),name:safeText(b.name,120),phone:safeText(b.phone,60),address:safeText(b.address,500),email:safeText(b.email,160),payment:safeText(b.payment,80),total:Number(b.total)||0,status:'À confirmer',summary:safeText(b.summary,12000),items:Array.isArray(b.items)?b.items.slice(0,100):[]});
   writeJson(ORDERS_FILE,orders); return send(res,201,{ok:true});
  }
  if(url.pathname.startsWith('/api/admin/')) {
   if(!auth(req,res))return;
   if(req.method==='GET'&&url.pathname==='/api/admin/overview'){
    const orders=readJson(ORDERS_FILE,[]), products=readJson(PRODUCTS_FILE,[]), settings=readJson(SETTINGS_FILE,{});
    return send(res,200,{orders,products,settings,stats:{orders:orders.length,pending:orders.filter(o=>!['Livrée','Annulée'].includes(o.status)).length,revenue:orders.filter(o=>o.status!=='Annulée').reduce((s,o)=>s+(Number(o.total)||0),0),products:products.length}});
   }
   if(req.method==='PATCH'&&url.pathname.startsWith('/api/admin/orders/')){
    const id=decodeURIComponent(url.pathname.slice('/api/admin/orders/'.length)), b=await bodyJson(req), orders=readJson(ORDERS_FILE,[]);
    const o=orders.find(x=>x.orderId===id); if(!o)return send(res,404,{error:'Commande introuvable'});
    if(!['À confirmer','Confirmée','En préparation','Expédiée','Livrée','Annulée'].includes(b.status))return send(res,400,{error:'Statut invalide'});
    o.status=b.status; writeJson(ORDERS_FILE,orders); return send(res,200,{ok:true,order:o});
   }
   if(req.method==='DELETE'&&url.pathname.startsWith('/api/admin/orders/')){
    const id=decodeURIComponent(url.pathname.slice('/api/admin/orders/'.length)), orders=readJson(ORDERS_FILE,[]);
    writeJson(ORDERS_FILE,orders.filter(o=>o.orderId!==id)); return send(res,200,{ok:true});
   }
   if(req.method==='POST'&&url.pathname==='/api/admin/products'){
    const b=await bodyJson(req); if(!validProduct(b))return send(res,400,{error:'Nom, catégorie, prix et chemin photo sont requis'});
    const products=readJson(PRODUCTS_FILE,[]); const nextId=String(Math.max(0,...products.map(x=>Number(x.id)||0))+1); const p={id:nextId,name:safeText(b.name,120),category:safeText(b.category,60),price:Number(b.price),oldPrice:Number(b.oldPrice)||0,stock:Math.max(0,Number(b.stock)||0),image:safeText(b.image,300),tag:safeText(b.tag,60)||'NOUVEAU',gallery:Array.isArray(b.gallery)?b.gallery.slice(0,8):[safeText(b.image,300)],sizes:safeText(b.sizes,200),colors:safeText(b.colors,200),fabrics:safeText(b.fabrics,300),description:safeText(b.description,1000),active:b.active!==false};
    products.unshift(p);writeJson(PRODUCTS_FILE,products);return send(res,201,{ok:true,product:p});
   }
   if(req.method==='PATCH'&&url.pathname.startsWith('/api/admin/products/')){
    const id=decodeURIComponent(url.pathname.slice('/api/admin/products/'.length)), b=await bodyJson(req), products=readJson(PRODUCTS_FILE,[]), i=products.findIndex(p=>p.id===id);
    if(i<0)return send(res,404,{error:'Produit introuvable'});
    const p={...products[i],name:safeText(b.name,120),category:safeText(b.category,60),price:Number(b.price),oldPrice:Number(b.oldPrice)||0,stock:Math.max(0,Number(b.stock)||0),image:safeText(b.image,300),tag:safeText(b.tag,60)||products[i].tag||'NOUVEAU',gallery:Array.isArray(b.gallery)?b.gallery.slice(0,8):(products[i].gallery||[safeText(b.image,300)]),sizes:safeText(b.sizes,200),colors:safeText(b.colors,200),fabrics:safeText(b.fabrics,300),description:safeText(b.description,1000),active:b.active!==false};
    if(!validProduct(p))return send(res,400,{error:'Vérifiez le nom, la catégorie, le prix et la photo'});products[i]=p;writeJson(PRODUCTS_FILE,products);return send(res,200,{ok:true,product:p});
   }
   if(req.method==='DELETE'&&url.pathname.startsWith('/api/admin/products/')){
    const id=decodeURIComponent(url.pathname.slice('/api/admin/products/'.length)), products=readJson(PRODUCTS_FILE,[]);
    writeJson(PRODUCTS_FILE,products.filter(p=>p.id!==id));return send(res,200,{ok:true});
   }
   if(req.method==='PUT'&&url.pathname==='/api/admin/settings'){
    const b=await bodyJson(req);const settings={storeName:safeText(b.storeName,100),whatsapp:safeText(b.whatsapp,30),delivery:safeText(b.delivery,100),currency:safeText(b.currency,10)};
    writeJson(SETTINGS_FILE,settings);return send(res,200,{ok:true,settings});
   }
   return send(res,404,{error:'Route introuvable'});
  }
  // Static files: only files inside the project folder, with explicit safe path resolution.
  if(req.method==='GET'){
   let pathname=decodeURIComponent(url.pathname==='/ ' ? '/index.html' : url.pathname);
   if(pathname==='/')pathname='/index.html';
   const file=path.resolve(ROOT,'.'+pathname);
   // Never expose backend source, documentation, or private JSON data through static hosting.
   const relative=path.relative(ROOT,file).split(path.sep);
   if(relative[0]==='data' || ['server.js','README.txt','package.json'].includes(relative[0]) ||
      !file.startsWith(ROOT+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile())return send(res,404,'Not found');
   const ext=path.extname(file).toLowerCase(), types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.avif':'image/avif','.svg':'image/svg+xml'};
   res.writeHead(200,{'Content-Type':types[ext]||'application/octet-stream','X-Content-Type-Options':'nosniff','X-Frame-Options':'DENY','Referrer-Policy':'same-origin'});return fs.createReadStream(file).pipe(res);
  }
  send(res,405,{error:'Méthode non autorisée'});
 } catch(e){console.error(e);if(!res.headersSent)send(res,500,{error:'Erreur serveur'});}
});
server.listen(PORT,'0.0.0.0',()=>console.log(`Le Magicien du Style: http://localhost:${PORT}\nAdmin: http://localhost:${PORT}/admin`));
