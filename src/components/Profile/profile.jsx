import React from "react";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faAt } from "@fortawesome/free-solid-svg-icons/faAt";
import PropTypes from "prop-types";
import { format } from "date-fns";
import Loading from "../Loading/loading";

function Profile({ user }) {
  if (!user || !user.id) {
    return <Loading />;
  }

  let cvElement;
  if (user.cv) {
    cvElement = (
      <div className="profile_fichier">
        <p>
          CV (PDF) - <a href={`${user.cv}`}>Télécharger</a>
        </p>
        <div>
          <embed src={`${user.cv}`} type="application/pdf" />
        </div>
      </div>
    );
  } else {
    cvElement = (
      <div className="profile_fichier">
        <p>CV (PDF)</p>
        <div>
          <p>Aucun CV</p>
        </div>
      </div>
    );
  }

  let lettreMotivElement;
  if (user.lettreMotiv) {
    lettreMotivElement = (
      <div className="profile_fichier">
        <p>
          Lettre de motivation (PDF) -{" "}
          <a href={`${user.lettreMotiv}`}>Télécharger</a>
        </p>
        <div>
          <embed src={`${user.lettreMotiv}`} type="application/pdf" />
        </div>
      </div>
    );
  } else {
    lettreMotivElement = (
      <div className="profile_fichier">
        <p>Lettre de motivation (PDF)</p>
        <div>
          <p>Aucune lettre de motivation</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile">
      <div>
        <div className="profile_user">
          <img src={`${user.avatar}`} alt="Profil" />
          <div>
            <p>
              {user.firstName} {user.lastName}
            </p>
            <div className="profile_infos">
              <div className="profile_keys">
                <div>
                  <FontAwesomeIcon icon={faCalendar} />
                  <p>Date de naissance</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faPhone} />
                  <p>Numéro de téléphone</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faAt} />
                  <p>Email</p>
                </div>
              </div>
              <div className="profile_values">
                <p>{format(user.dateNais, "d/MM/yyyy")}</p>
                <p>{user.phone}</p>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_bio">
          <p>À propos de moi</p>
          <p>{user.aboutMe}</p>
        </div>
      </div>
      <div>
        {cvElement}
        {lettreMotivElement}
      </div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    dateNais: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cv: PropTypes.string,
    lettreMotiv: PropTypes.string,
    aboutMe: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

Profile.defaultProps = {
  user: {
    id: 0,
    firstName: "",
    lastName: "",
    phone: "",
    dateNais: "",
    email: "",
    cv: null,
    lettreMotiv: null,
    aboutMe: "",
    avatar: "",
  },
};

export default Profile;
