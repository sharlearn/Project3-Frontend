import { useState, useEffect } from "react";
import axios from "axios";

const ShirtsGallery = () => {
  const [allDesigns, setAllDesigns] = useState([]);

  const retrieveDesigns = async () => {
    let data = await axios.get("http://localhost:8000/design");
    console.log(data);
    setAllDesigns(data.data);
  };

  useEffect(() => {
    retrieveDesigns();
  }, []);

  return (
    <div>
      Display All ShirtsGallery
      <div>{allDesigns}</div>
    </div>
  );
};

export default ShirtsGallery;
