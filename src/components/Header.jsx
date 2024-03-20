import React, { useContext, useEffect } from 'react';
import UserContext from "../contexts/user/index.js";
import { loginUrl, logoutUrl } from "../services/api/user.js";
import { useLocation } from 'wouter';

function Header() {
    const userData = useContext(UserContext);
    const [_, navigate] = useLocation();

    useEffect(() => {
        if (userData) {
            navigate("/");
        }
    }, [userData, navigate]);

    const handleLogin = () => {
        window.location.href = loginUrl();
    };

    const handleLogout = () => {
        window.location.href = logoutUrl();
    };

    return (
        <div>
            {userData ? (
                <button type="button" className="log_in" onClick={handleLogout}><p>Logout</p></button>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </div>
    );
}

export default Header;
