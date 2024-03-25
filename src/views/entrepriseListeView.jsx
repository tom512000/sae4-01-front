import React, { useState, useEffect } from 'react';
import { fetchAllEntrepise } from '../services/api/enteprise';
import Entreprises from '../components/Entreprises/entreprises';
import {fetchAllOffre} from "../services/api/offre.js";

function EntrepriseListeView() {
  const [entrepriseData, setEntrepriseData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllEntrepise(page).then((data) => {
      setEntrepriseData(data);
    });
  }, [page]);

  function onClick(p){
    setPage(parseInt(new URLSearchParams(p).values().next().value));
  }

  return (
    <section>
      <Entreprises entreprises={entrepriseData} onClick={onClick}/>
    </section>
  );
}
export default EntrepriseListeView;