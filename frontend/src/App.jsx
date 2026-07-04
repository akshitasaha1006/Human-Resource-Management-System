import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeProfile from "./pages/EmployeeProfile";
import Attendance from "./pages/Attendance";
import LeavePage from "./pages/LeavePage";
import AdminLeavePage from "./pages/AdminLeavePage";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-shell">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Employee Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/attendance" className="nav-link">Attendance</Link>
            </li>
            <li className="nav-item">
              <Link to="/leave" className="nav-link">Employee Leave</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin-leave" className="nav-link">Admin Leave</Link>
            </li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<EmployeeProfile />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/leave" element={<LeavePage />} />
            <Route path="/admin-leave" element={<AdminLeavePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
