import React from "react";
import "./entreprise.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line import/no-extraneous-dependencies
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faAt } from "@fortawesome/free-solid-svg-icons/faAt";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightToBracket";

function Entreprise({ entreprise }) {
  // Manque le nombre d'offres

  return (
    <div className="entreprise">
      <div className="entreprise_banniere">
        <div className="banniere_bloc_1" />
        <div className="banniere_bloc_2" />
        <img src={entreprise.logo} alt={`Logo de ${entreprise.nom_ent}`} />
      </div>
      <div className="entreprise_informations">
        <h1>{entreprise.nom_ent}</h1>
        <div>
          <FontAwesomeIcon icon={faGlobe} />
          <p>{entreprise.site_web}</p>
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
      <div className="entreprise_autres">
        <p>x offre(s)</p>
        <div>
          <a
            href={`/entreprise/${entreprise.id}`}
            aria-label={`Détails de ${entreprise.nom_ent}`}
          >
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </a>
        </div>
      </div>
    </div>
  );
}

Entreprise.propTypes = {
  entreprise: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nom_ent: PropTypes.string.isRequired,
    adresse: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    site_web: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Entreprise;
