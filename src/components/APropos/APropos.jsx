import "./APropos.scss";

function APropos(props) {
  return (
    <div className="aPropos" id="profil">
      <h2>A propos de moi</h2>
      <div className="description">
        <div className="profileImage"><img src="./images/profil.webp" alt="profil" /></div>
        <div className="text">
          {/* <p>
            De facteur à développeur web : un parcours guidé par la rigueur et la
            passion
            <br />
            <br />
            Après 23 ans en tant que facteur à La Poste, j’ai développé des
            qualités essentielles : rigueur, organisation, autonomie et sens du
            service. Ces compétences, alliées à ma passion pour le numérique,
            m'ont poussé à me reconvertir dans le développement web.
            <br />
            <br />
            J’ai suivi une formation diplômante sur OpenClassrooms, où j’ai acquis
            des compétences en HTML, CSS, JavaScript, React JS, Node.js et
            MongoDB. Aujourd’hui, je mets cette expertise au service de projets
            web modernes, avec une attention particulière aux détails, à
            l’accessibilité et à l’expérience utilisateur.
            <br />
            <br />
            Mon objectif ? Concevoir des interfaces fluides et intuitives, en
            mettant ma rigueur et ma capacité d’adaptation au service du
            développement frontend.
          </p> */}
            <h3>
              Développeur web à Besançon <br/>rigueur, créativité et performance au
              service de vos projets
            </h3>
            <br />
            <br />
          <p>
            Fort de 23 années d’expérience à La Poste, j’ai acquis des qualités
            précieuses : rigueur, autonomie, sens du service et organisation.
            Aujourd’hui, je mets ces compétences humaines et professionnelles au
            service de la création de sites web modernes et performants.
            <br />
            <br />
            Développeur web basé à Besançon, je suis spécialisé dans le
            développement frontend avec React JS. Je conçois des interfaces
            fluides, accessibles et optimisées pour tous les supports. Mon
            objectif : transformer vos idées en solutions numériques efficaces et
            sur mesure.
            <br />
            <br />
            Formé sur OpenClassrooms, je maîtrise les technologies HTML, CSS,
            JavaScript, React JS, Node.js et MongoDB. Je suis également attentif à
            l’expérience utilisateur (UX) et à l’optimisation SEO dès la
            conception de chaque projet.
            <br />
            <br />
            Que vous soyez entrepreneur, indépendant ou association, je vous
            accompagne dans la création ou la refonte de votre site internet avec
            engagement, réactivité et exigence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default APropos;
