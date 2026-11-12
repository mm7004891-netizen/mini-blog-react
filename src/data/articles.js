import cover1 from "../assets/images/article-1.svg";
import cover2 from "../assets/images/article-2.svg";
import cover3 from "../assets/images/article-3.svg";
import cover4 from "../assets/images/article-4.svg";

const articles = [
  {
    id: 1,
    title: "Débuter avec React",
    category: "React",
    date: "2026-11-02",
    image: cover1,
    excerpt:
      "Les bases pour comprendre les composants, le JSX et l'état d'une application React.",
    content:
      "React est une bibliothèque JavaScript pour construire des interfaces utilisateur. Elle repose sur des composants réutilisables : chaque morceau de l'interface est une fonction qui retourne du JSX. En découpant son application en petits morceaux, on gagne en lisibilité, en maintenabilité et en réutilisation.",
  },
  {
    id: 2,
    title: "Naviguer entre les pages",
    category: "Navigation",
    date: "2026-11-05",
    image: cover2,
    excerpt:
      "Passer d'une page à l'autre sans recharger le navigateur, c'est le rôle d'un routeur.",
    content:
      "Un routeur associe chaque adresse à une page. Grâce aux liens de navigation, on change de page instantanément, sans rechargement complet du navigateur. Les routes imbriquées permettent aussi de garder une mise en page commune, avec un menu et un pied de page identiques partout.",
  },
  {
    id: 3,
    title: "Bien ranger ses fichiers",
    category: "Organisation",
    date: "2026-11-08",
    image: cover3,
    excerpt:
      "Une bonne organisation fait gagner du temps, surtout quand on travaille en équipe.",
    content:
      "Une structure claire facilite le travail en équipe. On regroupe les éléments réutilisables d'un côté, les écrans complets de l'autre, et les données à part. Chaque élément a une seule responsabilité et un nom explicite : on retrouve ainsi tout très vite, même après plusieurs semaines.",
  },
  {
    id: 4,
    title: "Un site adaptable à tous les écrans",
    category: "Design",
    date: "2026-11-10",
    image: cover4,
    excerpt:
      "Ordinateur, tablette ou téléphone : comment offrir une belle interface partout.",
    content:
      "Un site adaptable s'affiche correctement sur mobile, tablette et ordinateur. On utilise des tailles relatives, des mises en page flexibles et on ajuste le design selon la largeur de l'écran. On commence généralement par la version mobile, puis on enrichit pour les écrans plus larges.",
  },
];

export default articles;
