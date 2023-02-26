import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ShirtsDisplay from "../components/ShirtsDisplay";

const ArtistShirts = () => {
  const { artistId } = useParams();
  const [designs, setDesigns] = useState([]);

  const retrieveDesigns = useCallback(async () => {
    await axios
      .get(`http://localhost:8000/design/artist/${artistId}`)
      .then((response) => {
        setDesigns(response.data);
      });
  });

  // "shirts/artist/:artistId"

  // what does retrieveDesigns in the square brackets mean/do?

  useEffect(() => {
    retrieveDesigns();
  }, [retrieveDesigns]);

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
