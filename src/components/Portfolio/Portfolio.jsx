import React from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import "./Portfolio.scss";

function Portfolio(props) {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="cards">
        <CardPortfolio
          src="./images/portfolio booki.png"
          titre="Booki"
          description="Transformer une maquette en site web."
          lien="https://jerhum25.github.io/P2_booki/"
        />
        <CardPortfolio
          src="./images/portfolio ohmyfood.png"
          titre="Ohmyfood"
          description="Dynamisez une page web avec des animations CSS."
          lien="https://ohmyfood-react-jerhum25s-projects.vercel.app/"
        />
        <CardPortfolio
          src="./images/portfolio kasa.png"
          titre="Kasa"
          description="Créer une application web avec React."
          lien="https://kasa-henna.vercel.app/"
        />
      </div>
    </div>
  );
}

export default Portfolio;
