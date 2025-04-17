import React, { useState } from 'react';
import './post.css';

const PostCard = ({ profileImg, userName, userRole, postTitle, postImg }) => {
    const [comment, setComment] = useState('');

    // Ensure `userName` is always defined and in lowercase
    const validatedUserName = userName ? userName.toLowerCase() : "anonymous";

    const handleAddComment = () => {
        if (comment.trim()) {
            alert(`Comment Added: ${comment}`);
            setComment('');
        } else {
            alert('Please enter a comment.');
        }
    };

    const handleReaction = (reaction) => {
        switch (reaction) {
            case 'heart':
                alert('You reacted with ❤️!');
                break;
            case 'hands':
                alert('You reacted with 🙌!');
                break;
            case 'more':
                alert('More reactions will be added soon!');
                break;
            default:
                break;
        }
    };

    const handleAction = (action) => {
        switch (action) {
            case 'like':
                alert('You liked the post!');
                break;
            case 'comment':
                document.getElementById('comment-input').focus();
                break;
            case 'save':
                alert('Post saved!');
                break;
            default:
                break;
        }
    };

    return (
        <article className="post-container">
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
                            <span className="user-name">{validatedUserName}</span>
                            <span className="user-details">@{validatedUserName} · 14h</span>
                        </div>
                    </div>
                    <button aria-label="Post menu" className="menu-icon">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a6cc9e9830a18d279ecfbfc205e9570daced31f1c2ed58403df06069d1d226e?placeholderIfAbsent=true&apiKey=9a159c62a26f452b9d24259b64e8c686"
                            alt=""
                        />
                    </button>
                </header>

                <h2 className="post-title">{postTitle}</h2>
                <img
                    src={postImg}
                    alt="Post content"
                    className="post-image"
                />

                <div className="action-buttons" role="toolbar" aria-label="Post actions">
                    <button
                        className="action-icon"
                        aria-label="Like"
                        onClick={() => handleAction('like')}
                    >
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0914fc947b9cb602b57dde580be7ca57523aa847aab9d1936175b48cb224e74?placeholderIfAbsent=true&apiKey=9a159c62a26f452b9d24259b64e8c686"
                            alt=""
                        />
                    </button>
                    <button
                        className="action-icon"
                        aria-label="Comment"
                        onClick={() => handleAction('comment')}
                    >
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/59933bf82703d8bf8eedb0d4789a4900845893f748ef8f35ae158d20269a355e?placeholderIfAbsent=true&apiKey=9a159c62a26f452b9d24259b64e8c686"
                            alt=""
                        />
                    </button>
                    <button
                        className="action-icon"
                        aria-label="Save"
                        onClick={() => handleAction('save')}
                    >
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ada0c223de96193cd50979473779931133f64877303229547f34d2fef1273b35?placeholderIfAbsent=true&apiKey=9a159c62a26f452b9d24259b64e8c686"
                            alt=""
                        />
                    </button>
                </div>

                <div className="comment-section">
                    <div className="comment-input-wrapper">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/efc4fa7b3078b64953c07d947b489deba12f7e718d05c42be31a880caab43a46?placeholderIfAbsent=true&apiKey=9a159c62a26f452b9d24259b64e8c686"
                            alt="User avatar"
                            className="comment-avatar"
                        />
                        <input
                            type="text"
                            id="comment-input"
                            placeholder="Add a comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button id="add-comment-btn" onClick={handleAddComment}>
                            Add
                        </button>
                    </div>

                    <div className="reaction-wrapper" role="group" aria-label="Post reactions">
                        <span
                            className="reaction-emoji"
                            role="img"
                            aria-label="Heart"
                            onClick={() => handleReaction('heart')}
                        >
                            ❤️
                        </span>
                        <span
                            className="reaction-emoji"
                            role="img"
                            aria-label="Raised hands"
                            onClick={() => handleReaction('hands')}
                        >
                            🙌
                        </span>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8b1d71313a33de3854454595f330050fc042511e003f93c44f2e5768acea278?placeholderIfAbsent=true&apiKey=9a159c62a26f452b9d24259b64e8c686"
                            alt="More reactions"
                            className="reaction-more"
                            onClick={() => handleReaction('more')}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default PostCard;
