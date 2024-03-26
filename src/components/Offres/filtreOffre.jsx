import React, { useState } from 'react';

function FiltreOffre ({ submiteText, onSubmit, skillData}){
    const [date, setDate] = useState('');
    const [text, setText] = useState('');
    const [isCheckedStage, setIsCheckedStage] = useState(false);
    const [isCheckedAlternance, setIsCheckedAlternance] = useState(false);
    const [niveau, setNiveau] = useState();
    const [showSkillList, setShowSkillList] = useState(false);
    const [selectedSkills, setSelectedSkills] = useState([])
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
            date: date,
            avantDate: isCheckedAvant,
            apresDate: isCheckedApres,
            text: text,
            isCheckedStage: isCheckedStage,
            isCheckedAlternance: isCheckedAlternance,
            niveau: niveau,
            selectedSkills: selectedSkills,
            duree: duree
        };
        onSubmit(filters);
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
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
          <label htmlFor="avant">apres</label>
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
          <label htmlFor="apres">apres</label>
        </div>
        <div>
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
          <label htmlFor="Alternance">Alternance</label>
        </div>
        <div>
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
          type="submit"
          disabled={
              !(date || text || isCheckedStage || isCheckedAlternance || duree || niveau || selectedSkills.length > 0) ||
              (!!date && !(isCheckedAvant || isCheckedApres))
          }>
          {submiteText}
        </button>
      </form>
    );
}

export default FiltreOffre;
