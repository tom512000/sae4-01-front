import React, { useState, useEffect } from "react";
import { fetchAllEntrepise } from "../services/api/enteprise";
import Entreprises from "../components/Entreprises/entreprises";

function EntrepriseListeView() {
  const [entrepriseData, setEntrepriseData] = useState([]);
  const [page, setPage] = useState(1);
  const [filtre, setFiltre] = useState([]);

  useEffect(() => {
    fetchAllEntrepise(page, filtre).then((data) => {
      setEntrepriseData(data);
    });
  }, [page, filtre]);

  function onClick(p) {
    setPage(parseInt(new URLSearchParams(p).values().next().value, 10));
  }

  function onSubmit(p) {
    setFiltre(p);
  }

  return (
    <Entreprises
      entreprises={entrepriseData}
      onClick={onClick}
      onSubmit={onSubmit}
    />
  );
}
export default EntrepriseListeView;
