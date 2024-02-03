import React, { useState } from "react";
import { signIn } from "next-auth/react";

function Index() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const signin = async (event) => {
    event.preventDefault();

    const res = await signIn("credentials", {
      identifier,
      password,
      redirect: false,
    });

    console.log("Res ->", res);
  };

  return (
    <div className="box">
      <h1 align="center">Login Form</h1>
      <form role="form" method="post">
        <div className="inputBox">
          <input
            type="text"
            autoComplete="off"
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            required
          />
          <label>Username | Email</label>
        </div>
        <div className="inputBox">
          <input
            type="password"
            autoComplete="off"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <label>Password</label>
        </div>

        <input
          type="submit"
          className="register-btn"
          value="Sign In"
          onClick={signin}
        />
      </form>
    </div>
  );
}

export default Index;
