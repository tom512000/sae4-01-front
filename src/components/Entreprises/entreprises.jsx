import React from 'react';
import './entreprises.css';
import PropTypes from 'prop-types';
import Entreprise from '../Entreprise/entreprise';

function Entreprises({ entreprises, title }) {
  return (
    <div className="entreprises">
      <div className="entreprises_title">
        <h1>{title}</h1>
      </div>
      <div className="entreprises_list">
        {entreprises.map((x) => (
          <Entreprise entreprise={x} />
        ))}
      </div>
    </div>
  );
}

Entreprises.propTypes = {
  entreprises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      logo: PropTypes.string.isRequired,
      nom_ent: PropTypes.string.isRequired,
      site_web: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired,
      adresse: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
};

Entreprises.defaultProps = {
  title: '',
};

export default Entreprises;
