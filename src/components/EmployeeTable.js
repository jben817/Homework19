import React from "react";
import './employeeTable.css';

function EmployeeList(props) {
  return (
    <table className="list-group">
      {props.employees.map(data => (
        <td className="list-group-item" key={data.id}>
         <tr>Name: {data.name}</tr>
         <tr> Occupation: {data.occupation}</tr>
         <tr> Location: {data.location}</tr>
        </td>
      ))}
    </table>
  );
}

export default EmployeeList;