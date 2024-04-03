import React from "react";
import "./candidatures.css";
import "../Offres/offres.css";
import PropTypes from "prop-types";
import Offre from "../Offre/offre";
import Pagination from "../Pagination/pagination";

function Candidatures({ candidatures, title, onClick}) {
  return (
    <>
      <div className="candidatures_legende">
        <div className="candidature_legende">
          <div id="vert" />
          <p>Candidature acceptée</p>
        </div>
        <div className="candidature_legende">
          <div id="jaune" />
          <p>Candidature en attente</p>
        </div>
        <div className="candidature_legende">
          <div id="rouge" />
          <p>Candidature refusée</p>
        </div>
      </div>
      <div className="offres">
        <div className="offres_title">
          <h1>{title}</h1>
        </div>
        {candidatures.map((x) => (
          <Offre offre={x.Offre} status={x.Status} />
        ))}
        <div className="offres_number">
          <p>
            {candidatures.length}
            &ensp;offre(s) d&apos;emploi
          </p>
        </div>
      </div>
      {onClick && (
        <div>
          <Pagination onClick={onClick} dataLength={candidatures.length} />
        </div>
      )}
    </>
  );
}

Candidatures.propTypes = {
  candidatures: PropTypes.arrayOf(
    PropTypes.shape({
      Offre: PropTypes.shape({
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
      User: PropTypes.string.isRequired,
      Status: PropTypes.number.isRequired,
      dateDemande: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

Candidatures.defaultProps = {
  title: "",
  onClick: null,
};

export default Candidatures;
