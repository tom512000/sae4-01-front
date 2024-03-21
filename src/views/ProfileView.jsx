import React, { useState, useEffect } from "react";
import { getMe } from "../services/api/user";

function ProfileView() {
  const [meData, setMeData] = useState([]);

  // choppe l'utilisateur

  useEffect(() => {
    getMe().then((data) => {
      setMeData(data);
    });
  });

  return (
    <section>
      COMPOSANT PROFIL ICI
    </section>
  );
}

export default ProfileView;
