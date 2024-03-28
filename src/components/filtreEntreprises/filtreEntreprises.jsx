import React, { useState } from "react";
import PropTypes from "prop-types";

function FiltreEntreprise({ submiteText, onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const filters = {
      text,
    };
    onSubmit(filters);
  };

  const handleSubmitEffaceFiltre = (event) => {
    event.preventDefault();
    setText("");
    handleSubmit(event);
  };

  return (
    <form>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="nomOffre">Nom :</label>
        <input
          type="text"
          id="nomOffre"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit} type="submit" disabled={!text}>
        {submiteText}
      </button>
      <button onClick={handleSubmitEffaceFiltre} type="submit">
        efface filtre
      </button>
    </form>
  );
}

FiltreEntreprise.propTypes = {
  submiteText: PropTypes.string,
  onSubmit: PropTypes.func,
};

FiltreEntreprise.defaultProps = {
  submiteText: "",
  onSubmit: null,
};

export default FiltreEntreprise;
