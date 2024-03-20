import React from "react";
import "./fordableCardInput.css";
import PropTypes from "prop-types";

function FordableCardInput({ type, placeholder, children }) {
  return (
    <div className="fordableCard_input">
      <input type={type} placeholder={placeholder} required />
      {children}
    </div>
  );
}

FordableCardInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  children: PropTypes.node,
};

FordableCardInput.defaultProps = {
  children: null,
};

export default FordableCardInput;
