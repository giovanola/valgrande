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
    catRifugioAnaalpini: 'Berghütte A.N.A.',
    catBivacco: 'Bivacco (Selbstversorger)',
    catBivaccoPark: 'Park-Biwak',
    catBivaccoCai: 'Bivacco CAI',
    catBivaccoEgv: 'Bivacco EGV',
    catBivaccoEmergency: 'Notbiwak',
    catAlpe: 'Alm/Alpe',
    catBiwak: 'Biwak',
    sleeps: 'Schlafplätze',
    statusActive: 'Aktiv',
    statusBookingRequired: 'Reservierung nötig',
    statusRestricted: 'Eingeschränkt zugänglich',
    statusEmergencyOnly: 'Nur Notlager',
    statusClosed: 'Geschlossen',
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
    menuValGrande: 'Über das Val Grande',
    menuValGrandeSub: 'Wildnis, Geschichte, Flora und Fauna',
    menuHuetten: 'Hütten',
    menuHuettenSub: 'Bivacchi und Rifugi mit GPX-Daten',
    menuGastro: 'Gastronomie',
    menuGastroSub: 'Restaurants und Agriturismi mit GPX',
    menuWetter: 'Wetter',
    menuWetterSub: 'Bergwetter und Bedingungen',
    menuHinweise: 'Hinweise',
    menuHinweiseSub: 'Ausrüstung und Vorbereitung',
    difficultyNoteLabel: 'Schwierigkeit im Detail',
    stageProfileNotes: 'Profilnotizen',
    stageDetailsToggle: 'Details ein- oder ausblenden',
    // Hütten i18n
    hutsHeroTitle: 'Hütten und Schutzhütten',
    hutsHeroLede: 'Alle Schutzunterkünfte im Parco Nazionale Val Grande in einer 3D-Karte. Pro Hütte stehen Standort, Kategorie, Status und GPX-Daten zum Download bereit.',
    hutsAdvisoryTitle: 'Wichtiger Hinweis.',
    hutsAdvisoryBody: 'Aufgrund teils widersprüchlicher Angaben zur aktuellen Nutzung (geschlossen, zerstört oder eingeschränkt) sollte man sich vor einer Wanderung direkt beim',
    hutsAdvisoryLink: 'Nationalpark Val Grande',
    hutsAdvisoryEnd: 'über den Status der Hütte informieren.',
    hutsLegendTitle: 'Status',
    hutsListTitle: 'Liste aller Hütten',
    hutsListIntro: 'basierend auf der Park-Quellenliste, OpenStreetMap und GPX-Tracks.',
    hutsFilterAll: 'Alle',
    hutsCardMap: 'Karte',
    hutsCardGpx: 'GPX',
    hutsCardEmail: 'E-Mail',
    hutsCardWebsite: 'Webseite',
    hutsCardCabin: 'Hütte',
    hutsCardSleeps: 'Plätze',
    hutsCardCirca: 'ca.',
    hutsCardWinterRoom: 'Winterraum',
    hutsCardServiced: 'Verpflegung',
    hutsCardNoplace: 'Standort nicht erfasst, nicht auf Karte sichtbar.',
    catBerghuette: 'Berghütte',
    catBerghuetteSub: 'bewirtschaftet',
    catSchutzhuette: 'Schutzhütte',
    catSchutzhuetteSub: 'Selbstversorger',
    statusActive: 'Aktiv',
    statusBookingRequired: 'Reservierung nötig',
    statusRestricted: 'Eingeschränkt',
    statusEmergencyOnly: 'Nur Notfall',
    statusClosed: 'Geschlossen',
    statusDestroyed: 'Zerstört',
    yes: 'ja',
    no: 'nein',

    // INDEX page
    homeEyebrow: 'Parco Nazionale della Val Grande',
    homeHeroH1Pre: 'Trekking durch ',
    homeHeroH1Em: 'Italiens grösste',
    homeHeroH1Post: ' Wildnis',
    homeHeroLede: 'Mehrtägige Routen, 3D-Karten, Höhenprofile, Hütten-Übersicht. Eine eigenständige Sammlung für anspruchsvolle Bergwandernde im wildesten Tal des Piemonts.',
    sectionTouren: 'Touren',
    sectionTourenIntro: 'Wanderrouten durch den Parco Nazionale della Val Grande mit Höhenprofil, Hütten-Übersicht und GPX-Download.',
    sectionHinweise: 'Hinweise',
    sectionHinweiseIntro: 'Das Val Grande gilt als grösstes zusammenhängendes Wildnisgebiet Italiens. Wege lösen sich teilweise auf, Mobilfunk gibt es grossräumig nicht, Übernachtung erfolgt in unbewirtschafteten Schutzhütten. Wer hier unterwegs ist, sollte gut vorbereitet sein.',
    tourCardCta: 'Tour ansehen',
    hintValgrandeTitle: 'Über das Val Grande',
    hintValgrandeDesc: 'Wildnisgebiet Italiens, Geschichte von Almwirtschaft und Resistenza, Flora, Fauna und Geologie. Park-Übersicht in einem Stück.',
    hintEquipTitle: 'Ausrüstung & Vorbereitung',
    hintEquipDesc: 'Vollständige Packliste mit Priorisierung, Schichtprinzip, Verhalten in den Bivacchi und Notfallnummern.',
    hintSafetyTitle: 'Sicherheit & geführte Touren',
    hintSafetyDesc: 'Wildnisgebiet. Der Parco empfiehlt für anspruchsvolle Wege die Begleitung durch ausgebildete Guide Ufficiali del Parco oder Guide Alpine.',
    hintParkTitle: 'Offizielle Park-Webseite',
    hintParkDesc: 'parcovalgrande.it ist die zuständige Quelle für Hütten-Status, Wegezustand, Veranstaltungen und Verbote.',
    hintEmergencyTitle: 'Notruf 112',
    hintEmergencyDesc: 'Europäischer Notruf, italienische Bergrettung 118, Forstschutz 1515. Im Tal oft kein Empfang, Information vorab schriftlich notieren.',
    tourMapLegend: 'Routen',
    tourMapLegendMeta: 'Klick auf eine Route für Details und Link zur Tour.',
    mapStyleTerrain: 'Terrain',
    mapStyleTopo: 'Topo',
    mapStyleSatellite: 'Satellit',
    statusLoading: 'Lade Routen',
    statusLoaded: 'Routen geladen',

    // VAL-GRANDE page
    vgHeroEyebrow: 'Parco Nazionale della Val Grande',
    vgHeroH1: 'Wo die Alpen ihre {em} zurückgewonnen haben',
    vgHeroH1Em: 'Stille',
    vgHeroLede: 'Zwischen den Ossola-Bergen, dem Verbano, dem Val Vigezzo, der Valle Intrasca und der Valle Cannobina liegt eine der eindrucksvollsten Landschaften Norditaliens. Der Park gilt offiziell als die grösste Wilderness-Fläche Italiens, eine Wildnis erstaunlich nah an der Zivilisation und doch von einer fast archaischen Stille geprägt.',
    vgStatArea: 'Park-Fläche',
    vgStatFounded: 'Park-Gründung',
    vgStatPeak: 'Höchster Punkt',
    vgStatCrust: 'Krustentiefe der Gesteine',
    vgTocLabel: 'Inhalt',

    // WETTER page
    wxHeroH1: 'Standort-{em}',
    wxHeroH1Em: 'Prognose',
    wxHeroLede: '7-Tage-Prognose für drei repräsentative Standorte. Im Bergsommer können sich die Verhältnisse zwischen Tal und Höhenlage stark unterscheiden.',
    wxLegendTitle: 'Stützpunkte',
    wxLegendBerg: 'Berghütte, bewirtschaftet',
    wxLegendBivak: 'Schutzhütte, Selbstversorger',
    wxLegendNotlager: 'Notlager oder eingeschränkt',
    wxLegendZerstoert: 'Zerstört',
    wxLegendMeta: 'Wetterdaten Open-Meteo, automatisch aktualisiert.',
    wxAdvisoryTitle: 'Hinweis Bergwetter.',
    wxAdvisoryBody: 'Die Prognose zeigt das wahrscheinliche Wetter, ersetzt aber nicht die kurzfristige Beobachtung vor Ort. Im Sommer entstehen typischerweise nachmittags Gewitter; bei aufziehenden Wolken exponierte Grate und Gipfel meiden.',
    wxLocCicogna: 'Cicogna',
    wxLocPianCavallone: 'Pian Cavallone',
    wxLocBocchettaTerza: 'Bocchetta di Terza',
    wxLocCicognaSub: 'Tal · 800 m',
    wxLocPianCavalloneSub: 'Höhe · 1\'530 m',
    wxLocBocchettaTerzaSub: 'Pass · 1\'836 m',
    wxForecast7d: '7-Tage-Prognose',
    wxLoading: 'Lade Wetterdaten…',
    wxStatTemp: 'Wind',
    wxStatHum: 'Luftfeuchte',
    wxStatEle: 'Höhe',
    wxStatLoc: 'Standort',

    // GASTRONOMIE page
    gastroHeroTitle: 'Gastronomie und Agriturismi',
    gastroHeroLede: '36 validierte Gastronomiebetriebe rund um den Parco Nazionale Val Grande in einer 3D-Karte. Pro Eintrag stehen Adresse, Kontakt, ein Google-Maps-Link sowie ein einzelner GPX-Wegpunkt zum Download bereit.',
    gastroAdvisoryTitle: 'Wichtiger Hinweis.',
    gastroAdvisoryBody: 'Öffnungszeiten und Verfügbarkeit ändern sich saisonal. Vor einem Besuch empfiehlt sich ein Anruf, besonders ausserhalb der Sommersaison. Aktuelle Detailseiten beim',
    gastroAdvisoryLink: 'Parco Nazionale Val Grande',
    gastroAdvisoryEnd: 'verlinkt.',
    gastroLegendTitle: 'Kategorien',
    gastroMapLegendMeta: 'Klick auf einen Punkt für Details und Aktionen.',
    gastroListTitle: 'Liste aller Betriebe',
    gastroListIntro: 'Einträge, basierend auf der validierten Quellliste mit OpenStreetMap-Bestätigung.',
    gastroFilterAll: 'Alle',
    gastroLoading: 'Lade Gastronomie-Daten…',
    gastroError: 'Daten nicht ladbar',
    gastroLoadedSuffix: 'Einträge geladen',
    gastroNoResults: 'Keine Einträge gefunden.',
    gastroCardEmail: 'E-Mail',
    gastroCardWebsite: 'Webseite',
    gastroCardParkLink: 'Park-Eintrag',
    gastroCardMaps: 'Google Maps',
    gastroCardGpx: 'GPX-Wegpunkt',
    catRestaurant: 'Restaurant',
    catTrattoria: 'Trattoria',
    catPizzeria: 'Pizzeria',
    catGaststaette: 'Gaststätte',
    catAgriturismo: 'Ferienbauernhof',
    catCafe: 'Café',
    catDiverse: 'Diverse'
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
    catRifugioAnaalpini: 'Rifugio A.N.A.',
    catBivacco: 'Bivacco (auto-gestione)',
    catBivaccoPark: 'Bivacco del Parco',
    catBivaccoCai: 'Bivacco CAI',
    catBivaccoEgv: 'Bivacco EGV',
    catBivaccoEmergency: 'Bivacco di emergenza',
    catAlpe: 'Alpeggio',
    catBiwak: 'Bivacco',
    sleeps: 'Posti letto',
    statusActive: 'Attivo',
    statusBookingRequired: 'Prenotazione obbligatoria',
    statusRestricted: 'Accesso limitato',
    statusEmergencyOnly: 'Solo emergenza',
    statusClosed: 'Chiuso',
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
    menuValGrande: 'Sul Val Grande',
    menuValGrandeSub: 'Natura, storia, flora e fauna',
    menuHuetten: 'Rifugi',
    menuHuettenSub: 'Bivacchi e rifugi con tracce GPX',
    menuGastro: 'Ristorazione',
    menuGastroSub: 'Ristoranti e agriturismi con tracce GPX',
    menuWetter: 'Meteo',
    menuWetterSub: 'Meteo di montagna e condizioni',
    menuHinweise: 'Avvertenze',
    menuHinweiseSub: 'Attrezzatura e preparazione',
    difficultyNoteLabel: 'Difficoltà nel dettaglio',
    stageProfileNotes: 'Note sul profilo',
    stageDetailsToggle: 'Mostra o nascondi i dettagli',
    // Hütten i18n
    hutsHeroTitle: 'Rifugi e Bivacchi',
    hutsHeroLede: 'Tutti i ricoveri del Parco Nazionale Val Grande su una mappa 3D. Per ogni struttura sono disponibili posizione, categoria, stato e tracce GPX.',
    hutsAdvisoryTitle: 'Avviso importante.',
    hutsAdvisoryBody: 'Per via di indicazioni talvolta contraddittorie sull\u2019uso attuale (chiuso, distrutto o limitato), prima di un\u2019escursione \u00e8 opportuno informarsi direttamente presso il',
    hutsAdvisoryLink: 'Parco Nazionale Val Grande',
    hutsAdvisoryEnd: 'sullo stato del rifugio.',
    hutsLegendTitle: 'Stato',
    hutsListTitle: 'Elenco di tutti i rifugi',
    hutsListIntro: 'in base all\u2019elenco ufficiale del Parco, OpenStreetMap e tracce GPX.',
    hutsFilterAll: 'Tutti',
    hutsCardMap: 'Mappa',
    hutsCardGpx: 'GPX',
    hutsCardEmail: 'E-mail',
    hutsCardWebsite: 'Sito web',
    hutsCardCabin: 'Rifugio',
    hutsCardSleeps: 'posti letto',
    hutsCardCirca: 'ca.',
    hutsCardWinterRoom: 'Locale invernale',
    hutsCardServiced: 'Ristoro',
    hutsCardNoplace: 'Posizione non rilevata, non visibile sulla mappa.',
    catBerghuette: 'Rifugio',
    catBerghuetteSub: 'custodito',
    catSchutzhuette: 'Bivacco',
    catSchutzhuetteSub: 'autogestito',
    statusActive: 'Attivo',
    statusBookingRequired: 'Prenotazione obbligatoria',
    statusRestricted: 'Limitato',
    statusEmergencyOnly: 'Solo emergenza',
    statusClosed: 'Chiuso',
    statusDestroyed: 'Distrutto',
    yes: 's\u00ec',
    no: 'no',

    // INDEX page
    homeEyebrow: 'Parco Nazionale della Val Grande',
    homeHeroH1Pre: 'Trekking nella ',
    homeHeroH1Em: 'pi\u00f9 grande wilderness',
    homeHeroH1Post: ' d\u2019Italia',
    homeHeroLede: 'Itinerari multi-giorno, mappe 3D, profili altimetrici, panoramica dei rifugi. Una raccolta indipendente per escursionisti esperti nella valle pi\u00f9 selvaggia del Piemonte.',
    sectionTouren: 'Itinerari',
    sectionTourenIntro: 'Itinerari escursionistici nel Parco Nazionale della Val Grande con profilo altimetrico, panoramica rifugi e download GPX.',
    sectionHinweise: 'Avvertenze',
    sectionHinweiseIntro: 'Il Val Grande \u00e8 la pi\u00f9 grande wilderness d\u2019Italia. I sentieri possono perdersi, la rete mobile \u00e8 assente in gran parte del parco, il pernottamento avviene in bivacchi autogestiti. Chi affronta queste valli deve essere ben preparato.',
    tourCardCta: 'Vedi itinerario',
    hintValgrandeTitle: 'Sul Val Grande',
    hintValgrandeDesc: 'La pi\u00f9 grande wilderness d\u2019Italia, storia dell\u2019alpeggio e della Resistenza, flora, fauna e geologia. Panoramica del parco in un\u2019unica pagina.',
    hintEquipTitle: 'Equipaggiamento e preparazione',
    hintEquipDesc: 'Lista completa con priorit\u00e0, principio a strati, comportamento nei bivacchi e numeri di emergenza.',
    hintSafetyTitle: 'Sicurezza e tour guidati',
    hintSafetyDesc: 'Area selvaggia. Il Parco raccomanda per i sentieri impegnativi l\u2019accompagnamento di Guide Ufficiali del Parco o Guide Alpine.',
    hintParkTitle: 'Sito ufficiale del Parco',
    hintParkDesc: 'parcovalgrande.it \u00e8 la fonte di riferimento per stato dei rifugi, condizioni dei sentieri, eventi e divieti.',
    hintEmergencyTitle: 'Emergenza 112',
    hintEmergencyDesc: 'Numero unico europeo, soccorso alpino italiano 118, Corpo Forestale 1515. Nel parco spesso senza segnale, annotare le informazioni in anticipo.',
    tourMapLegend: 'Itinerari',
    tourMapLegendMeta: 'Clicca su un itinerario per i dettagli e il link al percorso.',
    mapStyleTerrain: 'Rilievo',
    mapStyleTopo: 'Topo',
    mapStyleSatellite: 'Satellite',
    statusLoading: 'Caricamento itinerari',
    statusLoaded: 'Itinerari caricati',

    // VAL-GRANDE page
    vgHeroEyebrow: 'Parco Nazionale della Val Grande',
    vgHeroH1: 'Dove le Alpi hanno ritrovato il loro {em}',
    vgHeroH1Em: 'silenzio',
    vgHeroLede: 'Tra i monti dell\u2019Ossola, il Verbano, la Val Vigezzo, la Valle Intrasca e la Valle Cannobina si trova uno dei paesaggi pi\u00f9 suggestivi del Nord Italia. Il parco \u00e8 ufficialmente la pi\u00f9 grande wilderness d\u2019Italia, vicina alla civilt\u00e0 eppure caratterizzata da un silenzio quasi arcaico.',
    vgStatArea: 'Superficie del parco',
    vgStatFounded: 'Fondazione del parco',
    vgStatPeak: 'Punto pi\u00f9 alto',
    vgStatCrust: 'Profondit\u00e0 crostale delle rocce',
    vgTocLabel: 'Indice',

    // WETTER page
    wxHeroH1: '{em} per posizione',
    wxHeroH1Em: 'Previsioni',
    wxHeroLede: 'Previsioni a 7 giorni per tre posizioni rappresentative. In estate le condizioni tra fondovalle e quota possono differire notevolmente.',
    wxLegendTitle: 'Strutture',
    wxLegendBerg: 'Rifugio, custodito',
    wxLegendBivak: 'Bivacco, autogestito',
    wxLegendNotlager: 'Solo emergenza o limitato',
    wxLegendZerstoert: 'Distrutto',
    wxLegendMeta: 'Dati meteo Open-Meteo, aggiornamento automatico.',
    wxAdvisoryTitle: 'Avviso meteo di montagna.',
    wxAdvisoryBody: 'Le previsioni mostrano il tempo probabile, ma non sostituiscono l\u2019osservazione diretta sul posto. In estate sono frequenti temporali pomeridiani; con nuvole in sviluppo evitare creste e cime esposte.',
    wxLocCicogna: 'Cicogna',
    wxLocPianCavallone: 'Pian Cavallone',
    wxLocBocchettaTerza: 'Bocchetta di Terza',
    wxLocCicognaSub: 'Fondovalle \u00b7 800 m',
    wxLocPianCavalloneSub: 'Quota \u00b7 1.530 m',
    wxLocBocchettaTerzaSub: 'Passo \u00b7 1.836 m',
    wxForecast7d: 'Previsioni a 7 giorni',
    wxLoading: 'Caricamento dati meteo\u2026',
    wxStatTemp: 'Vento',
    wxStatHum: 'Umidit\u00e0',
    wxStatEle: 'Quota',
    wxStatLoc: 'Posizione',

    // GASTRONOMIA page
    gastroHeroTitle: 'Ristorazione e Agriturismi',
    gastroHeroLede: '36 strutture gastronomiche validate intorno al Parco Nazionale Val Grande su una mappa 3D. Per ogni struttura sono disponibili indirizzo, contatti, un link a Google Maps e un singolo waypoint GPX da scaricare.',
    gastroAdvisoryTitle: 'Avviso importante.',
    gastroAdvisoryBody: 'Gli orari e la disponibilit\u00e0 cambiano stagionalmente. Prima di una visita si consiglia una telefonata, soprattutto fuori stagione estiva. Schede di dettaglio aggiornate sul',
    gastroAdvisoryLink: 'Parco Nazionale Val Grande',
    gastroAdvisoryEnd: 'in link.',
    gastroLegendTitle: 'Categorie',
    gastroMapLegendMeta: 'Clicca su un punto per dettagli e azioni.',
    gastroListTitle: 'Elenco di tutte le strutture',
    gastroListIntro: 'voci, in base all\u2019elenco validato con conferma OpenStreetMap.',
    gastroFilterAll: 'Tutti',
    gastroLoading: 'Caricamento dati gastronomia\u2026',
    gastroError: 'Dati non caricabili',
    gastroLoadedSuffix: 'voci caricate',
    gastroNoResults: 'Nessuna voce trovata.',
    gastroCardEmail: 'E-mail',
    gastroCardWebsite: 'Sito web',
    gastroCardParkLink: 'Scheda Parco',
    gastroCardMaps: 'Google Maps',
    gastroCardGpx: 'Waypoint GPX',
    catRestaurant: 'Ristorante',
    catTrattoria: 'Trattoria',
    catPizzeria: 'Pizzeria',
    catGaststaette: 'Osteria',
    catAgriturismo: 'Agriturismo',
    catCafe: 'Caff\u00e8',
    catDiverse: 'Varie'
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
    catRifugioAnaalpini: 'Mountain hut A.N.A.',
    catBivacco: 'Bivacco (self-catering)',
    catBivaccoPark: 'Park bivouac',
    catBivaccoCai: 'CAI bivouac',
    catBivaccoEgv: 'EGV bivouac',
    catBivaccoEmergency: 'Emergency bivouac',
    catAlpe: 'Alpine pasture',
    catBiwak: 'Bivouac',
    sleeps: 'Beds',
    statusActive: 'Active',
    statusBookingRequired: 'Booking required',
    statusRestricted: 'Restricted access',
    statusEmergencyOnly: 'Emergency shelter only',
    statusClosed: 'Closed',
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
    menuValGrande: 'About Val Grande',
    menuValGrandeSub: 'Nature, history, flora and fauna',
    menuHuetten: 'Huts',
    menuHuettenSub: 'Bivouacs and refuges with GPX',
    menuGastro: 'Dining',
    menuGastroSub: 'Restaurants and farm stays with GPX',
    menuWetter: 'Weather',
    menuWetterSub: 'Mountain weather and conditions',
    menuHinweise: 'Tips',
    menuHinweiseSub: 'Equipment and preparation',
    difficultyNoteLabel: 'Difficulty in detail',
    stageProfileNotes: 'Profile notes',
    stageDetailsToggle: 'Show or hide details',
    // Hütten i18n
    hutsHeroTitle: 'Mountain huts and shelters',
    hutsHeroLede: 'All shelters in Parco Nazionale Val Grande on one 3D map. For every hut you find location, category, status and GPX data to download.',
    hutsAdvisoryTitle: 'Important notice.',
    hutsAdvisoryBody: 'Due to partly contradictory information on current use (closed, destroyed or restricted), before any hike check directly with the',
    hutsAdvisoryLink: 'Parco Nazionale Val Grande',
    hutsAdvisoryEnd: 'about the status of the hut.',
    hutsLegendTitle: 'Status',
    hutsListTitle: 'Complete list of huts',
    hutsListIntro: 'based on the official park source list, OpenStreetMap and GPX tracks.',
    hutsFilterAll: 'All',
    hutsCardMap: 'Map',
    hutsCardGpx: 'GPX',
    hutsCardEmail: 'Email',
    hutsCardWebsite: 'Website',
    hutsCardCabin: 'Hut',
    hutsCardSleeps: 'beds',
    hutsCardCirca: 'approx.',
    hutsCardWinterRoom: 'Winter room',
    hutsCardServiced: 'Catering',
    hutsCardNoplace: 'Location not recorded, not shown on map.',
    catBerghuette: 'Mountain hut',
    catBerghuetteSub: 'manned',
    catSchutzhuette: 'Mountain shelter',
    catSchutzhuetteSub: 'self-service',
    statusActive: 'Active',
    statusBookingRequired: 'Booking required',
    statusRestricted: 'Restricted',
    statusEmergencyOnly: 'Emergency only',
    statusClosed: 'Closed',
    statusDestroyed: 'Destroyed',
    yes: 'yes',
    no: 'no',

    // INDEX page
    homeEyebrow: 'Parco Nazionale della Val Grande',
    homeHeroH1Pre: 'Trekking through ',
    homeHeroH1Em: 'Italy\u2019s wildest',
    homeHeroH1Post: ' valley',
    homeHeroLede: 'Multi-day routes, 3D maps, elevation profiles, mountain hut overview. An independent collection for experienced mountain hikers in the wildest valley of Piedmont.',
    sectionTouren: 'Tours',
    sectionTourenIntro: 'Hiking routes through Parco Nazionale della Val Grande with elevation profile, hut overview and GPX download.',
    sectionHinweise: 'Tips',
    sectionHinweiseIntro: 'Val Grande is considered Italy\u2019s largest contiguous wilderness area. Paths can fade away, mobile coverage is largely absent, overnight stays are in self-service shelters. Anyone heading out should be well prepared.',
    tourCardCta: 'View tour',
    hintValgrandeTitle: 'About Val Grande',
    hintValgrandeDesc: 'Italy\u2019s largest wilderness, history of alpine pastoralism and the Resistance, flora, fauna and geology. Park overview in one piece.',
    hintEquipTitle: 'Equipment & preparation',
    hintEquipDesc: 'Complete packing list with priorities, layering principle, behaviour in shelters and emergency numbers.',
    hintSafetyTitle: 'Safety & guided tours',
    hintSafetyDesc: 'Wilderness area. The Park recommends accompaniment by certified Park Guides or Mountain Guides for demanding routes.',
    hintParkTitle: 'Official park website',
    hintParkDesc: 'parcovalgrande.it is the authoritative source for hut status, trail conditions, events and restrictions.',
    hintEmergencyTitle: 'Emergency 112',
    hintEmergencyDesc: 'European emergency number, Italian mountain rescue 118, Forestry Corps 1515. Often no signal in the valley, write down information in advance.',
    tourMapLegend: 'Routes',
    tourMapLegendMeta: 'Click a route for details and a link to the tour page.',
    mapStyleTerrain: 'Terrain',
    mapStyleTopo: 'Topo',
    mapStyleSatellite: 'Satellite',
    statusLoading: 'Loading routes',
    statusLoaded: 'Routes loaded',

    // VAL-GRANDE page
    vgHeroEyebrow: 'Parco Nazionale della Val Grande',
    vgHeroH1: 'Where the Alps reclaimed their {em}',
    vgHeroH1Em: 'silence',
    vgHeroLede: 'Between the Ossola mountains, Lake Maggiore, the Vigezzo valley, Valle Intrasca and Valle Cannobina lies one of the most striking landscapes in northern Italy. The park is officially Italy\u2019s largest wilderness area, surprisingly close to civilisation yet shaped by an almost archaic silence.',
    vgStatArea: 'Park area',
    vgStatFounded: 'Park founded',
    vgStatPeak: 'Highest point',
    vgStatCrust: 'Crustal depth of bedrock',
    vgTocLabel: 'Contents',

    // WETTER page
    wxHeroH1: 'Location {em}',
    wxHeroH1Em: 'forecast',
    wxHeroLede: '7-day forecast for three representative locations. In summer, conditions between valley floor and altitude can differ significantly.',
    wxLegendTitle: 'Stations',
    wxLegendBerg: 'Mountain hut, manned',
    wxLegendBivak: 'Mountain shelter, self-service',
    wxLegendNotlager: 'Emergency or restricted',
    wxLegendZerstoert: 'Destroyed',
    wxLegendMeta: 'Weather data Open-Meteo, automatic update.',
    wxAdvisoryTitle: 'Mountain weather notice.',
    wxAdvisoryBody: 'The forecast shows the most likely weather but does not replace short-term observation on the ground. In summer thunderstorms typically develop in the afternoon; if clouds build up, avoid exposed ridges and summits.',
    wxLocCicogna: 'Cicogna',
    wxLocPianCavallone: 'Pian Cavallone',
    wxLocBocchettaTerza: 'Bocchetta di Terza',
    wxLocCicognaSub: 'Valley \u00b7 800 m',
    wxLocPianCavalloneSub: 'Altitude \u00b7 1,530 m',
    wxLocBocchettaTerzaSub: 'Pass \u00b7 1,836 m',
    wxForecast7d: '7-day forecast',
    wxLoading: 'Loading weather data\u2026',
    wxStatTemp: 'Wind',
    wxStatHum: 'Humidity',
    wxStatEle: 'Altitude',
    wxStatLoc: 'Location',

    // DINING page
    gastroHeroTitle: 'Dining and farm stays',
    gastroHeroLede: '36 validated dining venues around Parco Nazionale Val Grande on a 3D map. For every entry you find address, contact, a Google Maps link and a single GPX waypoint to download.',
    gastroAdvisoryTitle: 'Important notice.',
    gastroAdvisoryBody: 'Opening hours and availability change seasonally. A phone call before a visit is recommended, especially outside the summer season. Up-to-date detail pages on the',
    gastroAdvisoryLink: 'Parco Nazionale Val Grande',
    gastroAdvisoryEnd: 'website.',
    gastroLegendTitle: 'Categories',
    gastroMapLegendMeta: 'Click a marker for details and actions.',
    gastroListTitle: 'Complete venue list',
    gastroListIntro: 'entries, based on the validated source list with OpenStreetMap confirmation.',
    gastroFilterAll: 'All',
    gastroLoading: 'Loading dining data\u2026',
    gastroError: 'Could not load data',
    gastroLoadedSuffix: 'entries loaded',
    gastroNoResults: 'No entries found.',
    gastroCardEmail: 'Email',
    gastroCardWebsite: 'Website',
    gastroCardParkLink: 'Park entry',
    gastroCardMaps: 'Google Maps',
    gastroCardGpx: 'GPX waypoint',
    catRestaurant: 'Restaurant',
    catTrattoria: 'Trattoria',
    catPizzeria: 'Pizzeria',
    catGaststaette: 'Inn',
    catAgriturismo: 'Farm stay',
    catCafe: 'Caf\u00e9',
    catDiverse: 'Other'
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
  // Apply to placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  // Apply SEO meta tags from page-level config (window.PAGE_SEO)
  applySeoTranslations();
}

