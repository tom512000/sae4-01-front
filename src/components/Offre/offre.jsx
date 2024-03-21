import React, {useEffect, useState} from "react";
import "./offre.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line import/no-extraneous-dependencies
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {getEntrepriseDetail} from "../../services/api/enteprise.js";

function Offre({ offre }) {
  // Manque une requête pour le nom et le logo de l'entreprise à partir de idEntreprise
  console.log(offre)
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
    id: PropTypes.number.isRequired,
    type_id: PropTypes.number.isRequired,
    idEntreprise: PropTypes.number.isRequired,
    nom_offre: PropTypes.string.isRequired,
    duree: PropTypes.number.isRequired,
    lieux: PropTypes.string.isRequired,
    jour_deb: PropTypes.string.isRequired,
    nb_place: PropTypes.number.isRequired,
    descrip: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired,
};

export default Offre;
