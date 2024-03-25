import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getEntrepriseDetail } from '../services/api/enteprise';
import { getOffresDetail } from '../services/api/offre';

function OffreDetailView({ id }) {
  const [offreData, setOffreData] = useState([]);

  useEffect(() => {
    getOffresDetail(id).then((data) => {
      setOffreData(data);
    });
  }, [id]);

  return (
    <section>
      CODER DETAIL OFFRE ICI
    </section>
  );
}

OffreDetailView.propTypes = {
  id: PropTypes.string,
};
OffreDetailView.defaultProps = {
  id: 1,
};

export default OffreDetailView;
