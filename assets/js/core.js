/* ============================================================
   VAL GRANDE — CORE JS (shared)
   Mobile-first, accessible, lean
============================================================ */

// ---------- I18N ----------
const I18N = {
  de: {
    brand: 'Val Grande',
    safetyHint: 'Wildnisgebiet. Geführte Touren empfohlen.',
    safetyMore: 'Mehr',
    safetyDrawerTitle: 'Sicherheit & Vorbereitung',
    safetyParkContact: 'Offizielle Park-Guides',
    safetyParkText: 'Der Parco Nazionale Val Grande empfiehlt für anspruchsvolle, teils unmarkierte Wege ausdrücklich die Begleitung durch ausgebildete Guide Ufficiali del Parco oder Guide Alpine.',
    safetyEssentials: 'Eckpunkte',
    safetyEssentialsList: [
      'Mobilfunkempfang grossräumig nicht vorhanden',
      'Übernachtung meist in Bivacchi (Selbstversorger)',
      'Wege lösen sich teilweise auf, Karte und GPS unverzichtbar',
      'Niemals allein unterwegs sein'
    ],
    safetyEmergency: 'Notrufnummern',
    safetyEmergencyList: [
      '112 (europäischer Notruf)',
      '118 (italienische Bergrettung)',
      '1515 (Forstschutz, Waldbrand)'
    ],
    safetyDisclaimer: 'Diese Webseite ersetzt weder Tourenplanung noch ortskundige Beratung. Tourendaten vor Antritt selbst überprüfen, Wetter und Wegezustand bei den zuständigen Stellen einholen.',
    contactPhone: 'Telefon',
    contactEmail: 'E-Mail',
    contactWeb: 'Webseite',
    // Route detail
    overview: 'Übersicht',
    day: 'Tag',
    days: 'Tage',
    distance: 'Distanz',
    ascent: 'Aufstieg',
    descent: 'Abstieg',
    highest: 'Höchster Punkt',
    walkingTime: 'Gehzeit',
    difficulty: 'Schwierigkeit',
    mapLabel: 'Karte',
    profileLabel: 'Höhenprofil',
    profileTitle: 'Verlauf entlang der Strecke',
    profileMeta: 'Cursor bewegen für Details',
    profileMetaMobile: 'Antippen für Details',
    popPos: 'Position',
    popEle: 'Höhe',
    popGrade: 'Steigung',
    historyLabel: 'Das Rastrellamento von 1944',
    stagesLabel: 'Etappen',
    fromTo: 'von',
    toLoc: 'nach',
    rifugio: 'Übernachtung',
    btn3D: '3D',
    btn2D: '2D',
    btnFitTitle: 'Gesamtansicht',
    btnPois: 'Hütten',
    poisOn: 'Hütten ein',
    poisOff: 'Hütten aus',
    download: 'GPX herunterladen',
    downloadTitle: 'GPX-Daten der Tour',
    downloadSub: 'Für GPS-Gerät, Navigations-App oder Karten',
    modalTitle: 'Wichtiger Hinweis',
    modalText: 'Bevor du diese GPX-Daten verwendest, beachte bitte:',
    modalList: [
      'Daten sind Hinweise, keine garantierte Wegführung',
      'Wegezustand kann sich durch Erosion, Felsstürze oder Nässe ändern',
      'Vor Antritt aktuelle Lage beim Park oder bei lokalen Hütten prüfen',
      'Mobilfunk im Val Grande grossräumig nicht verfügbar',
      'Niemals allein unterwegs sein'
    ],
    modalCheckbox: 'Ich habe verstanden und werde die Daten vor der Tour selbst überprüfen.',
    modalCancel: 'Abbrechen',
    modalConfirm: 'GPX herunterladen',
    chartElevation: 'Höhe (m)',
    chartDistance: 'Distanz (km)',
    catRifugio: 'Bewirtschaftete Berghütte',
    catBivacco: 'Bivacco (Selbstversorger)',
    catAlpe: 'Alm/Alpe',
    catBiwak: 'Biwak',
    sleeps: 'Schlafplätze',
    statusActive: 'Aktiv',
    statusBookingRequired: 'Reservierung nötig',
    statusRestricted: 'Eingeschränkt zugänglich',
    statusEmergencyOnly: 'Nur Notlager',
    statusDestroyed: 'Zerstört',
    hutMunicipality: 'Gemeinde',
    hutLocality: 'Lage',
    hutWinterRoom: 'Winterraum',
    hutFood: 'Verpflegung',
    hutNote: 'Hinweis',
    yes: 'ja',
    no: 'nein',
    footerSources: 'Quellen',
    footerLegal: 'Sicherheit',
    footerData: 'Daten & Karten',
    footerSafetyLink: 'Sicherheit & Vorbereitung',
    footerEmergency: 'Notrufnummern',
    footerCopyright: '© 2026 · Val Grande. Inoffizielles privates Projekt.',
    footerWildernessHint: 'Wildnisgebiet. Geführte Touren empfohlen.',
    footerEquipment: 'Ausrüstung & Vorbereitung',
    footerVersion: 'Version',
    backToOverview: 'Zur Übersicht',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schliessen',
    menuTouren: 'Touren',
    menuTourenSub: 'Mehrtagestouren und Wanderungen',
    menuHuetten: 'Hütten',
    menuHuettenSub: 'Bivacchi und Rifugi mit GPX-Daten',
    menuGastro: 'Gastronomie',
    menuGastroSub: 'Restaurants und Agriturismi',
    menuWetter: 'Wetter',
    menuWetterSub: 'Bergwetter und Bedingungen',
    menuHinweise: 'Hinweise',
    menuHinweiseSub: 'Ausrüstung und Vorbereitung',
    difficultyNoteLabel: 'Schwierigkeit im Detail',
    stageProfileNotes: 'Profilnotizen',
    stageDetailsToggle: 'Details ein- oder ausblenden'
  },
  it: {
    brand: 'Val Grande',
    safetyHint: 'Area selvaggia. Si consigliano escursioni guidate.',
    safetyMore: 'Info',
    safetyDrawerTitle: 'Sicurezza e preparazione',
    safetyParkContact: 'Guide ufficiali del Parco',
    safetyParkText: 'Il Parco Nazionale Val Grande raccomanda esplicitamente l\u2019accompagnamento di Guide Ufficiali del Parco o Guide Alpine per i sentieri impegnativi e in parte non segnati.',
    safetyEssentials: 'Punti chiave',
    safetyEssentialsList: [
      'Copertura mobile assente in gran parte dell\u2019area',
      'Pernottamento perlopi\u00f9 in bivacchi (auto-gestione)',
      'Sentieri talvolta poco visibili, carta e GPS indispensabili',
      'Mai da soli'
    ],
    safetyEmergency: 'Numeri d\u2019emergenza',
    safetyEmergencyList: [
      '112 (numero unico europeo)',
      '118 (soccorso alpino italiano)',
      '1515 (Corpo Forestale, incendi)'
    ],
    safetyDisclaimer: 'Questo sito non sostituisce la pianificazione del percorso n\u00e9 la consulenza locale. Verificare i dati della tour prima della partenza, controllare meteo e stato dei sentieri presso gli enti competenti.',
    contactPhone: 'Telefono',
    contactEmail: 'E-mail',
    contactWeb: 'Sito web',
    overview: 'Panoramica',
    day: 'Giorno',
    days: 'Giorni',
    distance: 'Distanza',
    ascent: 'Dislivello +',
    descent: 'Dislivello -',
    highest: 'Punto pi\u00f9 alto',
    walkingTime: 'Tempo',
    difficulty: 'Difficolt\u00e0',
    mapLabel: 'Mappa',
    profileLabel: 'Profilo altimetrico',
    profileTitle: 'Andamento lungo il percorso',
    profileMeta: 'Muovi il cursore per i dettagli',
    profileMetaMobile: 'Tocca per i dettagli',
    popPos: 'Posizione',
    popEle: 'Quota',
    popGrade: 'Pendenza',
    historyLabel: 'Il rastrellamento del 1944',
    stagesLabel: 'Tappe',
    fromTo: 'da',
    toLoc: 'a',
    rifugio: 'Pernottamento',
    btn3D: '3D',
    btn2D: '2D',
    btnFitTitle: 'Vista complessiva',
    btnPois: 'Rifugi',
    poisOn: 'Rifugi visibili',
    poisOff: 'Rifugi nascosti',
    download: 'Scarica GPX',
    downloadTitle: 'Dati GPX della tour',
    downloadSub: 'Per GPS, app di navigazione o mappe',
    modalTitle: 'Avviso importante',
    modalText: 'Prima di utilizzare questi dati GPX, considera:',
    modalList: [
      'I dati sono indicativi, non garantiscono il percorso',
      'Lo stato dei sentieri pu\u00f2 cambiare per erosione, frane o pioggia',
      'Prima della partenza verificare presso il Parco o i rifugi locali',
      'Copertura mobile assente in gran parte della Val Grande',
      'Mai da soli'
    ],
    modalCheckbox: 'Ho compreso e verificher\u00f2 personalmente i dati prima della tour.',
    modalCancel: 'Annulla',
    modalConfirm: 'Scarica GPX',
    chartElevation: 'Quota (m)',
    chartDistance: 'Distanza (km)',
    catRifugio: 'Rifugio gestito',
    catBivacco: 'Bivacco (auto-gestione)',
    catAlpe: 'Alpeggio',
    catBiwak: 'Bivacco',
    sleeps: 'Posti letto',
    statusActive: 'Attivo',
    statusBookingRequired: 'Prenotazione obbligatoria',
    statusRestricted: 'Accesso limitato',
    statusEmergencyOnly: 'Solo emergenza',
    statusDestroyed: 'Distrutto',
    hutMunicipality: 'Comune',
    hutLocality: 'Localit\u00e0',
    hutWinterRoom: 'Locale invernale',
    hutFood: 'Ristoro',
    hutNote: 'Nota',
    yes: 's\u00ec',
    no: 'no',
    footerSources: 'Fonti',
    footerLegal: 'Sicurezza',
    footerData: 'Dati e mappe',
    footerSafetyLink: 'Sicurezza e preparazione',
    footerEmergency: 'Numeri d\u2019emergenza',
    footerCopyright: '\u00a9 2026 \u00b7 Val Grande. Progetto privato non ufficiale.',
    footerWildernessHint: 'Area selvaggia. Si consigliano escursioni guidate.',
    footerEquipment: 'Attrezzatura e preparazione',
    footerVersion: 'Versione',
    backToOverview: 'Torna alla panoramica',
    menuOpen: 'Apri menu',
    menuClose: 'Chiudi menu',
    menuTouren: 'Itinerari',
    menuTourenSub: 'Trekking e escursioni',
    menuHuetten: 'Rifugi',
    menuHuettenSub: 'Bivacchi e rifugi con tracce GPX',
    menuGastro: 'Ristorazione',
    menuGastroSub: 'Ristoranti e agriturismi',
    menuWetter: 'Meteo',
    menuWetterSub: 'Meteo di montagna e condizioni',
    menuHinweise: 'Avvertenze',
    menuHinweiseSub: 'Attrezzatura e preparazione',
    difficultyNoteLabel: 'Difficoltà nel dettaglio',
    stageProfileNotes: 'Note sul profilo',
    stageDetailsToggle: 'Mostra o nascondi i dettagli'
  },
  en: {
    brand: 'Val Grande',
    safetyHint: 'Wilderness area. Guided tours recommended.',
    safetyMore: 'More',
    safetyDrawerTitle: 'Safety & Preparation',
    safetyParkContact: 'Official Park Guides',
    safetyParkText: 'The Parco Nazionale Val Grande explicitly recommends accompaniment by certified Guide Ufficiali del Parco or Guide Alpine for demanding, partly unmarked trails.',
    safetyEssentials: 'Essentials',
    safetyEssentialsList: [
      'Mobile coverage largely unavailable',
      'Overnight mostly in self-catering bivacchi',
      'Trails can fade, map and GPS essential',
      'Never travel alone'
    ],
    safetyEmergency: 'Emergency numbers',
    safetyEmergencyList: [
      '112 (European emergency)',
      '118 (Italian mountain rescue)',
      '1515 (Forest service, fires)'
    ],
    safetyDisclaimer: 'This website does not replace tour planning or local advice. Verify tour data before departure, check weather and trail conditions with the responsible authorities.',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactWeb: 'Website',
    overview: 'Overview',
    day: 'Day',
    days: 'Days',
    distance: 'Distance',
    ascent: 'Ascent',
    descent: 'Descent',
    highest: 'Highest point',
    walkingTime: 'Walking time',
    difficulty: 'Difficulty',
    mapLabel: 'Map',
    profileLabel: 'Elevation profile',
    profileTitle: 'Profile along the route',
    profileMeta: 'Move cursor for details',
    profileMetaMobile: 'Tap for details',
    popPos: 'Position',
    popEle: 'Elevation',
    popGrade: 'Gradient',
    historyLabel: 'The Rastrellamento of 1944',
    stagesLabel: 'Stages',
    fromTo: 'from',
    toLoc: 'to',
    rifugio: 'Overnight',
    btn3D: '3D',
    btn2D: '2D',
    btnFitTitle: 'Fit all',
    btnPois: 'Huts',
    poisOn: 'Huts visible',
    poisOff: 'Huts hidden',
    download: 'Download GPX',
    downloadTitle: 'GPX data of the tour',
    downloadSub: 'For GPS, navigation app or maps',
    modalTitle: 'Important notice',
    modalText: 'Before using this GPX data, please note:',
    modalList: [
      'Data is indicative, not a guaranteed route',
      'Trail conditions may change due to erosion, rockfalls, or rain',
      'Before departure verify with the park or local huts',
      'No mobile coverage in most of Val Grande',
      'Never travel alone'
    ],
    modalCheckbox: 'I understand and will verify the data myself before the tour.',
    modalCancel: 'Cancel',
    modalConfirm: 'Download GPX',
    chartElevation: 'Elevation (m)',
    chartDistance: 'Distance (km)',
    catRifugio: 'Staffed mountain hut',
    catBivacco: 'Bivacco (self-catering)',
    catAlpe: 'Alpine pasture',
    catBiwak: 'Bivouac',
    sleeps: 'Beds',
    statusActive: 'Active',
    statusBookingRequired: 'Booking required',
    statusRestricted: 'Restricted access',
    statusEmergencyOnly: 'Emergency shelter only',
    statusDestroyed: 'Destroyed',
    hutMunicipality: 'Municipality',
    hutLocality: 'Location',
    hutWinterRoom: 'Winter room',
    hutFood: 'Catering',
    hutNote: 'Note',
    yes: 'yes',
    no: 'no',
    footerSources: 'Sources',
    footerLegal: 'Safety',
    footerData: 'Data & maps',
    footerSafetyLink: 'Safety & preparation',
    footerEmergency: 'Emergency numbers',
    footerCopyright: '\u00a9 2026 \u00b7 Val Grande Hikes. Unofficial private project.',
    footerWildernessHint: 'Wilderness area. Guided tours recommended.',
    footerEquipment: 'Equipment & preparation',
    footerVersion: 'Version',
    backToOverview: 'Back to overview',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    menuTouren: 'Tours',
    menuTourenSub: 'Multi-day routes and hikes',
    menuHuetten: 'Huts',
    menuHuettenSub: 'Bivouacs and refuges with GPX',
    menuGastro: 'Dining',
    menuGastroSub: 'Restaurants and farmhouses',
    menuWetter: 'Weather',
    menuWetterSub: 'Mountain weather and conditions',
    menuHinweise: 'Tips',
    menuHinweiseSub: 'Equipment and preparation',
    difficultyNoteLabel: 'Difficulty in detail',
    stageProfileNotes: 'Profile notes',
    stageDetailsToggle: 'Show or hide details'
  }
};

