import React from 'react';
import '../styles/leave.css';

const LeaveBalanceCard = ({ icon, leaveType, remainingDays }) => {
  return (
    <div className="leave-balance-card">
      <div className="card-icon">{icon}</div>
      <div className="card-details">
        <h3>{leaveType}</h3>
        <p>{remainingDays} Days Remaining</p>
      </div>
    </div>
  );
};

export default LeaveBalanceCard;
