import { createContext } from "react";

export const UserContext = createContext(undefined);

export const NightModeContext = createContext({
  active: false,
  switchActive: () => {},
});
