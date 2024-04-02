import React from "react";
import "./offres.css";
import PropTypes from "prop-types";
import Offre from "../Offre/offre";
import Pagination from "../Pagination/pagination";
import FiltreOffre from "../filtreOffres/filtreOffres";

function Offres({
  offres,
  title,
  onClick,
  onSubmit,
  skillData,
  inscriptionData,
}) {
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
          <Offre key={x.id} offre={x} inscriptionData={inscriptionData} />
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
  inscriptionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Offre: PropTypes.shape({
        id: PropTypes.number.isRequired,
        entreprise: PropTypes.shape({
          nomEnt: PropTypes.string.isRequired,
          logo: PropTypes.string.isRequired,
        }).isRequired,
        nomOffre: PropTypes.string.isRequired,
        duree: PropTypes.number.isRequired,
        lieux: PropTypes.string.isRequired,
        jourDeb: PropTypes.string.isRequired,
        nbPlace: PropTypes.number.isRequired,
        descrip: PropTypes.string.isRequired,
        Type: PropTypes.shape({
          libelle: PropTypes.string.isRequired,
        }).isRequired,
        level: PropTypes.string.isRequired,
      }).isRequired,
      User: PropTypes.string.isRequired,
      Status: PropTypes.number.isRequired,
      dateDemande: PropTypes.string.isRequired,
    }),
  ),
};

Offres.defaultProps = {
  title: "",
  onClick: null,
  onSubmit: null,
  skillData: null,
  inscriptionData: null,
};

export default Offres;
