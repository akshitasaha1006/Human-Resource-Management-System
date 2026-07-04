import "./Attendance.css";

function Attendance() {

  const attendanceData = [
    {
      id: 1,
      date: "01 Jul 2026",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      hours: "9h",
      status: "Present",
    },
    {
      id: 2,
      date: "02 Jul 2026",
      checkIn: "09:15 AM",
      checkOut: "06:10 PM",
      hours: "8h 55m",
      status: "Present",
    },
    {
      id: 3,
      date: "03 Jul 2026",
      checkIn: "--",
      checkOut: "--",
      hours: "--",
      status: "Leave",
    },
    {
      id: 4,
      date: "04 Jul 2026",
      checkIn: "09:35 AM",
      checkOut: "06:05 PM",
      hours: "8h 30m",
      status: "Half Day",
    },
  ];

  return (
    <div className="attendance-page">

      <div className="attendance-header">

        <h1>Attendance Management</h1>

        <p>
          Monitor attendance, working hours and monthly performance.
        </p>

      </div>

      <div className="summary-grid">

        <div className="summary-card">
          <h2>22</h2>
          <span>Present</span>
        </div>

        <div className="summary-card">
          <h2>2</h2>
          <span>Half Day</span>
        </div>

        <div className="summary-card">
          <h2>1</h2>
          <span>Leave</span>
        </div>

        <div className="summary-card">
          <h2>96%</h2>
          <span>Attendance</span>
        </div>

      </div>

      <div className="action-card">

        <button className="checkin-btn">
          Check In
        </button>

        <button className="checkout-btn">
          Check Out
        </button>

        <div className="working-hours">
          <h3>Today's Working Hours</h3>
          <p>08h 45m</p>
        </div>

      </div>

      <div className="table-card">

        <h2>Attendance History</h2>

        <table>

          <thead>

            <tr>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Hours</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody> 
         {attendanceData.map((item) => (
  <tr key={item.id}>
    <td>{item.date}</td>
    <td>{item.checkIn}</td>
    <td>{item.checkOut}</td>
    <td>{item.hours}</td>
    <td>
      <span
        className={
          item.status === "Present"
            ? "status present"
            : item.status === "Leave"
            ? "status leave"
            : "status halfday"
        }
      >
        {item.status}
      </span>
    </td>
  </tr>
))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Attendance;