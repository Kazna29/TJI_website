import React, { useState } from 'react';
import './ProfPost.css';

const PostCard = ({ profileImg, userName, userRole, postTitle, postImg, onPostClick }) => {
    const [comment, setComment] = useState('');

    const handleAddComment = () => {
        if (comment.trim()) {
            alert(`Comment Added: ${comment}`);
            setComment('');
        } else {
            alert('Please enter a comment.');
        }
    };

    return (
        <article className="post-container" onClick={onPostClick}>
            <div className="post-card-wrapper">
                <header className="post-header">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="user-info">
                        <div className="user-role">{userRole}</div>
                        <div className="user-meta">
                            <span className="user-name">{userName}</span>
                            <span className="user-details">@{userName} · 14h</span>
                        </div>
                    </div>
                </header>

                <h2 className="post-title">{postTitle}</h2>
                <img
                    src={postImg}
                    alt="Post content"
                    className="post-image"
                />
            </div>
        </article>
    );
};

export default PostCard;
