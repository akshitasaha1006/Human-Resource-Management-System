import React, { useState } from 'react';
import StatusBadge from '../components/StatusBadge';
import { leaveData } from '../data/leaveData';
import '../styles/table.css';

const AdminLeavePage = () => {
  const [leaveRequests, setLeaveRequests] = useState(leaveData);

  const handleStatusChange = (id, newStatus) => {
    setLeaveRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status: newStatus } : request
      )
    );
  };

  const handleCommentChange = (id, comment) => {
    setLeaveRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, remarks: comment } : request
      )
    );
  };

  return (
    <div className="admin-leave-page">
      <h1 className="page-title">Admin Leave Requests</h1>

      <table className="leave-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>Date Range</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map(request => (
            <tr key={request.id}>
              <td>{request.employeeName}</td>
              <td>{request.leaveType}</td>
              <td>{`${request.startDate} - ${request.endDate}`}</td>
              <td>{request.reason}</td>
              <td>
                <StatusBadge status={request.status} />
              </td>
              <td>
                <div className="admin-actions">
                  <button
                    className="btn-approve"
                    onClick={() => handleStatusChange(request.id, 'Approved')}
                  >
                    Approve
                  </button>
                  <button
                    className="btn-reject"
                    onClick={() => handleStatusChange(request.id, 'Rejected')}
                  >
                    Reject
                  </button>
                  <input
                    type="text"
                    placeholder="Add comment"
                    value={request.remarks || ''}
                    onChange={(e) => handleCommentChange(request.id, e.target.value)}
                    className="comment-input"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminLeavePage;
