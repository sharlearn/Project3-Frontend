import { useLocation } from "react-router-dom";
import CartSummary from "../components/CartSummary";
import CheckoutForm from "../components/CheckoutForm";
import { useEffect, useState } from "react";

const CheckOut = () => {
  let { state } = useLocation();
  const { cartSubtotal } = state;

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = localStorage.getItem("cartItems");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  return (
    <div>
      <CheckoutForm subtotal={cartSubtotal} cartItems={cartItems} />
    </div>
  );
};

export default CheckOut;
