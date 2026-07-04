import React from 'react';
import { FaPlane, FaBed, FaDollarSign } from 'react-icons/fa';

export const leaveBalances = [
  {
    icon: <FaPlane />,
    leaveType: "Paid Leave",
    remainingDays: 15,
  },
  {
    icon: <FaBed />,
    leaveType: "Sick Leave",
    remainingDays: 10,
  },
  {
    icon: <FaDollarSign />,
    leaveType: "Unpaid Leave",
    remainingDays: 999, // Essentially unlimited
  },
];

export const leaveData = [
  {
    id: 1,
    employeeName: "Alice Smith",
    leaveType: "Paid Leave",
    startDate: "2024-07-01",
    endDate: "2024-07-05",
    duration: 5,
    reason: "Vacation to Hawaii",
    status: "Approved",
    remarks: "Enjoy your trip!",
    attachment: null,
  },
  {
    id: 2,
    employeeName: "Bob Johnson",
    leaveType: "Sick Leave",
    startDate: "2024-06-20",
    endDate: "2024-06-20",
    duration: 1,
    reason: "Fever",
    status: "Pending",
    remarks: "",
    attachment: "medical_certificate.pdf",
  },
  {
    id: 3,
    employeeName: "Charlie Brown",
    leaveType: "Unpaid Leave",
    startDate: "2024-06-10",
    endDate: "2024-06-15",
    duration: 6,
    reason: "Personal matters",
    status: "Rejected",
    remarks: "Business critical period.",
    attachment: null,
  },
  {
    id: 4,
    employeeName: "Alice Smith",
    leaveType: "Sick Leave",
    startDate: "2024-05-10",
    endDate: "2024-05-10",
    duration: 1,
    reason: "Dental appointment",
    status: "Approved",
    remarks: "",
    attachment: null,
  },
];

