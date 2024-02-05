import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  //Protect Routes in client
  const { data, status } = useSession();
  useEffect(()=>{
    if(status === "authenticated"){
      router.replace('/dashboard')
    }
  },[status])


  const signin = async (event) => {
    event.preventDefault();

    const res = await signIn("credentials", {
      identifier,
      password,
      redirect: false,
    });

    if (res.status === 200) {
      router.replace("/dashboard");
    }
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