// Difficulty labels (italian standard CAI)
const DIFFICULTY = {
  T:   { label: 'T',   long: { de: 'Turistico, einfache Wege', it: 'Turistico, sentieri facili', en: 'Touristic, easy paths' }, dav: { de: 'Wanderweg', it: 'sentiero', en: 'Walking path' } },
  E:   { label: 'E',   long: { de: 'Escursionistico, Bergwanderwege', it: 'Escursionistico, sentieri di montagna', en: 'Hiking, mountain paths' }, dav: { de: 'Bergweg', it: 'sentiero alpino', en: 'Mountain path' } },
  EE:  { label: 'EE',  long: { de: 'Escursionisti Esperti, anspruchsvoll', it: 'Per Escursionisti Esperti', en: 'For Experienced Hikers' }, dav: { de: 'Schwarzer Bergweg, Trittsicherheit und Schwindelfreiheit erforderlich', it: 'sentiero nero, richiede passo sicuro e assenza di vertigini', en: 'Black mountain path, sure-footedness and head for heights required' } },
  EEA: { label: 'EEA', long: { de: 'Escursionisti Esperti con Attrezzatura, Klettersteig', it: 'Esperti con Attrezzatura, via ferrata', en: 'Experts with Equipment, via ferrata' }, dav: { de: 'Klettersteig, Klettergurt und Set erforderlich', it: 'via ferrata, set obbligatorio', en: 'Via ferrata, harness and set required' } }
};

