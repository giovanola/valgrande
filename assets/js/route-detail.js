/* ============================================================
   ROUTE DETAIL PAGE LOGIC
============================================================ */

// ---------- STATE ----------
let routeData = null;          // route metadata from routes.json
let stageData = [];            // [{day, trackData, color, ...}]
let combinedTrackData = null;  // synthetic track combining all stages
let huts = [];
let map = null;
let chart = null;
let hoverMarker = null;
let dayMarkers = [];
let poiMarkers = [];
let poisVisible = true;
let activeStage = 'all';       // 'all' | day number

// ---------- CONFIG (set by host page) ----------
window.RD_CONFIG = window.RD_CONFIG || {};
const ROUTE_SLUG = window.RD_CONFIG.slug;
const MAPTILER_KEY = window.RD_CONFIG.maptilerKey || '';
const HAS_MAPTILER = MAPTILER_KEY && MAPTILER_KEY.length > 5 && !MAPTILER_KEY.startsWith('YOUR_KEY');

// ---------- DATA LOADING ----------
async function loadRoute() {
  const res = await fetch('../data/routes.json');
  const json = await res.json();
  routeData = json.routes.find(r => r.slug === ROUTE_SLUG);
  if (!routeData) throw new Error(`Route ${ROUTE_SLUG} not found in routes.json`);
}

async function loadHuts() {
  try {
    const res = await fetch('../data/huetten.json');
    const json = await res.json();
    huts = json.huetten || [];
  } catch (e) {
    console.warn('Huts could not be loaded:', e);
    huts = [];
  }
}

async function loadStages() {
  stageData = [];
  for (const stage of routeData.stages) {
    const url = '../' + stage.gpx;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`GPX load failed: ${url}`);
    const xml = await res.text();
    const points = parseGPX(xml);
    const td = buildTrackData(points);
    stageData.push({
      day: stage.day,
      title: stage.title,
      from: stage.from,
      to: stage.to,
      rifugio: stage.rifugio,
      gpxUrl: url,
      trackData: td
    });
  }
}

function buildCombined() {
  // Merge all stage tracks into one continuous synthetic track.
  // Distances are concatenated. Day boundaries stored as offsets.
  const allPoints = [];
  const allDistances = [];
  const allEles = [];
  const dayBoundaries = []; // distance in meters at each day's end
  let cumDist = 0;
  for (const s of stageData) {
    const td = s.trackData;
    for (let i = 0; i < td.points.length; i++) {
      allPoints.push(td.points[i]);
      allDistances.push(cumDist + td.distances[i]);
      allEles.push(td.elesSmooth[i]);
    }
    cumDist += td.distance;
    dayBoundaries.push({ day: s.day, distEndKm: cumDist / 1000 });
  }
  let gain = 0, loss = 0, lastEle = allEles[0];
  for (let i = 1; i < allEles.length; i++) {
    const d = allEles[i] - lastEle;
    if (Math.abs(d) >= 1.5) { d > 0 ? gain += d : loss += -d; lastEle = allEles[i]; }
  }
  const distH = cumDist / 1000 / 4;
  const ascH = gain / 400 + loss / 500;
  const totalH = Math.max(distH, ascH) + Math.min(distH, ascH) / 2;
  const lats = allPoints.map(p => p.lat);
  const lons = allPoints.map(p => p.lon);

  combinedTrackData = {
    points: allPoints,
    distances: allDistances,
    elesSmooth: allEles,
    distance: cumDist,
    gain, loss,
    eleMin: Math.min(...allEles),
    eleMax: Math.max(...allEles),
    walkingTimeH: totalH,
    bbox: [Math.min(...lons), Math.min(...lats), Math.max(...lons), Math.max(...lats)],
    dayBoundaries
  };
}

// ---------- HEAD / META RENDER ----------
function renderHead() {
  // Title and headlines: render the localized version
  const title = routeData.title[currentLang] || routeData.title.de;
  const subtitle = routeData.subtitle[currentLang] || routeData.subtitle.de;
  document.getElementById('hero-title').textContent = title;
  document.getElementById('hero-subtitle').textContent = subtitle;
  const summary = routeData.summary[currentLang] || routeData.summary.de;
  document.getElementById('hero-summary').textContent = summary;

  // Meta description and OG description: only override on explicit language change.
  // The static HTML carries hand-tuned SEO copy, which we keep for crawlers.
  // We only swap to the localized version on subsequent renders triggered by setLang.
  if (window.__vgRenderedOnce) {
    document.title = `${title} \u2014 Val Grande Wanderungen`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', summary.substring(0, 160));
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', summary.substring(0, 160));
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', summary.substring(0, 160));
  }
  window.__vgRenderedOnce = true;

  // Eyebrow (always localized)
  const numDays = routeData.stages.length;
  const dayLabel = numDays > 1 ? `${numDays} ${t('days')}` : `1 ${t('day')}`;
  document.getElementById('hero-eyebrow').textContent = `Parco Nazionale Val Grande \u00b7 ${dayLabel}`;
}

