import React, { useState, useEffect } from "react";
import { getMe } from "../services/api/user";
import EditAccount from "../components/EditAccount/editAccount";

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
      <EditAccount />
    </section>
  );
}

export default ProfileView;