// ---------- LANGUAGE STATE ----------
let currentLang = 'de';

function t(key) {
  const obj = I18N[currentLang] || I18N.de;
  return obj[key] !== undefined ? obj[key] : (I18N.de[key] || key);
}

function setLang(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('vg-lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  applyTranslations();
  if (typeof onLangChange === 'function') onLangChange(lang);
}

function applyTranslations() {
  // Apply to all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const html = el.getAttribute('data-i18n-html') !== null;
    const txt = t(key);
    if (Array.isArray(txt)) {
      el.innerHTML = txt.map(x => `<li>${x}</li>`).join('');
    } else if (html) {
      el.innerHTML = txt;
    } else {
      el.textContent = txt;
    }
  });
  // Apply to title attributes
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });
}

function initLang() {
  const stored = localStorage.getItem('vg-lang');
  const lang = (stored && I18N[stored]) ? stored : 'de';
  setLang(lang);
}

// ---------- GPX PARSER ----------
function parseGPX(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, 'application/xml');
  const trkpts = doc.querySelectorAll('trkpt');
  const points = [];
  trkpts.forEach(p => {
    const lat = parseFloat(p.getAttribute('lat'));
    const lon = parseFloat(p.getAttribute('lon'));
    const eleEl = p.querySelector('ele');
    const ele = eleEl ? parseFloat(eleEl.textContent) : null;
    points.push({ lat, lon, ele });
  });
  return points;
}

