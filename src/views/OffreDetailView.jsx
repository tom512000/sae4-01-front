import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getOffresDetail } from "../services/api/offre";
import OffreDetails from "../components/OffreDetails/offreDetails";
import Loading from "../components/Loading/loading.jsx";

function OffreDetailView({ id }) {
  const [offreData, setOffreData] = useState(null);

  useEffect(() => {
    getOffresDetail(id).then((data) => {
      setOffreData(data);
    });
  }, [id]);

  if (!offreData) {
    return <Loading />;
  }

  return <OffreDetails offre={offreData} />;
}

OffreDetailView.propTypes = {
  id: PropTypes.string.isRequired,
};

export default OffreDetailView;
