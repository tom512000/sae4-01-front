import React, { useEffect, useState } from "react";
import Candidatures from "../components/Candidatures/candidatures";
import fetchUserInscriptions from "../services/api/candidatures";
import Loading from "../components/Loading/loading";

function CandidaturesView() {
  const [candidaturesData, setCandidaturesData] = useState(null);

  useEffect(() => {
    fetchUserInscriptions().then((data) => {
      setCandidaturesData(data);
    });
  }, []);

  if (!candidaturesData) {
    return <Loading />;
  }

  return (
    <Candidatures title="Mes inscriptions" candidatures={candidaturesData} />
  );
}

export default CandidaturesView;
