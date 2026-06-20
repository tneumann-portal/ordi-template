/**
 * ORDINATION WEBSITE – KONFIGURATIONSDATEI
 * ==========================================
 * Hier alle Inhalte der Ordination eintragen.
 * Die Website liest diese Datei automatisch beim Laden.
 * 
 * Nach Änderungen: Datei speichern → fertig. Kein Deploy nötig.
 */

const ORDI_CONFIG = {

  // ── GRUNDDATEN ──────────────────────────────────────────────
  name:        "Ordination Dr. Neumann",        // Anzeigename in der Navigationsleiste
  shortName:   "Dr. Neumann",                   // Kurzer Name (für Footer, Titel etc.)
  specialty:   "Gynäkologie und Geburtshilfe",  // Fachrichtung
  city:        "Wien",
  district:    "1180 Wien · 18. Bezirk",        // Anzeige unter Specialty

  // ── FARBE ───────────────────────────────────────────────────
  // Akzentfarbe der Ordination (alle Buttons, Überschriften, Highlights)
  // Tipp: Wähle eine satte, gut lesbare Farbe. Helle Pastelltöne funktionieren schlecht.
  // Beispiele: #b85c6e (Rose), #2d6a4f (Grün), #1d4e89 (Blau), #6b3fa0 (Violett)
  colorPrimary:   "#b85c6e",
  colorPrimaryDark: "#8a3f51",   // Etwas dunkler für Hover-Effekte (ca. 20% dunkler)
  colorPrimaryLight: "#f7eef0",  // Sehr hell für Hintergründe (fast weiß)
  colorPrimaryMist:  "#fdf5f6",  // Noch heller für große Flächen


  font: "classic",

  sections: {
    stats: true,
    portal: true,
    team: true,
    partner: true,
    reviews: true,
  },

  reviews: [
    { stars: 5, name: "Lejla B.", text: "Fr. Dr. Neumann und Hr. Dr. Neumann sind mit Abstand die zwei nettesten Ärzte die ich je erlebt habe. In ihrer Ordination fuehlt man sich wie in einer Wohlfühloase. Ich empfehle diese Ordination vom ganzen Herzen.", date: "DocFinder" },
    { stars: 5, name: "Patientin", text: "Einer der wenigen Gynäkologen die wissen dass man Frauen zuhören muss. Dr. Neumann ist ein Arzt mit viel Erfahrung und scharfem Blick fürs Wesentliche. Kurze Wartezeiten, da bleibt man gerne.", date: "DocFinder" },
    { stars: 5, name: "Patientin", text: "Super Arzt. Sehr kompetent und freundlich. Hat mich wegen Endometriose operiert und danach super betreut. Sehr empfehlenswert!", date: "DocFinder" },
  ],

  // ── PORTAL ──────────────────────────────────────────────────
  // Falls kein Portal vorhanden: null
  portalUrl: "https://neumann-portal-frontend.onrender.com",

  // ── KONTAKT ─────────────────────────────────────────────────
  address:   "Hofstattgasse 17/3",
  zip:       "1180",
  cityName:  "Wien",
  phone:     "+43 1 470 65 59",
  email:     "ordi@frauenarzt-neumann.at",
  website:   "https://www.frauenarzt-neumann.at",

  // ── ANFAHRT ─────────────────────────────────────────────────
  // Google Maps Embed-URL (aus Google Maps → Teilen → Karte einbetten → Link kopieren)
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.535!2d16.3402!3d48.2265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07851b5ae4e5%3A0x9f8e6c7a2b3d1234!2sHofstattgasse%2017%2C%201180%20Wien!5e0!3m2!1sde!2sat!4v1700000000000!5m2!1sde!2sat",
  mapsHint:  "Etwa eine Minute Gehweg vom Aumannplatz. Straßenbahnlinien 40 und 41 vom Schottentor.",

  // ── SPRACHEN ────────────────────────────────────────────────
  // Aktive Sprachen: mindestens ["de"], optional ["de","hu","en"]
  languages: ["de", "hu", "en"],
  defaultLang: "de",

  // ── ÄRZTE ───────────────────────────────────────────────────
  // Beliebig viele Ärzte eintragbar
  doctors: [
    {
      id:       "michael",
      title:    "OA Dr.",
      name:     "Michael Neumann",
      role:     { de: "Frauenarzt", hu: "Nőgyógyász", en: "Gynaecologist" },
      initials: "MN",
      color:    "#22c55e",   // Farbe im Kalender (grün)
      days: {
        de: "Dienstag & Mittwoch",
        hu: "Kedd & Szerda",
        en: "Tuesday & Wednesday"
      },
      hours: {
        de: "14:00 – 19:00 Uhr",
        hu: "14:00 – 19:00",
        en: "2:00 pm – 7:00 pm"
      },
      insurance: {
        de: "BVAEB · KFA · Privat",
        hu: "BVAEB · KFA · Magán",
        en: "BVAEB · KFA · Private"
      },
      bio: {
        de: "OA Dr. Michael Neumann hat in seiner beruflichen Laufbahn über 8.000 Schwangerschaften und Geburten begleitet und über 5.000 Operationen durchgeführt. Seine Patientinnen schätzen neben seiner beruflichen Kompetenz auch seine freundliche, einfühlsame und humorvolle Art.<br><br>Von 1980 bis 2014 war er als Gynäkologe am Wiener Wilhelminenspital tätig, seit 1990 als Oberarzt. Er ist Belegarzt im Rudolfinerhaus und Sanatorium Döbling.",
        hu: "OA Dr. Michael Neumann szakmai pályafutása során több mint 8 000 terhességet és szülést kísért végig, és több mint 5 000 műtétet végzett.",
        en: "OA Dr. Michael Neumann has accompanied over 8,000 pregnancies and births and performed over 5,000 operations throughout his career."
      },
      tags: {
        de: ["Hormonberatung","Ultraschalldiagnostik","Schwangerschaft","Kinderwunsch","BVAEB · KFA · Privat"],
        hu: ["Hormontanácsadás","Ultrahang","Terhesség","Meddőség","BVAEB · KFA · Magán"],
        en: ["Hormone counselling","Ultrasound","Pregnancy","Fertility","BVAEB · KFA · Private"]
      }
    },
    {
      id:       "etelka",
      title:    "OÄ Dr.",
      name:     "Etelka Neumann",
      role:     { de: "Frauenärztin", hu: "Nőgyógyász", en: "Gynaecologist" },
      initials: "EN",
      color:    "#f43f5e",   // Farbe im Kalender (rot/rose)
      days: {
        de: "Montag & Donnerstag",
        hu: "Hétfő & Csütörtök",
        en: "Monday & Thursday"
      },
      hours: {
        de: "11:00 – 18:00 Uhr",
        hu: "11:00 – 18:00",
        en: "11:00 am – 6:00 pm"
      },
      insurance: {
        de: "KFA · Privat · Magyar",
        hu: "KFA · Magán · Magyar",
        en: "KFA · Private · Hungarian"
      },
      bio: {
        de: "OÄ Dr. Etelka Neumann weist eine über 30-jährige Erfahrung in der Geburtshilfe und Frauenheilkunde auf. Die Ordination wird auch auf Ungarisch angeboten.",
        hu: "OÄ Dr. Etelka Neumann több mint 30 éves tapasztalattal rendelkezik a szülészetben és nőgyógyászatban. A rendelő magyar nyelven is elérhető.",
        en: "OÄ Dr. Etelka Neumann has over 30 years of experience. The practice is also available in Hungarian."
      },
      tags: {
        de: ["Hormone","First Love Beratung","Kinderwunsch","Schwangerschaft","KFA · Privat · Magyar"],
        hu: ["Hormonok","Első vizsgálat","Meddőség","Terhesség","KFA · Magán · Magyar"],
        en: ["Hormones","First consultation","Fertility","Pregnancy","KFA · Private · Hungarian"]
      }
    }
  ],

  // ── STATISTIKEN (Hero) ──────────────────────────────────────
  stats: [
    { number: "8.000+", label: { de: "Geburten begleitet", hu: "szülés kísérve", en: "births accompanied" } },
    { number: "5.000+", label: { de: "Operationen", hu: "műtét elvégezve", en: "operations" } },
    { number: "35+",    label: { de: "Jahre Erfahrung", hu: "év tapasztalat", en: "years of experience" } },
  ],

  // ── LEISTUNGEN ──────────────────────────────────────────────
  // icon: Name eines Tabler Icons (https://tabler.io/icons)
  services: [
    { icon: "ti-clipboard-list",  name: { de: "Vorsorgeuntersuchung",        hu: "Megelőző vizsgálat",      en: "Preventive check-up" },
      desc: { de: "Regelmäßige gynäkologische Untersuchungen und Krebsvorsorge.", hu: "Rendszeres nőgyógyászati vizsgálatok és rákszűrés.", en: "Regular gynaecological examinations and cancer screening." }},
    { icon: "ti-ripple",          name: { de: "Ultraschalldiagnostik",        hu: "Ultrahang-diagnosztika",  en: "Ultrasound diagnostics" },
      desc: { de: "Modernste Ultraschalldiagnostik mit Farbdoppler.", hu: "Korszerű ultrahang-diagnosztika színes Doppler-rel.", en: "State-of-the-art ultrasound with colour Doppler." }},
    { icon: "ti-heart",           name: { de: "Schwangerschaft & Geburt",     hu: "Terhesség & szülés",      en: "Pregnancy & birth" },
      desc: { de: "Einfühlsame Begleitung durch alle Phasen der Schwangerschaft.", hu: "Érzékeny kíséret a terhesség minden szakaszán.", en: "Caring accompaniment through all phases of pregnancy." }},
    { icon: "ti-pill",            name: { de: "Hormone & Verhütung",          hu: "Hormonok & fogamzásgátlás", en: "Hormones & contraception" },
      desc: { de: "Individuelle Hormonberatung und Verhütungsberatung.", hu: "Egyéni hormontanácsadás és fogamzásgátlás.", en: "Individual hormone and contraception counselling." }},
    { icon: "ti-baby-carriage",   name: { de: "Kinderwunsch",                 hu: "Gyermekvállalás",         en: "Family planning" },
      desc: { de: "Beratung und Begleitung. Kooperation mit Kinderwunschzentren.", hu: "Tanácsadás és kíséret. Együttműködés meddőségi központokkal.", en: "Counselling and support. Cooperation with fertility centres." }},
    { icon: "ti-activity",        name: { de: "Endometriose & Myome",         hu: "Endometriózis & miómák",  en: "Endometriosis & fibroids" },
      desc: { de: "Diagnose und Therapie chronischer Unterleibsschmerzen.", hu: "Krónikus alhasi fájdalmak diagnózisa és kezelése.", en: "Diagnosis and treatment of chronic pelvic pain." }},
    { icon: "ti-sun",             name: { de: "Wechseljahre",                 hu: "Klimax",                  en: "Menopause" },
      desc: { de: "Ganzheitliche Begleitung und Therapie.", hu: "Holisztikus kíséret és terápia.", en: "Holistic accompaniment and therapy." }},
    { icon: "ti-star",            name: { de: "Jugendgynäkologie",            hu: "Fiatal nőgyógyászat",     en: "Adolescent gynaecology" },
      desc: { de: "Einfühlsame First-Love-Beratung für junge Patientinnen.", hu: "Érzékeny first-love tanácsadás fiatal pácienseknek.", en: "Sensitive first-love counselling for young patients." }},
  ],

  // ── TEXTE (mehrsprachig) ────────────────────────────────────
  texts: {
    hero: {
      eyebrow: { de: "Gynäkologie · Wien 18", hu: "Nőgyógyászat · Bécs 18.", en: "Gynaecology · Vienna 18th" },
      h1:      { de: "Frauenheilkunde<br>mit <em>Erfahrung</em><br>und Herz.", hu: "Nőgyógyászat<br><em>tapasztalattal</em><br>és szívvel.", en: "Women's health<br>with <em>experience</em><br>and heart." },
      sub:     { de: "Wir betreuen Frauen aller Altersgruppen und Nationen – seit über 35 Jahren.", hu: "Minden korú és nemzetiségű nőbeteget ellátunk – több mint 35 éve.", en: "We care for women of all ages and nationalities – for over 35 years." },
      cta1:    { de: "Termin online anfragen", hu: "Időpontot kérek online", en: "Book appointment online" },
      cta2:    { de: "Über die Ordination",   hu: "A rendelőről",           en: "About the practice" },
    },
    nav: {
      services: { de: "Leistungen",  hu: "Szolgáltatások", en: "Services" },
      about:    { de: "Über uns",    hu: "Rólunk",          en: "About us" },
      contact:  { de: "Kontakt",     hu: "Kapcsolat",       en: "Contact" },
      portal:   { de: "Online Portal", hu: "Online Portál", en: "Online Portal" },
    },
    services: {
      eyebrow: { de: "Unser Leistungsspektrum", hu: "Szolgáltatásaink",   en: "Our services" },
      h2:      { de: "Umfassende Betreuung<br>in jeder Lebensphase.", hu: "Átfogó ellátás<br>az élet minden szakaszában.", en: "Comprehensive care<br>at every stage of life." },
    },
    team: {
      eyebrow: { de: "Das Team",       hu: "A csapat",       en: "The team" },
      h2:      { de: "Zwei Ärzte.<br>Eine Leidenschaft.", hu: "Két orvos.<br>Egy szenvedély.", en: "Two doctors.<br>One passion." },
      tags:    { de: "Schwerpunkte",   hu: "Szakterületek",  en: "Specialisations" },
    },
    portal: {
      eyebrow: { de: "Digitale Ordination", hu: "Digitális rendelő",    en: "Digital practice" },
      h2:      { de: "Termin anfragen,<br>Rezept bestellen –<br>jederzeit online.", hu: "Időpontot kérni,<br>receptet rendelni –<br>bármikor online.", en: "Request appointments,<br>order prescriptions –<br>anytime online." },
      sub:     { de: "Unser Patientenportal ist rund um die Uhr verfügbar.", hu: "Betegportálunk a nap 24 órájában elérhető.", en: "Our patient portal is available 24/7." },
      features: {
        de: ["Termin online anfragen – in wenigen Minuten","Rezeptanfragen bequem von zu Hause","Befundabholung – wir benachrichtigen Sie","Verfügbar auf Deutsch, Ungarisch und Englisch"],
        hu: ["Online időpontfoglalás – percek alatt","Receptkérés otthonról kényelmesen","Leletátvétel – automatikusan értesítjük","Elérhető németül, magyarul és angolul"],
        en: ["Book an appointment online – in minutes","Prescription requests from home","Result collection – we notify you","Available in German, Hungarian and English"],
      },
      cta:   { de: "Portal öffnen →",       hu: "Portál megnyitása →",    en: "Open portal →" },
      badge: { de: "Sicher, diskret & immer verfügbar", hu: "Biztonságos, diszkrét & mindig elérhető", en: "Secure, discreet & always available" },
    },
    contact: {
      eyebrow:     { de: "Anfahrt & Kontakt",      hu: "Megközelíthetőség & kapcsolat", en: "Directions & contact" },
      h2:          { de: "Wir freuen uns<br>auf Ihren Besuch.", hu: "Örömmel várjuk<br>látogatását.", en: "We look forward<br>to your visit." },
      addr_title:  { de: "Adresse",                hu: "Cím",              en: "Address" },
      tel_title:   { de: "Telefon & E-Mail",        hu: "Telefon & E-mail", en: "Phone & Email" },
      tel_hours:   { de: "während der Ordinationszeiten", hu: "rendelési időben", en: "during opening hours" },
      times_title: { de: "Ordinationszeiten",       hu: "Rendelési idők",   en: "Opening hours" },
      cta:         { de: "Online Termin anfragen",  hu: "Online időpontfoglalás", en: "Book appointment online" },
    },
    footer: {
      impressum:   { de: "Impressum",           hu: "Impresszum",       en: "Legal notice" },
      datenschutz: { de: "Datenschutz",         hu: "Adatvédelem",      en: "Privacy policy" },
      partner:     { de: "Partner",             hu: "Partnerek",        en: "Partners" },
    },
  },

  // ── IMPRESSUM ───────────────────────────────────────────────
  impressum: {
    name:      "OA Dr. Michael Neumann",
    title:     "Facharzt für Gynäkologie und Geburtshilfe",
    address:   "Hofstattgasse 17/3, 1180 Wien",
    phone:     "+43 1 470 65 59",
    email:     "ordi@frauenarzt-neumann.at",
    website:   "www.frauenarzt-neumann.at",
    chamber:   "Ärztekammer für Wien",
    law:       "Ärztegesetz 1998 (ÄrzteG)",
  },

};
