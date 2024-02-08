import React from "react";
import "./CardPortfolio.scss";

function CardPortfolio({ src, titre, description, lien }) {
  return (
    <a href={lien} target="_blank" className="cardPortfolio" rel="noreferrer">
      <img src={src} alt={titre} />
      <h3>{titre}</h3>
      <p>{description}</p>
    </a>
  );
}

export default CardPortfolio;