// ---------- KPIs ----------
function renderKPIs(td) {
  document.getElementById('kpi-dist').textContent = fmtKm(td.distance);
  document.getElementById('kpi-asc').textContent = fmtNum(td.gain);
  document.getElementById('kpi-desc').textContent = fmtNum(td.loss);
  document.getElementById('kpi-max').textContent = fmtNum(td.eleMax);
  document.getElementById('kpi-time').textContent = fmtTime(td.walkingTimeH);

  const diffEl = document.getElementById('kpi-diff');
  const d = DIFFICULTY[routeData.difficulty];
  if (d && diffEl) {
    diffEl.textContent = d.label;
    diffEl.title = (d.long[currentLang] || d.long.de) + (d.dav[currentLang] ? ' (' + (d.dav[currentLang] || d.dav.de) + ')' : '');
  }
}

// ---------- STAGE TABS ----------
function renderStageTabs() {
  const wrap = document.getElementById('stage-tabs');
  if (!wrap) return;
  if (routeData.stages.length < 2) {
    wrap.style.display = 'none';
    return;
  }
  wrap.innerHTML = '';
  // Overview tab
  const allBtn = document.createElement('button');
  allBtn.className = 'stage-tab' + (activeStage === 'all' ? ' active' : '');
  allBtn.textContent = t('overview');
  allBtn.addEventListener('click', () => selectStage('all'));
  wrap.appendChild(allBtn);
  // One per stage
  for (const s of stageData) {
    const btn = document.createElement('button');
    btn.className = 'stage-tab' + (activeStage === s.day ? ' active' : '');
    btn.textContent = `${t('day')} ${s.day}`;
    btn.addEventListener('click', () => selectStage(s.day));
    wrap.appendChild(btn);
  }
}

function selectStage(stage) {
  activeStage = stage;
  renderStageTabs();
  // Update KPIs
  if (stage === 'all') {
    renderKPIs(combinedTrackData);
  } else {
    const s = stageData.find(x => x.day === stage);
    renderKPIs(s.trackData);
  }
  // Update chart
  rebuildChart();

  // Map: filter visible tracks and day markers based on selected stage
  if (map && map.loaded()) {
    // Show/hide track layers per stage
    stageData.forEach(s => {
      const visibility = (stage === 'all' || stage === s.day) ? 'visible' : 'none';
      if (map.getLayer('track-' + s.day)) map.setLayoutProperty('track-' + s.day, 'visibility', visibility);
      if (map.getLayer('track-casing-' + s.day)) map.setLayoutProperty('track-casing-' + s.day, 'visibility', visibility);
    });
    // Show/hide day markers based on stage.
    // Each stage has a start marker (= prev stage end) and an end marker.
    // For stage X we show: marker with kind=start day=X, plus marker with kind=end day=X
    // For 'all' we show everything.
    dayMarkers.forEach(m => {
      const meta = m.__vgMeta || {};
      let visible = false;
      if (stage === 'all') {
        visible = true;
      } else {
        // Show start marker of selected day (could be marker.alsoStartOf == stage, or marker.day==stage and kind=start)
        if (meta.kind === 'start' && meta.day === stage) visible = true;
        if (meta.kind === 'end' && meta.alsoStartOf === stage) visible = true;
        // Show end marker of selected day
        if (meta.kind === 'end' && meta.day === stage) visible = true;
      }
      m.getElement().style.display = visible ? '' : 'none';
    });

    // Zoom to relevant bbox
    if (stage === 'all') {
      const bbox = combinedTrackData.bbox;
      map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 60, pitch: HAS_MAPTILER ? 60 : 0, bearing: -25, duration: 1000 });
    } else {
      const s = stageData.find(x => x.day === stage);
      const bbox = s.trackData.bbox;
      map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], { padding: 80, pitch: HAS_MAPTILER ? 60 : 0, bearing: -25, duration: 1000 });
    }
  }

  // Update download button label
  const dlBtn = document.getElementById('download-btn');
  if (dlBtn) {
    if (stage === 'all') {
      dlBtn.textContent = t('download') + ' (alle ' + stageData.length + ' ' + t('days').toLowerCase() + ')';
    } else {
      dlBtn.textContent = t('download') + ' (' + t('day') + ' ' + stage + ')';
    }
  }
}

