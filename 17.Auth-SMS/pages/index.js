import React, { useState } from "react";

function Index() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const sendCode = async (event) => {
    event.preventDefault();
    console.log("Send Code !!");

    const res = await fetch("/api/sms/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });

    if(res.status === 201){
      setIsCodeSent(true)
      alert("code sent successfuly")
    }
  };

  const verifyCode = async (event)=>{
    event.preventDefault()
    console.log("code sent")
  }

  return (
    <div className="box">
      <h1 align="center">Login Form</h1>
      <form role="form" method="post">
        {isCodeSent ? (
          <>
            <div className="inputBox">
              <input
                type="text"
                autoComplete="off"
                required
                value={code}
                onChange={(event) => setCode(event.target.value)}
              />
              <label>Code</label>
            </div>
            <input type="submit" className="register-btn" value="Verify Code" onClick={verifyCode} />
          </>
        ) : (
          <>
            <div className="inputBox">
              <input
                type="text"
                autoComplete="off"
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <label>Phone Number</label>
            </div>
            <input
              type="submit"
              className="register-btn"
              value="Send Code"
              onClick={sendCode}
            />
          </>
        )}
      </form>
    </div>
  );
}

export default Index;
