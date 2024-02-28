import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="logos">
        <img src="/public/img/logo-edutech.png" alt="Logo Edutech" />
        <img src="/public/img/text-edutech.png" alt="Texte Edutech" />
      </div>
      <div className="liens">
        <div>
          <h1>
            <a href="/">Liens utiles</a>
          </h1>
          <p>
            <a href="/">À propos d&apos;Edutech</a>
          </p>
          <p>
            <a href="/">Conditions générales</a>
          </p>
          <p>
            <a href="/">Mentions légales</a>
          </p>
        </div>
      </div>
      <div className="newsletter">
        <h1>Newsletter</h1>
        <div className="newsletter_bloc">
          <div className="newsletter_bloc_1">
            <p>Email</p>
          </div>
          <div className="newsletter_bloc_2">
            <p>Je m&apos;abonne</p>
          </div>
        </div>
        <p>Vous pouvez vous désabonner à tout moment.</p>
      </div>
    </div>
  );
}

export default Footer;
