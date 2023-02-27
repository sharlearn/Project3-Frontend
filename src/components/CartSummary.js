export default function CartSummary(props) {
  return (
    <div>
      <h3>Order Summary</h3>
      {props.children}
      <p>Subtotal: ${props.subtotal}</p>
      <p>Shipping: $10</p>
      <p>Order Total: ${props.subtotal + 10}</p>
    </div>
  );
}
