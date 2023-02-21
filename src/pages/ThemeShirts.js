import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ShirtsDisplay from "../components/ShirtsDisplay";

const ThemeShirts = () => {
  const { themeId } = useParams();
  const [designs, setDesigns] = useState([]);

  const retrieveDesigns = useCallback(async () => {
    await axios
      .get(`http://localhost:8000/design/theme/${themeId}`)
      .then((response) => {
        setDesigns(response.data);
      });
  }, [themeId]);

  useEffect(() => {
    retrieveDesigns();
  }, [retrieveDesigns]);

  return (
    <div>
      <h1>Shirts</h1>
      <div>
        <ShirtsDisplay designs={designs} />
      </div>
    </div>
  );
};

export default ThemeShirts;
