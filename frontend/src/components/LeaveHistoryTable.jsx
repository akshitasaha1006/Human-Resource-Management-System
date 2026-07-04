import React from 'react';
import StatusBadge from './StatusBadge';
import '../styles/table.css';

const LeaveHistoryTable = ({ leaveHistory }) => {
  return (
    <div className="leave-history-section">
      <h2>Leave History</h2>
      <table className="leave-table">
        <thead>
          <tr>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Duration</th>
            <th>Status</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {leaveHistory.map((request) => (
            <tr key={request.id}>
              <td>{request.leaveType}</td>
              <td>{request.startDate}</td>
              <td>{request.endDate}</td>
              <td>{request.duration} Days</td>
              <td>
                <StatusBadge status={request.status} />
              </td>
              <td>{request.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveHistoryTable;
