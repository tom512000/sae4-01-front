import React, { useContext, useEffect } from 'react';
import { loginUrl, logoutUrl } from "../services/api/user.js";
import { useLocation } from 'wouter';
import {UserContext} from "../contexts/user/index.js";

function Header() {
    const userData = useContext(UserContext);
    const [_, navigate] = useLocation();
    console.log(userData)
    useEffect(() => {
        if (userData) {
            navigate("/");
        }
    }, [userData, navigate]);

    return (
        <div>
            {userData ? (
                <button type="button" className="log_in" onClick={logoutUrl}><p>Logout</p></button>
            ) : (
                <a type="button" className="log_in" href={loginUrl()}>Login</a>
            )}
        </div>
    );
}

export default Header;
