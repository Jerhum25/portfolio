import React from "react";
import "./APropos.scss";

function APropos(props) {
  return (
    <div className="aPropos" id="profil">
      <h2>A propos de moi</h2>
      <div className="description">
        <img src="./images/profil.webp" alt="profil" />
        <p>
          De facteur à développeur web : un parcours guidé par la rigueur et la
          passion
          <br />
          <br />
          Après 23 ans en tant que facteur à La Poste, j’ai développé des
          qualités essentielles : rigueur, organisation, autonomie et sens du
          service. Ces compétences, alliées à ma passion pour le numérique,
          m'ont poussé à me reconvertir dans le développement web.
          <br />
          <br />
          J’ai suivi une formation diplômante sur OpenClassrooms, où j’ai acquis
          des compétences en HTML, CSS, JavaScript, React JS, Node.js et
          MongoDB. Aujourd’hui, je mets cette expertise au service de projets
          web modernes, avec une attention particulière aux détails, à
          l’accessibilité et à l’expérience utilisateur.
          <br />
          <br />
          Mon objectif ? Concevoir des interfaces fluides et intuitives, en
          mettant ma rigueur et ma capacité d’adaptation au service du
          développement frontend.
        </p>
      </div>
    </div>
  );
}

export default APropos;
