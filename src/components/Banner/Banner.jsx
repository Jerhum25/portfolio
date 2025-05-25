import React from "react";
import "./Banner.scss";

function Banner(props) {
  return (
    <div className="banner" id="accueil">
      <div className="blur"></div>
      <div className="infosBanner">
        <h1>Jérôme Humbert <span>Développeur web front-end - Intégrateur<br/>à Besançon</span></h1>
      </div>
    </div>
  );
}

export default Banner;
