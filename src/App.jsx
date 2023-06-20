

import React from "react";
import './App.css';
import UserList from "./UserList";



function App() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];

const handleButtonClick = (id) => {
  console.log(`Button clicked for user with id: ${id}`)
}


  return (
    <div>
 <UserList users={users} onButtonClick={handleButtonClick}/>
    </div>
  )
}


export default App;
