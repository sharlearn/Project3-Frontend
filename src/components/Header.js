import icons from "../utilities/icons";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "./SearchBar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from "./images/projectteelogo.png";

export default function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <Container fluid className="px-0">
      {/* why does justifying things on my row in the next line not work?? */}
      <Row className="d-flex" style={{ backgroundColor: "#FDE6E1" }}>
        <Col className="text-center m-2">
          Free delivery when you spend over $100
        </Col>
        <Col className="text-center m-2">
          Sign up for 10% off your first order
        </Col>
      </Row>
      <Navbar
        className="p-4"
        expand="sm"
        style={{ backgroundColor: "#E1F8FD" }}
      >
        <Container fluid>
          <Row style={{ width: "100%" }}>
            <Col className="col-3" lg={3}>
              <Navbar.Brand className="logo-section py-1" href="/">
                <img
                  src={Logo}
                  width="125"
                  height="125"
                  className="d-inline-block align-top"
                  alt="Project Tee logo"
                />
              </Navbar.Brand>
            </Col>
            <Col className="col-6 d-flex justify-content-center align-items-center">
              <SearchBar />
            </Col>
            <Col className="col-3 d-flex justify-content-end align-items-center">
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                {/* <InputGroup className="search-input">
            <Form.Control
              placeholder="search all designs"
              aria-label="search all designs"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              {icons.search}
            </Button>
          </InputGroup> */}

                <Link className="header-cart me-5" to={`cart`}>
                  {icons.emptyCart()}
                </Link>

                {!isAuthenticated && <LoginButton />}
                {isAuthenticated && <LogoutButton />}
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </Container>
  );
}
