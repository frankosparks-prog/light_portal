import React from "react";
import "../index.css";

const Library = () => {
  return (
    <div className="library-container">
      <h2 className="library-title">📚 Library</h2>

      <div className="library-grid">
        <LibraryCard
          title="Books"
          description="Browse textbooks and recommended reading materials."
        />
        <LibraryCard
          title="Download Books"
          description="Access and download textbooks in PDF format."
        />
        <LibraryCard
          title="Notes"
          description="Access lecture notes and learning resources."
        />
        <LibraryCard
          title="KCSE Revision Material"
          description="Past papers, marking schemes, and revision kits."
        />
      </div>
    </div>
  );
};

const LibraryCard = ({ title, description }) => {
  return (
    <div className="library-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="view-btn">View All</button>
    </div>
  );
};

export default Library;
