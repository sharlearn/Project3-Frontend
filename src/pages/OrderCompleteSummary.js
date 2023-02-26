import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const OrderCompleteSummary = (props) => {
  const { state } = useLocation();

  const [order, setOrder] = useState("");

  const retrieveLastestOrder = async () => {
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

  if (!order) return <div>loading</div>;
  return (
    <div>
      <h3>Order Confirmed</h3>
      <p>Hi {state.username},</p>
      <p>Your order is confirmed.</p>
      <p>
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
            <div style={{ margin: 0 }}>
              <p style={{ margin: 0 }}>
                <strong>{item.design_colour.design.design_name}</strong>
              </p>
              <p style={{ margin: 0 }}>
                ${item.design_colour.design.price} /pc
              </p>
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
