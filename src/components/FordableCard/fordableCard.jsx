import React, { useState } from "react";
import "./fordableCard.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";

function FordableCard({ pTitle, h1Title, pText, h2Title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="fordableCard">
      <div className={`fordableCard_text ${isExpanded ? "expanded" : ""}`}>
        <p>{pTitle}</p>
        <h1>{h1Title}</h1>
        <div className="fordableCard_ligne" />
        <p>{pText}</p>
      </div>
      <div className="fordableCard_action">
        <FontAwesomeIcon
          icon={isExpanded ? faCaretDown : faCaretUp}
          onClick={toggleExpansion}
        />
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
