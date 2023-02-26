import ShirtCard from "./ShirtCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ShirtsDisplay = ({ designs }) => {
  return (
    <div>
      <div className="container text-center mt-4">
        {/* <Row className="row-cols-sm-3"> */}
        <Row>
          {designs
            .filter((item, index) => index < 9)
            .map((design, index) => (
              <Col
                key={index}
                className="d-flex flex-row justify-content-center"
              >
                <ShirtCard
                  imageURL={design.image_url}
                  designName={design.design_name}
                  themes={design.themes}
                  designId={design.id}
                  designer={design.user.username}
                  price={design.price}
                  description={design.description}
                />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default ShirtsDisplay;
