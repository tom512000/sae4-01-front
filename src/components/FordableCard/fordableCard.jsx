import React from "react";
import "./fordableCard.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

function FordableCard({ pTitle, h1Title, pText, h2Title, children }) {
  // Manque la l'icone et la fermeture de la première div

  return (
    <div className="fordableCard">
      <div className="fordableCard_text">
        <p>{pTitle}</p>
        <h1>{h1Title}</h1>
        <div className="fordableCard_ligne" />
        <p>{pText}</p>
      </div>
      <div className="fordableCard_content">
        <h2>{h2Title}</h2>
        {children}
      </div>
    </div>
  );
}

FordableCard.propTypes = {
  pTitle: PropTypes.string.isRequired,
  h1Title: PropTypes.string.isRequired,
  pText: PropTypes.string.isRequired,
  h2Title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FordableCard;
