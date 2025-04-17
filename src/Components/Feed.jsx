// src/components/Feed.jsx
import React from 'react';
import './Feed.css';
import LanguageButtons from '../Components/TechNavigator';
import PostCard from '../Components/post';

const Feed = () => {
  return (

    <div className="feed">
      {/* Ensure full width and horizontal scrolling for LanguageButtons */}
      <div className="language-buttons-container">
        <LanguageButtons />
      </div>
      <div className="post">
        <PostCard />
      </div>
      <div className="post">
        <PostCard />
      </div>
    </div>
    
  );
};

export default Feed;
