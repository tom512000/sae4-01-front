import React, { useContext, useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { loginUrl, logoutUrl } from "../../services/api/user";
import { NightModeContext, UserContext } from "../../contexts/user/index";
import ProfileMenu from "../ProfileMenu/profileMenu";

function Navbar() {
  /* Gestion Header */
  const userData = useContext(UserContext);

  /* Gestion Menu du profil */
  const nightmode = useContext(NightModeContext);
  const toggleNightMode = () => {
    nightmode.switchActive(!nightmode.active);
  };

  /* Gestion Menu du profil */
  const [isVisible, setIsVisible] = useState(false);
  const toggleProfileMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="navbar">
      <div className="navbar_logos">
        <a href="/" className="navbar_image">
          <img src="/public/img/logo-edutech.png" alt="Logo Edutech" />
        </a>
        <a href="/" className="navbar_image">
          <img src="/public/img/text-edutech.png" alt="Texte Edutech" />
        </a>
      </div>
      <div className="navbar_buttons">
        {nightmode.active ? (
          <button
            type="button"
            className="sign_in"
            aria-label="Bouton Night"
            onClick={toggleNightMode}
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>
        ) : (
          <button
            type="button"
            className="sign_in"
            aria-label="Bouton Light"
            onClick={toggleNightMode}
          >
            <FontAwesomeIcon icon={faSun} />
          </button>
        )}
        {userData ? (
          <>
            <button type="button" className="log_in_out">
              <p>
                <a href={logoutUrl()}>Se déconnecter</a>
              </p>
            </button>
            <button
              type="button"
              className="profile_menu"
              aria-label="Toggle Profile Menu"
              onClick={toggleProfileMenu}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
            {isVisible && <ProfileMenu />}
          </>
        ) : (
          <>
            <button type="button" className="sign_in">
              <p>
                <a href="/inscription">Inscription</a>
              </p>
            </button>
            <button type="button" className="log_in_out">
              <p>
                <a href={loginUrl()}>Se connecter</a>
              </p>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
