import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="header">
      <a href="#accueil" className="logo">
        <img src="./images/Mon logo noir.png" alt="logo" />
        <h1>dev front-end</h1>
      </a>
      <nav>
        <ul>
          <a href="#accueil">
            <li>accueil</li>
          </a>
          <a href="#profil">
            <li>mon profil</li>
          </a>
          <a href="#competences">
            <li>mes compétences</li>
          </a>
          <a href="#portfolio">
            <li>portfolio</li>
          </a>
          <a href="#contact">
            <li>contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
