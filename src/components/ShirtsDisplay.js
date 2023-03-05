import ShirtCard from "./ShirtCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import { useEffect, useState } from "react";

// static variables can live outside of the component
const shirtsPerPage = 9;

const ShirtsDisplay = ({ designs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [designsDisplayed, setDesignsDisplayed] = useState([]);

  const totalPages = Math.ceil(designs.length / shirtsPerPage);

  let pages = [];

  // this is very creative, though I think this might not be the best way to go about it, and a bit inefficient possibly
  // A better way would be to always display 9 items, and fetch data only for 9 items. So that means the pagination happens on the BE rather than the FE. For that you might need to check how to do pagination on a SQL database. We basically keep track of our current position and of the LIMIT of items and update that as we cross to a new page. Once there are no more items in the DB, we would not give the user to go to the next page anymore. That would require you to possibly also return a total count of items in your DB, to display all pages from the start.
  // example response:
  /*

   { designs: [{...}, {...}, ...], // maybe length 9
    totalCount: 53 // use this to display the number of pages, then once click on page 5 for example get/fetch items 45 to 54
    }

  */
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
