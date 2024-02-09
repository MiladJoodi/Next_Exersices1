import Image from 'next/image';
import Link from 'next/link';
import { BsTelegram } from "react-icons/bs"
import { AiFillTwitterCircle, AiOutlineYoutube } from "react-icons/ai"

const Header = () => {
    return (
        <header className="container mx-auto py-2">
            <div className="flex justify-between items-center">
                <div className='flex flex-col'>
                    {/*⚠️ Brand Logo */}
                    <Link href={"/"}>
                        <div className="logo w-full h-full p-4 rounded-lg text-center shadow-[0px_1px_10px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)] ">
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
                    <div className='flex justify-around  items-center text-[1.5rem] p-2 bg-red-300 rounded-br-md rounded-bl-md'>
                        <Link href="#">
                            <BsTelegram />
                        </Link>
                        <Link href="#">
                            <AiFillTwitterCircle />
                        </Link>
                        <Link href="#">
                            <AiOutlineYoutube />
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