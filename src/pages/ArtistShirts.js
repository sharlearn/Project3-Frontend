import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ShirtsDisplay from "../components/ShirtsDisplay";

const ArtistShirts = () => {
  const { artistId } = useParams();
  const [designs, setDesigns] = useState([]);

  // why use useCallback here, when you are not using a dependency array to possibly update the function and the artistId is dynamic?
  const retrieveDesigns = useCallback(async () => {
    await axios
      .get(`http://localhost:8000/design/artist/${artistId}`)
      .then((response) => {
        setDesigns(response.data);
      });
  });

  // remove irrelevant comments
  // "shirts/artist/:artistId"

  // is this conversation between you guys? Slack would be the better medium here, instead of leaving comments in code.
  // what does retrieveDesigns in the square brackets mean/do?

  useEffect(() => {
    retrieveDesigns();
  }, []);

  return (
    <div>
      <h1>Shirts By Artist</h1>
      <div>
        <ShirtsDisplay designs={designs} />
      </div>
    </div>
  );
};

export default ArtistShirts;
