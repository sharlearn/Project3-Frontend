import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OrderLoading from "./OrderLoading";

export default function CheckoutForm(props) {
  const { cartItems, subtotal, user } = props;

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
          .post("http://localhost:8000/order", {
            userId: response.data.user.id,
            totalPrice: subtotal + 10,
            deliveryAddress: address,
            chosenDesigns: cartItems,
          })
          .then((response) => {
            console.log(response);
            if (response) {
              navigate("/orderSubmitted");
              // localStorage.clear();
            }
          });
      })
      .catch((error) => console.log(error));
  };

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

            {/* <div className="col-md-3">
              <label htmlFor="zip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder=""
                value={zipCode}
                onChange={(event) => setZipCode(event.target.value)}
                required
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div> */}
          </div>

          <hr className="my-4" />

          {/* <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="same-address"
            />
            <label className="form-check-label" htmlFor="same-address">
              Shipping address is the same as my billing address
            </label>
          </div> */}

          {/* <hr className="my-4" />

          <h4 className="mb-3">Payment</h4>

          <div className="my-3">
            <div className="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                defaultChecked
                required
              />
              <label className="form-check-label" htmlFor="credit">
                Credit card
              </label>
            </div>
            <div className="form-check">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                required
              />
              <label className="form-check-label" htmlFor="debit">
                Debit card
              </label>
            </div>
            <div className="form-check">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                required
              />
              <label className="form-check-label" htmlFor="paypal">
                PayPal
              </label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">
                Name on card
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-name"
                placeholder=""
                required
              />
              <small className="text-muted">
                Full name as displayed on card
              </small>
              <div className="invalid-feedback">Name on card is required</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">
                Credit card number
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-number"
                placeholder=""
                required
              />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="form-label">
                Expiration
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-expiration"
                placeholder=""
                required
              />
              <div className="invalid-feedback">Expiration date required</div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-cvv"
                placeholder=""
                required
              />
              <div className="invalid-feedback">Security code required</div>
            </div>
          </div>

          <hr className="my-4" /> */}

          <button className="w-100 btn btn-dark btn-lg" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    </div>
  );
}
