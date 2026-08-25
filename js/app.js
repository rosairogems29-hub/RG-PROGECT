const WHATSAPP='94767308732';
const SECONDARY_PHONE='+94741729997';
const EMAIL='rosairogems83@gmail.com';

function waLink(p){
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello Rosairo Gems, I am interested in ${p.name}${p.carat && !p.carat.startsWith('Add') ? ` (${p.carat})` : ''}. Please share availability and details.`)}`;
}
function assetPath(path){
  if(!path) return '';
  return location.pathname.includes('/pages/') && path.startsWith('assets/') ? `../${path}` : path;
}
function card(p){
  const img=assetPath(p.image || (p.images&&p.images[0]));
  return `<article class="stone-card"><a class="stone-image" href="stone.html?id=${p.id}"><img src="${img}" alt="${p.name}"><span>${p.subcategory}</span></a><div class="stone-info"><div class="stone-meta">${p.carat} · ${p.origin}</div><h3>${p.name}</h3><p>${p.treatment}</p><a class="more-link" href="stone.html?id=${p.id}">More Details <b>→</b></a></div></article>`;
}
function renderCategoryPage(){
 const id=document.body.dataset.category; if(!id||typeof CATEGORIES==='undefined') return;
 const cat=CATEGORIES.find(x=>x.id===id); if(!cat) return;
 document.title=`${cat.name} | Rosairo Gems & Lapidary`;
 const title=document.getElementById('categoryTitle'); const intro=document.getElementById('categoryIntro');
 if(title) title.textContent=cat.name; if(intro) intro.textContent=cat.intro;
 const side=document.getElementById('categorySide');
 if(side) side.innerHTML=`<div class="side-title">Categories</div>${CATEGORIES.map(c=>`<a class="side-cat ${c.id===id?'active':''}" href="${c.id}.html">${c.name}</a>`).join('')}<div class="side-title refine">Subcategories</div>${cat.subs.map(s=>`<button class="side-sub" data-sub="${s}">${s}</button>`).join('')}`;
 const grid=document.getElementById('stoneGrid'); let list=GEMSTONES.filter(p=>p.category===id); const search=document.getElementById('stoneSearch');
 function draw(){
   const q=(search?.value||'').toLowerCase(); const sub=grid.dataset.sub||'all';
   const out=list.filter(p=>(sub==='all'||p.subcategory===sub)&&`${p.name} ${p.subcategory} ${p.origin}`.toLowerCase().includes(q));
   grid.innerHTML=out.length?out.map(card).join(''):`<div class="empty-state">No gemstones have been added to this subcategory yet. Please contact us for current availability.</div>`;
 }
 if(search) search.addEventListener('input',draw);
 side?.addEventListener('click',e=>{const b=e.target.closest('.side-sub');if(!b)return;document.querySelectorAll('.side-sub').forEach(x=>x.classList.remove('active'));b.classList.add('active');grid.dataset.sub=b.dataset.sub;draw();});
 draw();
}
function renderStone(){
 const root=document.getElementById('stoneDetail'); if(!root) return;
 const id=new URLSearchParams(location.search).get('id'); const p=typeof GEMSTONES!=='undefined'?GEMSTONES.find(x=>x.id===id):null;
 if(!p){root.innerHTML='<div class="empty-state">Gemstone not found.</div>';return;}
 document.title=`${p.name} | Rosairo Gems & Lapidary`;
 const imgs=(p.images&&p.images.length?p.images:[p.image]).filter(Boolean);
 const main=assetPath(imgs[0]);
 const thumbs=imgs.slice(0,4).map((im,i)=>`<button class="thumb-btn" type="button" data-image="${assetPath(im)}"><img src="${assetPath(im)}" alt="${p.name} view ${i+1}"></button>`).join('');
 const video=p.video?`<div class="detail-video"><video controls playsinline preload="metadata"><source src="${assetPath(p.video)}" type="video/mp4"></video></div>`:'';
 root.innerHTML=`<div class="crumb">Collections <span>›</span> ${p.subcategory} <span>›</span> ${p.name}</div><div class="stone-detail"><div><div class="detail-main-image"><img id="mainStoneImage" src="${main}" alt="${p.name}"></div><div class="thumb-row">${thumbs||`<button class="thumb-btn"><img src="${main}" alt="${p.name}"></button>`}</div>${video}</div><div class="detail-copy"><div class="section-kicker">${p.carat} · ${p.origin}</div><h1>${p.name}</h1><p class="detail-description">${p.description}</p><h4>Technical Specifications</h4><dl class="spec-list">${[['Variety',p.variety],['Weight',p.weight],['Dimensions',p.dimensions],['Shape / Cut',`${p.shape} / ${p.cut}`],['Colour',p.colour],['Clarity',p.clarity],['Treatment',p.treatment],['Certification',p.certification],['Price',p.price]].map(([a,b])=>`<div><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl><div class="detail-actions"><a class="blue-btn" href="${waLink(p)}" target="_blank" rel="noopener">Enquire on WhatsApp</a><a class="outline-btn full" href="mailto:${EMAIL}?subject=${encodeURIComponent('Gemstone enquiry: '+p.name)}">Email Inquiry</a></div><p class="private-note">Private viewings available in Colombo & Ratnapura.</p></div></div>`;
 root.querySelectorAll('.thumb-btn').forEach(btn=>btn.addEventListener('click',()=>{const img=root.querySelector('#mainStoneImage');if(img)img.src=btn.dataset.image;}));
}
function initNav(){const n=document.getElementById('nav'),b=document.getElementById('menuToggle');b?.addEventListener('click',()=>n.classList.toggle('mobile-open'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('mobile-open')));}
function initCommon(){initNav();const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();const w=document.getElementById('waPrimary');if(w)w.href=`https://wa.me/${WHATSAPP}`;}
document.addEventListener('DOMContentLoaded',()=>{initCommon();renderCategoryPage();renderStone();});
