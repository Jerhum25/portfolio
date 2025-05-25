import React from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import "./Portfolio.scss";

function Portfolio(props) {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <p>Découvrez une sélection de projets réalisés dans le cadre de ma formation et de missions personnelles. Chaque site ou application présentée a été conçue avec soin, dans le respect des bonnes pratiques du développement frontend : responsive design, accessibilité, performance et expérience utilisateur.

Ces projets illustrent ma maîtrise des technologies telles que React JS, JavaScript, HTML/CSS, ainsi que l’utilisation d’outils comme Git ou GitHub pour la gestion de code.

Mon objectif : proposer des solutions web modernes, efficaces et adaptées aux besoins réels de mes clients.</p>
      <div className="cards">
        <CardPortfolio
          src="./images/portfolio booki.webp"
          titre="Booki"
          description="Transformer une maquette en site web."
          lien="https://jerhum25.github.io/P2_booki/"
        />
        <CardPortfolio
          src="./images/portfolio ohmyfood.webp"
          titre="Ohmyfood"
          description="Dynamisez une page web avec des animations CSS."
          lien="https://ohmyfood-react-jerhum25s-projects.vercel.app/"
        />
        <CardPortfolio
          src="./images/portfolio kasa.webp"
          titre="Kasa"
          description="Créer une application web avec React."
          lien="https://kasa-henna.vercel.app/"
        />
      </div>
    </div>
  );
}

export default Portfolio;
