import React from "react";
import Competence from "../Competence/Competence";
import "./Competences.scss";

function Competences(props) {
  return (
    <div className="competences" id="competences">
      <h2>Mes compétences</h2>
      <p>
        Au cours de mon apprentissage, j'ai découvert des languages de
        programation, framework, base de données en ligne, service de
        collaboration...
      </p>
      <div className="logos">
        <Competence src="./images/logo html5.png" titre="HTML5" />
        <Competence src="./images/logo css3.png" titre="CSS3" />
        <Competence src="./images/logo javascript.png" titre="JAVASCRIPT" />
        <Competence src="./images/logo react.png" titre="REACT JS" />
        <Competence src="./images/logo nodejs.png" titre="NODE JS" />
        <Competence src="./images/logo mongodb.png" titre="MONGO DB" />
        <Competence src="./images/logo github.png" titre="GITHUB" />
      </div>
    </div>
  );
}

export default Competences;
