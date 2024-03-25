<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import './entreprise.css';
import PropTypes from 'prop-types';
=======
import React from 'react';
import './entreprise.css';
import PropTypes, { any } from 'prop-types';
>>>>>>> 0894959bbd07a6f6d354cb46737eb95afd198edd
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faAt } from '@fortawesome/free-solid-svg-icons/faAt';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightToBracket';
<<<<<<< HEAD
import { getOffreEntrepriseId } from '../../services/api/enteprise';
=======
>>>>>>> 0894959bbd07a6f6d354cb46737eb95afd198edd

function Entreprise({ entreprise }) {
  const [nbOffres, setNbOffres] = useState(0);
  useEffect(() => {
    getOffreEntrepriseId(entreprise.id)
      .then((offres) => setNbOffres(offres.length));
  }, [entreprise.id]);

  return (
    <div className="entreprise">
      <div className="entreprise_banniere">
        <div className="banniere_bloc_1" />
        <div className="banniere_bloc_2" />
        <img src={`${entreprise.logo}`} alt={`Logo de ${entreprise.nomEnt}`} />
      </div>
      <div className="entreprise_informations">
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
      <div className="entreprise_autres">
        <p>
          {nbOffres}
          &ensp;offre(s) d&apos;emploi
        </p>
        <div>
          <a
            href={`/entreprise/${entreprise.id}`}
            aria-label={`Détails de ${entreprise.nomEnt}`}
          >
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </a>
        </div>
      </div>
    </div>
  );
}

Entreprise.propTypes = {
<<<<<<< HEAD
  entreprise: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nomEnt: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    siteWeb: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    adresse: PropTypes.string.isRequired,
  }).isRequired,
=======
  entreprise: PropTypes.object,
};
Entreprise.defaultProps = {
  entreprise: {},
>>>>>>> 0894959bbd07a6f6d354cb46737eb95afd198edd
};

export default Entreprise;
