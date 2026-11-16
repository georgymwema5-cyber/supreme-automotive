export type Car = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  status: "concept" | "available";
};

export const cars: Car[] = [
  {
    slug: "phantom-gt",
    name: "PHANTOM GT",
    category: "COUPÉ · PERFORMANCE",
    tagline: "Une présence sculptée pour la route.",
    description: "Un concept sportif aux lignes tendues et au caractère affirmé. Cette fiche est une présentation conceptuelle, pas une annonce commerciale.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    status: "concept"
  },
  {
    slug: "terra-x",
    name: "TERRA X",
    category: "4×4 · EXPLORATION",
    tagline: "L'appel des grands espaces.",
    description: "Un concept robuste imaginé pour les esprits aventuriers. Cette fiche est une présentation conceptuelle, pas une annonce commerciale.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=85",
    status: "concept"
  },
  {
    slug: "velocity-s",
    name: "VELOCITY S",
    category: "SPORT · GRAND TOURISME",
    tagline: "L'élégance du grand tourisme.",
    description: "Une silhouette sportive pensée autour du style et du mouvement. Cette fiche est une présentation conceptuelle, pas une annonce commerciale.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=85",
    status: "concept"
  }
];
