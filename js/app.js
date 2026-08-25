const WHATSAPP = "94767308732";
const WHATSAPP_ALT = "94741729997";

const categories = [
  {
    id: "ceylon-sapphire",
    name: "Ceylon Sapphire",
    short: "Natural Sri Lankan sapphires, individually presented with their own specifications.",
    subs: ["Blue Sapphire", "Padparadscha", "Star Sapphire", "Fancy Sapphire", "Yellow Sapphire", "Pink Sapphire", "White Sapphire", "Other Ceylon Sapphires"]
  },
  {
    id: "other-gemstones",
    name: "Other Gemstones",
    short: "Ruby, emerald and selected precious and semi-precious gemstones.",
    subs: ["Ruby", "Emerald", "Spinel", "Garnet", "Chrysoberyl", "Cat's Eye", "Amethyst", "Tourmaline", "Other Gemstones"]
  },
  {
    id: "calibrated-sapphires",
    name: "Calibrated Sapphires",
    short: "Precisely cut sapphires in standardized sizes and shapes.",
    subs: ["Round", "Oval", "Cushion", "Pear", "Emerald Cut", "Princess", "Other Shapes"]
  },
  {
    id: "jewellery",
    name: "Jewellery",
    short: "Selected gemstone jewellery and future custom pieces.",
    subs: ["Rings", "Pendants", "Earrings", "Bracelets", "Custom Jewellery"]
  }
];

const products = [
  {
    id: "demo-blue-sapphire",
    name: "Ceylon Blue Sapphire",
    category: "ceylon-sapphire",
    subcategory: "Blue Sapphire",
    carat: "2.15 ct",
    origin: "Sri Lanka",
    treatment: "Unheated",
    shape: "Oval",
    cut: "Mixed Cut",
    price: "Contact for Price",
    image: "assets/hero-gem.svg",
    description: "Demo catalogue item. Replace this entry with a real stone from your current stock."
  },
  {
    id: "demo-yellow-sapphire",
    name: "Ceylon Yellow Sapphire",
    category: "ceylon-sapphire",
    subcategory: "Yellow Sapphire",
    carat: "3.40 ct",
    origin: "Sri Lanka",
    treatment: "Add treatment details",
    shape: "Cushion",
    cut: "Mixed Cut",
    price: "Contact for Price",
    image: "assets/hero-gem.svg",
    description: "Demo catalogue item. Add your own images, video, certificate and specifications."
  },
  {
    id: "demo-ruby",
    name: "Natural Ruby",
    category: "other-gemstones",
    subcategory: "Ruby",
    carat: "1.80 ct",
    origin: "Add origin",
    treatment: "Add treatment",
    shape: "Oval",
    cut: "Mixed Cut",
    price: "Contact for Price",
    image: "assets/hero-gem.svg",
    description: "Demo catalogue item for the Other Gemstones section."
  }
];

const events = [
  {
    title: "Exhibitions & Trade Shows",
    date: "Updates coming soon",
    text: "Use this section for exhibitions, trade fairs, company announcements and event photo galleries.",
    image: "assets/hero-gem.svg"
  }
];

const gallery = [
  { title: "Gemstone Collection", image: "assets/hero-gem.svg" },
  { title: "Ceylon Sapphire", image: "assets/hero-gem.svg" },
  { title: "Exhibitions & Events", image: "assets/hero-gem.svg" },
  { title: "Lapidary & Cutting", image: "assets/hero-gem.svg" }
];

const productGrid = document.getElementById("productGrid");
const categoryGrid = document.getElementById("categoryGrid");
const subcategoryArea = document.getElementById("subcategoryArea");
const productSearch = document.getElementById("productSearch");
const productFilter = document.getElementById("productFilter");
const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");

function waLink(product) {
  const msg = encodeURIComponent(`Hello Rosairo Gems, I am interested in ${product.name}${product.carat ? ` (${product.carat})` : ""}. Please share availability and details.`);
  return `https://wa.me/${WHATSAPP}?text=${msg}`;
}

function renderCategories() {
  categoryGrid.innerHTML = categories.map(cat => `
    <article class="category-card">
      <div class="category-icon">◆</div>
      <h3>${cat.name}</h3>
      <p>${cat.short}</p>
      <button class="text-link" data-category="${cat.id}">Explore collection <span>→</span></button>
    </article>
  `).join("");

  productFilter.innerHTML = `<option value="all">All collections</option>` +
    categories.map(cat => `<option value="${cat.id}">${cat.name}</option>`).join("");
}

