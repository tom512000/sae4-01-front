import Navbar from "./components/Navbar/navbar.jsx";
import Menu from "./components/Menu/menu.jsx";
import Footer from "./components/Footer/footer.jsx";
import Providers from "./contexts/Providers.jsx";
import Router from "./route/index.jsx";
import Provider from "./contexts/user/Provider.jsx";
import ColorProvider from "./contexts/color/ColorProvider.jsx";

function App() {
    return (
    <Providers provider={[Provider, ColorProvider]}>
        <Navbar/>
        <Menu/>
        <Router/>
        <Footer />
    </Providers>
    );
}

export default App;
