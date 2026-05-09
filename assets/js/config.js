/* ============================================================
   VAL GRANDE — ZENTRALE KONFIGURATION
   Hier alle Site-weiten Einstellungen pflegen.
   Einmal ändern, überall wirksam.
============================================================ */

window.VG_CONFIG = {
  // ----------------------------------------------------------
  // RELEASE
  // ----------------------------------------------------------
  version: '1.8',
  releaseDate: '2026-05-09',

  // ----------------------------------------------------------
  // MAPTILER API KEY
  // Zwingend für alle Karten-Funktionen.
  // 1. Account auf https://www.maptiler.com/cloud/ anlegen
  // 2. API-Key generieren
  // 3. Im MapTiler-Dashboard "Allowed origins (HTTP)" einschränken
  //    auf: https://giovanola.github.io
  // 4. Key hier eintragen.
  // ----------------------------------------------------------
  maptilerKey: 'n2yeO59yJCsa9qysp6Jm',

  // ----------------------------------------------------------
  // SITE-URLS
  // Werden für absolute Links (canonical, OG-Tags) verwendet.
  // ----------------------------------------------------------
  siteUrl: 'https://giovanola.github.io/valgrande',
  siteName: 'Val Grande Wanderungen',

  // ----------------------------------------------------------
  // OPENGRAPH-DEFAULTS
  // Werden verwendet, wenn eine Seite kein eigenes OG-Bild definiert.
  // ----------------------------------------------------------
  ogImage: 'https://giovanola.github.io/valgrande/val_grande_opengraph.jpeg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Berglandschaft der Val Grande in 3D-Ansicht mit grünen Bergketten und steilen Tälern',

  // ----------------------------------------------------------
  // GEO-MITTELPUNKT VAL GRANDE
  // Wird für lokale Suche und Karten-Default-Center verwendet.
  // ----------------------------------------------------------
  geoLat: 46.058,
  geoLon: 8.450,
  geoRegion: 'IT-VB',
  geoPlacename: 'Parco Nazionale della Val Grande, Verbano-Cusio-Ossola',

  // ----------------------------------------------------------
  // PARK-KONTAKT
  // Wird im Sicherheits-Drawer aller Seiten angezeigt.
  // ----------------------------------------------------------
  parkPhone: '+39 0324 87540',
  parkEmail: 'info@parcovalgrande.it',
  parkWebsite: 'https://www.parcovalgrande.it/',
  parkGuidesUrl: 'https://www.parcovalgrande.it/Gguideparco.php',

  // ----------------------------------------------------------
  // KARTEN-EINSTELLUNGEN
  // ----------------------------------------------------------
  mapDefaultPitch: 60,
  mapDefaultBearing: -25,
  mapTerrainExaggeration: 1.4
};

// Convenience helper for legacy code that reads RD_CONFIG
// Detail-Seiten setzen RD_CONFIG.slug, dann mergen wir global rein:
if (typeof window.RD_CONFIG === 'undefined') window.RD_CONFIG = {};
Object.assign(window.RD_CONFIG, {
  maptilerKey: window.VG_CONFIG.maptilerKey
});
