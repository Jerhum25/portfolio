import React from "react";
import "./Banner.scss";

function Banner(props) {
  return (
    <div className="banner" id="accueil">
      <div className="blur"></div>
      <div className="infosBanner">
        <h2>Jérôme Humbert</h2>
        <h3>Développeur front-end - Intégrateur</h3>
      </div>
    </div>
  );
}

export default Banner;
