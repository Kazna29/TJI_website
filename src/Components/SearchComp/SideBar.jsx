import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <ul>
        <li><a href="#">All</a></li>
        <li><a href="#">Images</a></li>
        <li><a href="#">Videos</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
