import React from "react";
import "./deletionAccount.css";
import FordableCard from "../FordableCard/fordableCard";
import FordableCardButton from "../fordableCardButton/fordableCardButton";

function DeletionAccount() {
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
      pTitle="Prêt à supprimer votre compte ?"
      h1Title="AUREVOIR"
      pText={multiText}
      h2Title="Suppression"
    >
      <form action="/">
        <FordableCardButton value="VALIDER" />
        <FordableCardButton value="ANNULER" />
      </form>
    </FordableCard>
  );
}

export default DeletionAccount;
