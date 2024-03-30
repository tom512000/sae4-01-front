import React from "react";
import "./candidatures.css";
import PropTypes from "prop-types";
import Candidature from "../Candidature/candidature";

function Candidatures({ candidatures, title }) {
  return (
    <div className="entreprises">
      <div className="entreprises_title">
        <h1>{title}</h1>
      </div>
      <div className="entreprises_list">
        {candidatures.map((x) => (
          <Candidature offre={x.Offre} status={x.Status} />
        ))}
      </div>
    </div>
  );
}

Candidatures.propTypes = {
  candidatures: PropTypes.arrayOf(
    PropTypes.shape({
      Offre: PropTypes.object.isRequired,
      User: PropTypes.string.isRequired,
      Status: PropTypes.number.isRequired,
      dateDemande: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
};

Candidatures.defaultProps = {
  title: "",
};

export default Candidatures;
