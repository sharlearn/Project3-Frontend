import ShirtCard from "./ShirtCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import { useEffect, useState } from "react";

const ShirtsDisplay = ({ designs }) => {
  console.log(designs);
  const [currentPage, setCurrentPage] = useState(1);
  const [designsDisplayed, setDesignsDisplayed] = useState([]);
  const shirtsPerPage = 9;
  const totalPages = Math.ceil(designs.length / shirtsPerPage);
  console.log(totalPages);

  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  //first page - 0-9
  //second page - 10-19
  //third page - 20-29

  const startIndex = (currentPage - 1) * 9 + 1;
  const endIndex = startIndex + 9;

  useEffect(() => {
    let data = designs.slice(startIndex, endIndex);
    console.log(data);
    setDesignsDisplayed(data);
  }, [currentPage]);

  return (
    <div>
      <div className="container text-center mt-4">
        {/* <Row className="row-cols-sm-3"> */}
        <Row>
          {designsDisplayed
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
      <Pagination
        id="paginate"
        className="position-absolute start-50 translate-middle"
      >
        {pages}
      </Pagination>
    </div>
  );
};

export default ShirtsDisplay;
