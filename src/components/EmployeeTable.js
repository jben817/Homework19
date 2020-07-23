import React from "react";
import './employeeTable.css';

function EmployeeList(props) {
  let filterArr = props.employees.filter((employee)=>
  employee.name.toLowerCase().includes(props.search.toLowerCase())
  );

  return (
    <div className="list-container">
      <h1>Employees</h1>
    <table className="list-group">
      {filterArr.map(data => (
        
        <tr className="list-group-item" key={data.id}>
         <td><strong>Name:</strong> {data.name}</td>
         <hr />
         <td> <strong>Occupation:</strong> {data.occupation}</td>
         <hr />
         <td> <strong>Location:</strong> {data.location}</td>
        </tr>
      ))}
    </table>
    </div>
  );
}

export default EmployeeList;