"use client"

import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowUp } from "react-icons/hi";
import { TfiAngleLeft } from "react-icons/tfi";


const Footer = () => {
    const goTopCtrl = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <footer className="container mx-auto flex flex-col gap-8 py-6">
            <div className="flex justify-between items-center p-8 bg-zinc-100 rounded-lg">
                <div className="w-72 max-w-72 flex flex-col gap-4">
                    <div className="flex justify-center">
                        <Image
                            className='rounded-lg '
                            src={"/logo.png"}
                            width={100}
                            height={100}
                            alt='logo'
                        />
                    </div>
                    <p className="text-center text-base sm:text-sm">کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد</p>
                </div>
                <div className="flex justify-around items-start gap-16">
                    <div className="flex flex-col gap-4">
                        <div className="text-xl">دسترسی سریع</div>
                        <ul className="flex flex-col gap-4 text-base sm:text-sm">
                            <li>
                                <Link href={"/"} className="flex gap-1 items-center transition-all duration-300 hover:gap-3 hover:text-orange-500">
                                    <TfiAngleLeft />
                                    <span>درباره ما</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="flex gap-1 items-center transition-all duration-300 hover:gap-3 hover:text-orange-500">
                                    <TfiAngleLeft />
                                    <span>تماس با ما</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="flex gap-1 items-center transition-all duration-300 hover:gap-3 hover:text-orange-500">
                                    <TfiAngleLeft />
                                    <span>حریم خصوصی</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="flex gap-1 items-center transition-all duration-300 hover:gap-3 hover:text-orange-500">
                                    <TfiAngleLeft />
                                    <span>وبلاگ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-xl">راهنمای خرید</div>
                        <ul className="flex flex-col gap-4 text-base sm:text-sm">
                            <li>
                                <Link href={"/"} className="w-32 flex gap-1 items-center transition-all duration-300 hover:gap-3 hover:text-orange-500">
                                    <TfiAngleLeft />
                                    <span>سوالات متداول</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="w-32 flex gap-1 items-center transition-all duration-300 hover:gap-3 hover:text-orange-500">
                                    <TfiAngleLeft />
                                    <span>چگونه خرید کنم؟</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="w-32 flex gap-1 items-center transition-all duration-300 hover:gap-3 hover:text-orange-500">
                                    <TfiAngleLeft />
                                    <span>قوانین سایت</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="flex justify-center gap-4 items-center">
                        <Image
                            className='rounded-lg '
                            src={"/images/Licenses/1.png"}
                            width={120}
                            height={120}
                            alt='logo'
                        />
                        <Image
                            className='rounded-lg '
                            src={"/images/Licenses/2.png"}
                            width={120}
                            height={120}
                            alt='logo'
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <p>تمامی حقوق مادی و معنوی این وب سایت محفوظ است.</p>
                <HiOutlineArrowUp onClick={() => goTopCtrl()} className="cursor-pointer border-2 border-indigo-500 w-10 h-10 p-2 rounded-md bg-zinc-200 transition-all duration-500 hover:bg-indigo-400 hover:text-white" />
            </div>
        </footer>
    );
}

export default Footer;