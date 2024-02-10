import Image from 'next/image';
import Link from 'next/link';
import { BsTelegram, BsTelephoneFill } from "react-icons/bs"
import { AiFillTwitterCircle, AiOutlineYoutube } from "react-icons/ai"
import { IoMailOpenOutline, IoPerson } from "react-icons/io5"
import { BiSearchAlt } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";

import { useState } from 'react';

const Header = () => {

    const [logoHover, setLogoHover] = useState(0)
    console.log(logoHover)

    return (
        <header className="container mx-auto py-2">
            <div className="flex justify-between items-start">
                {/* Header logo */}
                <div className='flex flex-col relative h-52'>
                    {/*⚠️ Brand Logo */}
                    <Link href={"/"}
                        className='z-30'>
                        <div
                            onMouseEnter={() => setLogoHover(1)}
                            onMouseLeave={() => setLogoHover(0)}
                            className="bg-white logo p-4 rounded-lg text-center shadow-[0px_1px_10px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)] ">
                            <Image
                                className='rounded-lg '
                                src={"/logo.png"}
                                width={100}
                                height={100}
                                alt='logo'
                            />
                            <div>فروشگاه فایل مرن فا</div>
                        </div>
                    </Link>
                    {/*⚠️ Brand Logo */}

                    {/*⚠️ Social Media Links  */}
                    <div
                        onMouseEnter={() => setLogoHover(1)}
                        onMouseLeave={() => setLogoHover(0)}
                        className={
                            logoHover == 0
                                ? 'absolute bottom-20 right-0 left-0 flex justify-around items-center p-2 text-indigo-600 bg-zinc-100 rounded-br-md rounded-bl-md transition-all duration-500'
                                : 'absolute bottom-0 right-0 left-0 flex justify-around items-center p-2 text-indigo-600 bg-zinc-100 rounded-br-md rounded-bl-md transition-all duration-500'
                        }

                    >
                        <Link href="#">
                            <BsTelegram className='text-[1.5rem] transition-all duration-300 hover:text-orange-500' />
                        </Link>
                        <Link href="#">
                            <AiOutlineYoutube className='text-[1.7rem] transition-all duration-300 hover:text-orange-500' />
                        </Link>
                        <Link href="#">
                            <AiFillTwitterCircle className='text-[1.7rem] transition-all duration-300 hover:text-orange-500' />
                        </Link>
                    </div>
                    {/*⚠️ Social Mediab Links  */}

                </div>
                {/* Header logo */}

                {/* Header left side */}
                <div className='w-5/6 flex flex-col gap-1 py-4 h-40 justify-between'>
                    {/* Header left side - top */}
                    <div className='flex justify-between items-center w-full'>
                        {/* Header Links👋 */}
                        <nav>
                            <ul className='flex justify-start items-center gap-2'>
                                <li>
                                    <Link href={"/"}>
                                        <span className='w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white'>خانه</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <span className='w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white'>اپلیکیشن ها</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <span className='w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white'>کتاب ها</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <span className='w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white'>فایل های گرافیکی</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <span className='w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white'>وبلاگ</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {/* Header Links👋 */}
                        <div className='flex flex-col items-end gap-2'>
                            <div className='flex gap-2 items-center'>
                                <div>09105886740</div>
                                <div className='rounded bg-slate-200 rotate-12 p-2'>
                                    <BsTelephoneFill className='w-4 h-4 -rotate-12' />
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div>winbeta.com@gmail.com</div>
                                <div className='rounded bg-slate-200 rotate-12 p-2'>
                                    <IoMailOpenOutline className='w-4 h-4 -rotate-12' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Header left side - top */}

                    {/* ✋Header left side - search bar */}
                    <div className='flex justify-between items-center'>
                        {/* Search */}
                        <div className='relative flex justify-start items-center w-full ml-8'>
                            <input
                                className='outline-none w-full h-[3.2rem] p-3 rounded-lg transition-all duration-500 shadow-[0px_0px_5px_rgba(0,0,0,0.15)] focus:shadow-[0px_3px_7px_rgba(0,0,0,0.25)]'
                                name='productsSearch'
                                id='productsSearch'
                                type="text"
                                placeholder='جستجو بین محصولات...'
                            />
                            <label htmlFor="productsSearch" className='w-10 absolute left-0 cursor-pointer'>
                                <BiSearchAlt
                                    className='w-8 h-8'
                                />
                            </label>
                        </div>
                        {/* Search */}

                        <div className='flex gap-4 items-center w-[20rem] justify-end'>
                            {/* Person and cart */}
                            <div className=''>
                                <IoPerson className='bg-zinc-400 text-white rounded p-2 w-12 h-12' />
                            </div>
                            <div className='flex gap-2 items-center justify-center bg-orange-400 p-2 rounded-md'>
                                <div className='text-orange-500 bg-white rounded-full w-8 h-8 flex justify-center items-center'>0</div>
                                <div className='text-white'>سبد خرید</div>
                                <div className='text-orange-500 bg-white rounded-lg w-8 h-8 flex justify-center items-center'><HiShoppingCart className='w-6 h-6' /></div>
                            </div>
                            {/* Person and cart */}
                        </div>

                    </div>
                    {/* ✋Header left side - search bar */}

                </div>
                {/* Header left side */}
            </div>
        </header>
    );
}

export default Header;