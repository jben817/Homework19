import React from "react";

function EmployeeList(props) {
  return (
    <div className="list-group">
      {props.employees.map(data => (
        <td className="list-group-item" key={data.id}>
         <tr>{data.name}</tr>
         <tr>{data.occupation}</tr>
         <tr> {data.location}</tr>
        </td>
      ))}
    </div>
  );
}

export default EmployeeList;