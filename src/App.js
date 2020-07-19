import React from "react";
import EmployeeList from "./components/EmployeeTable";

const employees = [
  {
    "id": 1,
    "name": "Rick Grimes",
    "occupation": "Sheriff",
    "location": "Atlanta"
  },
  {
    "id": 2,
    "name": "Leslie Knope",
    "occupation": "Parks Department",
    "location": "Pawnee"
  },
  {
    "id": 3,
    "name": "Frank Castle",
    "occupation": "Punisher",
    "location": "Wherever he wants to be"
  },
  {
    "id": 4,
    "name": "Hannibal Lecter",
    "occupation": "Doctor/Cannibal =/",
    "location": "unknown"
  },
  {
    "id": 5,
    "name": "Burton Guster",
    "occupation": "Detective?",
    "location": "Santa Barbara"
  }
]


function App() {
  return <EmployeeList employees={employees} />;
}

export default App;
