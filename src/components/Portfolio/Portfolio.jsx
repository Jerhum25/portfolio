import CardPortfolio from "../CardPortfolio/CardPortfolio";
import "./Portfolio.scss";

function Portfolio(props) {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <p>
        Découvrez mes réalisations de sites vitrines et projets web, conçus avec
        une attention particulière au design responsive, à l'expérience
        utilisateur et aux performances. Ces projets de démonstration illustrent
        les solutions que je peux proposer aux artisans, indépendants et
        associations.
      </p>{" "}
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
