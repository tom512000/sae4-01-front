// src/views/BookmarkDetail.jsx
import React, { useState, useEffect } from 'react';
import { fetchAllOffre } from '../services/api/offre';
import Offres from '../components/Offres/offres';

function OffresListeView() {
  const [offreData, setOffreData] = useState([]);
  const [paginationData, setPagination] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllOffre(page).then((data) => {
      setOffreData(data);
    });
  }, [page]);

  function onClick(p){
    setPage(parseInt(new URLSearchParams(p).values().next().value));
  }

  return (
    <section>
      <Offres offres={offreData} title="Liste des offres" onClick={onClick}/>
    </section>
  );
}
export default OffresListeView;
