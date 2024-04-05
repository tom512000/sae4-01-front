import React, { useContext } from "react";
import "./profileMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons/faBoxArchive";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons/faDoorOpen";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons/faTableColumns";
import { logoutUrl } from "../../services/api/user";
import { UserContext } from "../../contexts/user/index";

function ProfileMenu() {
  /* Utilisateur actuel */
  const userData = useContext(UserContext);

  /* Gestion du rôle ADMIN */
  const isAdmin = userData.roles[0] === "ROLE_ADMIN";

  return (
    <div className="menu_profil">
      <div className="profileMenu_user">
        <img src={`${userData.avatar}`} alt="Profil" />
        <div className="profileMenu_infos">
          <p>{userData.firstName}</p>
          <p>{userData.lastName}</p>
          <p>
            <a href="/profile">Mon profil</a>
          </p>
        </div>
      </div>
      <hr />
      <div className="profileMenu_links">
        {isAdmin && (
          <a href="https://127.0.0.1:8000/admin">
            <FontAwesomeIcon icon={faTableColumns} />
            <p>Tableau de bord</p>
          </a>
        )}
        <a href="/profile/modif">
          <FontAwesomeIcon icon={faUser} />
          <p>Modifier profil</p>
        </a>
        <a href="/profile/delete">
          <FontAwesomeIcon icon={faTrashCan} />
          <p>Supprimer profil</p>
        </a>
        <a href="/inscriptions">
          <FontAwesomeIcon icon={faBoxArchive} />
          <p>Mes inscriptions</p>
        </a>
      </div>
      <hr />
      <div className="profile_disc">
        <a href={logoutUrl()}>
          <FontAwesomeIcon icon={faDoorOpen} />
          <p>Déconnexion</p>
        </a>
      </div>
    </div>
  );
}

export default ProfileMenu;
