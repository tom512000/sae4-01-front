import React, { useEffect, useState } from "react";
import Candidatures from "../components/Candidatures/candidatures";
import Loading from "../components/Loading/loading";
import { getInscriptionUserId } from "../services/api/offre";

function CandidaturesView() {
  const [candidaturesData, setCandidaturesData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getInscriptionUserId(page).then((data) => {
      setCandidaturesData(data);
    });
  }, [page]);

  function onClick(p) {
    setPage(parseInt(new URLSearchParams(p).values().next().value, 10));
  }

  if (!candidaturesData) {
    return <Loading />;
  }

  return (
    <Candidatures
      title="Mes inscriptions"
      candidatures={candidaturesData}
      onClick={onClick}
    />
  );
}

export default CandidaturesView;
