import React, { useState } from "react";
import styles from "@/styles/signup.module.css";
import Coffee from "@/components/modules/Coffee/Coffee";
import { useRouter } from "next/router";

import toast, { Toaster } from "react-hot-toast";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Signup() {
  // router
  const router = useRouter();

  // get inputs state
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Submit Method
  const signupHandler = async (event) => {
    event.preventDefault();

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

  // React Hook Form

  // const schema = yup.object().shape({
  //   firstname: yup.string().min(3).max(15).required("وارد کردن نام الزامیست"),
  //   lastname: yup.string().min(3).max(15).required(),
  //   username: yup.string().min(3).max(15).required(),
  //   email: yup.string().email().min(3).max(32).required(),
  //   password: yup.string().min(4).max(15).required(),
  //   // confirmPassword: yup.string().oneOf([yup.ref("password")]).required()
  // })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const formSubmiting = (data) => {
    console.log("Data=> ", data);
  };

  return (
    <div className={styles.wrapperCoffee}>
      <div className={styles.container}>
        <div className={styles.container__content}>
          <form
            className={styles.container__form}
            onSubmit={handleSubmit(formSubmiting)}
          >
            {/* <input
              type="text"
              name="firstname"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              placeholder="نام"
              className={styles.container__inputField}
              {...register("name", {
                required: "وارد کردن نام الزامیست",
                minLength: {
                  value: 3,
                  message: "حداقل 3 کاراکتر وارد کنید"
                },
                maxLength: {
                  value: 12,
                  message: "حداکثر 12 کاراکتر وارد کنید"
                },
              })}
            />
            {errors.name && errors.name.message} */}

            <input
              type="text"
              name="firstname"
              {...register("firstname", {
                required: "الزمایست",
                minLength: {
                  value: 1,
                  message: "حداقل 3 کاراکتر",
                },
                maxLength: 12,
              })}
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              placeholder="نام"
              className={styles.container__inputField}
            />
            {errors.firstname && errors.firstname.message}

            <input
              type="text"
              name="lastname"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="نام کاربری"
              className={styles.container__inputField}
              // {...register("username")}
            />

            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="نام کاربری"
              className={styles.container__inputField}
              // {...register("username")}
            />
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="ایمیل"
              className={styles.container__inputField}
              // {...register("email")}
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="رمز عبور"
              className={styles.container__inputField}
              // {...register("password")}
            />
            <input
              type="submit"
              value="عضویت"
              className={`${styles.container__sumbitButton} `}
              onClick={signupHandler}
            />
          </form>
          <div className={styles.container__links}>
            <a href="#emptyLink" className={styles.container__link}>
              بازیابی رمز
            </a>
            <span className={styles.container__separator}></span>
            <a href="#emptyLink" className={styles.container__link}>
              ورود
            </a>
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
