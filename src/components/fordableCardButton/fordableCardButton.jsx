import React from "react";
import "./fordableCardButton.css";
import PropTypes from "prop-types";

function FordableCardButton({ value }) {
  return <input type="submit" className="button" value={value} />;
}

FordableCardButton.propTypes = {
  value: PropTypes.string.isRequired,
};

export default FordableCardButton;
