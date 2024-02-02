import React, { useState } from "react";
import styles from "@/styles/signup.module.css";
import Coffee from "@/components/modules/Coffee/Coffee";
import { useRouter } from "next/router";

import toast, { Toaster } from "react-hot-toast";

import { useFormik } from "formik";
import Link from "next/link";

function Signup() {
  // router
  const router = useRouter();

  //Formik
  const form = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // get inputs state
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onSubmit = (data) => {
  //   console.log(data)
  // };

  // Submit Method
  const signupHandler = async (event) => {
    // event.preventDefault();

    const user = {
      firstname,
      lastname,
      username,
      email,
      password,
    };

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    // 201
    if (res.status === 201) {
      toast.success("عضویت موفقیت آمیز بود");

      setTimeout(() => {
        setFirstname("");
        setLastname("");
        setUsername("");
        setEmail("");
        setPassword("");
        router.replace("dashboard");
      }, 2000);
    }
    //422
    if (res.status === 422) {
      toast.error("لطفاً اطلاعات را کامل وارد کنید");
    }
  };

  return (
    <div className={styles.wrapperCoffee}>
      <div className={styles.container}>
        <div className={styles.container__content}>
          <form
            className={styles.container__form}
          >
            <div>
              <input
                type="text"
                name="firstname"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                placeholder="نام"
                className={styles.container__inputField}
              />
            </div>

            <div>
              <input
                type="text"
                name="lastname"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                placeholder="نام خانوادگی"
                className={styles.container__inputField}
              />
            </div>

            <div>
              <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="نام کاربری"
                className={styles.container__inputField}
              />
            </div>

            <div>
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="ایمیل"
                className={styles.container__inputField}
              />
            </div>

            <div>
              <input
                type="text"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="رمز عبور"
                className={styles.container__inputField}
              />
            </div>

            <input
              type="submit"
              value="عضویت"
              className={`${styles.container__sumbitButton} `}
              // onClick={signupHandler}
            />
          </form>
          <div className={styles.container__links}>
            <Link href="/" className={styles.container__link}>
              بازیابی رمز
            </Link>
            <span className={styles.container__separator}></span>
            <Link href="/signin" className={styles.container__link}>
              ورود
            </Link>
          </div>
        </div>
        <div className={styles.container__svgs}>
          <Coffee />
        </div>
      </div>
      <Toaster position="top-left" reverseOrder={false} />
    </div>
  );
}

export default Signup;
