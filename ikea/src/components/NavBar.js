import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  return (
    <div className="">
      {!isAuthenticated && (
        <button
          id="qsLoginBtn"
          color="primary"
          block
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </button>
      )}
      {isAuthenticated && (
        <div>
          <span className="">
            <img src={user.picture} alt="Profile" className="" width="50" />
            <h6 className="">{user.name}</h6>
          </span>

          <div>
            <FontAwesomeIcon icon="power-off" className="" />
            <RouterNavLink
              to="#"
              id="qsLogoutBtn"
              onClick={() => logoutWithRedirect()}
            >
              Log out
            </RouterNavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
