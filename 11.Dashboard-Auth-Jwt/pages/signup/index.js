import React from 'react'
import styles from "@/styles/signup.module.css";
import Coffee from '@/components/modules/Coffee/Coffee';

function Logout() {
  return (
    <div className={styles.wrapperCoffee}>
        <div className={styles.container}>
      <div className={styles.container__content}>
          <form className={styles.container__form}>
            <input type='text' name='username' placeholder='نام' className={styles.container__inputField} />
            <input type='text' name='username' placeholder='نام خانوادگی' className={styles.container__inputField} />
            <input type='text' name='username' placeholder='نام کاربری' className={styles.container__inputField} />
            <input type='text' name='username' placeholder='ایمیل' className={styles.container__inputField} />
            <input type='password' name='password' placeholder='رمز عبور' className={styles.container__inputField} />
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

export default Logout