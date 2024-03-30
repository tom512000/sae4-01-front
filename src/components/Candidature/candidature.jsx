import PropTypes from "prop-types";
import React from "react";
import Offre from "../Offre/offre";

function Candidature({ offre, status }) {
  return <Offre offre={offre} />;
}

Candidature.propTypes = {
  offre: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nomOffre: PropTypes.string.isRequired,
    duree: PropTypes.number.isRequired,
    lieux: PropTypes.string.isRequired,
    jourDeb: PropTypes.string.isRequired,
    nbPlace: PropTypes.number.isRequired,
    descrip: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    entreprise: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      nomEnt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  status: PropTypes.number.isRequired,
};

export default Candidature;
