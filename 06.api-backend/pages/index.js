import { useState } from "react";

function Homepage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (event) => {
    event.preventDefault();

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
  }

  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="login-form">
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
      </div>
    </>
  );
}

export default Homepage;
