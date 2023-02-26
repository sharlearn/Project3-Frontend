import { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ShirtModal from "./ShirtModal";
import icons from "../utilities/icons";

export default function ShirtCard(props) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Button
        className="shirt-card-link d-flex flex-wrap"
        variant="link"
        onClick={() => setShowModal(true)}
      >
        <Card className="shirt-card-card " style={{ width: "20rem" }}>
          <Container key={props.key} style={{ height: "10rem" }}>
            <div style={{ display: isLoading ? "block" : "none" }}>
              {icons.spinner}
            </div>
            <div style={{ display: isLoading ? "none" : "block" }}>
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
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </Container>
          <Card.Body>
            <Card.Title style={{ height: "2rem" }}>
              {props.designName}
            </Card.Title>
            {props.designer && (
              <Card.Text>designed by: {props.designer}</Card.Text>
            )}
            {props.price && <Card.Text>${props.price}</Card.Text>}
          </Card.Body>
        </Card>
      </Button>
      <ShirtModal
        show={showModal}
        onHide={() => setShowModal(false)}
        designer={props.designer}
        designName={props.designName}
        imageURL={props.imageURL}
        price={props.price}
        description={props.description}
        designId={props.designId}
      />
    </>
  );
}
