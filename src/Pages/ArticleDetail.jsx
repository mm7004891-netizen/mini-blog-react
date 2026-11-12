import { Link, useParams } from "react-router";
import articles from "../data/articles";
import { formatDate } from "../Components/ArticleCard";

function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((item) => item.id === Number(id));

  if (!article) {
    return (
      <section className="article">
        <h1>Article introuvable</h1>
        <p>Cet article n'existe pas.</p>
        <Link to="/articles" className="button">
          Retour aux articles
        </Link>
      </section>
    );
  }

  return (
    <article className="article">
      <img
        src={article.image}
        alt={article.title}
        className="article__cover"
      />
      <span className="card__category">{article.category}</span>
      <h1>{article.title}</h1>
      <p className="card__date">{formatDate(article.date)}</p>
      <p>{article.content}</p>
      <Link to="/articles" className="button">
        ← Retour aux articles
      </Link>
    </article>
  );
}

export default ArticleDetail;
