import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  getEntrepriseDetail,
  getOffreEntrepriseId,
} from '../services/api/enteprise';

function EntrepriseDetailView({ id }) {
  const [entrepriseData, setEntrepriseData] = useState([]);
  const [offreData, setOffreData] = useState([]);

  useEffect(() => {
    getEntrepriseDetail(id).then((data) => {
      setEntrepriseData(data);
    });
    getOffreEntrepriseId(id).then((data) => {
      setOffreData(data);
    });
  }, [id]);

  return (
    <section>
      CODER DETAIL ENTREPRISE ICI
    </section>
  );
}

EntrepriseDetailView.propTypes = {
  id: PropTypes.string,
};
EntrepriseDetailView.defaultProps = {
  id: 1,
};

export default EntrepriseDetailView;
