import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getEntrepriseDetail } from "../services/api/enteprise";
import { getOffresDetail } from "../services/api/offre";

function OffreDetailView({ id }) {
  const [entrepriseData, setEntrepriseData] = useState([]);
  const [offreData, setOffreData] = useState([]);

  // choppe l'offre

  useEffect(() => {
    getOffresDetail(id).then((data) => {
      setOffreData(data);
    });
  });

  // choppe l'entreprise qui a posté l'offre, d'ici on peut accéder au logo par ex

  useEffect(() => {
    getEntrepriseDetail(offreData.entreprise.id).then((data) => {
      setEntrepriseData(data);
    });
  }, [offreData]);

  return (
    <section>
      CODER DETAIL OFFRE ICI
    </section>
  );
}

OffreDetailView.propTypes = {
  id: PropTypes.string,
};
OffreDetailView.defaultProps = {
  id: 1,
};

export default OffreDetailView;
