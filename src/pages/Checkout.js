import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CheckOut = () => {
  let { state } = useLocation();
  const { cartSubtotal } = state;

  const [accessToken, setAccessToken] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const { isAuthenticated, getAccessTokenSilently, user, loginWithRedirect } =
    useAuth0();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;

  const checkUser = async () => {
    if (isAuthenticated) {
      let token = await getAccessTokenSilently();
      setAccessToken(token);
    } else {
      loginWithRedirect();
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  // const { user } = useOutletContext();

  useEffect(() => {
    const cart = localStorage.getItem("cartItems");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  return (
    <div>
      <CheckoutForm
        subtotal={cartSubtotal}
        cartItems={cartItems}
        user={user}
        userAccessToken={accessToken}
      />
    </div>
  );
};

export default CheckOut;
