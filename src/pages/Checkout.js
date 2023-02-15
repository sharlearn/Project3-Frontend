import { useLocation } from "react-router-dom";

const CheckOut = () => {
  let { state } = useLocation();
  console.log(state);

  return <div>Checkout Page</div>;
};

export default CheckOut;
