export default function CartList(props) {
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            className="border rounded w-100"
            src={props.imageURL}
            alt={props.designName}
          />
        </div>
        <div className="col">
          <h5>{props.designName}</h5>
          <p>{props.color}</p>
          <p>{props.size}</p>
          <p>{props.price}</p>
        </div>
        <div className="col">
          <div>{props.quantity}</div>
        </div>
      </div>
    </div>
  );
}
