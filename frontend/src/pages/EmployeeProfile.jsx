import { useEffect, useRef, useState } from "react";
import "./EmployeeProfile.css";

function EmployeeProfile() {
  const [editMode, setEditMode] = useState(false);

  const [employee, setEmployee] = useState({
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    address: "Kolkata, India",
    department: "IT Department",
    designation: "Software Engineer",
  });

  const [profileImage, setProfileImage] = useState(
    "https://i.pravatar.cc/200?img=12"
  );
  const fileInputRef = useRef(null);

  const [documents, setDocuments] = useState([
    { label: "Aadhaar Card", fileName: "" },
    { label: "PAN Card", fileName: "" },
    { label: "Resume", fileName: "" },
    { label: "Offer Letter", fileName: "" },
  ]);

  useEffect(() => {
    return () => {
      if (profileImage.startsWith("blob:")) {
        URL.revokeObjectURL(profileImage);
      }
    };
  }, [profileImage]);

  const handleFileChange = (index, event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const updatedDocuments = [...documents];
    updatedDocuments[index] = {
      ...updatedDocuments[index],
      fileName: file.name,
    };
    setDocuments(updatedDocuments);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setProfileImage(URL.createObjectURL(file));
  };

  const triggerPhotoUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="overlay">
          <div className="profile-image-wrapper">
            <img
              src={profileImage}
              alt="Employee"
              className="profile-image"
            />
            {editMode && (
              <>
                <button
                  type="button"
                  className="change-photo-btn"
                  onClick={triggerPhotoUpload}
                >
                  Change Photo
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden-file-input"
                />
              </>
            )}
          </div>

          {editMode ? (
            <input
              className="edit-input"
              type="text"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          ) : (
            <h1>{employee.name}</h1>
          )}

          <p className="designation">{employee.designation}</p>

          <span className="status">🟢 Active Employee</span>
        </div>
      </div>

      <div className="profile-container">
        <div className="left-panel">
          <div className="card">
            <h2>Personal Details</h2>

            <div className="info-row">
              <span>Name</span>
              {editMode ? (
                <input
                  className="edit-input"
                  type="text"
                  value={employee.name}
                  onChange={(e) =>
                    setEmployee({ ...employee, name: e.target.value })
                  }
                />
              ) : (
                <strong>{employee.name}</strong>
              )}
            </div>

            <div className="info-row">
              <span>Email</span>
              {editMode ? (
                <input
                  className="edit-input"
                  type="email"
                  value={employee.email}
                  onChange={(e) =>
                    setEmployee({ ...employee, email: e.target.value })
                  }
                />
              ) : (
                <strong>{employee.email}</strong>
              )}
            </div>

            <div className="info-row">
              <span>Phone</span>
              {editMode ? (
                <input
                  className="edit-input"
                  type="text"
                  value={employee.phone}
                  onChange={(e) =>
                    setEmployee({ ...employee, phone: e.target.value })
                  }
                />
              ) : (
                <strong>{employee.phone}</strong>
              )}
            </div>

            <div className="info-row">
              <span>Address</span>
              {editMode ? (
                <input
                  className="edit-input"
                  type="text"
                  value={employee.address}
                  onChange={(e) =>
                    setEmployee({ ...employee, address: e.target.value })
                  }
                />
              ) : (
                <strong>{employee.address}</strong>
              )}
            </div>

            <div className="info-row">
              <span>Department</span>
              {editMode ? (
                <input
                  className="edit-input"
                  type="text"
                  value={employee.department}
                  onChange={(e) =>
                    setEmployee({ ...employee, department: e.target.value })
                  }
                />
              ) : (
                <strong>{employee.department}</strong>
              )}
            </div>

            <div className="info-row">
              <span>Designation</span>
              {editMode ? (
                <input
                  className="edit-input"
                  type="text"
                  value={employee.designation}
                  onChange={(e) =>
                    setEmployee({ ...employee, designation: e.target.value })
                  }
                />
              ) : (
                <strong>{employee.designation}</strong>
              )}
            </div>
          </div>

          <div className="card">
            <h2>Job Details</h2>

            <div className="info-row">
              <span>Employee ID</span>
              <strong>EMP001</strong>
            </div>

            <div className="info-row">
              <span>Department</span>
              <strong>{employee.department}</strong>
            </div>

            <div className="info-row">
              <span>Designation</span>
              <strong>{employee.designation}</strong>
            </div>

            <div className="info-row">
              <span>Joining Date</span>
              <strong>15 January 2025</strong>
            </div>
          </div>

          <div className="card">
            <h2>Salary Structure</h2>

            <div className="info-row">
              <span>Basic Salary</span>
              <strong>₹45,000</strong>
            </div>

            <div className="info-row">
              <span>HRA</span>
              <strong>₹10,000</strong>
            </div>

            <div className="info-row">
              <span>Bonus</span>
              <strong>₹5,000</strong>
            </div>

            <div className="info-row">
              <span>Total Salary</span>
              <strong>₹60,000</strong>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="card">
            <h2>Documents</h2>

            {documents.map((document, index) => (
              <div className="document-row" key={document.label}>
                <div className="document-meta">
                  <span>📄 {document.label}</span>
                  <span className="uploaded-name">
                    {document.fileName || "No file uploaded"}
                  </span>
                </div>
                {editMode && (
                  <input
                    className="file-input"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    onChange={(e) => handleFileChange(index, e)}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="card">
            <h2>Performance</h2>

            <div className="performance-grid">
              <div className="performance-card">
                <h3>96%</h3>
                <p>Attendance</p>
              </div>
              <div className="performance-card">
                <h3>4.8⭐</h3>
                <p>Rating</p>
              </div>
              <div className="performance-card">
                <h3>12</h3>
                <p>Projects</p>
              </div>
              <div className="performance-card">
                <h3>8</h3>
                <p>Awards</p>
              </div>
            </div>
          </div>

          <div className="button-group">
            <button
              className="edit-btn"
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? "Save Profile" : "Edit Profile"}
            </button>
            <button className="download-btn">Download ID Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
