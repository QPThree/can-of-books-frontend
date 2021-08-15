// This is from Auth0 docs at:
// https://auth0.com/docs/quickstart/spa/react#add-login-to-your-application

import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
const makeRequest = async() => {
    
  const { getIdTokenClaims } = this.props.auth0;
  let tokenClaims = await getIdTokenClaims();
  const jwt = tokenClaims.__raw;
  console.log('jwt: ', jwt);
  const config = {
    headers: {"Authorization" : `Bearer ${jwt}`},
  };

  const serverResponse = await axios.get('http://localhost:3001/test', config);

  console.log('Success!:  ', serverResponse);
}

const LoginButton = () => {
  
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => {loginWithRedirect(); makeRequest();}}>Log In</button>;
};

export default LoginButton;
