import { Link } from "react-router-dom";

const OrderCompleteSummary = (props) => {
  return (
    <div>
      <h3>Order Completed</h3>
      <p>Order Number: {props.orderNumber}</p>
      <p>Order Summary</p>
      <p>Stuff Ordered</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default OrderCompleteSummary;
