import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { colorTitle } from "../user/index.js";

function ColorProvider({ children }) {
  const [color, setColor] = useState(Math.random().toString(16).substr(-6));
  return (
    <colorTitle.Provider value={{ fontColor: color, set: setColor }}>
      {children}
    </colorTitle.Provider>
  );
}

export default ColorProvider;
ColorProvider.PropTypes = {
  children: PropTypes.node,
};
