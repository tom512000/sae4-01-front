import React from "react";
import "./fordableCardInput.css";
import PropTypes from "prop-types";

function FordableCardInput({ type, placeholder }) {
  return (
    <div className="fordableCard_input">
      <input type={type} placeholder={placeholder} required />
    </div>
  );
}

FordableCardInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FordableCardInput;
