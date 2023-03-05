import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import icons from "../utilities/icons";
import axios from "axios";

// nice!
const sizeOptions = [
  { value: "s", display: "S" },
  { value: "m", display: "M" },
  { value: "l", display: "L" },
  { value: "xl", display: "XL" },
];

export default function ShirtModal(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [colourOptions, setColourOptions] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColour, setSelectedColour] = useState("");
  const [selectedColourId, setSelectedColourId] = useState("");
  const [quantity, setQuantity] = useState(1);

  const retrieveColours = async () => {
    const { data: colours } = await axios.get(`http://localhost:8000/colour`);
    return setColourOptions(colours);
  };

  useEffect(() => {
    retrieveColours();
  }, []);

  // for size and quantity we could use a single function, as the code repeats itself
  const handleSelection = (setFunc, event) => {
    setFunc(event.target.value)
  }

  // always start functions with a verb
  const updateColourSelection = (event) => {
    setSelectedColour(colourOptions[event.target.value].colour);
    setSelectedColourId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // could any of the props possibly be undefined? If yes, we need to handle that somehow
    const userSelection = {
      designName: props.designName,
      size: selectedSize,
      colour: selectedColour,
      colourId: selectedColourId,
      quantity: quantity,
      imageURL: props.imageURL,
      price: props.price,
      designId: props.designId,
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
    // what is the onHide for?
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
            {/* conditional styles, nice :)! */}
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
            <div className="fs-6 fw-light fst-italic">{props.description}</div>
          </div>
          <div className="container w-75">
            <h4>{props.designName}</h4>
            <p>Design by {props.designer}</p>
            <p>$ {props.price}</p>
            {/* Maybe going forward we could use Formik or React hook forms instead of writing forms ourselves! */}
            <form onSubmit={handleSubmit}>
              <div className="d-flex">
                {/* I think the selects could be their own components! See RadioSelect file, something along these lines */}
                {sizeOptions.map((size, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-size"
                      id={`option-${size.value}`}
                      autocomplete="off"
                      value={size.value}
                      onClick={sizeSelected}
                      required
                    />
                    <label
                      className="btn btn-outline-dark"
                      for={`option-${size.value}`}
                    >
                      {size.display}
                    </label>
                  </div>
                ))}
              </div>
              <div className="container row row-cols-3 m-0 p-0">
                {colourOptions.map((colour, index) => (
                  <div className="col p-0" key={index}>
                    <input
                      type="radio"
                      className="btn-check"
                      name="option-colour"
                      id={`option-${colour.colour}`}
                      autocomplete="off"
                      value={colour.id}
                      onClick={colourSelected}
                      required
                    />
                    <label
                      className="btn btn-outline-dark"
                      htmlFor={`option-${colour.colour}`}
                    >
                      {colour.colour}
                    </label>
                  </div>
                ))}
              </div>
              <p>
                <label htmlFor="shirt-quantity">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  id="shirt-quantity"
                  defaultValue="1"
                  onChange={quantitySet}
                  required
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