// ---------- MAP ----------
function initMap() {
  if (!HAS_MAPTILER) {
    showMapMessage(
      currentLang === 'de' ? 'MapTiler-Schl\u00fcssel nicht konfiguriert' :
      currentLang === 'it' ? 'Chiave MapTiler non configurata' :
      'MapTiler key not configured',
      currentLang === 'de' ? 'Account auf maptiler.com erstellen, Key in config.js eintragen.' :
      currentLang === 'it' ? 'Crea un account su maptiler.com e inserisci la chiave in config.js.' :
      'Create an account at maptiler.com and add the key to config.js.'
    );
    document.querySelector('.map-controls').style.display = 'none';
    return;
  }

  const style = {
    version: 8,
    sources: {
      'basemap': {
        type: 'raster',
        tiles: [`https://api.maptiler.com/maps/outdoor-v2/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`],
        tileSize: 512,
        attribution: '\u00a9 MapTiler \u00a9 OpenStreetMap'
      },
      'terrain-rgb': {
        type: 'raster-dem',
        tiles: [`https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key=${MAPTILER_KEY}`],
        tileSize: 256,
        encoding: 'mapbox',
        maxzoom: 12
      }
    },
    layers: [{ id: 'basemap', type: 'raster', source: 'basemap' }],
    terrain: { source: 'terrain-rgb', exaggeration: 1.4 },
    sky: {
      'sky-color': '#9DBFE8',
      'sky-horizon-blend': 0.6,
      'horizon-color': '#FAFAF9',
      'horizon-fog-blend': 0.7,
      'fog-color': '#E8E6E1',
      'fog-ground-blend': 0.3
    }
  };

  const center = [(combinedTrackData.bbox[0]+combinedTrackData.bbox[2])/2, (combinedTrackData.bbox[1]+combinedTrackData.bbox[3])/2];

  map = new maplibregl.Map({
    container: 'map',
    style,
    center,
    zoom: 12,
    pitch: 60,
    bearing: -25,
    maxPitch: 80
  });

  map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'bottom-right');

  map.on('load', () => {
    addTracksAndMarkers();
    addPoiLayer();
    fitTrack();
  });
}

function addTracksAndMarkers() {
  // Add track lines for each stage in same color
  stageData.forEach((s, i) => {
    const coords = s.trackData.points.map(p => [p.lon, p.lat]);
    const sourceId = 'track-' + s.day;
    map.addSource(sourceId, {
      type: 'geojson',
      data: { type: 'Feature', geometry: { type: 'LineString', coordinates: coords }, properties: {} }
    });
    map.addLayer({
      id: 'track-casing-' + s.day, type: 'line', source: sourceId,
      paint: { 'line-color': '#FFFFFF', 'line-width': 7, 'line-opacity': 0.85 },
      layout: { 'line-cap': 'round', 'line-join': 'round' }
    });
    map.addLayer({
      id: 'track-' + s.day, type: 'line', source: sourceId,
      paint: { 'line-color': '#1B6B45', 'line-width': 4, 'line-opacity': 1 },
      layout: { 'line-cap': 'round', 'line-join': 'round' }
    });
  });

  // Day markers (numbered): start of day 1, then end of each day.
  // Each marker carries metadata (__vgMeta) so selectStage() can filter them.
  if (stageData.length > 0) {
    const firstStart = stageData[0].trackData.points[0];
    addDayMarker(firstStart.lon, firstStart.lat, '1', false, { kind: 'start', day: 1 });
  }
  stageData.forEach((s, i) => {
    const lastPoint = s.trackData.points[s.trackData.points.length - 1];
    const isLast = (i === stageData.length - 1);
    if (isLast || stageData.length === 1) {
      // End marker
      addDayMarker(lastPoint.lon, lastPoint.lat, '\u25BC', true, { kind: 'end', day: s.day });
    } else {
      // End of this day = start of next day, label with next day number
      addDayMarker(lastPoint.lon, lastPoint.lat, String(s.day + 1), false, { kind: 'end', day: s.day, alsoStartOf: s.day + 1 });
    }
  });

  // Hover marker
  const hEl = document.createElement('div');
  hEl.className = 'hover-marker';
  hEl.style.display = 'none';
  hoverMarker = new maplibregl.Marker({ element: hEl })
    .setLngLat([combinedTrackData.points[0].lon, combinedTrackData.points[0].lat]).addTo(map);
}

