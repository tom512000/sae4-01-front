import React, { useContext, useEffect } from 'react';
import { useLocation } from 'wouter';
import { loginUrl, logoutUrl } from '../services/api/user';
import { UserContext } from '../contexts/user/index';

function Header() {
  const userData = useContext(UserContext);
  const [_, navigate] = useLocation();
  useEffect(() => {
    if (userData) {
      navigate('/');
    }
  }, [userData, navigate]);

  return (
    <div>
      {userData ? (
        <button type="button" className="log_in" onClick={logoutUrl}>
          <p>Logout</p>
        </button>
      ) : (
        <a type="button" className="log_in" href={loginUrl()}>
          Login
        </a>
      )}
    </div>
  );
}

export default Header;
