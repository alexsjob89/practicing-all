

import React,{useState} from "react";
import './App.css';


function App() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [isLoggedIn, setIsLoggedIn] = useState(false)

const handleLogIn = () => {
  if (username === '' && password === '') {
    setIsLoggedIn(true)
  }
}

const handleLogout = () => {
  setIsLoggedIn(false)
  setUsername('')
  setPassword('')
}

if (isLoggedIn) {
  return (
    <div>
      <h1>Welcome, {username}</h1>
<button type="button" onClick={handleLogout}>Log Out</button>
    </div>
  )
}

  return(
<div>
<h1>Login</h1>
<form>
  <label htmlFor="username">Username:</label>
  <input
    type="text"
    id="username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
     />
     <br />
     <label htmlFor="password">Password:</label>
     <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
</form>
<br />
<button type="button" onClick={handleLogIn}>
  Log In
</button>
</div>
  )
}

export default App;
