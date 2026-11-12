import ArticleCard from "../Components/ArticleCard";
import articles from "../data/articles";

function Articles() {
  return (
    <section>
      <h1>Tous les articles</h1>
      <div className="grid">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}

export default Articles;
