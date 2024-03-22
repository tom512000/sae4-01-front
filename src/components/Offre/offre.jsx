import React from "react";
import "./offre.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

function Offre({ offre }) {
  // Manque une requête pour le nom et le logo de l'entreprise à partir de idEntreprise
  return (
    <div className="offre">
      <div className="offre_bloc">
        <div className="offre_logo">
          <img
            src={`${offre.entreprise.logo}`}
            alt={`Logo de ${offre.entreprise.nomEnt}`}
          />
        </div>
        <div className="offre_informations">
          <h1>{offre.nom_offre}</h1>
          <p>{offre.entreprise.nomEnt}</p>
          <div className="offre_donnees">
            <p>{offre.lieux}</p>
            <p>{offre.level}</p>
            <p>{offre.duree}</p>
            <p>{offre.jour_deb}</p>
            <p>{offre.nb_place}</p>
          </div>
          <div className="offre_bouton">
            <p>En savoir plus</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

Offre.propTypes = {
  offre: PropTypes.shape({
    id: PropTypes.number,
    type_id: PropTypes.number,
    idEntreprise: PropTypes.number,
    nom_offre: PropTypes.string,
    duree: PropTypes.number,
    lieux: PropTypes.string,
    jour_deb: PropTypes.string,
    nb_place: PropTypes.number,
    descrip: PropTypes.string,
    level: PropTypes.string,
    entreprise: PropTypes.shape({
      logo: PropTypes.string,
      nomEnt: PropTypes.string,
    }),
  }),
};

Offre.defaultProps = {
  offre: {},
};

export default Offre;
