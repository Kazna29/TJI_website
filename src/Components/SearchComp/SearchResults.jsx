import React from "react";

function SearchResults({ query }) {
  if (!query) return <p>Please enter a search query.</p>;

  const results = [
    { title: "React JS Tutorial", image: "https://via.placeholder.com/150" },
    { title: "Understanding Web Development", image: "https://via.placeholder.com/150" },
    { title: "Node JS Best Practices", image: "https://via.placeholder.com/150" },
    // Add more results as needed
  ];

  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div key={index} className="search-result-card">
          <img src={result.image} alt={result.title} />
          <h4>{result.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