function addDayMarker(lon, lat, label, isEnd, meta) {
  const el = document.createElement('div');
  el.className = 'day-marker' + (isEnd ? ' end' : '');
  el.textContent = label;
  el.title = isEnd ? 'Ziel' : `Tag ${label}`;
  const marker = new maplibregl.Marker({ element: el, anchor: 'center' })
    .setLngLat([lon, lat]).addTo(map);
  // Force day markers above POIs
  const parent = marker.getElement().parentElement;
  if (parent) parent.style.zIndex = '10';
  // Store metadata for filtering by selectStage
  marker.__vgMeta = meta || {};
  dayMarkers.push(marker);
}

function fitTrack() {
  if (!combinedTrackData || !map) return;
  const bbox = combinedTrackData.bbox;
  map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], {
    padding: 60, pitch: 60, bearing: -25, duration: 1200
  });
}

function setView(mode) {
  if (!map) return;
  document.getElementById('btn-3d').classList.toggle('active', mode === '3d');
  document.getElementById('btn-2d').classList.toggle('active', mode === '2d');
  if (mode === '3d') {
    map.easeTo({ pitch: 60, bearing: -25, duration: 800 });
    if (HAS_MAPTILER) map.setTerrain({ source: 'terrain-rgb', exaggeration: 1.4 });
  } else {
    map.easeTo({ pitch: 0, bearing: 0, duration: 800 });
    if (HAS_MAPTILER) map.setTerrain(null);
  }
}

function showMapMessage(title, detail) {
  document.getElementById('map').innerHTML =
    `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#fff;padding:40px;text-align:center;gap:14px;">
       <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;">
         <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
       </div>
       <div style="font-family:'Fraunces',serif;font-weight:300;font-size:20px;">${title}</div>
       <div style="font-size:13px;opacity:.7;max-width:380px;">${detail}</div>
     </div>`;
}

// ---------- POI LAYER ----------
function addPoiLayer() {
  for (const h of huts) {
    const el = document.createElement('div');
    el.className = 'poi-marker ' + h.category + ' status-' + (h.status || 'active');
    el.title = h.name;
    // Status icon/indicator
    if (h.status === 'destroyed') {
      el.innerHTML = '<span class="poi-icon" aria-hidden="true">×</span>';
    } else if (h.status === 'booking_required') {
      el.innerHTML = '<span class="poi-icon" aria-hidden="true">!</span>';
    } else if (h.status === 'emergency_only' || h.status === 'restricted') {
      el.innerHTML = '<span class="poi-icon" aria-hidden="true">!</span>';
    }

    const popupHtml = buildPoiPopupHtml(h);
    const marker = new maplibregl.Marker({ element: el, anchor: 'center' })
      .setLngLat([h.lon, h.lat])
      .setPopup(new maplibregl.Popup({ offset: 14, closeButton: true, maxWidth: '320px' }).setHTML(popupHtml))
      .addTo(map);
    poiMarkers.push(marker);
  }
}

