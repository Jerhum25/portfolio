import "./Contact.scss";

function Contact(props) {
  return (
    <div className="contact" id="contact">
      <h2>Vous avez un projet web ?</h2>
      <p>
        Création et refonte de sites vitrines à Besançon et dans ses environs,
        pour les artisans, indépendants, entrepreneurs et associations.
      </p>
      <h3>Parlons de votre projet →</h3>
      <div className="coordonnees">
        <div className="mesCoordonnees">
          <a href="mailto:contact@jhdev.fr">
            <i className="far fa-envelope"></i> contact@jhdev.fr
          </a>
          <a href="tel:0673585639">
            <i className="fas fa-phone"></i> 06 73 58 56 39
          </a>
          <a
            href="https://maps.app.goo.gl/i86bYLYwi79TC5SE8"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-map-marker-alt"></i> Besançon
          </a>
          <a
            href="https://www.linkedin.com/in/jérôme-humbert-780324229"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./images/logo linkedin.webp" alt="logo linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
