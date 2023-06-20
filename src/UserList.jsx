import React from 'react'

function UserList({users, onButtonClick}) {
  return (
    <div>
     <ul>
      {users.map((user) => (
       <li key={user.id}>
        {user.name}: {user.email}
        <button onClick={() => onButtonClick(user.id)}>click me</button>
       </li>
      ))}
     </ul>
    </div>
  )
}

export default UserList