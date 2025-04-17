import React, { useState } from "react";

function SearchBar({ onSearchChange }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <button onClick={() => onSearchChange(query)}>Search</button>
    </div>
  );
}

export default SearchBar;
