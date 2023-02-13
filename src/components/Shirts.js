import { useEffect, useState } from "react";
import axios from "axios";
import ShirtCard from "./ShirtCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Shirts = () => {
  const [allDesigns, setAllDesigns] = useState([]);

  const retrieveDesigns = async () => {
    let data = await axios.get("http://localhost:8000/design");
    setAllDesigns(data.data);
  };

  useEffect(() => {
    retrieveDesigns();
  }, []);

  return (
    <div>
      <div className="container text-center">
        <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
          {allDesigns
            .filter((item, index) => index < 9)
            .map((design) => (
              <Col>
                <ShirtCard
                  imageURL={design.image_url}
                  designName={design.design_name}
                  themes={design.themes}
                  designId={design.id}
                  designer={design.user.username}
                  price={design.price}
                />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default Shirts;
