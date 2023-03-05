import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const OrderCompleteSummary = (props) => {
  const { state } = useLocation();
  // I assume order is an object, not a string
  const [order, setOrder] = useState({});

  const retrieveLastestOrder = async () => {
    // what about error handling if the id is making the BE return an error as it could be invalid? With your current code it would just display the loading div forever. Retry mechanism? Display error message? Render Button to retry again? Multiple ways to go about it.
    const orderDetails = await axios.get(
      `http://localhost:8000/order/${state.id}`,
      {
        headers: {
          Authorization: `Bearer ${state.userToken}`,
        },
      }
    );
    return setOrder(orderDetails.data);
  };

  useEffect(() => {
    retrieveLastestOrder();
  }, []);

  // very nice!
  if (!order) return <div>loading</div>;
  return (
    <div>
      <h3>Order Confirmed</h3>
      <p>Hi {state.username},</p>
      <p>Your order is confirmed.</p>
      <p>
        {/* What if order[0] is an empty object? Then you would have a possible bug here as you try to acces order_id of {} */}
        <strong>Order Number:</strong> #{order[0].order_id} 
      </p>
      <ul className="list-group container-md">
        {order.map((item, index) => (
          <li id="order-confirmed-list" className="list-group-item d-flex">
            <img
              id="order-confirmed-img"
              className="d-block object-fit-contain h-100"
              src={item.design_colour.design.image_url}
              alt={item.design_colour.design.design_name}
            />
            {/* why not define a margin 0 style in your App.css to use instead of using inline styles multiple times? */}
            <div style={{ margin: 0 }}>
              <p style={{ margin: 0 }}>
                {/* if design_colour is undefined, you will have an app breaking bug here. Trying to access design_name of undefined */}
                <strong>{item.design_colour.design.design_name}</strong>
              </p>
              <p style={{ margin: 0 }}>
                {/* Same app breaking bug as above */}
                ${item.design_colour.design.price} /pc
              </p>
              {/* Lots of room for bugs here with these possible undefined object properties */}
              <p style={{ margin: 0 }}>{item.design_colour.colour.colour}</p>
            </div>
            <div>Qty: {item.quantity}</div>
            <div>
              <strong>
                ${item.design_colour.design.price * item.quantity}
              </strong>
            </div>
          </li>
        ))}
        <li className="list-group-item">
          <div className="container-md">
            <p>Subtotal: ${order[0].order.total_price - 10}</p>
            <p>Shipping: $10</p>
            <p>
              <strong>Total: ${order[0].order.total_price}</strong>
            </p>
          </div>
        </li>
      </ul>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default OrderCompleteSummary;
