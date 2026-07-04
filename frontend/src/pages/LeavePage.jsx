import React, { useState } from 'react';
import LeaveBalanceCard from '../components/LeaveBalanceCard';
import LeaveHistoryTable from '../components/LeaveHistoryTable';
import LeaveRequestModal from '../components/LeaveRequestModal';
import { leaveData, leaveBalances } from '../data/leaveData.jsx';
import '../styles/leave.css';

const LeavePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leaveHistory, setLeaveHistory] = useState(leaveData);

  const handleNewLeaveRequest = (newRequest) => {
    setLeaveHistory([newRequest, ...leaveHistory]);
    setIsModalOpen(false);
  };

  return (
    <div className="leave-page">
      <h1 className="page-title">Leave & Time-Off</h1>

      <div className="leave-balance-cards">
        {leaveBalances.map((card, index) => (
          <LeaveBalanceCard
            key={index}
            icon={card.icon}
            leaveType={card.leaveType}
            remainingDays={card.remainingDays}
          />
        ))}
      </div>

      <button className="new-leave-request-btn" onClick={() => setIsModalOpen(true)}>
        New Leave Request
      </button>

      <LeaveHistoryTable leaveHistory={leaveHistory} />

      <LeaveRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewLeaveRequest}
      />
    </div>
  );
};

export default LeavePage;
