// src/views/BookmarkDetail.jsx
import React, { useState, useEffect } from "react";
import { fetchAllOffre } from "../services/api/offre";
import Offres from "../components/Offres/offres";

function OffresListeView() {
  const [offreData, setOffreData] = useState([]);

  useEffect(() => {
    fetchAllOffre().then((data) => {
      setOffreData(data);
    });
  });

  return (
    <section>
      <Offres offres={offreData} title="Liste des offres" />
    </section>
  );
}
export default OffresListeView;