// ---------- GEOMETRY ----------
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const p1 = lat1 * Math.PI / 180, p2 = lat2 * Math.PI / 180;
  const dp = (lat2 - lat1) * Math.PI / 180;
  const dl = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dp/2)**2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl/2)**2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function smoothElevation(eles, window = 7) {
  if (eles.length < window) return [...eles];
  const out = [];
  const half = Math.floor(window / 2);
  for (let i = 0; i < eles.length; i++) {
    const lo = Math.max(0, i - half);
    const hi = Math.min(eles.length, i + half + 1);
    let sum = 0;
    for (let j = lo; j < hi; j++) sum += eles[j];
    out.push(sum / (hi - lo));
  }
  return out;
}

function buildTrackData(points) {
  const distances = [0];
  for (let i = 1; i < points.length; i++) {
    distances.push(distances[i-1] + haversine(points[i-1].lat, points[i-1].lon, points[i].lat, points[i].lon));
  }
  const elesRaw = points.map(p => p.ele);
  const elesSmooth = smoothElevation(elesRaw, 7);

  let gain = 0, loss = 0;
  const threshold = 1.5;
  let lastEle = elesSmooth[0];
  for (let i = 1; i < elesSmooth.length; i++) {
    const d = elesSmooth[i] - lastEle;
    if (Math.abs(d) >= threshold) {
      if (d > 0) gain += d; else loss += -d;
      lastEle = elesSmooth[i];
    }
  }

  const eleMin = Math.min(...elesRaw);
  const eleMax = Math.max(...elesRaw);
  const totalDist = distances[distances.length - 1];

  // German Alpine Club walking time: max(distance/4, ascent/400 + descent/500) + min/2
  const distTimeH = totalDist / 1000 / 4;
  const ascDescH = gain / 400 + loss / 500;
  const totalH = Math.max(distTimeH, ascDescH) + Math.min(distTimeH, ascDescH) / 2;

  const lats = points.map(p => p.lat);
  const lons = points.map(p => p.lon);
  const bbox = [Math.min(...lons), Math.min(...lats), Math.max(...lons), Math.max(...lats)];

  return {
    points, distances, elesSmooth,
    distance: totalDist, gain, loss, eleMin, eleMax,
    walkingTimeH: totalH,
    bbox,
  };
}

