export type Language = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      expertise: "Expertise",
      projects: "Projets",
      about: "À propos",
      contact: "Contact",
      cta: "Nous contacter",
      open: "Ouvrir le menu",
      close: "Fermer le menu",
      main: "Navigation principale",
      language: "Langue",
    },
    hero: {
      pill: "Innovation • Afrique • Impact",
      titleA: "Nous construisons des solutions numériques",
      titleB: "qui relient",
      titleC: "logiciel & ingénierie.",
      description:
        "Cyra Tech conçoit des logiciels fiables, des systèmes connectés et des solutions matérielles intelligentes qui transforment des idées ambitieuses en technologies réelles.",
      primary: "Démarrer un projet",
      secondary: "Découvrir nos solutions",
      techLabel: "Nos technologies",
    },
    expertise: {
      eyebrow: "Nos domaines d’expertise",
      title: "Ce que nous faisons",
      intro:
        "Une équipe pluridisciplinaire qui couvre l’ensemble de la chaîne technologique, du prototype matériel au déploiement logiciel.",
      services: [
        { title: "Développement logiciel", description: "Applications web & mobiles" },
        { title: "IoT & systèmes connectés", description: "Solutions connectées intelligentes" },
        { title: "Ingénierie matérielle", description: "Prototypage & systèmes embarqués" },
        { title: "Cloud & infrastructure", description: "Infrastructure numérique évolutive" },
        { title: "Conseil technique", description: "Du concept au déploiement" },
      ],
    },
    projects: {
      eyebrow: "Nos projets en cours",
      title: "La technologie au service du monde réel.",
      all: "Voir tous les projets",
      intro: "Des réalisations concrètes, pensées pour les réalités du terrain africain.",
      items: [
        {
          category: "IoT & systèmes connectés",
          title: "Agriculture connectée",
          description: "Supervision IoT et systèmes intelligents en plein champ.",
        },
        {
          category: "Développement logiciel",
          title: "Plateforme d’opérations",
          description: "Logiciel de gestion de processus métiers complexes.",
        },
        {
          category: "Ingénierie matérielle",
          title: "Prototype IoT industriel",
          description: "Matériel connecté et supervision en temps réel.",
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Conçu en Afrique. Pensé pour le monde réel.",
      intro:
        "Cyra Tech est une entreprise africaine de technologie et d’ingénierie. Nous associons logiciel, matériel et systèmes connectés pour livrer des solutions fiables, durables et adaptées au terrain.",
      values: [
        { title: "Précision technique", description: "Une ingénierie rigoureuse, documentée et testée." },
        { title: "Fiabilité", description: "Des systèmes conçus pour durer en conditions réelles." },
        { title: "Ambition africaine", description: "Des talents locaux au service de standards internationaux." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de votre projet.",
      intro: "Écrivez-nous et nous revenons vers vous sous 48 heures ouvrées.",
      email: "E-mail",
      phone: "Téléphone",
      location: "Localisation",
      locationValue: "Douala, Cameroun",
    },
    cta: {
      eyebrow: "Une idée ?",
      title: "Une idée ? Construisons-la.",
      description: "Parlons de votre projet et donnons vie à vos idées.",
      button: "Parler à Cyra Tech",
    },
    footer: {
      links: ["Logiciel", "Matériel", "IoT", "Ingénierie"],
      rights: "© 2026 Cyra Tech. Tous droits réservés.",
      expertises: "Expertises",
    },
  },
  en: {
    nav: {
      home: "Home",
      expertise: "Expertise",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      cta: "Get in touch",
      open: "Open menu",
      close: "Close menu",
      main: "Main navigation",
      language: "Language",
    },
    hero: {
      pill: "Innovation • Africa • Impact",
      titleA: "We Build Digital Solutions",
      titleB: "That Connect",
      titleC: "Software & Engineering.",
      description:
        "Cyra Tech designs reliable software, connected systems and intelligent hardware solutions that turn ambitious ideas into real-world technology.",
      primary: "Start a Project",
      secondary: "Explore Our Solutions",
      techLabel: "Our technologies",
    },
    expertise: {
      eyebrow: "Our areas of expertise",
      title: "What we do",
      intro:
        "A multidisciplinary team covering the full technology chain, from hardware prototype to software deployment.",
      services: [
        { title: "Software Development", description: "Web & Mobile Applications" },
        { title: "IoT & Connected Systems", description: "Smart connected solutions" },
        { title: "Hardware Engineering", description: "Prototyping & embedded systems" },
        { title: "Cloud & Infrastructure", description: "Scalable digital infrastructure" },
        { title: "Technical Consulting", description: "From concept to deployment" },
      ],
    },
    projects: {
      eyebrow: "Our current projects",
      title: "Technology built for the real world.",
      all: "View all projects",
      intro: "Concrete work, designed for the realities of the African field.",
      items: [
        {
          category: "IoT & Connected Systems",
          title: "Connected Agriculture",
          description: "IoT monitoring and intelligent field systems.",
        },
        {
          category: "Software Development",
          title: "Smart Operations Platform",
          description: "Software for managing complex business processes.",
        },
        {
          category: "Hardware Engineering",
          title: "Industrial IoT Prototype",
          description: "Connected hardware and real-time monitoring.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Built in Africa. Built for the real world.",
      intro:
        "Cyra Tech is an African technology and engineering company. We combine software, hardware and connected systems to deliver reliable, durable solutions made for the field.",
      values: [
        { title: "Technical precision", description: "Rigorous, documented and tested engineering." },
        { title: "Reliability", description: "Systems designed to last in real conditions." },
        { title: "African ambition", description: "Local talent delivering international standards." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your project.",
      intro: "Write to us and we will get back to you within 48 business hours.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Douala, Cameroon",
    },
    cta: {
      eyebrow: "Got an idea?",
      title: "Have an idea? Let’s build it.",
      description: "Let's talk about your project and bring your ideas to life.",
      button: "Talk to Cyra Tech",
    },
    footer: {
      links: ["Software", "Hardware", "IoT", "Engineering"],
      rights: "© 2026 Cyra Tech. All rights reserved.",
      expertises: "Expertise",
    },
  },
} as const;

export type Dictionary = (typeof translations)["fr"];
