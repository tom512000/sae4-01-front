import React from "react";
import "./fordableCardInput.css";
import PropTypes from "prop-types";

function FordableCardInput({ type, placeholder, required, name, value }) {
  return (
    <div className="fordableCard_input">
      {value && (
        <input
          type={type}
          defaultValue={value}
          required={required}
          name={name}
        />
      )}
      {placeholder && (
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          name={name}
        />
      )}
    </div>
  );
}

FordableCardInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

FordableCardInput.defaultProps = {
  value: null,
  placeholder: null,
  required: false,
};

export default FordableCardInput;
