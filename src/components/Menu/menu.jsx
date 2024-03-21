import React from "react";
import "./menu.css";
import {Link} from "wouter";

function Menu() {
  return (
    <div className="menu">
      <p>
        <a href="/offres">Offres</a>
      </p>
      <p>
          <Link to="/entreprises">Entreprises</Link>
      </p>
    </div>
  );
}

export default Menu;
