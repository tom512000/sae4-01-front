import React from "react";
import "./connectionAccount.css";
// eslint-disable-next-line import/extensions
import FordableCard from "../FordableCard/fordableCard.jsx";
// eslint-disable-next-line import/extensions
import FordableCardInput from "../FordableCardInput/fordableCardInput.jsx";
// eslint-disable-next-line import/extensions
import FordableCardButton from "../fordableCardButton/fordableCardButton.jsx";

function ConnectionAccount() {
  const multiText = (
    <>
      Sur cette page, Connectez-vous facilement à votre compte en utilisant
      votre adresse e-mail et votre mot de passe. Vous avez également la
      possibilité de rester connecté pour un accès instantané à votre compte à
      chaque visite ultérieure.
      <br />
      <br />
      Pas encore de compte ? Pas de problème ! Cliquez sur &quot;Pas de
      compte?&quot; pour créer rapidement votre compte et rejoindre notre
      communality.
      <br />
      <br />
      Pour accéder à votre compte, veuillez saisir votre adresse e-mail et votre
      mot de passe, puis cliquez sur &quot;Se connecter&quot;.
    </>
  );

  return (
    <FordableCard
      pTitle="Content de vous revoir !"
      h1Title="BON RETOUR"
      pText={multiText}
      h2Title="Connexion"
    >
      <form action="/">
        <FordableCardInput type="email" placeholder="Email" />
        <FordableCardInput type="password" placeholder="Mot de passe" />
        <div className="fordableCard_link">
          <div>
            <input type="checkbox" id="connected" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="connected">Rester connecté ?</label>
          </div>
          <p>
            <a href="/">Pas de compte ?</a>
          </p>
        </div>
        <FordableCardButton value="SE CONNECTER" />
      </form>
    </FordableCard>
  );
}

export default ConnectionAccount;
