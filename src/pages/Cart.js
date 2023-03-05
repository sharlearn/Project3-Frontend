import { useState, useEffect, useCallback } from "react";
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  // let's place all hooks always on top of the component
  const navigate = useNavigate();

  useEffect(() => {
    const cart = localStorage.getItem("cartItems");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    // I would add a condition here, since when cartItems is empty, we won't need to run this code and cause another rerender
    if (cartItems) {
      let totalPrice = 0;
      cartItems.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
      });
      setCartSubtotal(totalPrice);
    }
  }, [cartItems]);

  const deleteItem = (index) => {
    const newCartItems = cartItems;
    newCartItems.splice(index, 1);

    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    // [...newCartItems] would make a new array with all values of newCartItems, which is an array already
    // so why not just use the array itself?
    setCartItems(newCartItems);
  };

  return (
    <div>
      <h2 id="cart-title">Cart</h2>
      <div className="container-fluid d-flex">
        <div className="w-50">
          {/* 0 is falsy, above 0 is truthy */}
          {!cartItems.length && <p>No items in cart.</p>}
          {cartItems.length && (
            <div>
              {cartItems.map((item, index) => (
                // What is this div for? If it is needed for CartList, why not define it in CartList?
                <div> 
                  <CartList
                    key={index}
                    // since we need to add all item properties here as props, why not just pass the whole item down?
                    // then you destructure the object as needed in CartList
                    // item={item}
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
