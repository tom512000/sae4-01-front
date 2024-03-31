import React from "react";
import "./notFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <h1>Page inexistante 😓</h1>
      <p>La page que vous recherchez n&apos;existe pas.</p>
      <p>
        Retournez à la&ensp;
        <a href="/">page d&apos;accueil</a>.
      </p>
    </div>
  );
}

export default NotFound;
