import React, { useState } from 'react'
import styles from "@/styles/signup.module.css";
import Coffee from '@/components/modules/Coffee/Coffee';
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from 'next/router';

function Login() {

  const router = useRouter()

  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")

  const signin = async (event) => {
    event.preventDefault()

    const user = { identifier, password }

    const res = await fetch("api/auth/signin", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    if (res.status === 200) {
      // setIdentifier("")
      // setPassword("")
      
      toast.success("عضویت موفقیت آمیز بود");

      setTimeout(() => {
        router.replace("/dashboard")
      }, 2000);
    }

  }

  return (
    <div className={styles.wrapperCoffee}>
      <div className={styles.container}>
        <div className={styles.container__content}>
          <form className={styles.container__form}>
            <input type='text' name='username' value={identifier} onChange={(e) => setIdentifier(e.target.value)} placeholder='نام کاربری یا ایمیل' className={styles.container__inputField} />
            <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='رمز عبور' className={styles.container__inputField} />
            <input type='submit' value='ورود' onClick={signin} className={styles.container__sumbitButton} />
          </form>
          <div className={styles.container__links}>
            <a href='#emptyLink' className={styles.container__link}>بازیابی رمز</a>
            <span className={styles.container__separator}></span>
            <a href='#emptyLink' className={styles.container__link}>عضویت</a>
          </div>
        </div>
        <div className={styles.container__svgs}>
          <Coffee />

        </div>

      </div>
      <Toaster position="top-left" reverseOrder={false} />
    </div>

  )
}

export default Login