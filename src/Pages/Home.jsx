import { Link } from "react-router";
import ArticleCard from "../Components/ArticleCard";
import articles from "../data/articles";
import heroImage from "../assets/images/hero.svg";

function Home() {
  const latest = articles.slice(-3).reverse();

  return (
    <>
      <section className="hero hero--image">
        <img
          src={heroImage}
          alt="Illustration d'un ordinateur portable affichant du code"
          className="hero__image"
        />
        <div className="hero__content">
          <h1>Bienvenue sur mon mini blog</h1>
          <p>
            Des articles simples sur le développement web, React et les bonnes
            pratiques pour construire de beaux sites.
          </p>
          <Link to="/articles" className="button">
            Voir tous les articles
          </Link>
        </div>
      </section>

      <section>
        <h2>Derniers articles</h2>
        <div className="grid">
          {latest.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
