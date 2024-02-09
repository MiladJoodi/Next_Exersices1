import Image from 'next/image';

const Header = () => {
    return (
        <header className="container mx-auto">
            <div className="flex justify-between items-center">
                <div className="logo p-4 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)">
                    <Image
                    className='rounded-lg '
                    src={"/logo.png"}
                    layout='fix'
                    objectFit='cover'
                    width={100}
                    height={100}
                    alt='logo'
                    />
                    <div>فروشگاه فایل مرن فا</div>
                </div>
            </div>
        </header>
    );
}

export default Header;