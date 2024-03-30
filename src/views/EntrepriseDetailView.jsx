import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getEntrepriseDetail,
  getOffreEntrepriseId,
} from "../services/api/enteprise";
import EntrepriseDetails from "../components/EntrepriseDetails/entrepriseDetails";

function EntrepriseDetailView({ id }) {
  const [entrepriseData, setEntrepriseData] = useState([]);
  const [offresData, setOffresData] = useState([]);

  useEffect(() => {
    getEntrepriseDetail(id).then((data) => {
      setEntrepriseData(data);
    });
    getOffreEntrepriseId(id).then((data) => {
      setOffresData(data);
    });
  }, [id]);

  return <EntrepriseDetails entreprise={entrepriseData} offres={offresData} />;
}

EntrepriseDetailView.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EntrepriseDetailView;
