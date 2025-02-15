import React from "react";
import "./offres.css";
import PropTypes from "prop-types";
import Offre from "../Offre/offre";
import Pagination from "../Pagination/pagination";
import FiltreOffre from "../filtreOffres/filtreOffres";

function Offres({ offres, title, onClick, onSubmit, skillData }) {
  let marginTop;
  if (title === "") {
    marginTop = "15px";
  } else {
    marginTop = "0";
  }
  const offresStyle = {
    marginTop,
  };

  return (
    <>
      {onSubmit && (
        <div>
          <FiltreOffre
            submiteText="Rechercher"
            onSubmit={onSubmit}
            skillData={skillData}
          />
        </div>
      )}

      <div className="offres">
        <div className="offres_title" style={offresStyle}>
          <h1>{title}</h1>
        </div>
        {offres.map((x) => (
          <Offre key={x.id} offre={x} />
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
          <Pagination onClick={onClick} dataLength={offres.length} />
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
