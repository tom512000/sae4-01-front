import React, { useEffect, useState } from 'react';
import './entreprise.css';
import './entreprise.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faAt } from '@fortawesome/free-solid-svg-icons/faAt';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightToBracket';
import { getOffreEntrepriseId } from '../../services/api/enteprise';


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
  entreprise: PropTypes.object,
};
Entreprise.defaultProps = {
  entreprise: {},
};

export default Entreprise;
