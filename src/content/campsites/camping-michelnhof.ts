import type { CampsiteConfig } from "../types";

/**
 * Camping Michelnhof — St. Johann in Tirol, am Fuß des Wilden Kaisers.
 * Inhalte zu 100 % aus raw/digest abgeleitet. Eigene Landwirtschaft (Mutterkühe),
 * Stüberl mit Kaiserblick, ganzjährig geöffnet. Preise wörtlich aus prices.md.
 */
const IMG = "/campsites/camping-michelnhof";

const campingMichelnhof: CampsiteConfig = {
  name: "Camping Michelnhof",
  shortName: "Michelnhof",
  slug: "camping-michelnhof",
  ort: "St. Johann in Tirol",
  region: "Tirol",
  brandKind: "Camping am Bauernhof",
  regionLong: "Region St. Johann in Tirol · Wilder Kaiser · Österreich",

  heroVariant: "center",

  claim: "Dein Bauernhof-Camping vor dem Wilden Kaiser",
  claimEmphasis: "vor dem Wilden Kaiser",
  emailDetail: "eure eigene Landwirtschaft mit den Mutterkühen zum Anfassen",
  intro:
    "Unser kleiner, feiner Familienbetrieb liegt zwischen St. Johann und Kitzbühel, vor der Kulisse des Wilden Kaisers — mit eigener Landwirtschaft, modernem Komfort und Platz für Zelt, Wohnwagen und Wohnmobil.",

  statement: {
    text: "Eigene Landwirtschaft, hofeigene Tiere und der Wilde Kaiser vor dem Vorzelt — das ist Camping am Michelnhof.",
    emphasis: "der Wilde Kaiser",
  },

  pillars: [
    {
      title: "Eigene Landwirtschaft",
      text: "Hofeigene Mutterkühe mit ihren Kälbern, im Sommer auf der Alm im Brixental — Tierwohl, das man spürt.",
      image: { src: `${IMG}/kids-24d8e0683e.webp`, alt: "Mutterkühe des Camping Michelnhof auf der Alm vor blauem Himmel" },
    },
    {
      title: "Kaiserblick inklusive",
      text: "Vom Stüberl und vielen Plätzen blickst du direkt auf die Felswände des Wilden Kaisers.",
      image: { src: `${IMG}/amenity-d9aeb2bc16.webp`, alt: "Sonnenterrasse des Stüberls mit Blick auf den Wilden Kaiser" },
    },
    {
      title: "Familiär geführt",
      text: "Ein kleiner, feiner Familienbetrieb, ganzjährig geöffnet (außer November) und auch im Winter leicht erreichbar.",
      image: { src: `${IMG}/gallery-526fa24986.webp`, alt: "Kinderspielplatz am Camping Michelnhof mit Blick auf den Wilden Kaiser" },
    },
  ],

  usps: ["Eigene Landwirtschaft", "Ganzjährig geöffnet (außer November)", "Kaiserblick vom Stüberl", "Alle Plätze mit Strom", "Gratis WLAN", "Hunde willkommen"],

  trust: {
    heading: "Camping mit Hof und Herz",
    headingEmphasis: "Hof und Herz",
    intro:
      "Ein echter Familienbetrieb mit eigener Mutterkuhhaltung, einem Stüberl mit Kaiserblick und Plätzen, die ganzjährig geöffnet (außer November) sind — vom Wintercamper bis zur Sommerfamilie.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/kids-a0981f59f4.webp`, alt: "Der historische Michelnhof in St. Johann in Tirol vor den Bergen" },
  },

  breather: {
    image: { src: `${IMG}/gallery-2fe7fe827b.webp`, alt: "Magnolienblüten vor dem schneebedeckten Wilden Kaiser" },
    line: "Der Wilde Kaiser — von früh bis spät im Blick.",
  },

  camping: {
    heading: "Camping am Michelnhof",
    intro:
      "Alle Plätze mit Stromanschluss, ein Stüberl mit Sonnenterrasse und moderne Sanitäranlagen mit Fußbodenheizung — für Sommer- wie Wintercamping, vom Zelt bis zum Wohnmobil.",
    features: [
      {
        title: "Stellplätze vor dem Kaiser",
        text: "Ebene Plätze mit Stromanschluss, eingebettet in saftige Wiesen vor dem Panorama des Wilden Kaisers.",
        image: { src: `${IMG}/gallery-e48c421cbe.webp`, alt: "Campingplatz Michelnhof mit Stellplätzen und Weiden vor dem Wilden Kaiser" },
      },
      {
        title: "Camping am Hof",
        text: "Dein Platz direkt beim historischen Michelnhof — Bauernhof-Atmosphäre mit Bergblick inklusive.",
        image: { src: `${IMG}/gallery-220388f7aa.webp`, alt: "Wohnwagen vor dem historischen Bauernhaus des Camping Michelnhof" },
      },
      {
        title: "Das Michelnhof-Stüberl",
        text: "Frische Spezialitäten auf der Sonnenterrasse mit Kaiserblick — beliebt bei Gästen und Einheimischen.",
        image: { src: `${IMG}/gallery-a73fe62eee.webp`, alt: "Sonnenterrasse des Michelnhof-Stüberls mit rustikalen Holzbänken" },
      },
      {
        title: "Wintercamping",
        text: "Auch im Winter leicht erreichbar — mit gratis Skibus zum Harschbichl und Loipen in wenigen Minuten.",
        image: { src: `${IMG}/gallery-af656f0069.webp`, alt: "Wintercamping am Michelnhof im Abendrot des Wilden Kaisers" },
      },
      {
        title: "Wohnmobil-Service",
        text: "Wohnmobilgerechte Stellplätze mit Ver- und Entsorgung — Gasflaschen in allen Größen vorrätig.",
        image: { src: `${IMG}/gallery-d42e8f6f35.webp`, alt: "Wohnmobil auf einem Stellplatz am Camping Michelnhof in der Abenddämmerung" },
      },
      {
        title: "Waschküche & Trockenraum",
        text: "Moderne Waschmaschinen und Trockner plus ein großer Trockenraum mit Schuh- und Kleidertrocknern.",
        image: { src: `${IMG}/gallery-52aacb6447.webp`, alt: "Waschküche mit modernen Waschmaschinen und Trocknern am Michelnhof" },
      },
    ],
  },

  kinder: {
    heading: "Landwirtschaft zum Anfassen",
    intro:
      "Bei uns wachsen die Kälber bei ihren Müttern auf — und freuen sich über Streicheleinheiten. Dazu ein großer Spielplatz: Hier wird Urlaub zum Abenteuer für die Kleinen.",
    features: [
      {
        title: "Tiere zum Anfassen",
        text: "Unsere Kälber und Mutterkühe freuen sich im täglichen Auslauf über neugierige kleine Besucher.",
        image: { src: `${IMG}/gallery-826b4f1b33.webp`, alt: "Kalb im Auslauf am Stall des Camping Michelnhof" },
      },
      {
        title: "Der eigene Stall",
        text: "Im luftigen Stall leben unsere Mutterkühe mit ihren Kälbern — Tierwohl zum Miterleben.",
        image: { src: `${IMG}/gallery-d0f26288ea.webp`, alt: "Mutterkühe am Stallgebäude des Michelnhof vor den Bergen" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um den Wilden Kaiser",
    intro:
      "Wandern, Mountainbiken und Klettern im Sommer, 66 Pistenkilometer und Loipen im Winter — die Urlaubsregion St. Johann liegt direkt vor der Tür.",
    items: [
      {
        title: "Wandern & Bergtouren",
        text: "Die Kitzbüheler Alpen und der Wilde Kaiser mit dem Adlerweg beginnen direkt vor dem Platz.",
        image: { src: `${IMG}/kids-c1b5aedacf.webp`, alt: "Wanderer auf einem Gipfel mit Blick auf den Wilden Kaiser bei St. Johann" },
      },
      {
        title: "Ski & Loipe",
        text: "Der gratis Skibus bringt dich in wenigen Minuten zum Harschbichl mit 66 Pistenkilometern.",
        image: { src: `${IMG}/gallery-35afcd4ad9.webp`, alt: "Skitourengeher im verschneiten Hochgebirge bei St. Johann in Tirol" },
      },
    ],
  },

  anreise: {
    heading: "So rollst du bei uns an",
    modes: [
      { title: "Von München (135 km)", text: "Über die Inntalautobahn A12 mautfrei bis Ausfahrt Kufstein Süd, via Eiberg und Bundesstraße B312." },
      { title: "Von Innsbruck (90 km)", text: "Über die A12 bis Ausfahrt Wörgl Ost, weiter auf der Bundesstraße B312 Richtung St. Johann." },
      { title: "Mit der Bahn", text: "Bahnhof St. Johann in Tirol; der Platz liegt rund 1,5 km südlich des Ortes an der B161 Richtung Kitzbühel." },
    ],
  },

  galerie: {
    heading: "Michelnhof, Tag für Tag",
    headingEmphasis: "Tag für Tag",
    intro:
      "Sonnenuntergänge über dem Kaiser, verschneite Wintertage und gemütliche Stunden am Stüberl — ein paar Eindrücke vom Platz.",
    tag: "Sommer wie Winter",
    moreCount: 18,
    images: [
      { src: `${IMG}/gallery-0dd0163f5e.webp`, alt: "Sonnenuntergang über dem Wilden Kaiser hinter den Wiesen des Campingplatzes" },
      { src: `${IMG}/amenity-77de5d7d34.webp`, alt: "Sonnenterrasse mit Blick auf den winterlichen Wilden Kaiser" },
      { src: `${IMG}/gallery-d6b86ace28.webp`, alt: "Verschneite Winterlandschaft am Camping Michelnhof" },
      { src: `${IMG}/gallery-ca15862f72.webp`, alt: "Rustikaler Stammtisch im Michelnhof-Stüberl" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Kaiser",
    headingEmphasis: "am Kaiser",
    intro:
      "Wähle Zeitraum und Personen — wir melden uns persönlich mit deiner Verfügbarkeit. Reservierung per Anfrage, Zahlung vor Ort in bar.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtwert Nebensaison: 2 Erwachsene inkl. Stellplatz & Umweltbeitrag, zzgl. Ortstaxe € 2,60 p. P./Nacht — nur Barzahlung, Preisänderungen vorbehalten. Winterspecial gilt ab 7 Nächten in den Zeiträumen 06.01.–08.02. & 22.02.–27.03.2026.",
    highlight: {
      title: "Gondel-Bonus",
      text: "Ab 3 Nächten gratis Berg- & Talfahrt mit der Harschbichlbahn (14. Mai bis 26. Oktober 2026).",
    },
    categories: [
      { id: "stellplatz-strom", label: "Stellplatz mit Strom", perNight: 43, perExtraGuest: 11 },
      { id: "winterspecial", label: "Winterspecial (ab 7 Nächten)", perNight: 38, perExtraGuest: 11 },
    ],
  },

  kontakt: {
    coords: { lat: 47.510985, lng: 12.409163 },
    tel: "+43 (0) 5352 / 62 584",
    telHref: "tel:+43535262584",
    mail: "camping@michelnhof.at",
    adresse: "Weiberndorf 6 · 6380 St. Johann in Tirol · Österreich",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Stüberl", href: "#camping" },
    ]},
    { label: "Hof & Kinder", href: "#kinder" },
    { label: "Region", href: "#aktivitaeten" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingMichelnhof;
