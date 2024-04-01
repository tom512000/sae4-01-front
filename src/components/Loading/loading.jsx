import React from "react";
import "./loading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";

function Loading() {
  return (
    <div className="loading">
      <FontAwesomeIcon icon={faSpinner} spin />
      <p>Chargement...</p>
    </div>
  );
}

export default Loading;