function buildPoiPopupHtml(h) {
  const catKey = 'cat' + h.category.charAt(0).toUpperCase() + h.category.slice(1);
  const catLabel = t(catKey);
  let html = `<div class="poi-popup-name">${escapeHtml(h.name)}</div>`;

  // Status badge for non-active huts
  if (h.status && h.status !== 'active') {
    const statusKey = 'status' + h.status.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
    const statusLabel = t(statusKey);
    const statusClass = 'poi-popup-status status-' + h.status;
    html += `<div class="${statusClass}">${escapeHtml(statusLabel)}</div>`;
  }

  // Category + elevation + sleeps
  html += `<div class="poi-popup-meta">${catLabel} · ca. ${h.ele} m`;
  if (h.sleeps) html += ` · ${h.sleeps} ${t('sleeps')}`;
  html += `</div>`;

  // Location info
  if (h.municipality || h.locality) {
    let loc = '';
    if (h.locality) loc += escapeHtml(h.locality);
    if (h.municipality) loc += (loc ? ', ' : '') + escapeHtml(h.municipality);
    html += `<div class="poi-popup-loc">${loc}</div>`;
  }

  // Services
  const services = [];
  if (h.serviced) services.push(t('hutFood'));
  if (h.winter_room) services.push(t('hutWinterRoom'));
  if (services.length) html += `<div class="poi-popup-services">${services.join(' · ')}</div>`;

  // Note (especially for non-active huts)
  if (h.note?.de) {
    html += `<div class="poi-popup-note">${escapeHtml(h.note.de)}</div>`;
  }

  // Contact
  let hasContact = false;
  let contactHtml = '<div class="poi-popup-contacts">';
  if (h.phones?.length) {
    for (const p of h.phones) {
      const numClean = p.number.replace(/\s/g, '');
      const label = p.name ? `${escapeHtml(p.number)} (${escapeHtml(p.name)})` : escapeHtml(p.number);
      contactHtml += `<a class="poi-popup-contact" href="tel:${numClean}">☎ ${label}</a>`;
      hasContact = true;
    }
  }
  if (h.email) {
    contactHtml += `<a class="poi-popup-contact" href="mailto:${h.email}">✉ ${escapeHtml(h.email)}</a>`;
    hasContact = true;
  }
  if (h.websites?.length) {
    for (const w of h.websites) {
      const display = w.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
      contactHtml += `<a class="poi-popup-contact" href="${w}" target="_blank" rel="noopener">${escapeHtml(display)}</a>`;
      hasContact = true;
    }
  } else if (h.website) {
    // backward compat
    const display = h.website.replace(/^https?:\/\/(www\.)?/, '');
    contactHtml += `<a class="poi-popup-contact" href="${h.website}" target="_blank" rel="noopener">${escapeHtml(display)}</a>`;
    hasContact = true;
  }
  contactHtml += '</div>';
  if (hasContact) html += contactHtml;

  return html;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function togglePois() {
  poisVisible = !poisVisible;
  poiMarkers.forEach(m => m.getElement().style.display = poisVisible ? '' : 'none');
  const btn = document.getElementById('btn-pois');
  if (btn) btn.classList.toggle('active', poisVisible);
}

// ---------- CHART ----------
function rebuildChart() {
  if (chart) {
    chart.destroy();
    chart = null;
  }
  initChart();
}

function initChart() {
  const ctx = document.getElementById('chart').getContext('2d');
  let td;
  let dayBoundaries = [];
  if (activeStage === 'all') {
    td = combinedTrackData;
    dayBoundaries = combinedTrackData.dayBoundaries;
  } else {
    td = stageData.find(s => s.day === activeStage).trackData;
  }

  const labels = td.distances.map(d => +(d/1000).toFixed(3));
  const data = td.elesSmooth.map(e => +e.toFixed(1));

  const grd = ctx.createLinearGradient(0, 0, 0, 180);
  grd.addColorStop(0, 'rgba(27,107,69,0.32)');
  grd.addColorStop(1, 'rgba(27,107,69,0.02)');

  // Custom plugin for vertical day separators
  const daySeparatorPlugin = {
    id: 'daySeparators',
    afterDatasetsDraw(chart) {
      if (activeStage !== 'all' || dayBoundaries.length < 2) return;
      const { ctx, chartArea: { top, bottom, left, right }, scales: { x } } = chart;
      ctx.save();
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = '#9B9890';
      ctx.lineWidth = 1;
      ctx.font = "600 10px 'Inter',sans-serif";
      ctx.fillStyle = '#5C594F';
      // Boundaries between days (skip last which is end of route)
      for (let i = 0; i < dayBoundaries.length - 1; i++) {
        const distKm = dayBoundaries[i].distEndKm;
        const xPx = x.getPixelForValue(distKm);
        if (xPx >= left && xPx <= right) {
          ctx.beginPath();
          ctx.moveTo(xPx, top);
          ctx.lineTo(xPx, bottom);
          ctx.stroke();
          // Label "Tag i+1 →" right of separator
          const nextDay = dayBoundaries[i + 1].day;
          const lbl = `${t('day')} ${nextDay}`;
          ctx.fillText(lbl, xPx + 5, top + 12);
        }
      }
      ctx.restore();
    }
  };

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data, borderColor: '#1B6B45', backgroundColor: grd,
        borderWidth: 1.8, fill: true, pointRadius: 0,
        pointHoverRadius: 5, pointHoverBackgroundColor: '#1B6B45',
        pointHoverBorderColor: '#fff', pointHoverBorderWidth: 2,
        tension: 0.3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 600 },
      interaction: { mode: 'index', intersect: false },
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: {
        x: {
          type: 'linear',
          title: { display: true, text: t('chartDistance'), color: '#9B9890', font: { size: 11, family: "'Inter',sans-serif", weight: 500 } },
          ticks: { color: '#9B9890', font: { size: 10 }, callback: v => v + ' km' },
          grid: { color: 'rgba(232,230,225,.6)', drawTicks: false }
        },
        y: {
          title: { display: true, text: t('chartElevation'), color: '#9B9890', font: { size: 11, family: "'Inter',sans-serif", weight: 500 } },
          ticks: { color: '#9B9890', font: { size: 10 }, callback: v => v + ' m' },
          grid: { color: 'rgba(232,230,225,.6)', drawTicks: false }
        }
      },
      onHover: (event, elements) => {
        if (elements?.length > 0) showHover(elements[0].index);
        else hideHover();
      }
    },
    plugins: [daySeparatorPlugin]
  });

  ctx.canvas.addEventListener('mouseleave', hideHover);
  // Touch support for mobile
  const touchHandler = (e) => {
    if (!chart) return;
    const t2 = e.touches?.[0] || e.changedTouches?.[0];
    if (!t2) return;
    const rect = ctx.canvas.getBoundingClientRect();
    const x = t2.clientX - rect.left;
    const ca = chart.chartArea;
    if (x < ca.left || x > ca.right) return;
    const cur = activeStage === 'all' ? combinedTrackData : stageData.find(s => s.day === activeStage).trackData;
    const frac = (x - ca.left) / (ca.right - ca.left);
    const idx = Math.max(0, Math.min(cur.points.length - 1, Math.round(frac * (cur.points.length - 1))));
    showHover(idx);
    e.preventDefault();
  };
  ctx.canvas.addEventListener('touchstart', touchHandler, { passive: false });
  ctx.canvas.addEventListener('touchmove', touchHandler, { passive: false });
  ctx.canvas.addEventListener('touchend', () => setTimeout(hideHover, 1500));
}

