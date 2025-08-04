import React from "react";
import "./ReportTable.css";

const ReportTable = () => {
  return (
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
            <td><strong>Bold text column</strong></td>
            <td><strong>Bold text column</strong></td>
            <td><strong>Bold text column</strong></td>
            <td><strong>Bold text column</strong></td>
            <td><strong>Bold text column</strong></td>
            <td><strong>Bold text column</strong></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
