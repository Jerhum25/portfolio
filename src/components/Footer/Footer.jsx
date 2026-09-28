import React from "react";
import "./Footer.scss";

function Footer(props) {
  const year = new Date().getFullYear()
  console.log(year);
  
  return (
    <div className="footer">
      <hr />
      <p>&copy; {year} - JHdev - Tous droits réservés</p>
    </div>
  );
}

export default Footer;
