import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function ShirtCard(props) {
  console.log(props);
  return (
    <Card style={{ width: "10rem" }}>
      <Container style={{ height: "10rem" }}>
        <Card.Img
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "9rem",
            maxHeight: "10rem",
            padding: "1rem",
          }}
          variant="top"
          src={props.imageURL}
        />
      </Container>
      <Card.Body>
        <Card.Title style={{ height: "2rem" }}>{props.designName}</Card.Title>
        {props.designer && <Card.Text>designed by: {props.designer}</Card.Text>}
        {props.price && <Card.Text>{props.price}</Card.Text>}
      </Card.Body>
    </Card>
  );
}
