import React, { useEffect, useState } from "react";
import Candidatures from "../components/Candidatures/candidatures";
import fetchUserInscriptions from "../services/api/candidatures";

function CandidaturesView() {
  const [candidaturesData, setCandidaturesData] = useState([]);

  useEffect(() => {
    fetchUserInscriptions().then((data) => {
      setCandidaturesData(data);
    });
  }, []);

  return (
    <Candidatures title="Mes inscriptions" candidatures={candidaturesData} />
  );
}

export default CandidaturesView;
