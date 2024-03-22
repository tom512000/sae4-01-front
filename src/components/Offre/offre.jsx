import React from "react";
import "./offre.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { format } from 'date-fns';

function Offre({ offre }) {
  // Manque une requête pour le nom et le logo de l'entreprise à partir d'idEntreprise
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
          <h1>{offre.nomOffre}</h1>
          <p>{offre.entreprise.nomEnt}</p>
          <div className="offre_donnees">
            <p>{offre.lieux}</p>
            <p>{offre.level}</p>
            <p>Durée : {offre.duree} jours</p>
            <p>Début : {format(offre.jourDeb,'d/MM/yyyy')}</p>
            <p>Nombre de places : {offre.nbPlace}</p>
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
