import React, { useState } from "react";

function Index() {
  
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [username, setsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="box">
      <h1 align="center">SignUp Form</h1>
      <form role="form" method="post">
        <div className="inputBox">
          <input type="text" 
          value={firstname}
          autoComplete="off" required />
          <label>Firstname</label>
        </div>
        <div className="inputBox">
          <input type="text" 
          value={lastname}
          autoComplete="off" required />
          <label>Lastname</label>
        </div>
        <div className="inputBox">
          <input type="text" 
          value={username}
          autoComplete="off" required />
          <label>Username</label>
        </div>
        <div className="inputBox">
          <input type="email" 
          value={email}
          autoComplete="off" required />
          <label>Email</label>
        </div>
        <div className="inputBox">
          <input type="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          autoComplete="off" required />
          <label>Password</label>
        </div>

        <input type="submit" className="register-btn" value="Sign Up" />
      </form>
    </div>
  );
}

export default Index;
