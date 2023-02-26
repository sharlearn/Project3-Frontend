export default function CartList(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            className="img-thumbnail"
            src={props.imageURL}
            alt={props.designName}
          />
        </div>
        <div className="col">
          <h6>{props.designName}</h6>
          <p>colour: {props.colour}</p>
          <p>size: {props.size}</p>
          <p>${props.price}/pc</p>
        </div>
        <div className="col">
          <div>Qty: {props.quantity}</div>
        </div>
      </div>
    </div>
  );
}
