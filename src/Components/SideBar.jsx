import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaHome, FaBell, FaUserFriends, FaShareAlt, FaWallet, FaBookmark, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./SideBar.css"; // CSS file for styling

const Sidebar = () => {
  const menuItems = [
    { path: "/Feed", icon: <FaHome /> },
    { path: "/search", icon: <FaSearch /> },
    { path: "/NotificationsPg", icon: <FaBell /> },
    { path: "/requests", icon: <FaUserFriends /> },
    { path: "/reshare", icon: <FaShareAlt /> },
    { path: "/payments", icon: <FaWallet /> },
    { path: "/saved", icon: <FaBookmark /> },
    { path: "/settings", icon: <FaCog /> },
    { path: "/logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className="sidebar-link"
          activeClassName="active-link"
        >
          <div className="icon">{item.icon}</div>
          <div className="link-text">{item.name || ""}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
