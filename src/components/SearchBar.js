import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import SearchList from "./SearchList";
import debounce from "lodash.debounce";

const SearchBar = () => {
  const [results, setResults] = useState([]);

  const searchResults = debounce(async (searchTerm) => {
    await axios
      .get(`http://localhost:8000/design/search/${searchTerm}`)
      .then((response) => {
        console.log(response.data);
        setResults(response.data);
      });
  }, 150);

  const handleChange = (event) => {
    if (!event.target.value) {
      setResults([]);
    } else {
      searchResults(event.target.value);
    }
  };

  return (
    <div>
      <div>
        <form>
          <input onChange={handleChange} />
        </form>
        <SearchList searchResults={results} />
      </div>
    </div>
  );
};

export default SearchBar;
