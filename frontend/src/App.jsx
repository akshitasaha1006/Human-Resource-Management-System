import { useState } from "react";
import EmployeeProfile from "./pages/EmployeeProfile";
import Attendance from "./pages/Attendance";
import "./App.css";

function App() {
  const [page, setPage] = useState("profile");

  return (
    <>
      <div className="app-shell">
        <div className="nav-buttons" role="tablist" aria-label="Main sections">
          <button
            className={`nav-button ${page === "profile" ? "active" : ""}`}
            onClick={() => setPage("profile")}
            type="button"
          >
            Employee Profile
          </button>

          <button
            className={`nav-button ${page === "attendance" ? "active" : ""}`}
            onClick={() => setPage("attendance")}
            type="button"
          >
            Attendance
          </button>
        </div>
      </div>

      {page === "profile" ? <EmployeeProfile /> : <Attendance />}
    </>
  );
}

export default App;