// ---------- FORMATTERS ----------
function fmtNum(n) {
  return Math.round(n).toLocaleString(currentLang === 'en' ? 'en-US' : 'de-CH');
}
function fmtKm(meters) {
  return (meters / 1000).toFixed(1);
}
function fmtTime(hours) {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  return `${h}h ${m}min`;
}

// ---------- DRAWER (safety panel) ----------
function openDrawer() {
  document.getElementById('drawer-backdrop').classList.add('visible');
  document.getElementById('drawer').classList.add('visible');
  document.body.style.overflow = 'hidden';
  // Focus first focusable element
  setTimeout(() => document.querySelector('.drawer-close')?.focus(), 100);
}
function closeDrawer() {
  document.getElementById('drawer-backdrop').classList.remove('visible');
  document.getElementById('drawer').classList.remove('visible');
  document.body.style.overflow = '';
}

// ---------- COLLAPSIBLE ----------
function toggleCollapsible(el) {
  el.classList.toggle('open');
  const expanded = el.classList.contains('open');
  el.querySelector('.collapsible-header')?.setAttribute('aria-expanded', expanded);
}

// Init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initLang();

  // Wire up language buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });

  // Wire up info-bar more button
  const moreBtn = document.querySelector('.info-bar-link');
  if (moreBtn) moreBtn.addEventListener('click', e => { e.preventDefault(); openDrawer(); });

  // Wire up drawer close
  document.querySelector('.drawer-close')?.addEventListener('click', closeDrawer);
  document.getElementById('drawer-backdrop')?.addEventListener('click', closeDrawer);

  // Wire up all collapsibles
  document.querySelectorAll('.collapsible-header').forEach(h => {
    h.addEventListener('click', () => toggleCollapsible(h.closest('.collapsible')));
  });

  // BRAND MENU: inject menu HTML, then wire up logo click
  // Auto-detect path prefix based on current location
  const pathPrefix = window.location.pathname.includes('/routes/') ? '../' : '';
  injectBrandMenu(pathPrefix);
  initBrandMenu();

  // ESC closes drawer/modal/menu
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeBrandMenu();
      const modal = document.querySelector('.modal-backdrop.visible');
      if (modal) closeModal();
    }
  });
});

