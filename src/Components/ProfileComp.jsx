import React from 'react';
import './ProfileComp.css'; // Import the CSS file for styling
import StatsComponent from '../Components/ProfileComponents/rightLeader.jsx';
const Profile = () => {
  return (
    <section className="profile-container">
    {/* Left Side: Avatar & Profile Details */}
    <div className="profile-left">
      <div className="avatar-wrapper">
        <div className="avatar-inner" role="img" aria-label="Profile avatar for Bernard Bado">
          <span className="avatar-text">Profile</span>
        </div>
      </div>

    {/* Right Side: Stats & Follow Button */}
    <div className="profile-right">
      <div className="profile-stats">
        <div className="stat">
          <div className="stat-value">120</div>
          <div className="stat-label">Posts</div>
        </div>
        <div className="stat">
          <div className="stat-value">5,432</div>
          <div className="stat-label">Followers</div>
        </div>
        <div className="stat">
          <div className="stat-value">289</div>
          <div className="stat-label">Following</div>
        </div>
        
      </div>
      <div className="buttonContainer">
        <button className="followButton">Follow</button>
        <button className="messageButton">Message</button>
      </div>

    </div>
      <div className="profile-info">
        <h1 className="profile-name">Bernard Bado</h1>
        <h3 className="profile-title">Software Engineer</h3>

        <div className="location-wrapper">
          <div className="icon-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c73d0a455a619c7e0b4934a11f99658dbc4c0cf6db5249311fd48956183ee46"
              className="location-icon"
              alt="Location pin icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c387f45b3f4fece756e14b09fa6e1129b353f552671e281c69328d5a7f5bbf1"
              className="web-icon"
              alt="Website icon"
            />
          </div>
          <div className="contact-info">
            <div className="location-text">Porto, Portugal</div>
            <a href="https://codewithberdo.github" target="_blank" rel="noopener noreferrer">
              https://codewithberdo.github
            </a>
          </div>
        </div>

        <div className="social-wrapper">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef1e8f737dbc6b4d04dbae5abeae2f31bfe80d39aed84809c5cdabf2d5350303"
            className="social-icon"
            alt="Social media icon"
          />
          <a href="#" target="_blank" rel="noopener noreferrer">@codewithberdo</a>
        </div>
      </div>
    </div>


    {/* Middle Section: About */}
    <div className="about">
      <p>
        I am a Software Engineer with 12+ years of experience. Lorem ipsum dolor sit amet
        consectetur. Posuere dui consequat phasellus vitae vitae sed vel viverra. Odio etiam
        iaculis viverra nam tempus vitae sed vel viverra. Lorem ipsum dolor sit amet consectetur.
        Posuere dui consequat phasellus vitae vitae sed vel viverra.
      </p>
      
    </div>
  
    {/* Right Side: Stats */}<div classname="leader">
    <StatsComponent/>
  </div>
  </section>
);

};

export default Profile;
