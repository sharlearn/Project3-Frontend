import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OrderLoading from "./OrderLoading";

export default function CheckoutForm(props) {
  const { cartItems, subtotal, user, userAccessToken } = props;

  // Let's use Formik or react hook forms next time instead of handling our own form
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [submittingOrder, setSubmittingOrder] = useState(false);

  const navigate = useNavigate();

  const orderSubmit = (event) => {
    event.preventDefault();
    setSubmittingOrder(true);

    //check first if user is users table
    axios
      .post("http://localhost:8000/user/finduser", {
        email: email,
        firstName: firstName,
        lastName: lastName,
        username: user.nickname,
      })
      .then((response) => {
        //create new row in orders table
        axios
          .post(
            "http://localhost:8000/order",
            // What is the response does not include any user as no user could be found?
            {
              userId: response.data.user.id,
              totalPrice: subtotal + 10,
              deliveryAddress: address,
              chosenDesigns: cartItems,
            },
            {
              headers: {
                Authorization: `Bearer ${userAccessToken}`,
              },
            }
          )
          .then((response) => {
            // I think response will always be undefined here, as you don't return the axios.post above
            if (response) {
              navigate("/orderSubmitted", {
                state: {
                  ...response.data,
                  userToken: userAccessToken,
                  username: user.nickname,
                },
              });
              localStorage.clear();
            }
          });
      })
      // I think we could add more error handling aside from console.log
      .catch((error) => console.log(error));
  };

  // nice, maybe a loading spinner component would have been nice here!
  if (submittingOrder) {
    return <OrderLoading />;
  }
  return (
    <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-dark">Your cart</span>
          <span className="badge bg-dark rounded-pill">{cartItems.length}</span>
        </h4>
        <ul className="list-group mb-3">
          {/* I think cartItem should have a component! */}
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between lh-sm"
            >
              <div>
                <h6 className="my-0">{item.designName}</h6>
                <small className="text-muted">Qty: {item.quantity}</small>
              </div>
              <span className="text-muted">${item.price}</span>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <span>Shipping</span>
            <span className="text-muted">$10</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (SGD)</span>
            <strong>${subtotal + 10}</strong>
          </li>
        </ul>
      </div>
            {/* I think the form and the cart items should have separate components, used in the parent page component */}
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" onSubmit={orderSubmit} noValidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Shipping Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <button className="w-100 btn btn-dark btn-lg" type="submit">
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
}