// ============================================================
// MENU INJECTION (renders the dropdown menu inside the topbar)
// pathPrefix is the relative prefix to the site root, e.g. '' for root pages
// or '../' for pages in subfolders like routes/
// ============================================================
function injectBrandMenu(pathPrefix) {
  pathPrefix = pathPrefix || '';
  const topbar = document.querySelector('.topbar-inner');
  if (!topbar) return;

  // Add chevron to the brand button if not yet there
  const brand = topbar.querySelector('.topbar-brand');
  if (brand && !brand.querySelector('.topbar-chevron')) {
    const chev = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    chev.setAttribute('class', 'topbar-chevron');
    chev.setAttribute('viewBox', '0 0 24 24');
    chev.setAttribute('aria-hidden', 'true');
    chev.innerHTML = '<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>';
    brand.appendChild(chev);
  }

  // Skip if menu already exists
  if (document.getElementById('brand-menu')) return;

  // Determine current page for active highlighting
  const path = window.location.pathname;
  const activePage =
    path.includes('/routes/') || path.includes('sentiero') ? 'touren' :
    path.endsWith('/huetten.html') ? 'huetten' :
    path.endsWith('/gastronomie.html') ? 'gastro' :
    path.endsWith('/wetter.html') ? 'wetter' :
    path.endsWith('/ausruestung.html') ? 'hinweise' :
    path.endsWith('/index.html') || path.endsWith('/') || path.endsWith('/valgrande/') ? 'home' :
    'home';

  const menuItems = [
    {
      key: 'touren',
      href: pathPrefix + 'index.html#touren',
      icon: '<path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>',
      titleKey: 'menuTouren',
      subKey: 'menuTourenSub'
    },
    {
      key: 'huetten',
      href: pathPrefix + 'huetten.html',
      icon: '<path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>',
      titleKey: 'menuHuetten',
      subKey: 'menuHuettenSub'
    },
    {
      key: 'gastro',
      href: pathPrefix + 'gastronomie.html',
      icon: '<path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>',
      titleKey: 'menuGastro',
      subKey: 'menuGastroSub'
    },
    {
      key: 'wetter',
      href: pathPrefix + 'wetter.html',
      icon: '<path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"/>',
      titleKey: 'menuWetter',
      subKey: 'menuWetterSub'
    },
    {
      key: 'hinweise',
      href: pathPrefix + 'ausruestung.html',
      icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z"/>',
      titleKey: 'menuHinweise',
      subKey: 'menuHinweiseSub'
    }
  ];

  const menu = document.createElement('nav');
  menu.id = 'brand-menu';
  menu.className = 'brand-menu';
  menu.setAttribute('aria-label', t('menuOpen') || 'Menu');

  for (const item of menuItems) {
    const a = document.createElement('a');
    a.className = 'brand-menu-item' + (activePage === item.key ? ' active' : '');
    a.href = item.href;
    a.innerHTML = `
      <div class="brand-menu-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">${item.icon}</svg>
      </div>
      <div class="brand-menu-text">
        <div class="brand-menu-title" data-i18n="${item.titleKey}">${t(item.titleKey)}</div>
        <div class="brand-menu-sub" data-i18n="${item.subKey}">${t(item.subKey)}</div>
      </div>
    `;
    menu.appendChild(a);
  }

  document.body.appendChild(menu);
}


