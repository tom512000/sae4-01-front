import React from "react";
import "./registrationAccount.css";
import FordableCard from "../FordableCard/fordableCard";
import FordableCardInput from "../FordableCardInput/fordableCardInput";
import FordableCardButton from "../fordableCardButton/fordableCardButton";

function RegistrationAccount() {
  const multiText = (
    <>
      Sur cette page, Créez facilement votre compte en utilisant une adresse
      e-mail, un mot de passe, un nom, un prénom, un numéro de téléphone, une
      date de naissance, ainsi qu’un CV et une lettre de motivation au format
      pdf de façon optionnelle.
      <br />
      <br />
      Vous avez déjà un compte ? Pas de problème ! Cliquez sur &quot;Déjà membre
      ?&quot; pour vous connecter rapidement avec votre compte existant.
      <br />
      <br />
      Afin de confirmer la création de votre compte, cliquez sur
      &quot;Valider&quot;.
    </>
  );

  return (
    <FordableCard
      pTitle="Content de vous accueillir !"
      h1Title="BIENVENUE"
      pText={multiText}
      h2Title="Inscription"
    >
      <form action="/">
        <FordableCardInput type="email" placeholder="Email" />
        <FordableCardInput type="password" placeholder="Mot de passe" />
        <FordableCardInput type="text" placeholder="Nom" />
        <FordableCardInput type="text" placeholder="Prénom" />
        <FordableCardInput type="tel" placeholder="Numéro de téléphone" />
        <FordableCardInput type="date" placeholder="Date de naissance" />
        <FordableCardInput type="file" placeholder="CV (PDF)">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="uploadFile">Choose file</label>
        </FordableCardInput>
        <FordableCardInput type="file" placeholder="Lettre de motivation (PDF)">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="uploadFile">Choose file</label>
        </FordableCardInput>
        <div className="fordableCard_member">
          <p>
            <a href="/">Déjà membre ?</a>
          </p>
        </div>
        <FordableCardButton value="VALIDER" />
      </form>
    </FordableCard>
  );
}

export default RegistrationAccount;