function renderSubcategories(categoryId) {
  const cat = categories.find(c => c.id === categoryId);
  if (!cat) {
    subcategoryArea.innerHTML = "";
    return;
  }
  subcategoryArea.innerHTML = `
    <div class="section-kicker">Collection</div>
    <h3>${cat.name}</h3>
    <div class="subchips">
      <button class="chip active" data-sub="all" data-cat="${categoryId}">All</button>
      ${cat.subs.map(s => `<button class="chip" data-sub="${s}" data-cat="${categoryId}">${s}</button>`).join("")}
    </div>
  `;
}

function renderProducts(list = products) {
  if (!list.length) {
    productGrid.innerHTML = `<div class="empty-state">No matching gemstones yet. Please contact us for current availability.</div>`;
    return;
  }
  productGrid.innerHTML = list.map(p => `
    <article class="product-card">
      <button class="product-image" data-product="${p.id}" aria-label="View ${p.name}">
        <img src="${p.image}" alt="${p.name}">
        <span class="badge">${p.subcategory}</span>
      </button>
      <div class="product-info">
        <div class="product-meta">${p.origin} · ${p.carat}</div>
        <h3>${p.name}</h3>
        <p>${p.treatment} · ${p.shape}</p>
        <div class="product-bottom">
          <strong>${p.price}</strong>
          <button class="outline-btn small" data-product="${p.id}">View</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderEvents() {
  document.getElementById("eventGrid").innerHTML = events.map(e => `
    <article class="event-card">
      <img src="${e.image}" alt="${e.title}">
      <div class="event-content">
        <span>${e.date}</span>
        <h3>${e.title}</h3>
        <p>${e.text}</p>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  document.getElementById("galleryGrid").innerHTML = gallery.map(g => `
    <figure class="gallery-item">
      <img src="${g.image}" alt="${g.title}">
      <figcaption>${g.title}</figcaption>
    </figure>
  `).join("");
}

function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  modalBody.innerHTML = `
    <div class="modal-media"><img src="${p.image}" alt="${p.name}"></div>
    <div class="modal-details">
      <div class="section-kicker">${p.subcategory}</div>
      <h2>${p.name}</h2>
      <p class="modal-description">${p.description}</p>
      <dl class="spec-grid">
        <div><dt>Carat</dt><dd>${p.carat}</dd></div>
        <div><dt>Origin</dt><dd>${p.origin}</dd></div>
        <div><dt>Treatment</dt><dd>${p.treatment}</dd></div>
        <div><dt>Shape</dt><dd>${p.shape}</dd></div>
        <div><dt>Cut</dt><dd>${p.cut}</dd></div>
        <div><dt>Price</dt><dd>${p.price}</dd></div>
      </dl>
      <div class="modal-actions">
        <a class="gold-btn" href="${waLink(p)}" target="_blank" rel="noopener">Inquire on WhatsApp</a>
        <a class="outline-btn" href="mailto:rosairogems83@gmail.com?subject=${encodeURIComponent("Gemstone inquiry: " + p.name)}">Email Us</a>
      </div>
    </div>
  `;
  modal.classList.add("open");
  document.body.classList.add("modal-open");
}

function filterProducts() {
  const q = productSearch.value.trim().toLowerCase();
  const cat = productFilter.value;
  const filtered = products.filter(p => {
    const matchesCat = cat === "all" || p.category === cat;
    const haystack = `${p.name} ${p.subcategory} ${p.origin} ${p.treatment}`.toLowerCase();
    return matchesCat && haystack.includes(q);
  });
  renderProducts(filtered);
}

document.addEventListener("click", e => {
  const categoryButton = e.target.closest("[data-category]");
  if (categoryButton) {
    const id = categoryButton.dataset.category;
    renderSubcategories(id);
    productFilter.value = id;
    document.getElementById("collections").scrollIntoView({ behavior: "smooth" });
    filterProducts();
    return;
  }

  const productButton = e.target.closest("[data-product]");
  if (productButton) {
    openProduct(productButton.dataset.product);
    return;
  }

  const chip = e.target.closest(".chip");
  if (chip) {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const cat = chip.dataset.cat;
    const sub = chip.dataset.sub;
    const filtered = products.filter(p =>
      p.category === cat && (sub === "all" || p.subcategory === sub)
    );
    renderProducts(filtered);
  }
});

document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
  }
});

productSearch.addEventListener("input", filterProducts);
productFilter.addEventListener("change", filterProducts);

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("waPrimary").href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Rosairo Gems, I would like to make a gemstone inquiry.")}`;

renderCategories();
renderProducts();
renderEvents();
renderGallery();
