import React, { useEffect, useState } from "react";
import "./offreDetails.css";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { getSkillOffreId } from "../../services/api/skill";
import { deleteInscription, postInscription } from "../../services/api/user";
import { getInscriptionUserId } from "../../services/api/offre";

function OffreDetails({ offre }) {
  const [skills, setSkills] = useState([]);
  const [inscriptionData, setInscription] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getSkillOffreId(offre.id).then((allSkills) => {
      setSkills(allSkills);
    });
    getInscriptionUserId().then((data) => {
      setInscription(data);
    });
  }, [offre.id, update]);

  const handleInscription = () => {
    postInscription(offre.id)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert("Inscription réussi");
        setUpdate(!update);
      })
      .catch((error) => {
        console.error("Error :", error);
        // eslint-disable-next-line no-alert
        alert("Inscription échouée");
      });
  };

  const handleUnsubscribe = () => {
    const inscription = inscriptionData.find(
      (data) => data.Offre.id === offre.id,
    );
    deleteInscription(inscription.id)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert("Désinscription réussi");
        setUpdate(!update);
      })
      .catch((error) => {
        console.error("Error :", error);
        // eslint-disable-next-line no-alert
        alert("Désinscription échouée");
      });
  };

  const isInscrit =
    inscriptionData &&
    inscriptionData.some((data) => data.Offre.id === offre.id);

  return (
    <div className="offreDetails">
      <div>
        <div className="offreDetails_entreprise">
          <img
            src={`${offre.entreprise.logo}`}
            alt={`Entreprise ${offre.entreprise.nomEnt}`}
          />
          <p>{offre.entreprise.nomEnt}</p>
        </div>
        <h1>{offre.nomOffre}</h1>
        <div className="offreDetails_informations">
          <p>{offre.lieux}</p>
          <p>{offre.level}</p>
          <p>{offre.duree} jours</p>
          <p>{format(offre.jourDeb, "d/MM/yyyy")}</p>
          <p>{offre.nbPlace} places</p>
        </div>
        {inscriptionData && (
          <div className="offreDetails_buttons">
            {!isInscrit && (
              // eslint-disable-next-line react/button-has-type
              <button type="button" onClick={handleInscription}>
                Postuler
              </button>
            )}
            {isInscrit && (
              // eslint-disable-next-line react/button-has-type
              <button type="button" onClick={handleUnsubscribe}>
                Se désinscrire
              </button>
            )}
          </div>
        )}
      </div>
      <div>
        <h2>Description de l&apos;offre</h2>
        <p>{offre.descrip}</p>
        <h2>Compétences</h2>
        <div className="offreDetails_competences">
          {skills.map((skill) => (
            <p key={skill.skill.id}>{skill.skill.libelle}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

OffreDetails.propTypes = {
  offre: PropTypes.shape({
    id: PropTypes.number,
    idEntreprise: PropTypes.number,
    nomOffre: PropTypes.string.isRequired,
    duree: PropTypes.number.isRequired,
    lieux: PropTypes.string.isRequired,
    jourDeb: PropTypes.string.isRequired,
    nbPlace: PropTypes.number.isRequired,
    descrip: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    entreprise: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      nomEnt: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

OffreDetails.defaultProps = {
  offre: {
    id: 0,
    idEntreprise: 0,
  },
};

export default OffreDetails;
