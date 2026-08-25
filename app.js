const WATCHES = [
  {id:1, brand:"Shinola", name:"The Bronze Monster Automatic 43mm", ref:null, price:1850, priceHigh:null, url:"https://www.shinola.com/mens/watches/the-shinola-monster/bronze-monster-automatic-watch-43mm.html", img:"images/01.jpg"},
  {id:2, brand:"Kurono Tokyo", name:"CHRONOGRAPH 3 HISUI:翡翠", ref:null, price:3460, priceHigh:null, url:"https://kuronotokyo.com/pages/chronograph-3", img:"images/02.jpg"},
  {id:3, brand:"Anordain", name:"MODEL 1 Blue Fumé", ref:null, price:3846, priceHigh:null, url:"https://anordain.com/products/blue-fume-model-1", img:"images/03.jpg"},
  {id:4, brand:"Omega", name:"Seamaster Diver 300M 42 mm, steel on rubber", ref:"210.32.42.20.06.001", price:5600, priceHigh:null, url:"https://www.omegawatches.com/en-us/watch-omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21032422006001", img:"images/04.jpg"},
  {id:5, brand:"Maison Alcée", name:"Persée Azur", ref:null, price:8900, priceHigh:null, url:"https://www.maison-alcee.com/en/product/persee/", img:"images/05.jpg"},
  {id:6, brand:"Glashütte Original", name:"Sixties Chronograph Annual Edition", ref:"1-39-34-05-22-04", price:9300, priceHigh:null, url:"https://www.glashuette-original.com/en/watches/vintage/sixties-chronograph-annual-edition-1-39-34-05-22-04/", img:"images/06.jpg"},
  {id:7, brand:"Omega", name:"“Silver Snoopy Award” Speedmaster Anniversary Series 42 mm", ref:"310.32.42.50.02.001", price:11200, priceHigh:null, url:"https://www.omegawatches.com/en-us/watch-omega-speedmaster-anniversary-series-co-axial-master-chronometer-chronograph-42-mm-31032425002001", img:"images/07.jpg"},
  {id:8, brand:"Breitling", name:"Top Time B01 Chronograph 41 Tribute to Aston Martin DB5", ref:"AB0178121G1X1", price:11400, priceHigh:null, url:"https://www.breitling.com/us-en/watches/top-time/top-time-b01/AB0178121G1X1/", img:"images/08.jpg"},
  {id:9, brand:"Panerai", name:"Submersible", ref:"PAM02068", price:11700, priceHigh:null, url:"https://www.panerai.com/us/en/collections/watch-collection/submersible/pam02068-submersible.html", img:"images/09.jpg"},
  {id:10, brand:"Panerai", name:"Submersible GMT Luna Rossa Titanio", ref:"PAM01507", price:12300, priceHigh:null, url:"https://www.panerai.com/us/en/collections/watch-collection/submersible/pam01507-submersible-gmt-luna-rossa-titanio.html", img:"images/10.jpg"},
  {id:11, brand:"IWC", name:"Ingenieur Automatic 40", ref:"IW328903", price:12300, priceHigh:null, url:"https://www.iwc.com/us/en/watch-collections/ingenieur/iw328903-ingenieur-automatic-40.html", img:"images/11.jpg"},
  {id:12, brand:"Omega", name:"Constellation Globemaster", ref:"130.23.41.22.06.001", price:12900, priceHigh:null, url:"https://www.omegawatches.com/en-us/watch-omega-constellation-globemaster-co-axial-master-chronometer-annual-calendar-41-mm-13023412206001", img:"images/12.jpg"},
  {id:13, brand:"Jaeger-LeCoultre", name:"Reverso Classic Duoface Small Seconds", ref:"Q2458422", price:13100, priceHigh:null, url:"https://www.jaeger-lecoultre.com/us-en/watches/reverso/reverso-classic/reverso-classic-duoface-small-seconds-stainless-steel-q2458422", img:"images/13.jpg"},
  {id:14, brand:"IWC", name:"Pilot’s Watch Chronograph 41 TOP GUN Miramar", ref:"IW389409", price:13500, priceHigh:null, url:"https://www.iwc.com/us/en/watch-collections/pilot-watches/iw389409-pilot_s-watch-chronograph-41-top-gun-miramar.html", img:"images/14.jpg"},
  {id:15, brand:"Breitling", name:"Premier B25 Datora 42", ref:"AB2510201K1P1", price:15500, priceHigh:null, url:"https://www.breitling.com/us-en/watches/premier/premier-b25-datora-42/AB2510201K1P1/", img:"images/15.jpg"},
  {id:16, brand:"Bulgari", name:"Octo Finissimo", ref:"104163", price:16200, priceHigh:null, url:"https://www.bulgari.com/en-us/product/104163", img:"images/16.jpg"},
  {id:17, brand:"Glashütte Original", name:"Seventies Chronograph Panorama Date", ref:"1-37-02-17-02-63", price:16300, priceHigh:null, url:"https://www.glashuette-original.com/en/watches/vintage/seventies-chronograph-panorama-date-1-37-02-17-02-63/", img:"images/17.jpg"},
  {id:18, brand:"Rolex", name:"Sky-Dweller, Oyster 42 mm, Oystersteel and white gold", ref:"336934", price:16800, priceHigh:null, url:"https://www.rolex.com/en-us/watches/sky-dweller/m336934-0002", img:"images/18.jpg"},
  {id:19, brand:"Glashütte Original", name:"Seventies Chronograph Panorama Date", ref:"1-37-02-13-02-70", price:17100, priceHigh:null, url:"https://www.glashuette-original.com/en/watches/vintage/seventies-chronograph-panorama-date-1-37-02-16-02-70/", img:"images/19.jpg"},
  {id:20, brand:"Glashütte Original", name:"Seventies Chronograph Panorama Date", ref:"1-37-02-20-02-70", price:17300, priceHigh:null, url:"https://www.glashuette-original.com/en/watches/vintage/seventies-chronograph-panorama-date-1-37-02-20-02-70/", img:"images/20.jpg"},
  {id:21, brand:"Glashütte Original", name:"Seventies ‘X’ Chronograph", ref:"1-37-02-18-02-70", price:17900, priceHigh:null, url:"https://www.glashuette-original.com/en/watches/vintage/seventies-x-chronograph-1-37-02-18-02-70/", img:"images/21.jpg"},
  {id:22, brand:"Panerai", name:"Submersible Bronzo", ref:"PAM00968", price:19600, priceHigh:null, url:"https://www.panerai.com/us/en/collections/watch-collection/submersible/pam00968-submersible-bronzo.html", img:"images/22.jpg"},
  {id:23, brand:"Zeitwinkel", name:"273° «Saphir Fumé»", ref:null, price:26500, priceHigh:null, url:"https://www.zeitwinkel.ch/zeitwinkel-273-saphir-fume-en.html", img:"images/23.jpg"},
  {id:24, brand:"Rolex", name:"1908, 39 mm, platinum, polished finish", ref:"52506", price:31200, priceHigh:null, url:"https://www.rolex.com/en-us/watches/1908/m52506-0002", img:"images/24.jpg"},
  {id:25, brand:"Ressence", name:"TYPE 11 Sky", ref:null, price:31400, priceHigh:null, url:"https://ressencewatches.com/products/type-11-sky", img:"images/25.jpg"},
  {id:26, brand:"Vacheron Constantin", name:"Overseas Dual Time, 41mm steel", ref:"7920V/210A-B334", price:32300, priceHigh:null, url:"https://www.vacheron-constantin.com/us/en/collections/overseas/7920v-210a-b334.html", img:"images/26.jpg"},
  {id:27, brand:"Girard-Perregaux", name:"Neo Bridges Aston Martin Edition", ref:"84000-21-3236-5CX", price:37700, priceHigh:null, url:"https://www.girard-perregaux.com/usa_en/84000-21-3236-5cx.html", img:"images/27.jpg"},
  {id:28, brand:"Vacheron Constantin", name:"American 1921, 40x40 mm white gold", ref:"82035/000G-B735", price:42600, priceHigh:null, url:"https://www.vacheron-constantin.com/us/en/collections/historiques/82035-000g-b735.html", img:"images/28.jpg"},
  {id:29, brand:"Parmigiani Fleurier", name:"Tonda PF Chronographe Mystérieux", ref:"PFC908-1020001-100182", price:47500, priceHigh:null, url:"https://www.parmigiani.com/en/watches/tonda-pf-chronographe-mysterieux-steel-mineral-blue/", img:"images/29.jpg"},
  {id:30, brand:"Ressence", name:"TYPE 3 White", ref:null, price:51900, priceHigh:null, url:"https://ressencewatches.com/products/type-3-white", img:"images/30.jpg"},
  {id:31, brand:"Audemars Piguet", name:"Royal Oak Selfwinding Chronograph", ref:"26240OR.OO.D404CR.02", price:59000, priceHigh:null, url:"https://www.audemarspiguet.com/com/en/watch-collection/royal-oak/26240OR.OO.D404CR.02.html", img:"images/31.jpg"},
  {id:32, brand:"Rolex", name:"Sky-Dweller, Oyster 42 mm, Everose gold", ref:"336935", price:59500, priceHigh:null, url:"https://www.rolex.com/en-us/watches/sky-dweller/m336935-0006", img:"images/32.jpg"},
  {id:33, brand:"Audemars Piguet", name:"Royal Oak Offshore Selfwinding Chronograph LE 500", ref:"26420CE.OO.A005VE.01", price:62100, priceHigh:null, url:"https://www.audemarspiguet.com/com/en/watch-collection/royal-oak-offshore/26420CE.OO.A005VE.01.html", img:"images/33.jpg"},
  {id:34, brand:"Vacheron Constantin", name:"Retrograde Day-Date, 42.5 mm platinum", ref:"4000U/000P-H003", price:68500, priceHigh:null, url:"https://www.vacheron-constantin.com/us/en/collections/patrimony/4000u-000p-h003.html", img:"images/34.jpg"},
  {id:35, brand:"Audemars Piguet", name:"Royal Oak Offshore Selfwinding Chronograph", ref:"26420RO.OO.A002CA.01", price:71900, priceHigh:null, url:"https://www.audemarspiguet.com/us/en/watch-collection/royal-oak-offshore/26420RO.OO.A002CA.01", img:"images/35.jpg"},
  {id:36, brand:"Patek Philippe", name:"Aquanaut", ref:"5968R-001", price:97306, priceHigh:null, url:"https://www.patek.com/en/collection/aquanaut/5968r-001", img:"images/36.jpg"},
  {id:37, brand:"Patek Philippe", name:"Nautilus", ref:"5980/60G-001", price:98160, priceHigh:null, url:"https://www.patek.com/en/collection/nautilus/5980-60g-001", img:"images/37.jpg"},
  {id:38, brand:"Audemars Piguet", name:"Code 11.59 Perpetual Calendar", ref:"26494BC.OO.D350KB.01", price:120500, priceHigh:null, url:"https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26494BC.OO.D350KB.01.html", img:"images/38.jpg"},
  {id:39, brand:"Vacheron Constantin", name:"Overseas Perpetual Calendar Ultra-Thin, 41.5 mm white gold", ref:"4300V/220G-H151", price:132000, priceHigh:null, url:"https://www.vacheron-constantin.com/us/en/collections/overseas/4300v-220g-h151.html", img:"images/39.jpg"},
  {id:40, brand:"Patek Philippe", name:"5236P Grand Complications Self-Winding", ref:"5236P-010", price:141400, priceHigh:null, url:"https://www.patek.com/en/collection/grand-complications/5236P-010", img:"images/40.jpg"},
  {id:41, brand:"A. Lange & Söhne", name:"Zeitwerk Date in 750 white gold", ref:"148.038", price:100000, priceHigh:150000, url:"https://www.alange-soehne.com/us-en/timepieces/zeitwerk/zeitwerk-date/zeitwerk-date-in-750-white-gold-148-038", img:"images/41.jpg"},
  {id:42, brand:"A. Lange & Söhne", name:"Lange 1 Perpetual Calendar in 750 white gold", ref:"345.056 E", price:115000, priceHigh:175000, url:"https://www.alange-soehne.com/us-en/timepieces/lange-1/lange-1-perpetual-calendar/lange-1-perpetual-calendar-in-750-white-gold-345-056", img:"images/42.jpg"},
  {id:43, brand:"Parmigiani Fleurier", name:"Toric Chronograph Rattrapante", ref:"PFH951-2010002-300181", price:198000, priceHigh:null, url:"https://www.parmigiani.com/en/watches/toric-chronograph-rattrapante-platinum-anniversaire/", img:"images/43.jpg"},
  {id:44, brand:"Audemars Piguet", name:"Code 11.59 Minute Repeater Supersonnerie", ref:"26395NR.OO.D002KB.01", price:330000, priceHigh:null, url:"https://www.audemarspiguet.com/com/en/watch-collection/code-1159/26395NR.OO.D002KB.01.html", img:"images/44.jpg"}
];

