// Allies / international partners shown on the /aliados map page.
//
// HOW TO EDIT: each entry is one pin on the world map. `lat`/`lng` are real
// decimal coordinates (positive = N/E, negative = S/W) — the map projects them
// with an equirectangular projection and the detail panel feeds them straight
// into a Google Maps embed, so they should stay accurate. Set `hq: true` on the
// home base (Cali); all flight-path arcs are drawn from the HQ pin to every
// other pin.

export type AllyLocation = {
  id: string;
  /** Country label shown on the pin filter and detail panel. */
  country: string;
  /** Path to a flag SVG in /public/flags, or "" to render the HQ badge. */
  flag: string;
  city: string;
  /** Partner camp / school / organisation name. */
  institution: string;
  /** Real decimal coordinates — drive both the pin and the Google Maps embed. */
  lat: number;
  lng: number;
  blurb: string;
  /** Educate programs that send students to this ally. */
  programs: string[];
  /** Partner's own website, if any. */
  website?: string;
  hq?: boolean;
};

export const allies: AllyLocation[] = [
  {
    id: "hq-cali",
    country: "Colombia",
    flag: "",
    city: "Cali",
    institution: "Educate Learning Center",
    lat: 3.4516,
    lng: -76.532,
    blurb:
      "Nuestra casa. Desde Cali coordinamos cada experiencia internacional y acompañamos a las familias de punta a punta: inscripción, visa, viaje y regreso.",
    programs: ["Todos los programas"],
    hq: true,
  },

  // ── Polonia ──────────────────────────────────────────────────────────────
  {
    id: "pl-radkow",
    country: "Polonia",
    flag: "/flags/Flag-of-Poland.svg",
    city: "Radków",
    institution: "Camp Radków",
    lat: 50.4928,
    lng: 16.3997,
    blurb:
      "Junto al lago Zalew Radkowski, al pie de las montañas Góry Stołowe. En invierno es la base desde la que los grupos entrenan a diario en la estación alpina de Zieleniec, uno de los snowparks más grandes de Polonia.",
    programs: ["Winter Camp"],
    website: "https://www.chris.com.pl/oferta/camp/camp-radkow-1",
  },
  {
    id: "pl-muszyna",
    country: "Polonia",
    flag: "/flags/Flag-of-Poland.svg",
    city: "Muszyna",
    institution: "Sede Muszyna",
    lat: 49.3553,
    lng: 20.8939,
    blurb:
      "En la región montañosa del sur de Polonia, cerca de la frontera con Eslovaquia. Un destino invernal tradicional por sus pistas locales orientadas al aprendizaje del esquí y el snowboard en grupo.",
    programs: ["Winter Camp"],
  },
  {
    id: "pl-camp-junior",
    country: "Polonia",
    flag: "/flags/Flag-of-Poland.svg",
    city: "Kruklanki",
    institution: "Camp Junior",
    lat: 54.1486,
    lng: 21.9669,
    blurb:
      "En la famosa región de los Grandes Lagos Masurianos (Mazury), junto al lago Gołdapiwo. Sede de campamentos temáticos: cocina, arte, robótica y patinaje sobre hielo.",
    programs: ["Summer Camp"],
  },
  {
    id: "pl-camp-drawa",
    country: "Polonia",
    flag: "/flags/Flag-of-Poland.svg",
    city: "Drawno",
    institution: "Camp Drawa",
    lat: 53.2231,
    lng: 15.7639,
    blurb:
      "En la zona de lagos y densos bosques del oeste del país, ideal para campamentos temáticos y juegos de estrategia al aire libre.",
    programs: ["Summer Camp"],
  },

  // ── Italia ───────────────────────────────────────────────────────────────
  {
    id: "it-falcade",
    country: "Italia",
    flag: "/flags/Flag-of-Italy.svg",
    city: "Falcade · Dolomitas",
    institution: "Falcade — Tre Valli",
    lat: 46.3597,
    lng: 11.8717,
    blurb:
      "El destino internacional exclusivo para adolescentes, en la pintoresca región de Tre Valli. Acceso directo a más de 100 km de pistas conectadas, entre los 1.200 y 2.500 metros sobre el nivel del mar.",
    programs: ["Winter Camp"],
  },

  // ── Alemania · Camp Adventure ────────────────────────────────────────────
  {
    id: "de-walsrode",
    country: "Alemania",
    flag: "/flags/Flag-of-Germany.svg",
    city: "Walsrode",
    institution: "Camp Adventure Academy",
    lat: 52.8606,
    lng: 9.5926,
    blurb:
      "Sede central y complejo más grande de Camp Adventure, en el parque nacional Lüneburger Heide, entre Hamburgo, Bremen y Hannover. Más de 15 hectáreas de bosques, campos deportivos y lagos propios, con programas de supervivencia e idiomas.",
    programs: ["Summer Camp"],
    website:
      "https://www.campadventure.de/en/academy/location-camp-adventure-academy",
  },
  {
    id: "de-bavaria",
    country: "Alemania",
    flag: "/flags/Flag-of-Germany.svg",
    city: "Regen · Baviera",
    institution: "Camp Adventure Bavaria",
    lat: 48.9686,
    lng: 13.1281,
    blurb:
      "En pleno Bosque Bávaro, cerca de la frontera con la República Checa. En colaboración con la Asociación Estatal de Deportes de Baviera (BLSV): canotaje, escalada y senderismo alpino.",
    programs: ["Summer Camp"],
    website: "https://www.campadventure.de/en",
  },
  {
    id: "de-neuburg",
    country: "Alemania",
    flag: "/flags/Flag-of-Germany.svg",
    city: "Neuburg",
    institution: "Camp Adventure Neuburg",
    lat: 49.0356,
    lng: 8.2622,
    blurb:
      "Enfocada en campamentos creativos, deportivos y de aventura, con alojamiento en tiendas grupales sobre estructuras de madera. Un entorno pensado para las dinámicas de grupo y los cursos de idiomas.",
    programs: ["Summer Camp"],
    website: "https://www.campadventure.de/en",
  },

  // ── Estados Unidos ───────────────────────────────────────────────────────
  {
    id: "us-tekoa",
    country: "Estados Unidos",
    flag: "/flags/Flag-of-the-United-States.svg",
    city: "Hendersonville · NC",
    institution: "Camp Tekoa",
    lat: 35.3645,
    lng: -82.511,
    blurb:
      "En las estribaciones de las montañas de Carolina del Norte (foothills), un campamento de inmersión en inglés rodeado de naturaleza.",
    programs: ["Summer Camp"],
  },

  // ── Canadá ───────────────────────────────────────────────────────────────
  {
    id: "ca-ouareau",
    country: "Canadá",
    flag: "/flags/Flag-of-Canada.svg",
    city: "Saint-Donat · Quebec",
    institution: "Camp Ouareau",
    lat: 46.3168,
    lng: -74.2256,
    blurb:
      "Campamento de inmersión lingüística y liderazgo en Saint-Donat, Quebec.",
    programs: ["Summer Camp"],
    website: "https://www.ouareau.com",
  },
  {
    id: "ca-wenonah",
    country: "Canadá",
    flag: "/flags/Flag-of-Canada.svg",
    city: "Muskoka · Ontario",
    institution: "Camp Wenonah",
    lat: 45.0379,
    lng: -79.3009,
    blurb: "Campamento tradicional situado en la región de Muskoka, Ontario.",
    programs: ["Summer Camp"],
    website: "https://campwenonah.com",
  },
  {
    id: "ca-summit",
    country: "Canadá",
    flag: "/flags/Flag-of-Canada.svg",
    city: "Squamish · BC",
    institution: "Camp Summit",
    lat: 49.7016,
    lng: -123.1558,
    blurb: "Situado en Squamish, Columbia Británica, entre montañas y océano.",
    programs: ["Summer Camp"],
    website: "https://campsummit.ca",
  },
  {
    id: "ca-fircom",
    country: "Canadá",
    flag: "/flags/Flag-of-Canada.svg",
    city: "Gambier Island · BC",
    institution: "Camp Fircom",
    lat: 49.4486,
    lng: -123.3781,
    blurb: "Ubicado en Gambier Island, Columbia Británica.",
    programs: ["Summer Camp"],
    website: "https://www.fircom.ca",
  },
  {
    id: "ca-edphy",
    country: "Canadá",
    flag: "/flags/Flag-of-Canada.svg",
    city: "Quebec",
    institution: "Edphy International",
    lat: 45.9676,
    lng: -74.3331,
    blurb:
      "Organización de campamentos internacionales con sedes principalmente en Quebec.",
    programs: ["Summer Camp"],
    website: "https://edphy.com",
  },

  // ── Grecia ───────────────────────────────────────────────────────────────
  {
    id: "gr-delphi",
    country: "Grecia",
    flag: "/flags/Flag-of-Greece.svg",
    city: "Delfos",
    institution: "Delphi Camp",
    lat: 38.4824,
    lng: 22.501,
    blurb:
      "Campamento internacional junto a la histórica Delfos, en Grecia, donde la cultura y la naturaleza del Mediterráneo se viven en inglés.",
    programs: ["Summer Camp"],
    website: "https://www.delphicamp.gr/en/home",
  },
];
