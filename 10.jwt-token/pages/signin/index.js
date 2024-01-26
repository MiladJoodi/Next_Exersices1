import React from "react";

function Index() {
  return (
    <div className="box">
      <h1 align="center">Login Form</h1>
      <form role="form" method="post">
        <div className="inputBox">
          <input type="text" autoComplete="off" required />
          <label>Username</label>
        </div>
        <div className="inputBox">
          <input type="password" autoComplete="off" required />
          <label>Password</label>
        </div>

        <input type="submit" className="register-btn" value="Sign In" />
      </form>
    </div>
  );
}

export default Index;
