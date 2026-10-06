import CardPortfolio from "../CardPortfolio/CardPortfolio";
import "./Portfolio.scss";

function Portfolio(props) {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      {/* <p>Découvrez une sélection de sites et applications que j'ai conçus et développés. Chaque projet met en avant une approche centrée sur la performance, le responsive design, l'expérience utilisateur et la qualité du code.</p> */}
      <p>
        Découvrez une sélection de sites et applications que j'ai conçus et
        développés. Ces projets illustrent mon approche du design responsive, de
        l'expérience utilisateur et du développement frontend.
      </p>
      <div className="cards">
        <CardPortfolio
          src="./images/portfolio martin elec.png"
          titre="Martin électricité"
          description="Site vitrine pour un artisan électricien."
          lien="https://martin-elec.vercel.app"
        />
        <CardPortfolio
          src="./images/portfolio vert nature.png"
          titre="Vert & Nature"
          description="Site vitrine pour une entreprise locale."
          lien="https://vert-nature.vercel.app/"
        />

        <CardPortfolio
          src="./images/portfolio reflexe secours.png"
          titre="Réflexe Secours"
          description="Site web pour une association de secourisme"
          lien="https://reflexe-secours.vercel.app/"
        />
      </div>
    </div>
  );
}

export default Portfolio;
