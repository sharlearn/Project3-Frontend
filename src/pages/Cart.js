import { useState, useEffect, useCallback } from "react";
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const deleteItem = (index) => {
    const newCartItems = cartItems;
    newCartItems.splice(index, 1);

    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    setCartItems([...newCartItems]);
  };

  return (
    <div>
      <h2 id="cart-title">Cart</h2>
      <div className="container-fluid d-flex">
        <div className="w-50">
          {cartItems.length === 0 && <div>No items in cart.</div>}
          {cartItems.length > 0 && (
            <div>
              {cartItems.map((item, index) => (
                <div>
                  <CartList
                    key={index}
                    designName={item.designName}
                    imageURL={item.imageURL}
                    price={item.price}
                    quantity={item.quantity}
                    size={item.size}
                    colour={item.colour}
                    deleteItem={() => deleteItem(index)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="rounded w-50 h-50 p-4" id="order-summary">
          <CartSummary subtotal={cartSubtotal} />
          <button
            className="btn btn-dark"
            onClick={() => navigate("/checkout", { state: { cartSubtotal } })}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
