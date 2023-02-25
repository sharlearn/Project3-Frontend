import { useLocation, useOutletContext } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import { useEffect, useState } from "react";

const CheckOut = () => {
  let { state } = useLocation();
  const { cartSubtotal } = state;

  const { user } = useOutletContext();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = localStorage.getItem("cartItems");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  return (
    <div>
      <CheckoutForm subtotal={cartSubtotal} cartItems={cartItems} user={user} />
    </div>
  );
};

export default CheckOut;
