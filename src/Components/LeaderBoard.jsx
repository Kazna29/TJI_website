import React from "react";
import "./LeaderBoard.css";

const ProfileCard = ({ profile }) => {
    return (
        <div id="profile-card" className="card">
        <div className="profile-pic-wrapper">
            <img
                src={profile.profilePic}
                alt={`${profile.name}'s Profile`}
                className="profile-pic"
            />
        </div>
        <div className="info">
            <h2>{profile.name}</h2>
            <p>Rank: {profile.rank}</p>
            <p>Score: {profile.score}</p>
        </div>
    </div>
    );
};

const Leaderboard = ({ leaderboard }) => {
    return (
        <div className="leaderboard">
            <h3>Leaderboard</h3>
            <ul id="leaderboard-list">
                {leaderboard.map((entry, index) => (
                    <li key={index}>
                        <span>
                            {index + 1}. {entry.name}
                        </span>
                        <span>{entry.score}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const LeaderBoard = () => {
    const profileData = {
        name: "Jane Doe",
        rank: 2,
        score: 1400,
        profilePic: "https://via.placeholder.com/100",
    };

    const leaderboardData = [
        { name: "John Doe", score: 1500 },
        { name: "Jane Doe", score: 1400 },
        { name: "Sam Smith", score: 1300 },
        { name: "Alice Johnson", score: 1200 },
        { name: "Bob Brown", score: 1100 },
    ];

    return (
        <div className="app">
            <ProfileCard profile={profileData} />
            <Leaderboard leaderboard={leaderboardData} />
        </div>
    );
};

export default LeaderBoard;
