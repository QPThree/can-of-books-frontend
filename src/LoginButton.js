// This is from Auth0 docs at:
// https://auth0.com/docs/quickstart/spa/react#add-login-to-your-application

import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


const LoginButton = () => {
  
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect() }>Log In</button>;
};

export default LoginButton;