// SEO and schema.org meta tags update per language
function applySeoTranslations() {
  const seo = window.PAGE_SEO;
  if (!seo) return;
  const data = seo[currentLang] || seo.de;
  if (!data) return;

  // <title>
  if (data.title) document.title = data.title;

  // <meta name="description"> + og + twitter description
  if (data.description) {
    setMeta('name', 'description', data.description);
    setMeta('property', 'og:description', data.description);
    setMeta('name', 'twitter:description', data.description);
  }
  if (data.title) {
    setMeta('property', 'og:title', data.title);
    setMeta('name', 'twitter:title', data.title);
  }
  // og:locale
  const localeMap = { de: 'de_DE', it: 'it_IT', en: 'en_US' };
  setMeta('property', 'og:locale', localeMap[currentLang] || 'de_DE');

  // Update JSON-LD if present
  if (data.jsonLd) {
    const ld = document.querySelector('script[type="application/ld+json"][data-page-jsonld]');
    if (ld) ld.textContent = JSON.stringify(data.jsonLd);
  }
}

function setMeta(attr, name, value) {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function initLang() {
  // Priority: URL hash #lang=xx > localStorage > default 'de'
  let lang = 'de';
  try {
    const hashMatch = (window.location.hash || '').match(/[#&]lang=(de|it|en)/i);
    if (hashMatch) {
      lang = hashMatch[1].toLowerCase();
    } else {
      const stored = localStorage.getItem('vg-lang');
      if (stored && I18N[stored]) lang = stored;
    }
  } catch (e) { /* fallback to de */ }
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
    path.endsWith('/val-grande.html') ? 'valgrande' :
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
      key: 'valgrande',
      href: pathPrefix + 'val-grande.html',
      icon: '<path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>',
      titleKey: 'menuValGrande',
      subKey: 'menuValGrandeSub'
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

  // Determine path prefix (in /routes/, we need to go up one level)
  const inSubdir = window.location.pathname.includes('/routes/');
  const homeUrl = inSubdir ? '../index.html' : 'index.html';

  brand.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    const icon = brand.querySelector('.topbar-icon');
    // If click was on the logo icon (square with mountain), go home
    if (icon && icon.contains(target)) {
      window.location.href = homeUrl;
      return;
    }
    // Otherwise toggle menu (name, chevron, padding area)
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
