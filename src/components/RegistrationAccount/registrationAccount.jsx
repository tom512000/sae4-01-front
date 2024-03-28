import React from "react";
import "./registrationAccount.css";
import { Redirect } from "wouter";
import FordableCard from "../FordableCard/fordableCard";
import FordableCardInput from "../FordableCardInput/fordableCardInput";
import FordableCardButton from "../fordableCardButton/fordableCardButton";
import { postUser } from "../../services/api/user";

function RegistrationAccount() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    formJson.aboutMe = "";
    formJson.cv = formJson.cv.name;
    formJson.lettreMotiv = formJson.lettreMotiv.name;
    postUser(formJson);
    return <Redirect to="/" />;
  }

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
      <form method="post" onSubmit={handleSubmit}>
        <FordableCardInput
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <FordableCardInput
          name="password"
          type="password"
          placeholder="Mot de passe"
          required
        />
        <FordableCardInput
          name="firstName"
          type="text"
          placeholder="Nom"
          required
        />
        <FordableCardInput
          name="lastName"
          type="text"
          placeholder="Prénom"
          required
        />
        <FordableCardInput
          name="phone"
          type="tel"
          placeholder="Numéro de téléphone"
          required
        />
        <FordableCardInput
          name="dateNais"
          type="date"
          placeholder="Date de naissance"
          required
        />
        <FordableCardInput name="cv" type="file" placeholder="CV (PDF)">
          <label htmlFor="uploadFile">Choose file</label>
        </FordableCardInput>
        <FordableCardInput
          name="lettreMotiv"
          type="file"
          placeholder="Lettre de motivation (PDF)"
        >
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