function showHover(idx) {
  const cur = activeStage === 'all' ? combinedTrackData : stageData.find(s => s.day === activeStage).trackData;
  if (!cur) return;
  const p = cur.points[idx];
  const dist = cur.distances[idx] / 1000;
  const ele = cur.elesSmooth[idx];

  let grade = 0;
  const winSize = 25;
  const lo = Math.max(0, idx - winSize), hi = Math.min(cur.points.length - 1, idx + winSize);
  const dDist = cur.distances[hi] - cur.distances[lo];
  const dEle = cur.elesSmooth[hi] - cur.elesSmooth[lo];
  if (dDist > 0) grade = (dEle / dDist) * 100;

  document.getElementById('pop-dist').textContent = dist.toFixed(2) + ' km';
  document.getElementById('pop-ele').textContent = Math.round(ele) + ' m';
  document.getElementById('pop-grade').textContent = (grade >= 0 ? '+' : '') + grade.toFixed(1) + '%';
  document.getElementById('hover-popup').classList.add('visible');

  if (hoverMarker && map && map.loaded()) {
    hoverMarker.getElement().style.display = '';
    hoverMarker.setLngLat([p.lon, p.lat]);
  }
}

function hideHover() {
  document.getElementById('hover-popup').classList.remove('visible');
  if (hoverMarker) hoverMarker.getElement().style.display = 'none';
}

// ---------- STAGE CARDS ----------
function renderStageCards() {
  const wrap = document.getElementById('stage-cards');
  if (!wrap || routeData.stages.length < 2) {
    document.getElementById('stages-section')?.style?.setProperty('display', 'none');
    return;
  }
  wrap.innerHTML = '';
  for (const s of stageData) {
    const card = document.createElement('div');
    card.className = 'stage-card';
    const title = s.title[currentLang] || s.title.de;
    card.innerHTML = `
      <div class="stage-card-head">
        <div class="stage-num">${s.day}</div>
        <div>
          <div class="stage-title">${escapeHtml(title)}</div>
          <div class="stage-route">${escapeHtml(s.from)} → ${escapeHtml(s.to)}</div>
        </div>
      </div>
      <div class="stage-stats">
        <div><span class="stat-val">${fmtKm(s.trackData.distance)}</span><span class="stat-lbl">km</span></div>
        <div><span class="stat-val">${fmtNum(s.trackData.gain)}</span><span class="stat-lbl">${t('ascent').toLowerCase()}</span></div>
        <div><span class="stat-val">${fmtNum(s.trackData.loss)}</span><span class="stat-lbl">${t('descent').toLowerCase()}</span></div>
        <div><span class="stat-val">${fmtTime(s.trackData.walkingTimeH)}</span></div>
      </div>`;
    card.addEventListener('click', () => selectStage(s.day));
    wrap.appendChild(card);
  }
}

