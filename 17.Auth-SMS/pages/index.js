import { useRouter } from "next/router";
import React, { useState } from "react";
import swal from "sweetalert";

function Index() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const sendCode = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/sms/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });

    if (res.status === 201) {
      setIsCodeSent(true);

      swal({
        title: "Code Sent Successfully :))",
        icon: "success",
        buttons: "Enter Code",
      });
    }
  };

  const verifyCode = async (event) => {
    event.preventDefault();
    console.log("Verify Code !!");

    const res = await fetch("/api/sms/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, code }),
    });

    if (res.status === 409) {
      swal({
        title: "Code is not correct !!",
        icon: "error",
        buttons: "Try Again",
      });
    } else if (res.status === 410) {
      swal({
        title: "Code is expired !!",
        icon: "error",
        buttons: "Try Another Time",
      });
    } else if (res.status === 200) {
      swal({
        title: "Code is correct :))",
        icon: "success",
        buttons: "Go to dashboard",
      }).then(() => {
        router.replace("/dashboard");
      });
    }
  };

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
            <input
              type="submit"
              className="register-btn"
              value="Verify Code"
              onClick={verifyCode}
            />
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
