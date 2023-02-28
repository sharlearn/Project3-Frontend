export default function CartList(props) {
  return (
    <div className="container mb-3">
      <div className="row border-bottom me-2" id="cartlist-items">
        <div className="col">
          <img
            className="img-thumbnail"
            src={props.imageURL}
            alt={props.designName}
          />
        </div>
        <div className="col">
          <h6>
            <strong>{props.designName}</strong>
          </h6>
          <p className="mb-1">Colour: {props.colour}</p>
          <p className="mb-1">Size: {props.size.toUpperCase()}</p>
          <p className="mb-1">${props.price} /pc</p>
        </div>
        <div className="col">
          <div>Qty: {props.quantity}</div>
          <button
            className="delete-button"
            onClick={() => {
              props.deleteItem();
            }}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
}
