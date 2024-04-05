import React, { useContext } from "react";
import "./editAccount.css";
import { Redirect } from "wouter";
import FordableCard from "../FordableCard/fordableCard";
import FordableCardInput from "../FordableCardInput/fordableCardInput";
import FordableCardButton from "../fordableCardButton/fordableCardButton";
import { patchUser } from "../../services/api/user";
import { UserContext } from "../../contexts/user/index";
import Loading from "../Loading/loading";

function EditAccount() {
  const userData = useContext(UserContext);
  if (!userData) {
    return <Loading />;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    formJson.aboutMe = "";
    formJson.cv = formJson.cv.name;
    formJson.lettreMotiv = formJson.lettreMotiv.name;
    patchUser(formJson, userData.id);
    return <Redirect to="/" />;
  }

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
      <form method="post" onSubmit={handleSubmit}>
        <FordableCardInput name="email" type="email" value={userData.email} />
        <FordableCardInput
          name="password"
          type="password"
          placeholder="Mot de passe"
        />

        <FordableCardInput
          name="firstName"
          type="text"
          value={userData.firstName}
        />

        <FordableCardInput
          name="lastName"
          type="text"
          value={userData.lastName}
        />

        <FordableCardInput name="phone" type="tel" value={userData.phone} />

        <FordableCardInput
          name="dateNais"
          type="date"
          value={userData.dateNais}
        />

        <FordableCardInput name="cv" type="file" placeholder="CV (PDF)" />

        <FordableCardInput
          name="lettreMotiv"
          type="file"
          placeholder="Lettre de motivation (PDF)"
        />

        <FordableCardButton value="VALIDER" />
      </form>
    </FordableCard>
  );
}

export default EditAccount;
