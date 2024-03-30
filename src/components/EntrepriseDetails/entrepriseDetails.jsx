import React from "react";
import "./entrepriseDetails.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faAt } from "@fortawesome/free-solid-svg-icons/faAt";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import Offres from "../Offres/offres";

function EntrepriseDetails({ entreprise, offres }) {
  return (
    <div className="entrepriseDetails">
      <div>
        <div className="entrepriseDetails_image">
          <img src={entreprise.logo} alt={entreprise.nomEnt} />
        </div>
        <div className="entrepriseDetails_informations">
          <h1>{entreprise.nomEnt}</h1>
          <div>
            <FontAwesomeIcon icon={faGlobe} />
            <p>{entreprise.siteWeb}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faAt} />
            <p>{entreprise.mail}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{entreprise.adresse}</p>
          </div>
        </div>
      </div>
      <Offres offres={offres} />
    </div>
  );
}

EntrepriseDetails.propTypes = {
  entreprise: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      logo: PropTypes.string.isRequired,
      nomEnt: PropTypes.string.isRequired,
      siteWeb: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired,
      adresse: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  offres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nomOffre: PropTypes.string.isRequired,
      duree: PropTypes.number.isRequired,
      lieux: PropTypes.string.isRequired,
      jourDeb: PropTypes.string.isRequired,
      nbPlace: PropTypes.number.isRequired,
      descrip: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default EntrepriseDetails;
