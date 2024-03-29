import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getOffresDetail } from "../services/api/offre";
import OffreDetails from "../components/OffreDetails/offreDetails";

function OffreDetailView({ id }) {
  const [offreData, setOffreData] = useState(null);

  useEffect(() => {
    getOffresDetail(id).then((data) => {
      setOffreData(data);
    });
  }, [id]);

  return <OffreDetails offre={offreData} />;
}

OffreDetailView.propTypes = {
  id: PropTypes.string.isRequired,
};

export default OffreDetailView;