// ---------- HISTORY SECTION ----------
function renderHistory() {
  const wrap = document.getElementById('history-section');
  if (!wrap) return;
  if (!routeData.history) {
    wrap.style.display = 'none';
    return;
  }
  const langKey = routeData.history.available?.includes(currentLang) ? currentLang : 'de';
  const h = routeData.history[langKey];
  if (!h) {
    wrap.style.display = 'none';
    return;
  }
  let body = `<p>${escapeHtml(h.intro)}</p>`;
  if (h.sections) {
    for (const sec of h.sections) {
      body += `<h3>${escapeHtml(sec.title)}</h3><p>${escapeHtml(sec.text)}</p>`;
    }
  }
  if (h.memorial) body += `<p style="font-style:italic;margin-top:14px;color:var(--text-primary);">${escapeHtml(h.memorial)}</p>`;
  document.getElementById('history-content').innerHTML = body;
}

// ---------- DOWNLOAD MODAL ----------
function openDownloadModal() {
  document.getElementById('modal-backdrop').classList.add('visible');
  document.getElementById('modal-checkbox').checked = false;
  document.getElementById('modal-confirm').disabled = true;
  setTimeout(() => document.getElementById('modal-checkbox')?.focus(), 100);
}

function closeModal() {
  document.getElementById('modal-backdrop').classList.remove('visible');
}

function confirmDownload() {
  // Determine which GPX file(s) to download
  if (activeStage === 'all') {
    // Download all stages sequentially
    stageData.forEach((s, i) => {
      setTimeout(() => triggerDownload(s.gpxUrl), i * 300);
    });
  } else {
    const s = stageData.find(x => x.day === activeStage);
    if (s) triggerDownload(s.gpxUrl);
  }
  closeModal();
}

function triggerDownload(url) {
  const a = document.createElement('a');
  a.href = url;
  a.download = url.split('/').pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ---------- LANG CHANGE HOOK ----------
function onLangChange() {
  if (!routeData) return;
  renderHead();
  renderStageTabs();
  renderStageCards();
  renderHistory();
  selectStage(activeStage);  // re-render kpis + chart titles
}

// ---------- INIT ----------
async function initRouteDetail() {
  try {
    await loadRoute();
    await loadHuts();
    await loadStages();
    buildCombined();
    renderHead();
    renderStageTabs();
    renderKPIs(combinedTrackData);
    renderStageCards();
    renderHistory();

    if (typeof maplibregl !== 'undefined') {
      initMap();
    } else {
      showMapMessage('Map library not loaded', 'Check internet connection');
    }
    initChart();

    // Wire up controls
    document.getElementById('btn-3d')?.addEventListener('click', () => setView('3d'));
    document.getElementById('btn-2d')?.addEventListener('click', () => setView('2d'));
    document.getElementById('btn-fit')?.addEventListener('click', fitTrack);
    document.getElementById('btn-pois')?.addEventListener('click', togglePois);
    document.getElementById('download-btn')?.addEventListener('click', openDownloadModal);
    document.getElementById('modal-cancel')?.addEventListener('click', closeModal);
    document.getElementById('modal-confirm')?.addEventListener('click', confirmDownload);
    document.getElementById('modal-backdrop')?.addEventListener('click', e => {
      if (e.target.id === 'modal-backdrop') closeModal();
    });
    document.getElementById('modal-checkbox')?.addEventListener('change', e => {
      document.getElementById('modal-confirm').disabled = !e.target.checked;
    });
  } catch (err) {
    console.error('Init failed:', err);
    document.getElementById('hero-title').textContent = 'Fehler';
    document.getElementById('hero-summary').textContent = err.message;
  }
}

document.addEventListener('DOMContentLoaded', initRouteDetail);
