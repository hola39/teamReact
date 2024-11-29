import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ setMovies }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // fetch(`https://api.example.com/movies?search=${query}`)
    //   .then((response) => response.json())
    //   .then((data) => setMovies(data))
    //   .catch((error) => console.error("Error searching movies:", error));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