function usd(n) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function priceLabel(w) {
  if (w.priceHigh) return usd(w.price) + " – " + usd(w.priceHigh);
  return usd(w.price);
}

function sortValue(w, mode) {
  if (mode === "price-asc") return w.price;
  if (mode === "price-desc") return -w.price;
  if (mode === "brand") return w.brand.toLowerCase() + " " + String(w.id).padStart(2, "0");
  return w.id;
}

function shortName(name) {
  return name.replace(/,\s*\d.*$/, "").replace(/\s+\d+\s*mm.*$/i, "").trim();
}

const STORE_VIEW = "the-list-view";
const STORE_ID = "the-list-id";
const STORE_HINT = "the-list-hint";

const state = { brand: "all", sort: "lot", view: "grid", id: 1 };

function visible() {
  let list = WATCHES.slice();
  if (state.brand !== "all") list = list.filter(w => w.brand === state.brand);
  list.sort((a, b) => {
    const av = sortValue(a, state.sort);
    const bv = sortValue(b, state.sort);
    if (typeof av === "number") return av - bv;
    return String(av).localeCompare(String(bv));
  });
  return list;
}

function renderGrid() {
  const list = visible();
  const catalog = document.getElementById("catalog");
  const countEl = document.getElementById("count");
  countEl.textContent = String(list.length);

  catalog.innerHTML = list.map(w => {
    const lot = String(w.id).padStart(2, "0");
    const img = w.img || ("images/" + lot + ".jpg");
    return `
      <button class="tile" type="button" data-id="${w.id}" aria-label="${w.brand} ${w.name}">
        <div class="tile-photo"><img src="${img}" alt="" loading="lazy"></div>
        <p class="tile-brand">${w.brand}<span class="tile-lot"> ${lot}</span></p>
        <p class="tile-name">${shortName(w.name)}</p>
        <p class="tile-price">${priceLabel(w)}</p>
      </button>`;
  }).join("");
}

