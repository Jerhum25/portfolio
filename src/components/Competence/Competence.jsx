import React from "react";
import "./Competence.scss";

function Competence({ src, titre }) {
  return (
    <div className="competence">
      <img src={src} alt={titre} />
      <h3>{titre}</h3>
    </div>
  );
}

export default Competence;
