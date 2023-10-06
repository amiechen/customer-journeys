import React from "react";
import ikeapre from "../assets/ikea-pre-login.png";
import ikeapost from "../assets/ikea-post-login.png";
import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div className="">
      {!isAuthenticated && <img src={ikeapre} />}
      {isAuthenticated && <img src={ikeapost} />}
    </div>
  );
};

export default Hero;
