import aboutImage from "../assets/images/about.svg";

function About() {
  return (
    <section className="split">
      <div className="article">
        <h1>À propos</h1>
        <p>
          Bienvenue ! Ce blog est mon espace pour partager ce que j'apprends
          sur le développement web : astuces, bonnes pratiques et idées pour
          construire de beaux sites.
        </p>
        <p>
          J'y publie des articles courts et accessibles, pensés pour celles et
          ceux qui débutent comme pour les curieux qui veulent se rafraîchir la
          mémoire.
        </p>
        <p>Bonne lecture, et n'hésitez pas à m'écrire depuis la page Contact.</p>
      </div>
      <img
        src={aboutImage}
        alt="Illustration d'une personne travaillant sur son ordinateur"
        className="split__image"
      />
    </section>
  );
}

export default About;
