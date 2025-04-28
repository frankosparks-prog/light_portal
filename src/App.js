import React from "react";
import "./App.css";
import LoginSignup from "./components/LoginSignup.jsx";
import Sidebar from "./components/sidebar.jsx";
import Profile from "./components/Profile.jsx";
import Library from "./components/Library.jsx";

function App() {
  return (
    <div>
      <LoginSignup />
      {/* <Sidebar />
      <Profile />
      <Library /> */}
    </div>
  );
}

export default App;
