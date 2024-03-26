import React from 'react';
import './entreprises.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import Entreprise from '../Entreprise/entreprise.jsx';
import Pagination from "../Pagination.jsx";

function Entreprises({ entreprises, title , onClick}) {
    if (onClick === undefined) {
        return <div className="entreprises">
            <div className="entreprises_title">
                <h1>{title}</h1>
            </div>
            <div className="entreprises_list">
                {entreprises.map((x) => (
                    <Entreprise entreprise={x}/>
                ))}
            </div>
        </div>
    }
    return (
        <>
            <div className="entreprises">
                <div className="entreprises_title">
                    <h1>{title}</h1>
                </div>
                <div className="entreprises_list">
                    {entreprises.map((x) => (
                        <Entreprise entreprise={x}/>
                    ))}
                </div>
          </div>
        <div>
            <Pagination onClick={onClick} max={4}/>
        </div>
      </>
  );
}

Entreprises.propTypes = {
  entreprises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      logo: PropTypes.string.isRequired,
      nomEnt: PropTypes.string.isRequired,
      siteWeb: PropTypes.string.isRequired,
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
