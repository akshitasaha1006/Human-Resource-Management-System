import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LeavePage from './pages/LeavePage';
import AdminLeavePage from './pages/AdminLeavePage';
import './index.css'; // Assuming a global CSS file for basic styling

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-list">
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
          <Route path="/leave" element={<LeavePage />} />
          <Route path="/admin-leave" element={<AdminLeavePage />} />
          <Route path="/" element={<LeavePage />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
