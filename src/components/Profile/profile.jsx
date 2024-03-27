import React from "react";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faAt } from "@fortawesome/free-solid-svg-icons/faAt";
import PropTypes from "prop-types";

function Profile({ user }) {
  return (
    <div className="profile">
      <div>
        <div className="profile_user">
          <img src={`${user.avatar}`} alt="Profil" />
          <div>
            <p>
              {user.firstName}
              &ensp;
              {user.lastName}
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
                <p>{user.dateNais}</p>
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
        <div className="profile_fichier">
          <p>
            CV (PDF) -<a href={`${user.cv}`}> Télécharger</a>
          </p>
          <div>
            <embed src={`${user.cv}`} type="application/pdf" />
          </div>
        </div>
        <div className="profile_fichier">
          <p>
            Lettre de motivation (PDF) -
            <a href={`${user.lettreMotiv}`}> Télécharger</a>
          </p>
          <div>
            <embed src={`${user.lettreMotiv}`} type="application/pdf" />
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      dateNais: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      cv: PropTypes.string.isRequired,
      lettreMotiv: PropTypes.string.isRequired,
      aboutMe: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Profile;
