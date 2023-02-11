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

  console.log(allDesigns);

  return (
    <div>
      <div className="shirt-card=gallery">
        <Row className="g-1">
          {allDesigns
            .filter((item, index) => index < 15)
            .map((design) => (
              <Col>
                <ShirtCard
                  imageURL={design.image_url}
                  designName={design.design_name}
                  themes={design.themes}
                />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default Shirts;
