export default function CartSummary(props) {
  return (
    <div>
      <h5>Order Summary</h5>
      <p>Subtotal: ${props.subtotal}</p>
      <p>Shipping: $10</p>
      <p>Order Total: ${props.subtotal + 10}</p>
    </div>
  );
}
