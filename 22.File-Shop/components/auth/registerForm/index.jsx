"use client"

import Link from "next/link"
import { useForm } from "react-hook-form"

const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm()

    const formSubmiter = () => {
        const formData = {
            username: watch("username"),
            displayname: watch("displayname"),
            email: watch("email"),
            password: watch("password"),
            rePassword: watch("rePassword"),
        }
        console.log(formData)
    }

    return (
        <section className="container mx-auto flex justify-center items-center">
            <form onSubmit={handleSubmit(formSubmiter)} className="flex flex-col gap-8 m-12 w-[30rem] bg-zinc-100 p-12 rounded-md ">

                <div className="flex justify-center items-center gap-6">
                    <h1 className="text-lg text-center text-blue-400">ثبت نام در سایت</h1>
                    <Link href={"/login"} className="bg-blue-500 text-white px-2 py-1 rounded-md">ورود به حساب</Link>
                </div>

                {/* Username */}
                <div className="flex flex-col gap-1">
                    <input
                        type="text"
                        placeholder="نام کاربری"
                        autoComplete="off"
                        className="p-2 rounded-md w-full ouline-none border-zinc-400 border-2 focus:border-orange-500"
                        {
                        ...register("username", {
                            required: true,
                            maxLength: 20,
                            minLength: 6
                        })
                        }
                    />
                    {errors.username && errors.username.type === "required" &&
                        <div className="text-rose-500 text-sm">نام کاربری وارد نشده است</div>
                    }
                    {errors.username && errors.username.type === "maxLength" &&
                        <div className="text-rose-500 text-sm">نام کاربری باید کمتر از 20 کاراکتر باشد</div>
                    }
                    {errors.username && errors.username.type === "minLength" &&
                        <div className="text-rose-500 text-sm">نام کاربری باید بیشتر از 6 کاراکتر باشد</div>
                    }
                </div>

                {/* Display Name */}
                <div className="flex flex-col gap-1">
                    <input
                        type="text"
                        placeholder="نام نمایشی"
                        autoComplete="off"
                        className="p-2 rounded-md w-full ouline-none border-zinc-400 border-2 focus:border-orange-500"
                        {
                        ...register("displayname", {
                            required: true,
                            maxLength: 20,
                            minLength: 6
                        })
                        }
                    />
                    {errors.displayname && errors.displayname.type === "required" &&
                        <div className="text-rose-500 text-sm">نام نمایشی وارد نشده است</div>
                    }
                    {errors.displayname && errors.displayname.type === "maxLength" &&
                        <div className="text-rose-500 text-sm">نام نمایشی باید کمتر از 20 کاراکتر باشد</div>
                    }
                    {errors.displayname && errors.displayname.type === "minLength" &&
                        <div className="text-rose-500 text-sm">نام نمایشی باید بیشتر از 6 کاراکتر باشد</div>
                    }
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                    <input
                        type="email"
                        placeholder="ایمیل"
                        autoComplete="off"
                        className="p-2 rounded-md w-full ouline-none border-zinc-400 border-2 focus:border-orange-500"
                        {
                        ...register("email", {
                            required: true,
                            minLength: 11,
                            pattern:
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })
                        }
                    />
                    {errors.email && errors.email.type === "required" &&
                        <div className="text-rose-500 text-sm">ایمیل را وارد کنید</div>
                    }
                    {errors.email && errors.email.type === "minLength" &&
                        <div className="text-rose-500 text-sm">تعداد کاراکترهای ایمیل کم است</div>
                    }
                    {errors.email && errors.email.type === "pattern" &&
                        <div className="text-rose-500 text-sm">فرمت ایمیل صحیح نیست</div>
                    }
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                    <input
                        type="password"
                        placeholder="رمز عبور"
                        autoComplete="off"
                        className="p-2 rounded-md w-full ouline-none border-zinc-400 border-2 focus:border-orange-500"
                        {
                        ...register("password", {
                            required: true,
                            maxLength: 20,
                            minLength: 6
                        })
                        }
                    />
                    {errors.password && errors.password.type === "required" &&
                        <div className="text-rose-500 text-sm">رمز عبور وارد نشده است</div>
                    }
                    {errors.password && errors.password.type === "maxLength" &&
                        <div className="text-rose-500 text-sm">رمز عبور باید کمتر از 20 کاراکتر باشد</div>
                    }
                    {errors.password && errors.password.type === "minLength" &&
                        <div className="text-rose-500 text-sm">رمز عبور باید بیشتر از 6 کاراکتر باشد</div>
                    }
                </div>

                {/* Re-Password */}
                <div className="flex flex-col gap-1">
                    <input
                        type="password"
                        placeholder="تکرار عبور"
                        autoComplete="off"
                        className="p-2 rounded-md w-full ouline-none border-zinc-400 border-2 focus:border-orange-500"
                        {
                        ...register("rePassword", {
                            required: true,
                            validate: (val) => val === watch("password")
                        })
                        }
                    />
                    {errors.rePassword && errors.rePassword.type === "required" &&
                        <div className="text-rose-500 text-sm">رمز عبور وارد نشده است</div>
                    }
                    {errors.rePassword && errors.rePassword.type === "validate" &&
                        <div className="text-rose-500 text-sm">تکرار رمز عبور مطابقت ندارد</div>
                    }
                </div>

                <button className="bg-blue-500 text-white w-full rounded-md p-2 transition-all duration-500 hover:bg-blue-500">ثبت نام در سایت</button>
            </form>
        </section>
    );
}

export default RegisterForm;