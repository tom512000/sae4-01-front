import React from 'react';
import './offres.css';
import PropTypes from 'prop-types';
import Offre from '../Offre/offre';

function Offres({ offres, title }) {
  return (
    <div className="offres">
      <div className="offres_title">
        <h1>{title}</h1>
      </div>
      {offres.map((x) => (
        <Offre offre={x} />
      ))}
      <div className="offres_number">
        <p>
          {offres.length}
          &ensp;offre(s) d&apos;emploi
        </p>
      </div>
    </div>
  );
}

Offres.propTypes = {
  offres: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
  title: PropTypes.string,
};

Offres.defaultProps = {
  title: '',
};

export default Offres;
