import React, { useState } from 'react'
import styles from "@/styles/signin.module.css";
import Coffee from '@/components/modules/Coffee/Coffee';
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SigninSchema = yup.object().shape({
  identifier: yup.string().required("نام کاربری الزامیست"),
  password: yup.string().required("رمز عبور الزامیست"),
});

function Signin() {

  //Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });


  const router = useRouter()

  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")

  const signinHandler = async (event) => {
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
      
      toast.success("ورود موفقیت آمیز بود");

      setTimeout(() => {
        router.replace("/dashboard")
      }, 2000);
    }
    else if(res.status === 404){
      toast.error("نام کاربری یا کلمه عبور اشتباه است");
    }else if(res.status === 422){
      toast.error("کاربری با این مشخصات یافت نشد");
    }else if(res.status === 500){
      alert("Error")
    }



  }


  return (
    <div className={styles.wrapperCoffee}>
<Toaster />

      <div className={styles.container}>
        <div className={styles.container__content}>
          <form className={styles.container__form} onSubmit={handleSubmit(signinHandler)}>
            <div>
              <input
                {...register("identifier")}
                type='text'
                name='identifier'
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder='نام کاربری یا ایمیل'
                className={styles.container__inputField}
              />
              {errors.identifier && (
                <p className={styles.inputError}>{errors.identifier.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("password")}
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='رمز عبور'
                className={styles.container__inputField}
              />
              {errors.password && (
                <p className={styles.inputError}>{errors.password.message}</p>
              )}
            </div>

            <input
              type='submit' value='ورود'
              className={styles.container__sumbitButton}
            />

          </form>

          <div className={styles.container__links}>
            <a href='#emptyLink' className={styles.container__link}>بازیابی رمز</a>
            <span className={styles.container__separator}></span>
            <Link href="/signup" className={styles.container__link}>
              عضویت
            </Link>
          </div>
        </div>
        <div className={styles.container__svgs}>
          <Coffee />
        </div>

      </div>
    </div>

  )
}

export default Signin