import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import icons from "../utilities/icons";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand="sm">
      <Container fluid>
        <Navbar.Brand className="header-title">Project Tee</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <InputGroup className="search-input">
            <Form.Control
              placeholder="search all designs"
              aria-label="search all designs"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              {icons.search}
            </Button>
          </InputGroup>
          <Link className="header-cart" to={`cart`}>
            {icons.emptyCart()}
          </Link>
          <Link to={`createDesign`}>Upload Design</Link>
          <Link to={`login`}>Login</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
