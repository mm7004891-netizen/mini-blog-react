import { useState } from "react";
import contactImage from "../assets/images/contact.svg";

const initialValues = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Veuillez saisir votre nom.";
  }

  if (!values.email.trim()) {
    errors.email = "Veuillez saisir votre adresse email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = "Cette adresse email n'est pas valide.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Votre message doit contenir au moins 10 caractères.";
  }

  return errors;
}

function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setSent(true);
    setValues(initialValues);
  }

  return (
    <section className="split">
      <div className="article">
        <h1>Contact</h1>

        {sent ? (
          <div className="alert alert--success" role="status">
            <p>
              <strong>Merci !</strong> Votre message a bien été envoyé. Je vous
              répondrai dès que possible.
            </p>
            <button
              type="button"
              className="button"
              onClick={() => setSent(false)}
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <>
            <p>Une question ou une remarque ? Écrivez-moi via ce formulaire.</p>
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="form__field">
                <label htmlFor="name">Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  value={values.name}
                  onChange={handleChange}
                  className={errors.name ? "is-invalid" : ""}
                />
                {errors.name && <p className="form__error">{errors.name}</p>}
              </div>

              <div className="form__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@exemple.com"
                  value={values.email}
                  onChange={handleChange}
                  className={errors.email ? "is-invalid" : ""}
                />
                {errors.email && <p className="form__error">{errors.email}</p>}
              </div>

              <div className="form__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Votre message"
                  value={values.message}
                  onChange={handleChange}
                  className={errors.message ? "is-invalid" : ""}
                />
                {errors.message && (
                  <p className="form__error">{errors.message}</p>
                )}
              </div>

              <button type="submit" className="button">
                Envoyer
              </button>
            </form>
          </>
        )}
      </div>

      <img
        src={contactImage}
        alt="Illustration d'une enveloppe et d'un avion en papier"
        className="split__image"
      />
    </section>
  );
}

export default Contact;
