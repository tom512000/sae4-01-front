import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getEntrepriseDetail,
  getOffreEntrepriseId,
} from "../services/api/enteprise";
import EntrepriseDetails from "../components/EntrepriseDetails/entrepriseDetails";
import Loading from "../components/Loading/loading";

function EntrepriseDetailView({ id }) {
  const [entrepriseData, setEntrepriseData] = useState(null);
  const [offresData, setOffresData] = useState(null);

  useEffect(() => {
    getEntrepriseDetail(id).then((data) => {
      setEntrepriseData(data);
    });
    getOffreEntrepriseId(id).then((data) => {
      setOffresData(data);
    });
  }, [id]);

  if (!entrepriseData) {
    return <Loading />;
  }

  return <EntrepriseDetails entreprise={entrepriseData} offres={offresData} />;
}

EntrepriseDetailView.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EntrepriseDetailView;
