import { useEffect, useState } from "react";
import axios from "axios";
import ShirtsDisplay from "../components/ShirtsDisplay";
import HomepageCarousel from "../components/Carousel";
import Container from "react-bootstrap/esm/Container";

const Home = () => {
  const [allDesigns, setAllDesigns] = useState([]);

  const retrieveDesigns = async () => {
    let {data} = await axios.get("http://localhost:8000/design/");
    setAllDesigns(data);

    /*

    OR

    let response = await axios.get("http://localhost:8000/design/");
    setAllDesigns(response.data);
     */

    // but what if an error occurs when fetching?

    let response = await axios.get("http://localhost:8000/design/");
    if (response.data) setAllDesigns(response.data);

    // can also add try catch statement as well to handle the error possibly, or check the response status
    // if (response.status !== 200) handle error
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
