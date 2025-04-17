import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No need to import BrowserRouter here
import Navbar from './Components/header/navBar'; // Corrected path
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage';
import ReelsPage from './Pages/ReelsPage';
import HirePage from './Pages/HirePage';
import ProfilePage from './Pages/profilePg';
import MessagePage from './Pages/messagePage';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/hire" element={<HirePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/message" element={<MessagePage />} />
        
      </Routes>
    </div>
  );
};

export default App;
