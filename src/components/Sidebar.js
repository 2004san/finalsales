import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">GRAPHURA</h2>
      <div className="profile">
        <div className="profile-icon">👤</div>
        <div>
          <strong>Name</strong>
          <p>TL / Management</p>
        </div>
      </div>

      <ul className="sidebar-menu">
        <li>📊 Dashboard</li>
        <li>📁 Projects</li>
        <li>🔁 Transfer Projects</li>
        <li className="active">📄 Report</li>
        <li>👥 Team Member</li>
        <li>💸 Pay out</li>
        <li>📝 Review</li>
      </ul>
    </div>
  );
};

export default Sidebar;
