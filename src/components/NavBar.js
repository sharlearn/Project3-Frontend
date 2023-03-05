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

// remove unused comments like such
// const artists = [
//   "johnt",
//   "nicholasl",
//   "gregorys",
//   "nicolal",
// ];

const artists = {
  name: "johnt",
  id: "e02624ca-837d-4708-9276-74d4158f632a",
}

const NavBar = () => {
  return (
    <Nav className="justify-content-evenly mt-3 mb-3" bg="light">
      {/* Remove comments! */}
      {/* <Nav.Item>
        <Link to={`shirts`}>new</Link>
      </Nav.Item> */}
      <NavDropdown title="THEMES">
        {themes.map((theme, index) => (
          <NavDropdown.Item key={index}>
            <Link to={`shirts/theme/${index + 1}`}>{theme}</Link>
          </NavDropdown.Item>
        ))}
      </NavDropdown>
      <NavDropdown title="ARTISTS">
        {/* Why not use the commented out array from above and iterate like for themes? Even with hardcoded values, it would be nicer code! See my code */}
        {artists.map((artist) => (
          <NavDropdown.Item>
            <Link to={`shirts/artist/${artist.id}`}>
              {artist.name}
            </Link>
          </NavDropdown.Item>
        ))}

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
