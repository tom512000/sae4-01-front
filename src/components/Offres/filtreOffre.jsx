import React, { useState } from "react";
import PropTypes from "prop-types";

function FiltreOffre({ submiteText, onSubmit, skillData }) {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [isCheckedStage, setIsCheckedStage] = useState(false);
  const [isCheckedAlternance, setIsCheckedAlternance] = useState(false);
  const [niveau, setNiveau] = useState();
  const [showSkillList, setShowSkillList] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isCheckedAvant, setIsCheckedAvant] = useState(false);
  const [isCheckedApres, setIsCheckedApres] = useState(false);
  const [duree, setDuree] = useState();

  const handleSkillToggle = () => {
    setShowSkillList(!showSkillList);
  };

  const handleSkillChange = (event) => {
    const skillValue = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedSkills([...selectedSkills, skillValue]);
    } else {
      setSelectedSkills(selectedSkills.filter((skill) => skill !== skillValue));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filters = {
      date,
      avantDate: isCheckedAvant,
      apresDate: isCheckedApres,
      text,
      isCheckedStage,
      isCheckedAlternance,
      niveau,
      selectedSkills,
      duree,
    };
    onSubmit(filters);
  };

  const handleSubmitEffaceFiltre = (event) => {
    event.preventDefault();
    setDate("");
    setText("");
    setIsCheckedStage(false);
    setIsCheckedAlternance(false);
    setNiveau("");
    setSelectedSkills([]);
    setIsCheckedAvant(false);
    setIsCheckedApres(false);
    setDuree("");
    handleSubmit(event);
  };

  return (
    <form>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="date">Date de début:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="checkbox"
          id="avant"
          name="avant"
          checked={isCheckedAvant}
          onChange={() => {
            setIsCheckedAvant(!isCheckedAvant);
            if (isCheckedApres) {
              setIsCheckedApres(!isCheckedApres);
            }
          }}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="avant">avant</label>
        <input
          type="checkbox"
          id="apres"
          name="apres"
          checked={isCheckedApres}
          onChange={() => {
            setIsCheckedApres(!isCheckedApres);
            if (isCheckedAvant) {
              setIsCheckedAvant(!isCheckedAvant);
            }
          }}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="apres">apres</label>
      </div>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="nomOffre">Nom :</label>
        <input
          type="text"
          id="nomOffre"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="Stage"
          checked={isCheckedStage}
          onChange={() => {
            setIsCheckedStage(!isCheckedStage);
          }}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="Stage">Stage</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="Alternance"
          checked={isCheckedAlternance}
          onChange={() => {
            setIsCheckedAlternance(!isCheckedAlternance);
          }}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="Alternance">Alternance</label>
      </div>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="niveau">Niveau demandé :</label>
        <input
          type="number"
          id="niveau"
          value={niveau}
          onChange={(e) => setNiveau(e.target.value)}
          min="0"
          max="5"
        />
      </div>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="duree">Duree :</label>
        <input
          type="number"
          id="duree"
          value={duree}
          onChange={(e) => setDuree(e.target.value)}
          min="0"
        />
      </div>
      <div>
        <button type="button" onClick={handleSkillToggle}>
          Skill
        </button>

        {showSkillList && (
          <div>
            {/* eslint-disable-next-line react/prop-types */}
            {skillData.map((skill) => (
              <div key={skill.id}>
                <input
                  type="checkbox"
                  id={skill.id}
                  value={skill.id}
                  onChange={handleSkillChange}
                />
                <label htmlFor={skill.id}>{skill.libelle}</label>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        disabled={
          !(
            date ||
            text ||
            isCheckedStage ||
            isCheckedAlternance ||
            duree ||
            niveau ||
            selectedSkills.length > 0
          ) ||
          (!!date && !(isCheckedAvant || isCheckedApres))
        }
      >
        {submiteText}
      </button>
      <button onClick={handleSubmitEffaceFiltre} type="submit">
        efface filtre
      </button>
    </form>
  );
}

FiltreOffre.propTypes = {
  submiteText: PropTypes.string,
  onSubmit: PropTypes.func,
  skillData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      libelle: PropTypes.string.isRequired,
    }),
  ),
};

FiltreOffre.defaultProps = {
  submiteText: "",
  onSubmit: null,
  skillData: null,
};

export default FiltreOffre;
