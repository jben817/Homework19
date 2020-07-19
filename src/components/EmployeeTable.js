import React from "react";
import './employeeTable.css';

function EmployeeList(props) {
  return (
    <div className="list-container">
      <h1>Employees</h1>
    <table className="list-group">
      {props.employees.map(data => (
        
        <td className="list-group-item" key={data.id}>
         <tr><strong>Name:</strong> {data.name}</tr>
         <hr />
         <tr> <strong>Occupation:</strong> {data.occupation}</tr>
         <hr />
         <tr> <strong>Location:</strong> {data.location}</tr>
        </td>
      ))}
    </table>
    </div>
  );
}

export default EmployeeList;