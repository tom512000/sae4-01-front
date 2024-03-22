import React, { useState } from "react";
import PropTypes from "prop-types";
import { colorTitle } from "../user/index";

function ColorProvider({ children }) {
  const [color, setColor] = useState(Math.random().toString(16).substr(-6));
  return (
    <colorTitle.Provider value={{ fontColor: color, set: setColor }}>
      {children}
    </colorTitle.Provider>
  );
}

ColorProvider.propTypes = {
  children: PropTypes.node,
};
ColorProvider.defaultProps = {
  children: null,
};

export default ColorProvider;
