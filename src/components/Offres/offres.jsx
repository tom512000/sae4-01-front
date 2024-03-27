import React from "react";
import "./offres.css";
import PropTypes from "prop-types";
import Offre from "../Offre/offre";
import Pagination from "../Pagination";
import FiltreOffre from "./filtreOffre";

function Offres({ offres, title, onClick, onSubmit, skillData }) {
  return (
    <>
      {onSubmit && (
        <div>
          <FiltreOffre
            submiteText="Submit"
            onSubmit={onSubmit}
            skillData={skillData}
          />
        </div>
      )}

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
      {onClick && (
        <div>
          <Pagination onClick={onClick} max={15} />
        </div>
      )}
    </>
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
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  skillData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      libelle: PropTypes.string.isRequired,
    }),
  ),
};

Offres.defaultProps = {
  title: "",
  onClick: null,
  onSubmit: null,
  skillData: null,
};

export default Offres;
