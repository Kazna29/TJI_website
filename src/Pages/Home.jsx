// src/pages/Home.jsx
import React from 'react';
import Feed from '../Components/Feed';
import Navbar from '../Components/header/navBar';
import LeaderBoard from '../Components/LeaderBoard';

const Home = () => {
  return (
    <>
    <Navbar/>
    <br></br>
    <br></br>
    <div className="home">
      <div className="left-sidebar">
        {/* Left sidebar content like friends, groups, etc. */}
        <LeaderBoard/>
      </div>
      <div className="feed-container">
      <Feed />
      </div>
      <div className="right-sidebar">
        {/* Right sidebar content like friend suggestions, ads, etc. */}
       <LeaderBoard/>
      </div>
    </div>
    </>
  );
};

export default Home;
