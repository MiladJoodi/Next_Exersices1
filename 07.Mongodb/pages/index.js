// ESM
// import fs from "fs";
// import path from "path";

// CommonJS
const fs = require("fs");
const path = require("path");

import { useState } from "react";

function Homepage({ users }) {
  console.log(users);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (event) => {
    event.preventDefault();

    if (!username.trim() || !email.trim() || !password.trim()) {
      return alert("Data is not valid !!");
    }

    const newUser = {
      username,
      email,
      password,
    };

    const res = await fetch(`/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();

    if (res.status === 201) {
      setUsername("");
      setEmail("");
      setPassword("");
    }
    console.log("Response =>", res);
    console.log("Response Data =>", data);
  };

  return (
    <>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
            />
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <button onClick={registerUser}>Register</button>
          </form>
        </div>

        <hr />
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  // const res = await fetch("/api/users");
  // const usersData = await res.json();

  const dbPath = path.join(process.cwd(), "data", "db.json");

  const data = fs.readFileSync(dbPath);

  const parsedData = JSON.parse(data);

  return {
    props: {
      users: parsedData.users,
    },
  };
}

// Server = Server

export default Homepage;
