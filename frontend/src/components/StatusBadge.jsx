import React from 'react';
import '../styles/table.css';

const StatusBadge = ({ status }) => {
  let badgeClass = '';
  switch (status) {
    case 'Pending':
      badgeClass = 'badge-pending';
      break;
    case 'Approved':
      badgeClass = 'badge-approved';
      break;
    case 'Rejected':
      badgeClass = 'badge-rejected';
      break;
    default:
      badgeClass = 'badge-pending';
  }

  return <span className={`status-badge ${badgeClass}`}>{status}</span>;
};

export default StatusBadge;
