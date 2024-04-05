import React from "react";
import "./aboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs_text">
        <div>
          <h1>Qui sommes-nous ?</h1>
          <p>
            Bienvenue chez EduTech, votre partenaire dévoué dans la recherche de
            stages et d&apos;alternances. Fondée par un groupe de passionnés,
            notre équipe partage une vision commune : faciliter le chemin des
            étudiants vers des opportunités professionnelles enrichissantes.
          </p>
          <p>
            Nous comprenons les défis auxquels sont confrontés les étudiants
            lorsqu&apos;ils cherchent à démarrer leur carrière. C&apos;est
            pourquoi nous avons uni nos forces pour créer une plateforme
            dynamique et inclusive, dédiée à guider chaque étudiant vers le
            professionnel.
          </p>
          <p>
            Notre mission est claire : connecter les étudiants talentueux avec
            des stages et des opportunités d&apos;alternance adaptés à leurs
            compétences et aspirations. Grâce à une approche personnalisée, nous
            nous efforçons de comprendre les besoins uniques de chaque étudiant,
            facilitant ainsi une transition fluide de l&apos;éducation à la
            carrière.
          </p>
          <p>
            Ensemble, faisons de chaque opportunité une réalité. Découvrez le
            monde d&apos;EduTech, où votre avenir prend vie.
          </p>
        </div>
        <div>
          <img src="/img/reunion.png" alt="Réunion" />
        </div>
      </div>
      <h1>Notre équipe</h1>
      <div className="aboutUs_photos">
        <div>
          <div className="aboutUs_photo">
            <img src="/img/baptiste.png" alt="Baptiste" />
            <div>
              <h2>Baptiste SIMON</h2>
              <p>Développeur Backend</p>
              <p>« Go en mettre 2000 »</p>
            </div>
          </div>
          <div className="aboutUs_photo">
            <img src="/img/valentin.png" alt="Valentin" />
            <div>
              <h2>Valentin CLADEL</h2>
              <p>Développeur Backend</p>
              <p>« ÇA MARCHE PAS »</p>
            </div>
          </div>
        </div>
        <div>
          <div className="aboutUs_photo">
            <img src="/img/tom.png" alt="Tom" />
            <div>
              <h2>Tom SIKORA</h2>
              <p>Développeur Frontend</p>
              <p>« Dormir ? »</p>
            </div>
          </div>
          <div className="aboutUs_photo">
            <img src="/img/amogus.png" alt="Amogus" />
            <div>
              <h2>Amo GUS</h2>
              <p>Développeur Frontend</p>
              <p>« AMOGUS »</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
