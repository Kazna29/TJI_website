import React from 'react';
import Profile from '../Components/ProfileComp';
import FeaturedGrid from '../Components/ProfileComponents/PostGrid';
import './ProfilePage.css';
import LanguageButtons from '../Components/TechNavigator';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <main className="main-content">
        <section className="profile-section">
          <Profile />
        </section>

        <section className="featured-section">
          <LanguageButtons />
          <FeaturedGrid />
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
