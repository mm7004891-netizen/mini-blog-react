# Mon Mini Blog (ReactJS)

Mini blog statique réalisé avec React, Vite et React Router.

## Installation

```bash
npm install
npm run dev
```

Le site est ensuite accessible sur http://localhost:5173

## Structure

- `src/Components/` : composants réutilisables (Layout, Header, Navbar, Footer, ArticleCard)
- `src/Pages/` : pages du blog (Home, Articles, ArticleDetail, About, Contact, NotFound)
- `src/data/` : données statiques des articles
- `src/assets/images/` : illustrations (bannière, couvertures d'articles, pages À propos et Contact)
- `src/main.jsx` : configuration de React Router

## Routes

| URL             | Page     |
| --------------- | -------- |
| `/`             | Accueil  |
| `/articles`     | Liste    |
| `/articles/:id` | Détail   |
| `/a-propos`     | À propos |
| `/contact`      | Contact  |
| `*`             | Page 404 |

## Remarque

Le blog étant statique, le formulaire de contact valide les champs et affiche une
confirmation, mais n'envoie pas réellement d'email (il faudrait un service externe
ou un serveur pour cela).
