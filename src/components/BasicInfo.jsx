import React, { useState, useEffect } from "react";
import "../index.css";

function BasicInfo() {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    // Load from localStorage if available
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        localStorage.setItem("avatar", reader.result); // Save in localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="card basic-info">
      <h2>Basic information</h2>
      <div className="info-grid">
        <div className="avatar-section">
          <img
            src={avatar || "/default-avatar.png"} // fallback image
            alt="Student Avatar"
            className="avatar"
          />
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <div className="info-details">
          <div>
            <strong>Reg. No:</strong>{" "}
            <span className="highlight">S13/07832/22</span>
          </div>
          <div>
            <strong>Name:</strong> NAME
          </div>
          <div>
            <strong>Gender:</strong> Male
          </div>
          <button className="calendar-btn">Get Academic Calendar</button>
        </div>
        <div className="info-details">
          <div>
            <strong>Email:</strong>{" "}
            <span className="highlight">janexwandera0@gmail.com</span>
          </div>
          <div>
            <strong>Date Of Birth:</strong> 16/06/2003
          </div>
          <div>
            <strong>Campus:</strong> LIGHT ACADEMY
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
