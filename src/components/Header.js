import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import icons from "../utilities/icons";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "./SearchBar";

export default function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar expand="sm">
      <Container fluid>
        <Navbar.Brand className="header-title" href="/">
          Project Tee
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
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
          <SearchBar />
          <Link className="header-cart" to={`cart`}>
            {icons.emptyCart()}
          </Link>
          <Link to={`create`}>Upload Design</Link>
          {!isAuthenticated && <LoginButton />}
          {isAuthenticated && <LogoutButton />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
