import React from 'react';
import './offres.css';
import PropTypes from 'prop-types';
import Offre from '../Offre/offre';
<<<<<<< HEAD

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
=======
import Pagination from "../Pagination.jsx";

function Offres({ offres, title , onClick}) {
    if (onClick === undefined){
        return (
            <div className="offres">
                <div className="offres_title">
                    <h1>{title}</h1>
                </div>
                {offres.map((x) => (
                    <Offre offre={x} />
                ))}
                <div className="offres_number">
                    <p>x offre(s) d&apos;emploi</p>
                </div>
            </div>
        );
    }

  return (
      <>
        <div className="offres">
          <div className="offres_title">
            <h1>{title}</h1>
          </div>
          {offres.map((x) => (
            <Offre offre={x} />
          ))}
          <div className="offres_number">
            <p>x offre(s) d&apos;emploi</p>
          </div>
        </div>
        <div>
            <Pagination onClick={onClick} max={15}/>
        </div>
      </>
>>>>>>> 0894959bbd07a6f6d354cb46737eb95afd198edd
  );
}

Offres.propTypes = {
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
  title: PropTypes.string,
};

Offres.defaultProps = {
  title: '',
};

export default Offres;
