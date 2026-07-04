import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Payroll from "./pages/Payroll";
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
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">Employee Profile</Link>
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
            <li className="nav-item">
              <Link to="/payroll" className="nav-link">Payroll</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/profile" element={<EmployeeProfile />} />
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
