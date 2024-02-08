import React, { useState } from "react";
import "./Header.scss";

function Header(props) {
  const [burgerMenu, setBurgerMenu] = useState(false);
  function toggleMenu() {
    setBurgerMenu(!burgerMenu);
  }

  return (
    <div className="header">
      <a href="#accueil" className="logo">
        <img src="./images/Mon logo noir.png" alt="logo" />
        <h1>dev front-end</h1>
      </a>
      <div className="burgerMenu" onClick={toggleMenu}>
        <div className={burgerMenu ? "lineOpen" : "line"}></div>
      </div>
      <nav className={burgerMenu ? "mobile" : "nav"}>
        <ul>
          <a href="#accueil" onClick={toggleMenu}>
            <li>accueil</li>
          </a>
          <a href="#profil" onClick={toggleMenu}>
            <li>mon profil</li>
          </a>
          <a href="#competences" onClick={toggleMenu}>
            <li>mes compétences</li>
          </a>
          <a href="#portfolio" onClick={toggleMenu}>
            <li>portfolio</li>
          </a>
          <a href="#contact" onClick={toggleMenu}>
            <li>contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
