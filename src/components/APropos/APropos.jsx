import "./APropos.scss";

function APropos(props) {
  const beginDate = new Date("2001-12-17");
  const actualYear = new Date();
  let years = actualYear.getFullYear() - beginDate.getFullYear();
  console.log(beginDate);
  console.log(actualYear);

  const moisDiff = actualYear.getMonth() - beginDate.getMonth();
  const jourDiff = actualYear.getDate() - beginDate.getDate();

  if (moisDiff < 0 || (moisDiff === 0 && jourDiff < 0)) {
    years--;
  }
  console.log(years);

  return (
    <div className="aPropos" id="profil">
      <h2>A propos de moi</h2>
      <div className="description">
        <div className="profileImage">
          <img src="./images/profil.webp" alt="profil" />
        </div>
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
            Développeur web à Besançon <br />
            rigueur, créativité et performance au service de vos projets
          </h3>
          <br />
          <br />
          {/* <p>
            Fort de {years} années d’expérience à La Poste, j’ai acquis des qualités
            précieuses : rigueur, autonomie, sens du service et organisation.
            Aujourd’hui, je mets ces compétences humaines et professionnelles au
            service de la création de sites web modernes et performants.
            <br />
            <br />
            Développeur web basé à Besançon, je suis spécialisé dans le
            développement frontend avec React JS et Next JS. Je conçois des interfaces
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
          </p> */}
          <p>
            Je suis <b>Jérôme Humbert, développeur web frontend basé à
            Besançon.</b> Après 24 années d’expérience à La Poste, j’ai choisi de
            mettre ma rigueur, mon autonomie et mon sens du service au cœur d’un
            nouveau projet : <b>concevoir des sites web modernes et efficaces
            pour les professionnels.</b>
            <br />
            <br />
            Je développe des sites <b>rapides, responsives et pensés pour être
            visibles sur Google</b>, en utilisant des technologies modernes comme
            <b>React, Next.js et Tailwind CSS</b>. Chaque projet est conçu pour
            offrir une expérience agréable sur ordinateur, tablette comme sur
            mobile.
            <br />
            <br />
            Formé au développement web sur OpenClassrooms, je porte une
            attention particulière à <b>l’expérience utilisateur, aux
            performances, au référencement naturel (SEO) et à la qualité du
            code</b>. Mon approche reste simple : comprendre votre activité, vos
            besoins et vos objectifs pour construire un site qui vous ressemble.
            <br />
            <br />
            <b>Artisan, indépendant, entrepreneur ou association</b>, vous avez
            besoin d’un site vitrine pour présenter votre activité, développer
            votre visibilité ou moderniser votre présence en ligne ? Je vous
            accompagne de la conception à la mise en ligne avec une approche
            <b>personnalisée, claire et transparente.</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default APropos;
