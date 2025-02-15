import React, { useState, useEffect } from "react";
import { fetchAllOffre } from "../services/api/offre";
import Offres from "../components/Offres/offres";
import { fetchAllSkill } from "../services/api/skill";
import Loading from "../components/Loading/loading";

function OffresListeView() {
  const [offreData, setOffreData] = useState(null);
  const [page, setPage] = useState(1);
  const [skillData, setSkillData] = useState([]);
  const [filtre, setFiltre] = useState([]);

  useEffect(() => {
    fetchAllOffre(page, filtre).then((data) => {
      setOffreData(data);
    });
    fetchAllSkill().then((data) => {
      setSkillData(data);
    });
  }, [page, filtre]);

  if (!offreData) {
    return <Loading />;
  }

  function onClick(p) {
    setPage(parseInt(new URLSearchParams(p).values().next().value, 10));
  }

  function onSubmit(p) {
    setFiltre(p);
  }

  return (
    <section>
      <Offres
        offres={offreData}
        title="Liste des offres"
        onClick={onClick}
        onSubmit={onSubmit}
        skillData={skillData}
      />
    </section>
  );
}
export default OffresListeView;
