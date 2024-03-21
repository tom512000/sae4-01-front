import React from "react";
import "./editAccount.css";
import FordableCard from "../FordableCard/fordableCard";
import FordableCardInput from "../FordableCardInput/fordableCardInput";
import FordableCardButton from "../fordableCardButton/fordableCardButton";

function EditAccount() {
  const multiText = (
    <>
      Sur cette page, Modifiez facilement vos informations personnel relatives à
      votre compte comme votre adresse e-mail, votre mot de passe, votre nom,
      votre prénom, votre numéro de téléphone, votre date de naissance, ainsi
      que votre CV et votre lettre de motivation au format pdf.
      <br />
      <br />
      Afin de confirmer la modification de votre compte, cliquez sur
      &quot;Valider&quot;.
    </>
  );

  return (
    <FordableCard
      pTitle="Prêt à mettre à jour vos données ?"
      h1Title="REBONJOUR"
      pText={multiText}
      h2Title="Modification"
    >
      <form action="/">
        <FordableCardInput type="email" placeholder="Email" />
        <FordableCardInput type="password" placeholder="Mot de passe" />
        <FordableCardInput type="text" placeholder="Nom" />
        <FordableCardInput type="text" placeholder="Prénom" />
        <FordableCardInput type="tel" placeholder="Numéro de téléphone" />
        <FordableCardInput type="date" placeholder="Date de naissance" />
        <FordableCardInput type="file" placeholder="CV (PDF)" />
        <FordableCardInput
          type="file"
          placeholder="Lettre de motivation (PDF)"
        />
        <FordableCardButton value="VALIDER" />
      </form>
    </FordableCard>
  );
}

export default EditAccount;
