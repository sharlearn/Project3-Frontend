import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav className="justify-content-center" bg="light">
      <Nav.Item>
        <Link to={`shirts`}>new</Link>
      </Nav.Item>
      <NavDropdown title="themes">
        <NavDropdown.Item>
          <Link to={`shirts`}>food</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={`shirts`}>nature</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={`shirts`}>typography</Link>
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="artists">
        <NavDropdown.Item>
          <Link to={`shirts`}>someone</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={`shirts`}>someoneelse</Link>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default NavBar;
