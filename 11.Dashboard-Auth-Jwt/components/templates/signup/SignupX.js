import React from 'react'
import styles from "@/styles/signin.module.css";
import Coffee from '@/components/modules/Coffee/Coffee';

function Signup() {
    return (
        <div className={styles.wrapperCoffee}>
            <div className={styles.container}>
            <div className={styles.container__svgs}>
                    <Coffee />
                </div>
                <div className={styles.container__content}>
                    <form className={styles.container__form}>
                        <input type='text' name='username' placeholder='نام کاربری یا ایمیل' className={styles.container__inputField} />
                        <input type='text' name='username' placeholder='نام کاربری یا ایمیل' className={styles.container__inputField} />
                        <input type='text' name='username' placeholder='نام کاربری یا ایمیل' className={styles.container__inputField} />
                        <input type='password' name='password' placeholder='رمز عبور' className={styles.container__inputField} />
                        {/* <input type='submit' value='ورود' className={styles.container__sumbitButton} /> */}
                    </form>
                    <div className={styles.container__links}>
                        <a href='#emptyLink' className={styles.container__link}>بازیابی رمز</a>
                        <span className={styles.container__separator}></span>
                        <a href='#emptyLink' className={styles.container__link}>عضویت</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup