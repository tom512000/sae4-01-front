import React from "react";
import "./entreprises.css";
import PropTypes from "prop-types";
import Entreprise from "../Entreprise/entreprise";
import Pagination from "../Pagination/pagination";
import FiltreEntreprises from "../filtreEntreprises/filtreEntreprises";

function Entreprises({ entreprises, title, onClick, onSubmit }) {
  return (
    <>
      {onSubmit && (
        <div>
          <FiltreEntreprises submiteText="Rechercher" onSubmit={onSubmit} />
        </div>
      )}
      <div className="entreprises">
        <div className="entreprises_title">
          <h1>{title}</h1>
        </div>
        <div className="entreprises_list">
          {entreprises.map((x) => (
            <Entreprise key={x.id} entreprise={x} />
          ))}
        </div>
      </div>
      {onClick && (
        <div>
          <Pagination onClick={onClick} dataLength={entreprises.length} />
        </div>
      )}
    </>
  );
}

Entreprises.propTypes = {
  entreprises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      logo: PropTypes.string.isRequired,
      nomEnt: PropTypes.string.isRequired,
      siteWeb: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired,
      adresse: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};

Entreprises.defaultProps = {
  title: "",
  onClick: null,
  onSubmit: null,
};

export default Entreprises;
