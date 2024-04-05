import React from "react";
import Navbar from "./components/Navbar/navbar";
import Menu from "./components/Menu/menu";
import Footer from "./components/Footer/footer";
import Router from "./route/index";
import UserProvider from "./contexts/user/Provider";
import ColorProvider from "./contexts/color/ColorProvider";

function App() {
  return (
    <UserProvider>
      <ColorProvider>
        <Navbar />
        <Menu />
        <Router />
        <Footer />
      </ColorProvider>
    </UserProvider>
  );
}

export default App;
