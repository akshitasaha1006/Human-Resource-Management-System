import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/modal.css';

const LeaveRequestModal = ({ isOpen, onClose, onSubmit }) => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reason, setReason] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy ID for new request
    const newRequest = {
      id: Math.floor(Math.random() * 100000),
      employeeName: "Current User", // Placeholder for current user
      leaveType,
      startDate: startDate ? startDate.toISOString().split('T')[0] : '',
      endDate: endDate ? endDate.toISOString().split('T')[0] : '',
      duration: startDate && endDate ? ((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1 : 0,
      reason,
      status: 'Pending',
      remarks: '',
      attachment: attachment ? attachment.name : null,
    };
    onSubmit(newRequest);
    // Reset form
    setLeaveType('');
    setStartDate(null);
    setEndDate(null);
    setReason('');
    setAttachment(null);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>New Leave Request</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Leave Type</label>
            <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)} required>
              <option value="">Select Leave Type</option>
              <option value="Paid Leave">Paid Leave</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Unpaid Leave">Unpaid Leave</option>
            </select>
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} required />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} required />
          </div>
          <div className="form-group">
            <label>Reason</label>
            <textarea value={reason} onChange={(e) => setReason(e.target.value)} required></textarea>
          </div>
          <div className="form-group">
            <label>Attachment (Optional)</label>
            <input type="file" onChange={(e) => setAttachment(e.target.files[0])} />
          </div>
          <div className="modal-actions">
            <button type="submit" className="btn-submit">Submit</button>
            <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveRequestModal;
