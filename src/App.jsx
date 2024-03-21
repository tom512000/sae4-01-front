import Navbar from "./components/Navbar/navbar.jsx";
import Menu from "./components/Menu/menu.jsx";
import Footer from "./components/Footer/footer.jsx";
import Router from "./route/index.jsx";
import UserProvider from "./contexts/user/Provider.jsx";


function App() {
    return (
        <UserProvider>
            <Navbar/>
            <Menu/>
            <Router/>
            <Footer />
        </UserProvider>
    );
}

export default App;
