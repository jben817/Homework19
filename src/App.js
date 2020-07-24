import React, {useState} from "react";
import EmployeeList from "./components/EmployeeList";

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

  const [search, setSearch] = useState("");

  return (
    <div>
      <EmployeeList employees={employees} search={search} />
      <form>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.vaule)}
        />
      </form>
    </div>
  )
};


export default App;
