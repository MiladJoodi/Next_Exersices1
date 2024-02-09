import Image from 'next/image';
import Link from 'next/link';
import { BsTelegram } from "react-icons/bs"
import { AiFillTwitterCircle, AiOutlineYoutube } from "react-icons/ai"

import { useState } from 'react';

const Header = () => {

    const [logoHover, setLogoHover] = useState(0)
    console.log(logoHover)

    return (
        <header className="container mx-auto py-2">
            <div className="flex justify-between items-center">
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

                    {/*⚠️ Social Mediab Links  */}
                    <div
                    onMouseEnter={() => setLogoHover(1)}
                    onMouseLeave={() => setLogoHover(0)}
                    className={
                        logoHover==0
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
                <div>h</div>
            </div>
        </header>
    );
}

export default Header;