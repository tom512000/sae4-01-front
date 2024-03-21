import React, { useState, useEffect } from "react";
import { fetchAllEntrepise } from "../services/api/enteprise";
import Entreprises from "../components/Entreprises/entreprises";
import Offres from "../components/Offres/offres";
import { fetchAllOffre } from "../services/api/offre";

function HomeView() {
  const [entrepriseData, setEntrepriseData] = useState([]);
  const [offreData, setOffreData] = useState([]);

  useEffect(() => {
    fetchAllEntrepise().then((data) => {
      setEntrepriseData(data);
    });
    fetchAllOffre().then((data) => {
      setOffreData(data);
    });
  });

  return (
    <section>
      <Entreprises title="Entreprises du moment" entreprises={entrepriseData} />
      <Offres offres={offreData} title="Offres récentes" />
    </section>
  );
}
export default HomeView;
