import React from "react";
import "../index.css";

function Topbar() {
  return (
    <div className="topbar">
      {/* <div className="menu-icon">&#9776;</div> */}
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="user-profile">
        <img src="/" alt="Profile" className="profile-pic" />
        <span className="username">JANEX WANDERA</span>
      </div>
    </div>
  );
}

export default Topbar;
