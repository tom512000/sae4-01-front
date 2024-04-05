import React from "react";
import "./offre.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { format } from "date-fns";

function Offre({ offre, status }) {
  let backgroundColor;
  if (status === 1) {
    backgroundColor = "#00EB18"; // Vert
  } else if (status === 2) {
    backgroundColor = "#F4F900"; // Jaune
  } else if (status === 3) {
    backgroundColor = "#FF694F"; // Rouge
  } else {
    backgroundColor = "#E43719"; // Défaut
  }
  const offreStyle = {
    backgroundColor,
  };

  return (
    <div className="offre" style={offreStyle}>
      <div className="offre_bloc">
        <div className="offre_logo">
          <img
            src={`${offre.entreprise.logo}`}
            alt={`Logo de ${offre.entreprise.nomEnt}`}
          />
        </div>
        <div className="offre_informations">
          <h1>{offre.nomOffre}</h1>
          <p>{offre.entreprise.nomEnt}</p>
          <div className="offre_donnees">
            <p>{offre.lieux}</p>
            <p>{offre.level}</p>
            <p>
              {offre.duree}
              &ensp;jours
            </p>
            <p>{format(offre.jourDeb, "dd/MM/yyyy")}</p>
            <p>{offre.nbPlace} places</p>
          </div>
          <a className="offre_bouton" href={`/offres/${offre.id}`}>
            <p>En savoir plus</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </div>
      </div>
    </div>
  );
}

Offre.propTypes = {
  offre: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nomOffre: PropTypes.string.isRequired,
    duree: PropTypes.number.isRequired,
    lieux: PropTypes.string.isRequired,
    jourDeb: PropTypes.string.isRequired,
    nbPlace: PropTypes.number.isRequired,
    descrip: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    entreprise: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      nomEnt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  status: PropTypes.number,
};

Offre.defaultProps = {
  status: 0,
};

export default Offre;
