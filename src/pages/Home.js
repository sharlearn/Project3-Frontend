import { useEffect, useState } from "react";
import axios from "axios";
import ShirtsDisplay from "../components/ShirtsDisplay";

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
        <ShirtsDisplay designs={allDesigns} />
      </div>
    </div>
  );
};

export default Home;