function initBrandMenu() {
  const brand = document.querySelector('.topbar-brand');
  const menu = document.getElementById('brand-menu');
  if (!brand || !menu) return;

  // Mark brand as a button (it was an <a>; we hijack its click)
  brand.setAttribute('role', 'button');
  brand.setAttribute('aria-haspopup', 'true');
  brand.setAttribute('aria-expanded', 'false');

  brand.addEventListener('click', e => {
    e.preventDefault();
    const isOpen = menu.classList.contains('open');
    if (isOpen) closeBrandMenu();
    else openBrandMenu();
  });

  // Click outside closes the menu
  document.addEventListener('click', e => {
    if (!menu.classList.contains('open')) return;
    if (!menu.contains(e.target) && !brand.contains(e.target)) {
      closeBrandMenu();
    }
  });
}

function openBrandMenu() {
  const brand = document.querySelector('.topbar-brand');
  const menu = document.getElementById('brand-menu');
  if (!menu) return;
  menu.classList.add('open');
  brand?.setAttribute('aria-expanded', 'true');
}

function closeBrandMenu() {
  const brand = document.querySelector('.topbar-brand');
  const menu = document.getElementById('brand-menu');
  if (!menu) return;
  menu.classList.remove('open');
  brand?.setAttribute('aria-expanded', 'false');
}
