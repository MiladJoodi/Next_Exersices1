import Image from 'next/image';
import Link from 'next/link';
import { BsTelegram, BsTelephoneFill } from "react-icons/bs"
import { AiFillTwitterCircle, AiOutlineYoutube } from "react-icons/ai"
import { IoMailOpenOutline } from "react-icons/io5"

import { useState } from 'react';

const Header = () => {

    const [logoHover, setLogoHover] = useState(0)
    console.log(logoHover)

    return (
        <header className="container mx-auto py-2">
            <div className="flex justify-between items-center">
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
                <div className='w-5/6 flex flex-col gap-1'>
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
                        <div className=''>
                            <div className='flex gap-2 items-center'>
                                <div>09105886740</div>
                                <BsTelephoneFill className='w-8 h-8 rounded bg-zinc-200 rotate-12 p-2' />
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div>winbeta.com@gmail.com</div>
                                <IoMailOpenOutline className='w-8 h-8 rounded bg-zinc-200 rotate-12 p-2' />
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                {/* Header left side */}

            </div>
        </header>
    );
}

export default Header;