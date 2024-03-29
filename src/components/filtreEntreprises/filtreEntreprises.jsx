import React, { useState } from "react";
import "./filtreEntreprises.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";

function FiltreEntreprises({ submiteText, onSubmit }) {
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
    <form className="filtreEntreprise">
      <div>
        <div className="filtreEntreprise_input">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            value={text}
            placeholder="Ex: Google"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="filtreEntreprise_buttons">
          <button onClick={handleSubmit} type="submit" disabled={!text}>
            {submiteText}
          </button>
          <button
            onClick={handleSubmitEffaceFiltre}
            aria-label="Bouton de suppression"
            type="submit"
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </form>
  );
}

FiltreEntreprises.propTypes = {
  submiteText: PropTypes.string,
  onSubmit: PropTypes.func,
};

FiltreEntreprises.defaultProps = {
  submiteText: "",
  onSubmit: null,
};

export default FiltreEntreprises;
