import React from "react";
import "./rightLeader.css";

const StatsComponent = () => {
  return (
    <div className="stats-container">
      <div className="leaderboard-wrapper">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b793c5bc69deae5883daa6cc4a276c59faec0ee0db9cc5fc537d2e9cefd0219?placeholderIfAbsent=true&apiKey=6f5e65f263854b1c897b6e9672af070f"
          className="stats-icon"
          alt="Leaderboard statistics icon"
        />
        <div className="stats-number">10</div>
        <div className="stats-title">Leader Board</div>
      </div>
      <div className="offers-wrapper">
        <div className="offers-content">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18c0d1372377a4dc030e5c59c882ee1d1efc96c309f91c4bbc291d57707af161?placeholderIfAbsent=true&apiKey=6f5e65f263854b1c897b6e9672af070f"
            className="stats-icon"
            alt="Offers statistics icon"
          />
          <div className="offers-number">3</div>
        </div>
        <div className="stats-title">Offers</div>
      </div>
    </div>
  );
};

export default StatsComponent;
