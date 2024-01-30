import React, { useState } from 'react'
import styles from "@/styles/signup.module.css";
import Coffee from '@/components/modules/Coffee/Coffee';

function Signup() {

  // get inputs state
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className={styles.wrapperCoffee}>
        <div className={styles.container}>
      <div className={styles.container__content}>
          <form className={styles.container__form}>
            <input type='text' name='username' onChange={e=>setFirstname(e.target.value)} value={firstname} placeholder='نام' className={styles.container__inputField} />
            <input type='text' name='username' onChange={e=>setLastname(e.target.value)} value={lastname} placeholder='نام خانوادگی' className={styles.container__inputField} />
            <input type='text' name='username' onChange={e=>setUsername(e.target.value)} value={username} placeholder='نام کاربری' className={styles.container__inputField} />
            <input type='text' name='username' onChange={e=>setEmail(e.target.value)} value={email} placeholder='ایمیل' className={styles.container__inputField} />
            <input type='password' name='password' onChange={e=>setPassword(e.target.value)} value={password} placeholder='رمز عبور' className={styles.container__inputField} />
            <input type='submit' value='عضویت' className={`${styles.container__sumbitButton} mt-5`} />
          </form>
          <div className={styles.container__links}>
            <a href='#emptyLink' className={styles.container__link}>بازیابی رمز</a>
            <span className={styles.container__separator}></span>
            <a href='#emptyLink' className={styles.container__link}>ورود</a>
          </div>
        </div>
        <div className={styles.container__svgs}>
          <Coffee />
        </div>

      </div>
        </div>
      
  )
}

export default Signup