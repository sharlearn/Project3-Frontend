import { useEffect, useState } from "react";
import axios from "axios";
import ShirtsDisplay from "../components/ShirtsDisplay";
import HomepageCarousel from "../components/Carousel";
import Container from "react-bootstrap/esm/Container";

const Home = () => {
  const [allDesigns, setAllDesigns] = useState([]);

  const retrieveDesigns = async () => {
    let data = await axios.get("http://localhost:8000/design/");
    setAllDesigns(data.data);
  };

  useEffect(() => {
    retrieveDesigns();
  }, []);

  return (
    <div>
      <div>
        <HomepageCarousel />
        <ShirtsDisplay designs={allDesigns} />
      </div>
      <Container
        fluid
        style={{ backgroundColor: "#E1F8FD" }}
        className="text-center mt-5 p-5"
      >
        ProjectTee.com
      </Container>
    </div>
  );
};

export default Home;
