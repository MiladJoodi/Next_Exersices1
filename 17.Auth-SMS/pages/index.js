import React from "react";

function Index() {
  return (
    <div className="box">
      <h1 align="center">Login Form</h1>
      <form role="form" method="post">
        <div className="inputBox">
          <input type="text" autoComplete="off" required />
          <label>Code</label>
        </div>
        <input type="submit" className="register-btn" value="Verify Code" />
        <div className="inputBox">
          <input type="text" autoComplete="off" required />
          <label>Phone Number</label>
        </div>
        <input type="submit" className="register-btn" value="Send Code" />
      </form>
    </div>
  );
}

export default Index;
