import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const themes = [
  "Food",
  "Nature",
  "Typography",
  "Tattoo",
  "Science",
  "Gaming",
  "Animals",
  "Abstract",
  "Cute",
  "Space",
  "Ocean",
];

const NavBar = () => {
  return (
    <Nav className="justify-content-center" bg="light">
      {/* <Nav.Item>
        <Link to={`shirts`}>new</Link>
      </Nav.Item> */}
      <NavDropdown title="themes">
        {themes.map((theme, index) => (
          <NavDropdown.Item key={index}>
            <Link to={`shirts/theme/${index + 1}`}>{theme}</Link>
          </NavDropdown.Item>
        ))}
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
