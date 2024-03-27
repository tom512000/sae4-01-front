import React from "react";
import "./fordableCardInput.css";
import PropTypes from "prop-types";

function FordableCardInput({ type, placeholder,required, name }) {
  return (
    <div className="fordableCard_input">
      <input type={type} placeholder={placeholder} required={required} name={name} />
    </div>
  );
}

FordableCardInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

FordableCardInput.defaultProps = {
  required: false,
}

export default FordableCardInput;
