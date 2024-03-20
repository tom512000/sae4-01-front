import React, { useState, useEffect } from 'react';
import {getMe} from "../../services/api/user.js";
import UserContext from "./index.js";
import PropTypes from "prop-types";

function Provider({ children }) {
  const [userData, setData] = useState();
  useEffect(() => {
    getMe().then((response) => {
      if (response) setData(response);
      else setData(null);
    });
  }, []);

  return (
      <UserContext.Provider value={userData}>
        {children}
      </UserContext.Provider>
  );
}
Provider.PropTypes = {
  children: PropTypes.node,
};
export default Provider;
