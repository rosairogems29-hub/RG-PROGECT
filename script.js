const heroImages = [
  "assets/hero-01-blue-sapphire.png",
  "assets/hero-02-pink-gems.png",
  "assets/hero-03-jewellery.png",
  "assets/hero-04-lapidary.png"
];

const heroSlides = document.getElementById("heroSlides");
const heroDots = document.getElementById("heroDots");
let heroIndex = 0;
const heroInterval = 4500; // image hold time; transition itself is 1.5s in CSS
const stateKey = "rosairoHeroStateV1";

heroImages.forEach((src, i) => {
  const slide = document.createElement("div");
  slide.className = "hero-slide" + (i === 0 ? " active" : "");
  slide.style.backgroundImage = `url("${src}")`;
  heroSlides.appendChild(slide);

  const dot = document.createElement("button");
  dot.className = "hero-dot" + (i === 0 ? " active" : "");
  dot.setAttribute("aria-label", `Show hero image ${i + 1}`);
  dot.addEventListener("click", () => {
    heroIndex = i;
    saveHeroState();
    showHero(heroIndex);
  });
  heroDots.appendChild(dot);
});

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".hero-dot")];

function showHero(index) {
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
  dots.forEach((d, i) => d.classList.toggle("active", i === index));
}

function saveHeroState() {
  localStorage.setItem(stateKey, JSON.stringify({ index: heroIndex, at: Date.now() }));
}

function restoreHeroState() {
  try {
    const saved = JSON.parse(localStorage.getItem(stateKey) || "null");
    if (!saved) return;
    const elapsed = Math.max(0, Date.now() - saved.at);
    heroIndex = (saved.index + Math.floor(elapsed / heroInterval)) % heroImages.length;
    showHero(heroIndex);
  } catch (_) {}
}
restoreHeroState();

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  showHero(heroIndex);
  saveHeroState();
}, heroInterval);

// Collection category tabs
const tabs = [...document.querySelectorAll(".collection-tab")];
const panels = [...document.querySelectorAll(".collection-panel")];

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;
    tabs.forEach(t => t.classList.toggle("active", t === tab));
    panels.forEach(p => p.classList.toggle("active", p.id === target));
    tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
});

// Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Keep the hero timer alive across internal navigation; no reset when returning to #home.
window.addEventListener("hashchange", saveHeroState);
window.addEventListener("beforeunload", saveHeroState);
