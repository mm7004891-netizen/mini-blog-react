import { Link } from "react-router";

function NotFound() {
  return (
    <section className="hero">
      <h1>404</h1>
      <p>Cette page n'existe pas.</p>
      <Link to="/" className="button">
        Retour à l'accueil
      </Link>
    </section>
  );
}

export default NotFound;
