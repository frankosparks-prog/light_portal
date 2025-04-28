import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import LoginSignup from "./components/LoginSignup";
import Profile from "./components/Profile";
import Fees from "./components/Fees";
import Discipline from "./components/Discipline";
import Academics from "./components/Academics";
import Library from "./components/Library";

// ✅ Layout to show Sidebar + nested content only when logged in
const ProtectedLayout = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Sidebar />
      <div
        className="main-content"
        style={{ marginLeft: "220px", padding: "1rem" }}
      >
        <Outlet />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public login/signup route */}
        <Route path="/" element={<LoginSignup />} />

        <Route element={<ProtectedLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/discipline" element={<Discipline />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/library" element={<Library />} />
        </Route>

        <Route path="*" element={<Navigate to="/LoginSignup" />} />
      </Routes>
    </Router>
  );
};

export default App;
