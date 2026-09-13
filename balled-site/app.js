(function(){
  // ---------- data ----------
  const categories = [
    {name:"Tout", icon:"✦"},
    {name:"Femme", icon:"👗"},
    {name:"Homme", icon:"👕"},
    {name:"Enfant", icon:"🧸"},
    {name:"Chaussures", icon:"👟"},
    {name:"Accessoires", icon:"👜"},
    {name:"Maison", icon:"🏺"},
  ];

  const images = [
    "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&h=580&fit=crop",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=580&fit=crop",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=580&fit=crop",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=580&fit=crop",
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=580&fit=crop",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&h=580&fit=crop",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=580&fit=crop",
    "https://images.unsplash.com/photo-1467043198406-dc953a3defa0?w=500&h=580&fit=crop",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=580&fit=crop",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=580&fit=crop",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&h=580&fit=crop",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=580&fit=crop",
  ];

  const seedTitles = [
    ["Sézane","Robe fluide imprimée","Femme","36"],
    ["Nike","Air Max 90 blanches","Chaussures","42"],
    ["Zara","Manteau en laine mélangée","Femme","M"],
    ["Levi's","Jean 501 délavé","Homme","W32"],
    ["Polène","Sac cabas cuir camel","Accessoires","Unique"],
    ["COS","Pull col rond mérinos","Homme","L"],
    ["Ganni","Cardigan à motifs","Femme","S"],
    ["Adidas","Sambas noires","Chaussures","40"],
    ["Maje","Blazer structuré","Femme","38"],
    ["Uniqlo","Chemise oxford","Homme","M"],
    ["Petit Bateau","Barboteuse en coton","Enfant","18 mois"],
    ["Hay","Vase en céramique","Maison","Unique"],
  ];
  const conditions = ["Neuf avec étiquette","Très bon état","Bon état","Satisfaisant"];

  function calcCheckout(price){
    const serviceFee = Math.max(15, Math.round(price*0.05*100)/100);
    const deposit = Math.max(30, Math.round(price*0.15*100)/100);
    const dueAtDelivery = Math.round((price + serviceFee - deposit)*100)/100;
    return { serviceFee, deposit, dueAtDelivery, total: Math.round((price+serviceFee)*100)/100 };
  }

  let products = seedTitles.map((t,i)=>({
    id:"p"+i,
    brand:t[0], title:t[1], category:t[2], size:t[3],
    price: [120,380,250,150,420,140,180,260,320,90,110,160][i],
    oldPrice: [0,0,480,0,0,0,0,0,0,0,0,0][i],
    condition: conditions[i % conditions.length],
    img: images[i % images.length],
    seller: ["Léa","Tom","Camille","Nora","Yanis","Inès","Paul","Salomé","Rayan","Lucie","Anaïs","Théo"][i],
    desc: "Article vendu par un particulier, contrôlé avant expédition. Envoi sous 48h avec suivi.",
  }));

  const favorites = new Set();
  let activeCategory = "Tout";
  let visibleCount = 8;

  // ---------- render categories ----------
  const catScroll = document.getElementById("cat-scroll");
  categories.forEach(c=>{
    const el = document.createElement("button");
    el.className = "chip" + (c.name==="Tout" ? " active" : "");
    el.dataset.cat = c.name;
    el.innerHTML = `<span class="ic">${c.icon}</span>${c.name}`;
    el.addEventListener("click", ()=>{
      activeCategory = c.name;
      visibleCount = 8;
      document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
      el.classList.add("active");
      renderGrid();
    });
    catScroll.appendChild(el);
  });

  // ---------- render filter pills (condition quick filters, decorative + functional on condition) ----------
  const filterRow = document.getElementById("filter-row");
  const quickFilters = ["Tous les états", ...conditions];
  let activeFilter = "Tous les états";
  quickFilters.forEach(f=>{
    const el = document.createElement("button");
    el.className = "filter-pill" + (f==="Tous les états" ? " active" : "");
    el.textContent = f;
    el.addEventListener("click", ()=>{
      activeFilter = f;
      visibleCount = 8;
      document.querySelectorAll(".filter-pill").forEach(x=>x.classList.remove("active"));
      el.classList.add("active");
      renderGrid();
    });
    filterRow.appendChild(el);
  });

  // ---------- render grid ----------
  const grid = document.getElementById("product-grid");
  const loadMoreBtn = document.getElementById("load-more-btn");
  const searchInput = document.getElementById("search-input");

  function getFiltered(){
    const q = searchInput.value.trim().toLowerCase();
    return products.filter(p=>{
      const matchCat = activeCategory==="Tout" || p.category===activeCategory;
      const matchCond = activeFilter==="Tous les états" || p.condition===activeFilter;
      const matchQ = !q || (p.title+" "+p.brand).toLowerCase().includes(q);
      return matchCat && matchCond && matchQ;
    });
  }

  function renderGrid(){
    const filtered = getFiltered();
    grid.innerHTML = "";
    if(filtered.length===0){
      grid.style.display = "block";
      grid.innerHTML = `<div class="empty-state">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <div style="font-weight:600;color:var(--ink);margin-bottom:4px;">Aucun article trouvé</div>
        <div style="font-size:13.5px;">Essaie une autre catégorie ou un autre mot-clé.</div>
      </div>`;
      loadMoreBtn.style.display = "none";
      return;
    }
    grid.style.display = "grid";
    const toShow = filtered.slice(0, visibleCount);
    toShow.forEach(p=>{
      const card = document.createElement("div");
      card.className = "card";
      card.addEventListener("click", ()=>openItem(p.id));
      const isSaved = favorites.has(p.id);
      card.innerHTML = `
        <div class="card-media">
          <img src="${p.img}" alt="${p.title}" loading="lazy">
          <button class="fav-btn ${isSaved?'saved':''}" data-id="${p.id}" title="Ajouter aux favoris">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="${isSaved?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
          </button>
          <div class="cond-tag">${p.condition}</div>
        </div>
        <div class="card-body">
          <div class="card-brand">${p.brand}</div>
          <div class="card-title">${p.title}</div>
          <div class="card-meta">Taille ${p.size}</div>
          <div class="card-price-row">
            <div><span class="card-price">${p.price} DH</span>${p.oldPrice ? `<span class="card-old-price">${p.oldPrice} DH</span>`:""}</div>
          </div>
        </div>
      `;
      card.querySelector(".fav-btn").addEventListener("click",(e)=>{
        e.stopPropagation();
        toggleFav(p.id);
      });
      grid.appendChild(card);
    });
    loadMoreBtn.style.display = filtered.length > visibleCount ? "inline-flex" : "none";
  }

  loadMoreBtn.addEventListener("click", ()=>{
    visibleCount += 8;
    renderGrid();
  });
  searchInput.addEventListener("input", ()=>{ visibleCount = 8; renderGrid(); });

  // ---------- favorites ----------
  const favCountEl = document.getElementById("fav-count");
  function toggleFav(id){
    if(favorites.has(id)){ favorites.delete(id); }
    else { favorites.add(id); showToast("Ajouté à tes favoris"); }
    favCountEl.textContent = favorites.size;
    favCountEl.style.display = favorites.size ? "flex" : "none";
    renderGrid();
    if(document.getElementById("item-overlay").classList.contains("open")){
      // refresh open modal heart state if needed
    }
  }
  document.getElementById("fav-icon-btn").addEventListener("click", ()=>{
    if(favorites.size===0){ showToast("Tu n'as pas encore de favoris"); return; }
    activeCategory = "Tout"; activeFilter = "Tous les états";
    document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active", x.dataset.cat==="Tout"));
    document.querySelectorAll(".filter-pill").forEach(x=>x.classList.toggle("active", x.textContent==="Tous les états"));
    searchInput.value = "";
    grid.innerHTML = "";
    const favItems = products.filter(p=>favorites.has(p.id));
    grid.style.display = "grid";
    favItems.forEach(p=>{
      const card = document.createElement("div");
      card.className = "card";
      card.addEventListener("click", ()=>openItem(p.id));
      card.innerHTML = `
        <div class="card-media"><img src="${p.img}"><button class="fav-btn saved" data-id="${p.id}"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg></button><div class="cond-tag">${p.condition}</div></div>
        <div class="card-body"><div class="card-brand">${p.brand}</div><div class="card-title">${p.title}</div><div class="card-meta">Taille ${p.size}</div><div class="card-price-row"><span class="card-price">${p.price} DH</span></div></div>`;
      card.querySelector(".fav-btn").addEventListener("click",(e)=>{e.stopPropagation(); toggleFav(p.id); card.remove();});
      grid.appendChild(card);
    });
    loadMoreBtn.style.display = "none";
    document.querySelector(".section-title").textContent = "Tes favoris";
    window.scrollTo({top: document.querySelector(".cat-strip").offsetTop - 90, behavior:"smooth"});
  });
  document.getElementById("msg-icon-btn").addEventListener("click", ()=>{
    showToast("La messagerie arrive bientôt");
  });

  // ---------- item modal ----------
  const itemOverlay = document.getElementById("item-overlay");
  const itemModalContent = document.getElementById("item-modal-content");
  function openItem(id){
    const p = products.find(x=>x.id===id);
    if(!p) return;
    const initials = p.seller.slice(0,2).toUpperCase();
    itemModalContent.innerHTML = `
      <button class="modal-close" id="item-close">✕</button>
      <div class="item-modal-grid">
        <div class="item-media"><img src="${p.img.replace('w=500&h=580','w=800&h=900')}" alt="${p.title}"></div>
        <div class="item-info">
          <div class="item-brand">${p.brand}</div>
          <div class="item-title">${p.title}</div>
          <div class="item-price">${p.price} DH</div>
          <div class="cod-note">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4M2 11h20"/></svg>
            Paiement à la livraison — un acompte confirme ta commande, le reste se paie au livreur
          </div>
          <div class="item-tags">
            <span class="item-tag">Taille ${p.size}</span>
            <span class="item-tag">${p.condition}</span>
            <span class="item-tag">${p.category}</span>
          </div>
          <p class="item-desc">${p.desc}</p>
          <div class="seller-row">
            <div class="seller-avatar">${initials}</div>
            <div>
              <div class="seller-name">${p.seller}</div>
              <div class="seller-meta">★ 4.9 · Répond en général en 1h</div>
            </div>
          </div>
          <div id="item-actions-zone"></div>
        </div>
      </div>
    `;
    renderBuyStep(p);
    itemOverlay.classList.add("open");
    document.getElementById("item-close").addEventListener("click", closeItem);
  }

  function renderBuyStep(p){
    const zone = document.getElementById("item-actions-zone");
    zone.innerHTML = `
      <div class="item-actions">
        <button class="btn btn-ghost" id="offer-btn">Faire une offre</button>
        <button class="btn btn-coral" id="buy-btn">Commander · ${p.price} DH</button>
      </div>
    `;
    document.getElementById("offer-btn").addEventListener("click", ()=>{
      const amount = prompt("Propose un montant en DH", Math.max(1, p.price-5));
      if(amount){
        closeItem();
        showToast(`Offre de ${amount} DH envoyée à ${p.seller}`);
      }
    });
    document.getElementById("buy-btn").addEventListener("click", ()=> renderCheckoutStep(p));
  }

  function renderCheckoutStep(p){
    const c = calcCheckout(p.price);
    const zone = document.getElementById("item-actions-zone");
    zone.innerHTML = `
      <div class="checkout-box">
        <div class="checkout-row"><span>Article</span><span>${p.price.toFixed(2)} DH</span></div>
        <div class="checkout-row"><span>Frais de service</span><span>${c.serviceFee.toFixed(2)} DH</span></div>
        <div class="checkout-row checkout-total"><span>Total</span><span>${c.total.toFixed(2)} DH</span></div>
        <div class="checkout-split">
          <div class="checkout-split-item">
            <span class="checkout-split-label">Acompte à payer maintenant</span>
            <span class="checkout-split-value">${c.deposit.toFixed(2)} DH</span>
          </div>
          <div class="checkout-split-item">
            <span class="checkout-split-label">Reste à payer au livreur</span>
            <span class="checkout-split-value">${c.dueAtDelivery.toFixed(2)} DH</span>
          </div>
        </div>
        <p class="checkout-note">L'acompte confirme ta commande auprès de ${p.seller} et n'est pas remboursé en cas de refus du colis à la livraison. Il est déduit du prix final.</p>
        <div class="form-row" style="margin-top:14px;">
          <label>Adresse de livraison</label>
          <input type="text" id="checkout-address" placeholder="Adresse, quartier, ville">
        </div>
        <div class="item-actions">
          <button class="btn btn-ghost" id="checkout-back">Retour</button>
          <button class="btn btn-coral" id="checkout-confirm">Payer l'acompte de ${c.deposit.toFixed(2)} DH</button>
        </div>
      </div>
    `;
    document.getElementById("checkout-back").addEventListener("click", ()=> renderBuyStep(p));
    document.getElementById("checkout-confirm").addEventListener("click", ()=>{
      const address = document.getElementById("checkout-address").value.trim();
      if(!address){ showToast("Ajoute une adresse de livraison"); return; }
      closeItem();
      showToast(`Acompte de ${c.deposit.toFixed(2)} DH payé · ${c.dueAtDelivery.toFixed(2)} DH à régler au livreur`);
    });
  }
  function closeItem(){ itemOverlay.classList.remove("open"); }
  itemOverlay.addEventListener("click", (e)=>{ if(e.target===itemOverlay) closeItem(); });

  // ---------- sell modal ----------
  const sellOverlay = document.getElementById("sell-overlay");
  function openSell(){ sellOverlay.classList.add("open"); }
  function closeSell(){ sellOverlay.classList.remove("open"); }
  ["sell-btn","hero-sell-btn","cta-sell-btn"].forEach(id=>{
    document.getElementById(id).addEventListener("click", openSell);
  });
  document.getElementById("sell-close").addEventListener("click", closeSell);
  sellOverlay.addEventListener("click", (e)=>{ if(e.target===sellOverlay) closeSell(); });
  document.getElementById("hero-browse-btn").addEventListener("click", ()=>{
    window.scrollTo({top: document.querySelector(".cat-strip").offsetTop - 90, behavior:"smooth"});
  });
  document.getElementById("logo-home").addEventListener("click", ()=>window.scrollTo({top:0, behavior:"smooth"}));

  document.getElementById("sell-form").addEventListener("submit", (e)=>{
    e.preventDefault();
    const newProduct = {
      id: "p" + Date.now(),
      brand: document.getElementById("f-brand").value || "Sans marque",
      title: document.getElementById("f-title").value || "Article sans titre",
      category: document.getElementById("f-category").value,
      size: document.getElementById("f-size").value || "Unique",
      price: parseFloat(document.getElementById("f-price").value) || 100,
      oldPrice: 0,
      condition: document.getElementById("f-condition").value,
      img: images[Math.floor(Math.random()*images.length)],
      seller: "Toi",
      desc: document.getElementById("f-desc").value || "Aucune description fournie.",
    };
    products.unshift(newProduct);
    e.target.reset();
    closeSell();
    activeCategory = "Tout"; activeFilter = "Tous les états";
    document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active", x.dataset.cat==="Tout"));
    document.querySelectorAll(".filter-pill").forEach(x=>x.classList.toggle("active", x.textContent==="Tous les états"));
    document.querySelector(".section-title").textContent = "Sélectionné pour toi";
    visibleCount = 8;
    renderGrid();
    showToast("Ton article est en ligne !");
    window.scrollTo({top: document.querySelector(".cat-strip").offsetTop - 90, behavior:"smooth"});
  });

  // ---------- toast ----------
  let toastTimer;
  function showToast(msg){
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=>t.classList.remove("show"), 2600);
  }

  // ---------- init ----------
  renderGrid();
})();
