import React, { useState } from 'react';
import './PostGrid.css'; 
import PostCard from '../ProfileComponents/ProfPost'; 

const FeaturedGrid = () => {
  const posts = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <section className="featured-grid">
      {posts.map((post, index) => (
        <div className="featured-item" key={index}>
          <PostCard
            profileImg={post.profileImg}  // Pass all required props
            userName={post.userName}
            userRole={post.userRole}
            postTitle={post.postTitle}
            postImg={post.postImg}
            onPostClick={() => handlePostClick(post)} // Clicking post will open it
          />
        </div>
      ))}
      
      {selectedPost && (
        <div className="post-detail">
          <div className="post-card-wrapper">
            <header className="post-header">
              <img
                src={selectedPost.profileImg}
                alt="Profile"
                className="profile-image"
              />
              <div className="user-info">
                <div className="user-role">{selectedPost.userRole}</div>
                <div className="user-meta">
                  <span className="user-name">{selectedPost.userName}</span>
                  <span className="user-details">@{selectedPost.userName} · 14h</span>
                </div>
              </div>
            </header>

            <h2 className="post-title">{selectedPost.postTitle}</h2>
            <img
              src={selectedPost.postImg}
              alt="Post content"
              className="post-image"
            />

            {/* More details, comments, reactions can go here */}
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedGrid;
