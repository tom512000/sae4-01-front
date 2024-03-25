import React from 'react';
import Navbar from './components/Navbar/navbar';
import Menu from './components/Menu/menu';
import Footer from './components/Footer/footer';
import Router from './route/index';
import UserProvider from './contexts/user/Provider';

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Menu />
      <Router />
      <Footer />
    </UserProvider>
  );
}

export default App;
