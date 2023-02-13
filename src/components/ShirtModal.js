import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import icons from "../utilities/icons";

const sizeOptions = [
  { value: "small", display: "S" },
  { value: "medium", display: "M" },
  { value: "large", display: "L" },
  { value: "x-large", display: "XL" },
];
const colourOptions = ["Red", "Blue", "Yellow", "Green", "White", "Black"];

export default function ShirtModal(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColour, setSelectedColour] = useState("");
  const [quantity, setQuantity] = useState(0);

  const sizeSelected = (event) => {
    setSelectedSize(event.target.value);
  };

  const colourSelected = (event) => {
    setSelectedColour(event.target.value);
  };

  const quantitySet = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userSelection = {
      designName: props.designName,
      size: selectedSize,
      color: selectedColour,
      quantity: quantity,
    };
    const currentItems = JSON.parse(localStorage.getItem("cartItems"));

    //in case there's no data in local storage, to set new key value pair up, otherwise, to add on new selection to data that is currently there
    if (!currentItems) {
      localStorage.setItem("cartItems", JSON.stringify([userSelection]));
    } else {
      const newItems = [...currentItems, userSelection];
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }

    setSelectedSize("");
    setSelectedColour("");
    setQuantity(0);
    props.onHide();
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="container d-flex">
          <div className="w-50">
            <div style={{ display: isLoading ? "block" : "none" }}>
              {icons.spinner}
            </div>
            <div style={{ display: isLoading ? "none" : "block" }}>
              <img
                className="img-fluid"
                src={props.imageURL}
                alt={props.designName}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
          <div className="container">
            <h4>{props.designName}</h4>
            <p>Design by {props.designer}</p>
            <p>$ {props.price}</p>
            <form onSubmit={handleSubmit}>
              <p>
                {sizeOptions.map((size) => (
                  <>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-size"
                      id={`option-${size.value}`}
                      autocomplete="off"
                      value={size.value}
                      onClick={sizeSelected}
                    />
                    <label
                      className="btn btn-outline-dark"
                      for={`option-${size.value}`}
                    >
                      {size.display}
                    </label>
                  </>
                ))}
              </p>
              <p>
                {colourOptions.map((colour) => (
                  <>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-colour"
                      id={`option-${colour}`}
                      autocomplete="off"
                      value={colour}
                      onClick={colourSelected}
                    />
                    <label className="btn" for={`option-${colour}`}>
                      {colour}
                    </label>
                  </>
                ))}
              </p>
              <p>
                <label for="shirt-quantity">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  id="shirt-quantity"
                  onChange={quantitySet}
                />
              </p>
              <p>
                <button type="button submit" class="btn btn-dark">
                  Add to cart
                </button>
              </p>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
