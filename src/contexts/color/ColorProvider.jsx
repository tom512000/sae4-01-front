import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { NightModeContext } from "../user/index";

function ColorProvider({ children }) {
  const [active, switchActive] = useState(false);
  const value = useMemo(() => ({ active, switchActive }), [active]);
  return (
    <NightModeContext.Provider value={value}>
      {children}
    </NightModeContext.Provider>
  );
}

ColorProvider.propTypes = {
  children: PropTypes.node,
};
ColorProvider.defaultProps = {
  children: null,
};

export default ColorProvider;
