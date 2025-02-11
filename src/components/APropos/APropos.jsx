import React from "react";
import "./APropos.scss";

function APropos(props) {
  return (
    <div className="aPropos" id="profil">
      <h2>A propos de moi</h2>
      <div className="description">
        <img src="./images/profil.jpg" alt="profil" />
        <p>
          Hey ! Moi c'est Jérôme, 43 ans,
          <br />
          facteur à la poste depuis plus de 20 ans, j'ai pu développer le sens
          du travail en équipe mais aussi de l'autonomie. J'ai également appris
          à écouter les clients et su gérer les conflits pour leur apporter des
          solutions aux problèmes qu'ils pouvaient rencontrer. Mes plus grandes
          qualités sont la patience et la persévérence.
          <br />
          <br />
          Aujourd'hui, je pense avoir fait le tour de mon métier et suis en
          reconversion dans le monde du développement web.
          <br />
          <br />
          Après un an de formation sur OpenClassrooms, plateforme de formation
          en ligne avec le soutien d'un mentor, j'ai pu acquérir des bases dans
          le domaine du développement.
          <br />
          Je continue d'apprendre chaque jour pour enrichir mes connaissances.
        </p>
      </div>
    </div>
  );
}

export default APropos;
