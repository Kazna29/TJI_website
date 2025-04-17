import React, { useState } from "react";
import SearchBar from "../Components/SearchComp/SearchBar";
import Trending from "../Components/SearchComp/Trending";
import Sidebar from "../Components/SearchComp/SideBar";
import SearchResults from "../Components/SearchComp/SearchResults";
import "../Pages/SearchPage.css"; // Importing the CSS file

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="search-page">
      <div className="container">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Search Area */}
        <div className="main-content">
          <SearchBar onSearchChange={handleSearchChange} />
          <Trending />

          {/* Search Results */}
          <SearchResults query={searchQuery} />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
