import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../index.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    if (showSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);

  const handleLogout = () => {
    localStorage.removeItem("loginObj");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("token"); // Important: also remove token
    navigate("/LoginSignup");
  };

  return (
    <>
      <button className="hamburger-btn" onClick={() => setShowSidebar(true)}>
        <FaBars />
      </button>

      {showSidebar && (
        <div ref={sidebarRef} className="sidebar">
          <h2 className="sidebar-title">Light Academy</h2>
          <nav className="sidebar-nav">
            <NavLink to="/Dashboard">Dashboard</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/fees">Fee Payment</NavLink>
            <NavLink to="/FeeStrucure">FeeStructure</NavLink>
            <NavLink to="/academics">Academic Records</NavLink>
            <NavLink to="/library">Library</NavLink>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;
