import React from 'react';

const ReportPage = () => {
  return (
    <div className="report-container">
      <aside className="sidebar">
        <div className="logo">GRAPHURA</div>
        <div className="user-info">
          <div className="user-icon">👤</div>
          <div className="user-role">Name<br /><span>TL / Management</span></div>
        </div>
        <nav className="menu">
  <div className="menu-item">Dashboard</div>
  <div className="menu-item">Projects</div>
  <div className="menu-item">Transfer Projects</div>
  <div className="menu-item active">Report</div>
  <div className="menu-item">Team Member</div>
  <div className="menu-item">Pay out</div>
  <div className="menu-item">Review</div>
</nav>

      </aside>

      <main className="content">
        <div className="top-buttons">
          <button>Proposals</button>
          <button>Custom Plan</button>
          <button>Work Order</button>
          <button>My Profile</button>
        </div>

        <h1 className="report-title">REPORT</h1>

        <div className="filters">
          <select><option>Month</option></select>
          <select><option>Day</option></select>
          <button className="search-btn">Search</button>
        </div>

        <table className="report-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Projects</th>
              <th>Current Projects</th>
              <th>Completed Projects</th>
              <th>Joining Date</th>
              <th>Last Month Projects</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TL Name</td>
              <td>1234</td>
              <td>23</td>
              <td>1200</td>
              <td>15</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Sales Executive</td>
              <td>60</td>
              <td>5</td>
              <td>20</td>
              <td>5</td>
              <td>0</td>
            </tr>
            {[...Array(4)].map((_, i) => (
              <tr key={i}>
                <td><b>Bold text column</b></td>
                <td><b>Bold text column</b></td>
                <td><b>Bold text column</b></td>
                <td><b>Bold text column</b></td>
                <td><b>Bold text column</b></td>
                <td><b>Bold text column</b></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ReportPage;
