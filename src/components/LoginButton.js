import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

// one button for login and logout should be sufficient I think

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button variant="light" onClick={() => loginWithRedirect()}>
      LOG IN
    </Button>
  );
};

export default LoginButton;

const Button = ({ text, ...props }) => {
  return (
    <Button {...props}>
      {text}
    </Button>
  )
}

/*

then use like so:

<Button onClick={() => loginWithRedirect()} text="LOG IN" />
<Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} text="LOG OUT" />

*/