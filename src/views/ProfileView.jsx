import React, { useState, useEffect } from "react";
import { getMe } from "../services/api/user";
import Profile from "../components/Profile/profile";

function ProfileView() {
  const [meData, setMeData] = useState([]);
  useEffect(() => {
    getMe().then((data) => {
      setMeData(data);
    });
  }, []);

  return <Profile user={meData} />;
}

export default ProfileView;
