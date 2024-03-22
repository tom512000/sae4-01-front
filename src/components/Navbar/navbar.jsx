import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import Header from "../Header";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logos">
        <img src="/public/img/logo-edutech.png" alt="Logo Edutech" />
        <img src="/public/img/text-edutech.png" alt="Texte Edutech" />
      </div>
      <div className="navbar_buttons">
        <button type="button" className="sign_in">
          <p>
            <a href="/">Inscription</a>
          </p>
        </button>
        <Header />
        <button
          type="button"
          className="profile_menu"
          aria-label="Toggle Profile Menu"
        >
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
