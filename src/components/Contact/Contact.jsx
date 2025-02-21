import React from "react";
import "./Contact.scss";

function Contact(props) {
  return (
    <div className="contact" id="contact">
      <h2>Contactez moi</h2>
      <div className="coordonnees">
        {/* <form className="formulaire">
          <input type="text" className="nom" placeholder="Nom*" />
          <input type="text" className="prenom" placeholder="Prénom*" />
          <input type="mail" className="mail" placeholder="Email*" />
          <input type="phone" className="telephone" placeholder="Téléphone" />
          <input type="text" className="objet" placeholder="Objet*" />
          <textarea name="message" id="" placeholder="Message*"></textarea>
          <p>* Champs obligatoires</p>
          <button type="submit">Envoyer</button>
        </form> */}

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
