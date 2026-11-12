import { Link } from "react-router";

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleCard({ article }) {
  const { id, title, category, date, excerpt, image } = article;

  return (
    <article className="card">
      <img src={image} alt={title} className="card__image" loading="lazy" />
      <span className="card__category">{category}</span>
      <h3 className="card__title">{title}</h3>
      <p className="card__date">{formatDate(date)}</p>
      <p className="card__excerpt">{excerpt}</p>
      <Link to={`/articles/${id}`} className="button">
        Lire la suite
      </Link>
    </article>
  );
}

export { formatDate };
export default ArticleCard;
