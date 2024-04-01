import React, { useEffect, useState } from "react";
import "./offreDetails.css";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { getSkillOffreId } from "../../services/api/skill";

function OffreDetails({ offre }) {
  // Manque la condition sur les boutons

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkillOffreId(offre.id).then((allSkills) => {
      setSkills(allSkills);
    });
  }, [offre.id]);

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
        <div className="offreDetails_buttons">
          <button type="button">Se désinscrire</button>
          <button type="button">Postuler</button>
        </div>
      </div>
      <div>
        <h2>Description de l&apos;offre</h2>
        <p>{offre.descrip}</p>
        <h2>Compétences</h2>
        <div className="offreDetails_competences">
          {skills.map((skill) => (
            <p key={skill.id}>{skill.skill.libelle}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

OffreDetails.propTypes = {
  offre: PropTypes.shape({
    id: PropTypes.number.isRequired,
    idEntreprise: PropTypes.number.isRequired,
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
  }).isRequired,
};

export default OffreDetails;
