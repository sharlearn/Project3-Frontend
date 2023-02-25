import ShirtCard from "./ShirtCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ShirtsDisplay = ({ designs }) => {
  return (
    <div>
      <div className="container text-center">
        <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
          {designs
            .filter((item, index) => index < 9)
            .map((design, index) => (
              <Col key={index}>
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
