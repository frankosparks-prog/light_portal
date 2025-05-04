import React from "react";
import "../index.css";

function AcademicInfo() {
  return (
    <div className="card academic-info">
      <h3>Academic Information</h3>
      <div>
        <strong>Current Year:</strong>{" "}
        <span className="highlight">Form Two E</span>
      </div>
      <div>
        <strong>Attempted Units:</strong> <span className="highlight">37</span>
      </div>
      <div>
        <strong>Registered Units:</strong> <span className="highlight">8</span>
      </div>
    </div>
  );
}

export default AcademicInfo;
