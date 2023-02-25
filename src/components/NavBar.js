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

// const artists = [
//   "johnt",
//   "nicholasl",
//   "gregorys",
//   "nicolal",
// ];

const NavBar = () => {
  return (
    <Nav className="justify-content-center" bg="light">
      <Nav.Item>
        <Link to={`shirts`}>new</Link>
      </Nav.Item>
      <NavDropdown title="themes">
        {themes.map((theme, index) => (
          <NavDropdown.Item key={index}>
            <Link to={`shirts/theme/${index + 1}`}>{theme}</Link>
          </NavDropdown.Item>
        ))}
      </NavDropdown>
      <NavDropdown title="artists">
        <NavDropdown.Item>
          <Link to={`shirts/artist/c03ade38-288f-4559-9058-6c8e9fee0773`}>
            nicholasl
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={`shirts/artist/e02624ca-837d-4708-9276-74d4158f632a`}>
            johnt
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={`shirts/artist/4ad97cbf-251e-4986-95f8-50463f36cd32`}>
            gregorys
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={`shirts/artist/5f3822fb-df88-4f08-960c-9d2912ca5608`}>
            nicolal
          </Link>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default NavBar;
