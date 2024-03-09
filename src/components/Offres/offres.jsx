import React from "react";
import "./offres.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
// eslint-disable-next-line import/extensions
import Offre from "../Offre/offre.jsx";

function Offres({ offres, title }) {
  // Manque le nombre d'offres

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
  title: "",
};

export default Offres;
