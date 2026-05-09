/* ============================================================
   VAL GRANDE — CORE JS (shared)
   Mobile-first, accessible, lean
============================================================ */

// ---------- I18N ----------
const I18N = {
  de: {
    brand: 'Val Grande Wanderungen',
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
    historyLabel: 'Geschichtlicher Kontext',
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
    footerCopyright: '© 2026 · Val Grande Wanderungen. Inoffizielles privates Projekt.',
    backToOverview: 'Zur Übersicht'
  },
  it: {
    brand: 'Escursioni Val Grande',
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
    historyLabel: 'Contesto storico',
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
    footerCopyright: '\u00a9 2026 \u00b7 Escursioni Val Grande. Progetto privato non ufficiale.',
    backToOverview: 'Torna alla panoramica'
  },
  en: {
    brand: 'Val Grande Hikes',
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
    historyLabel: 'Historical context',
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
    backToOverview: 'Back to overview'
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

  // ESC closes drawer/modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeDrawer();
      const modal = document.querySelector('.modal-backdrop.visible');
      if (modal) closeModal();
    }
  });
});
