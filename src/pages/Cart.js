import { useState, useEffect } from "react";
import CartList from "../components/CartList";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  useEffect(() => {
    const cart = localStorage.getItem("cartItems");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  return (
    <div>
      <h3>Cart</h3>
      {cartItems.length === 0 && <div>No items in cart.</div>}
      {cartItems.length > 0 && (
        <div>
          {cartItems.map((item, index) => (
            <CartList
              key={index}
              designName={item.designName}
              imageURL={item.imageURL}
              price={item.price}
              quantity={item.quantity}
              size={item.size}
            />
          ))}
        </div>
      )}
    </div>
  );
}
