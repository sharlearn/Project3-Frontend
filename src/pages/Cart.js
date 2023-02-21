import { useState, useEffect } from "react";
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem("cartItems");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      totalPrice += itemTotal;
    });
    setCartSubtotal(totalPrice);
  }, [cartItems]);

  return (
    <div>
      <h3>Cart</h3>
      <div className="container-fluid d-flex">
        <div className="w-50">
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
        <div className="rounded w-50 h-50 p-4" id="order-summary">
          <CartSummary subtotal={cartSubtotal} />
          <button class="btn btn-dark">
            <Link
              className="link-light"
              to="/checkout"
              id="link"
              state={{ cartSubtotal }}
            >
              Checkout
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