function syncViewButtons() {
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.classList.toggle("is-on", btn.dataset.view === state.view);
  });
}

function setViewMode(view) {
  state.view = view;
  document.body.classList.toggle("is-one", view === "one");
  document.getElementById("stage").hidden = view !== "one";
  syncViewButtons();
  try { localStorage.setItem(STORE_VIEW, view); } catch (_) {}
}

function hashLot() {
  const raw = location.hash.replace(/^#/, "");
  if (/^\d+$/.test(raw)) return Number(raw);
  return null;
}

function writeHash(id, replace) {
  const dest = id == null ? (location.pathname + location.search) : ("#" + id);
  if (id != null && location.hash === "#" + id) return;
  if (id == null && (!location.hash || location.hash === "#" || location.hash === "#top")) return;
  if (replace) history.replaceState(null, "", dest);
  else if (id == null) history.pushState(null, "", dest);
  else location.hash = String(id);
}

let fadeGen = 0;

function paintOne(w, { fade = true } = {}) {
  const img = document.getElementById("s-img");
  const list = visible();
  const index = list.findIndex(x => x.id === w.id);
  const token = ++fadeGen;

  const apply = () => {
    if (token !== fadeGen) return;
    document.getElementById("s-brand").textContent = w.brand;
    document.getElementById("s-name").textContent = w.name;
    const ref = document.getElementById("s-ref");
    if (w.ref) {
      ref.textContent = "Ref. " + w.ref;
      ref.hidden = false;
    } else {
      ref.textContent = "";
      ref.hidden = true;
    }
    document.getElementById("s-price").textContent = priceLabel(w);
    const link = document.getElementById("s-link");
    if (w.url) {
      link.href = w.url;
      link.hidden = false;
    } else {
      link.hidden = true;
    }
    document.getElementById("s-pos").textContent = (index + 1) + " / " + list.length;
    img.alt = w.brand + " " + w.name;
    const nextSrc = w.img || ("images/" + String(w.id).padStart(2, "0") + ".jpg");
    const show = () => {
      if (token === fadeGen) img.classList.remove("is-dim");
    };
    if (img.getAttribute("src") === nextSrc) {
      show();
      return;
    }
    img.onload = show;
    img.onerror = show;
    img.src = nextSrc;
    if (img.complete) show();
  };

  if (fade && img.getAttribute("src")) {
    img.classList.add("is-dim");
    setTimeout(apply, 180);
  } else {
    apply();
  }

  const prev = list[(index - 1 + list.length) % list.length];
  const next = list[(index + 1) % list.length];
  [prev, next].forEach(item => {
    if (!item) return;
    const pre = new Image();
    pre.src = item.img || ("images/" + String(item.id).padStart(2, "0") + ".jpg");
  });
}

function showHint() {
  const hint = document.getElementById("hint");
  try {
    if (localStorage.getItem(STORE_HINT)) {
      hint.hidden = true;
      return;
    }
  } catch (_) {}
  hint.hidden = false;
}

function enterOne(id, { fromHash = false, replace = false, fade = true } = {}) {
  const list = visible();
  if (!list.length) return;
  let w = list.find(x => x.id === id);
  if (!w) w = WATCHES.find(x => x.id === id && state.brand === "all") || list[0];
  if (!list.some(x => x.id === w.id)) w = list[0];
  state.id = w.id;
  try { localStorage.setItem(STORE_ID, String(w.id)); } catch (_) {}
  setViewMode("one");
  paintOne(w, { fade });
  showHint();
  if (!fromHash) writeHash(w.id, replace);
}

function enterGrid({ fromHash = false } = {}) {
  setViewMode("grid");
  if (!fromHash) writeHash(null, false);
}

function step(dir) {
  const list = visible();
  if (!list.length) return;
  let index = list.findIndex(x => x.id === state.id);
  if (index < 0) index = 0;
  const next = list[(index + dir + list.length) % list.length];
  enterOne(next.id, { fade: true });
}

function maybeKeepOne() {
  if (state.view !== "one") return;
  const list = visible();
  if (!list.length) {
    enterGrid();
    return;
  }
  if (!list.some(x => x.id === state.id)) enterOne(list[0].id, { fade: true });
  else enterOne(state.id, { fromHash: true, fade: false });
}

function initBrands() {
  const brands = [...new Set(WATCHES.map(w => w.brand))].sort((a, b) => a.localeCompare(b));
  const nav = document.getElementById("brands");
  const all = [{value:"all", label:"All"}, ...brands.map(b => ({value:b, label:b}))];
  nav.innerHTML = all.map(b =>
    `<button type="button" class="chip${b.value==="all"?" is-on":""}" data-brand="${b.value}">${b.label}</button>`
  ).join("");
  nav.addEventListener("click", e => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    state.brand = btn.dataset.brand;
    nav.querySelectorAll(".chip").forEach(c => c.classList.toggle("is-on", c === btn));
    renderGrid();
    maybeKeepOne();
  });
  document.getElementById("sort").addEventListener("change", e => {
    state.sort = e.target.value;
    renderGrid();
    maybeKeepOne();
  });
}

