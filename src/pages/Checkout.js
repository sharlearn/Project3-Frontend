import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CheckOut = () => {
  let { state } = useLocation();
  const [accessToken, setAccessToken] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const { cartSubtotal } = state;
// remove console.logs before pushing/merging code into master/production

  const { isAuthenticated, getAccessTokenSilently, user, loginWithRedirect } =
    useAuth0();

    // this is the second time I see a checkUser function, can we write a generic function, we can import? Could be located in the utilities folder.
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

  // second time I see this effect as well, we could refactor this into a function I think.
  // example below this component
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

// these three functions could live in a utilities file.
const getCartFromLocalStorage = () => {
  return Json.parse(localStorage.getItem("cartItems"))
}

const setCartItemsToState = (setFunc, cartItems) => {
  setFunc(cartItems)
}

const InitializeStateWithCartItems = (setFunc) => {
  const cartItems = getCartFromLocalStorage()
  // setFunc would be from your component's state setter
  setCartItemsToState(setFunc, cartItems)
}
