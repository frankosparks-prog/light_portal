// import React from "react";
// import "../index.css";

// const Library = () => {
//   return (
//     <div className="library-container">
//       <h2 className="library-title">📚 Library</h2>

//       <div className="library-grid">
//         <LibraryCard
//           title="Books"
//           description="Browse textbooks and recommended reading materials."
//         />
//         <LibraryCard
//           title="Download Books"
//           description="Access and download textbooks in PDF format."
//         />
//         <LibraryCard
//           title="Notes"
//           description="Access lecture notes and learning resources."
//         />
//         <LibraryCard
//           title="KCSE Revision Material"
//           description="Past papers, marking schemes, and revision kits."
//         />
//       </div>
//     </div>
//   );
// };

// const LibraryCard = ({ title, description }) => {
//   return (
//     <div className="library-card">
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <button className="view-btn">View All</button>
//     </div>
//   );
// };

// export default Library;

import React from "react";

const Library = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">📚 Library</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
        View All
      </button>
    </div>
  );
};

export default Library;
