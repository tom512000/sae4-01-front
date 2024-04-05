import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getMe } from "../../services/api/user";
import { UserContext } from "./index";

function Provider({ children }) {
  const [userData, setData] = useState();
  useEffect(() => {
    getMe().then((response) => {
      if (response) setData(response);
      else setData(null);
    });
  }, []);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
