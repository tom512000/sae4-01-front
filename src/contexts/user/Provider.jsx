import React, { useState, useEffect } from 'react';
import {getMe} from "../../services/api/user.js";
import PropTypes from "prop-types";
import {UserContext} from "./index.js";

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
Provider.propTypes = {
  children: PropTypes.node,
};
export default Provider;
