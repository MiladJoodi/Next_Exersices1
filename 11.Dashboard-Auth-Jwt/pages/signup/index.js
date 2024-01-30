import React, { useState } from "react";
import styles from "@/styles/signup.module.css";
import Coffee from "@/components/modules/Coffee/Coffee";
import { useRouter } from "next/router";

import toast, { Toaster } from "react-hot-toast";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

const SignupSchema = yup.object().shape({
  firstname: yup.string().required("الزامی"),
  lastname: yup.string().required("نام خانوادگی الزامیست"),
  username: yup.string().min(3, "حداقل 3 کاراکتر").max(15, "حداکثر 15 کاراکتر").required("لطفاً نام کاربری را وارد کنید"),
  email: yup.string().email('لطفا ایمیل را صحیح وارد کنید').min(3, "حداقل 3 کاراکتر").max(32, "حداکثر 32 کاراکتر").required(),
  password: yup.string().min(8, "حداقل 8 کاراکتر").max(32, "حداکثر 32 کاراکتر").required(),
  // confirmPassword: yup.string().oneOf([yup.ref("password")]).required()
});

function Signup() {
  // router
  const router = useRouter();

  //Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
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
            onSubmit={handleSubmit(signupHandler)}
          >
            <div>
              <input
                type="text"
                {...register("firstname")}
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                placeholder="نام"
                className={styles.container__inputField}
              />
              {errors.firstname && (
                <p className={styles.inputError}>{errors.firstname.message}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                {...register("lastname")}
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                placeholder="نام خانوادگی"
                className={styles.container__inputField}
              />
              {errors.lastname && (
                <p className={styles.inputError}>{errors.lastname.message}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                {...register("username")}
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="نام کاربری"
                className={styles.container__inputField}
              />
              {errors.username && (
                <p className={styles.inputError}>{errors.username.message}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="ایمیل"
                className={styles.container__inputField}
              />
              {errors.email && (
                <p className={styles.inputError}>{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                {...register("password")}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="رمز عبور"
                className={styles.container__inputField}
              />
              {errors.password && (
                <p className={styles.inputError}>{errors.password.message}</p>
              )}
            </div>

            {/* <input type="submit" /> */}
            <input
              type="submit"
              value="عضویت"
              className={`${styles.container__sumbitButton} `}
              // onClick={signupHandler}
            />
            
          </form>
          <div className={styles.container__links}>
            <a href="#emptyLink" className={styles.container__link}>
              بازیابی رمز
            </a>
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
