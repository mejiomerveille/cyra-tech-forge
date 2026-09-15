import type { Project } from "@/types/project";
import chimsoyImage from "@/assets/project-chimsoy.jpg";
import freddieImage from "@/assets/project-freddie.jpg";
import homesafeImage from "@/assets/project-homesafe.jpg";
import intimiaImage from "@/assets/project-intimia.jpg";
import mopitalImage from "@/assets/project-mopital.jpg";
import nutrisaImage from "@/assets/project-nutrisa.jpg";
import sisterhoodImage from "@/assets/project-sisterhood.jpg";
import terapayImage from "@/assets/project-terapay.jpg";
import teralisImage from "@/assets/project-teralis.jpg";

export const projects: Project[] = [
  { id: 1, name: "Intimia", category: "Software", description: "Une application de suivi de grossesse intelligente et personnalisée, pour accompagner les futures mamans à chaque étape.", image: "/images/projects/intimia.png", slug: "intimia" },
  { id: 2, name: "Mopital", category: "Software", description: "Une solution de gestion hospitalière complète pour moderniser les établissements de santé en Afrique.", image: "/images/projects/mopital.png", slug: "mopital" },
  { id: 3, name: "Teralis", category: "Connected hardware", description: "Un dispositif connecté qui aide au suivi de la santé articulaire grâce à des données précises et en temps réel.", image: "/images/projects/teralis.png", slug: "teralis" },
  { id: 4, name: "CHIMSOY", category: "Software", description: "Une plateforme de jeux de compétence et de compétition en tête-à-tête, avec classements et portefeuille électronique.", image: "/images/projects/chimsoy.png", slug: "chimsoy" },
  { id: 5, name: "Freddie Leonie's", category: "Design", description: "Un site web élégant pour une conciergerie haut de gamme spécialisée dans la location de studios, appartements et salles de fête.", image: "/images/projects/freddie-leonies.png", slug: "freddie-leonies" },
  { id: 6, name: "NutriSa", category: "Software", description: "Une application de nutrition personnalisée avec des conseils adaptés à chaque profil et objectif de santé.", image: "/images/projects/nutrisa.png", slug: "nutrisa" },
  { id: 7, name: "TeraPay", category: "Software", description: "Une solution de paiement en ligne sécurisée et adaptée aux besoins des entreprises africaines.", image: "/images/projects/terapay.png", slug: "terapay" },
  { id: 8, name: "Sisterhood", category: "Software", description: "Une communauté en ligne pour échanger, soutenir et partager son expérience de future maman.", image: "/images/projects/sisterhood.png", slug: "sisterhood" },
  { id: 9, name: "HomeSafe", category: "Connected hardware", description: "Un système connecté de surveillance domestique pour plus de sécurité et de sérénité.", image: "/images/projects/homesafe.png", slug: "homesafe" },
];


export const projects2: Project[] = [
  {
    id: 1,
    name: "Intimia",
    category: "Software",
    description:
      "Une application de suivi de grossesse intelligente et personnalisée, pour accompagner les futures mamans à chaque étape.",
    image: intimiaImage,
    slug: "intimia",
    imageAlt: "Deux smartphones affichant l’application de suivi de grossesse Intimia",
  },
  {
    id: 2,
    name: "Mopital",
    category: "Software",
    description:
      "Une solution de gestion hospitalière complète pour moderniser les établissements de santé en Afrique.",
    image: mopitalImage,
    slug: "mopital",
    imageAlt: "Ordinateur portable affichant le tableau de bord hospitalier Mopital",
  },
  {
    id: 3,
    name: "Teralis",
    category: "Connected hardware",
    description:
      "Un dispositif connecté qui aide au suivi de la santé articulaire grâce à des données précises et en temps réel.",
    image: teralisImage,
    slug: "teralis",
    imageAlt: "Capteur Teralis et smartphone affichant le suivi de santé articulaire",
  },
  {
    id: 4,
    name: "CHIMSOY",
    category: "Software",
    description:
      "Une plateforme de jeux de compétence et de compétition en tête-à-tête, avec classements et portefeuille électronique.",
    image: chimsoyImage,
    slug: "chimsoy",
    imageAlt: "Deux smartphones affichant l’application de compétition CHIMSOY",
  },
  {
    id: 5,
    name: "Freddie Leonie's",
    category: "Design",
    description:
      "Un site web élégant pour une conciergerie haut de gamme spécialisée dans la location de studios, appartements et salles de fête.",
    image: freddieImage,
    slug: "freddie-leonies",
    imageAlt: "Ordinateur portable affichant le site de Freddie Leonie's",
  },
  {
    id: 6,
    name: "NutriSa",
    category: "Software",
    description:
      "Une application de nutrition personnalisée avec des conseils adaptés à chaque profil et objectif de santé.",
    image: nutrisaImage,
    slug: "nutrisa",
    imageAlt: "Smartphone affichant l’application de nutrition NutriSa",
  },
  {
    id: 7,
    name: "TeraPay",
    category: "Software",
    description:
      "Une solution de paiement en ligne sécurisée et adaptée aux besoins des entreprises africaines.",
    image: terapayImage,
    slug: "terapay",
    imageAlt: "Ordinateur portable affichant le tableau de bord de paiement TeraPay",
  },
  {
    id: 8,
    name: "Sisterhood",
    category: "Software",
    description:
      "Une communauté en ligne pour échanger, soutenir et partager son expérience de future maman.",
    image: sisterhoodImage,
    slug: "sisterhood",
    imageAlt: "Deux smartphones affichant la communauté mobile Sisterhood",
  },
  {
    id: 9,
    name: "HomeSafe",
    category: "Connected hardware",
    description:
      "Un système connecté de surveillance domestique pour plus de sécurité et de sérénité.",
    image: homesafeImage,
    slug: "homesafe",
    imageAlt: "Caméra HomeSafe et smartphone affichant l’interface de sécurité",
  },
];

