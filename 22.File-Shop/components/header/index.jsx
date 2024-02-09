import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="container mx-auto py-2">
            <div className="flex justify-between items-center">
                <Link href={"/"}>
                <a className="logo p-4 rounded-lg text-center shadow-[0px_1px_10px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)] ">
                    <Image
                    className='rounded-lg '
                    src={"/logo.png"}
                    width={100}
                    height={100}
                    alt='logo'
                    />
                    <div>فروشگاه فایل مرن فا</div>
                </a>
                </Link>
                <div>h</div>
            </div>
        </header>
    );
}

export default Header;