function initViews() {
  document.querySelector(".views").addEventListener("click", e => {
    const btn = e.target.closest(".view-btn");
    if (!btn) return;
    if (btn.dataset.view === "grid") enterGrid();
    else {
      let id = state.id;
      try { id = Number(localStorage.getItem(STORE_ID)) || state.id; } catch (_) {}
      enterOne(id, { fade: false });
    }
  });

  document.getElementById("catalog").addEventListener("click", e => {
    const tile = e.target.closest(".tile");
    if (!tile) return;
    enterOne(Number(tile.dataset.id), { fade: false });
  });

  document.getElementById("s-prev").addEventListener("click", () => step(-1));
  document.getElementById("s-next").addEventListener("click", () => step(1));

  document.getElementById("hint").addEventListener("click", () => {
    document.getElementById("hint").hidden = true;
    try { localStorage.setItem(STORE_HINT, "1"); } catch (_) {}
  });

  document.querySelector(".mark").addEventListener("click", e => {
    if (state.view === "one") {
      e.preventDefault();
      enterGrid();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

function initKeys() {
  document.addEventListener("keydown", e => {
    if (e.target && (e.target.tagName === "SELECT" || e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
    if (state.view !== "one") return;
    if (e.key === "Escape") {
      enterGrid();
      return;
    }
    if (e.key === "ArrowLeft" || e.key === "j" || e.key === "J") {
      e.preventDefault();
      step(-1);
    } else if (e.key === "ArrowRight" || e.key === "k" || e.key === "K") {
      e.preventDefault();
      step(1);
    }
  });
}

function initSwipe() {
  const photo = document.getElementById("s-photo");
  let startX = 0;
  let startY = 0;
  let tracking = false;

  photo.addEventListener("pointerdown", e => {
    tracking = true;
    startX = e.clientX;
    startY = e.clientY;
  });
  photo.addEventListener("pointerup", e => {
    if (!tracking) return;
    tracking = false;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    step(dx < 0 ? 1 : -1);
  });
  photo.addEventListener("pointercancel", () => { tracking = false; });

  photo.addEventListener("touchstart", e => {
    if (!e.changedTouches.length) return;
    startX = e.changedTouches[0].clientX;
    startY = e.changedTouches[0].clientY;
  }, { passive: true });
  photo.addEventListener("touchend", e => {
    if (!e.changedTouches.length) return;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    step(dx < 0 ? 1 : -1);
  }, { passive: true });

  let lastWheel = 0;
  photo.addEventListener("wheel", e => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 10) return;
    e.preventDefault();
    const now = Date.now();
    if (now - lastWheel < 420) return;
    lastWheel = now;
    step(e.deltaX > 0 ? 1 : -1);
  }, { passive: false });
}

function initHash() {
  const onHash = () => {
    const lot = hashLot();
    if (lot && WATCHES.some(w => w.id === lot)) {
      if (state.view === "one" && state.id === lot) return;
      enterOne(lot, { fromHash: true, fade: state.view === "one" });
    } else if (state.view === "one") {
      enterGrid({ fromHash: true });
    }
  };
  window.addEventListener("hashchange", onHash);
  window.addEventListener("popstate", onHash);
}

function initToTop() {
  const btn = document.getElementById("totop");
  const onScroll = () => {
    btn.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function boot() {
  renderGrid();
  const lot = hashLot();
  if (lot && WATCHES.some(w => w.id === lot)) {
    enterOne(lot, { fromHash: true, fade: false });
    return;
  }
  let saved = "grid";
  try { saved = localStorage.getItem(STORE_VIEW) || "grid"; } catch (_) {}
  if (saved === "one") {
    let id = state.id;
    try { id = Number(localStorage.getItem(STORE_ID)) || state.id; } catch (_) {}
    enterOne(id, { replace: true, fade: false });
  } else {
    setViewMode("grid");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initBrands();
  initViews();
  initKeys();
  initSwipe();
  initHash();
  initToTop();
  boot();
});
