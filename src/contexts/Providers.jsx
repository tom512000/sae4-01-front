import React from "react";
import PropTypes from "prop-types";
import Provider from "./user/Provider.jsx";

function Providers({ provider, children, ...props }) {
  return provider.reduce((AccumlatedProviders, Provider) => (
    <AccumlatedProviders>
      <Provider>{children}</Provider>
    </AccumlatedProviders>
  ));
}

Providers.PropTypes = {
  children: PropTypes.node,
  provider: PropTypes.array,
};
export default Providers;
