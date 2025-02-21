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
        <img src="./images/Mon logo noir.webp" alt="logo" />
        <span>dev front-end</span>
      </a>
      <div className="burgerMenu" onClick={toggleMenu}>
        <div className={burgerMenu ? "lineOpen" : "line"}></div>
      </div>
      <nav className={burgerMenu ? "mobile" : "nav"}>
        <ul>
          <li  onClick={toggleMenu}>
            <a href="#accueil">accueil</a>
          </li>
          <li  onClick={toggleMenu}>
            <a href="#profil">mon profil</a>
          </li>
          <li  onClick={toggleMenu}>
            <a href="#competences">mes compétences</a>
          </li>
          <li  onClick={toggleMenu}>
            <a href="#portfolio">portfolio</a>
          </li>
          <li  onClick={toggleMenu}>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
