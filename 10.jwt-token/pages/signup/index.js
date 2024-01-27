import { useRouter } from "next/router";
import React, { useState } from "react";

function Index() {

  const router = useRouter()

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [username, setsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signup = async (event) => {
    event.preventDefault()
    const user = { firstname, lastname, username, email, password }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    if (res.status === 201) {
      setFirstname("");
      setLastname("");
      setsername("");
      setEmail("");
      setPassword("");

      alert('Register Successfully')
      
      router.replace("/dashboard")
    }else if(res.status === 422){
      alert("Already Exist")
    }

  }

  return (
    <div className="box">
      <h1 align="center">SignUp Form</h1>
      <form role="form" method="post">
        <div className="inputBox">
          <input type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            autoComplete="off" required />
          <label>Firstname</label>
        </div>
        <div className="inputBox">
          <input type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            autoComplete="off" required />
          <label>Lastname</label>
        </div>
        <div className="inputBox">
          <input type="text"
            value={username}
            onChange={(e) => setsername(e.target.value)}
            autoComplete="off" required />
          <label>Username</label>
        </div>
        <div className="inputBox">
          <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off" required />
          <label>Email</label>
        </div>
        <div className="inputBox">
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off" required />
          <label>Password</label>
        </div>

        <input type="submit"
          className="register-btn"
          value="Sign Up"
          onClick={signup} />
      </form>
    </div>
  );
}

export default Index;
