import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import { IoSendOutline } from "react-icons/io5";

const BlogLayout = ({ children }) => {
    return (
        <div className="flex justify-between items-start container mx-auto gap-4">
            <main className="w-[75%]">{children}</main>
            <aside className="w-80 max-w-80 rounded-md flex flex-col gap-8">
                {/* Buttons */}
                <div className="flex flex-col gap-6">
                    <button className="flex justify-center items-center rounded-md w-full p-2 bg-orange-500 transition-all duration-300 hover:bg-orange-600 text-white">افزودن به سبد خرید - 30,000 تومان</button>
                    <button className="flex justify-center items-center rounded-md w-full p-2 bg-blue-500 transition-all duration-300 hover:bg-blue-600 text-white">افزودن به علاقه مندی ها</button>
                </div>

                {/* Cart Count */}
                <div className="rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
                    <ul className="flex flex-col gap-3">
                        <li className="flex justify-between items-center">
                            <span>تعداد خرید</span>
                            <span>12</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>تعداد بازدید</span>
                            <span>82</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>تعداد دیدگاه</span>
                            <span>3</span>
                        </li>
                    </ul>
                </div>

                {/* Desc */}
                <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
                    <h3 className="text-blue-400">معرفی کوتاه</h3>
                    <p className="text-sm text-justify leading-8">طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی</p>
                </div>

                {/* Tags */}
                <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
                    <h3 className="text-blue-400">برچسب ها</h3>
                    <div className="flex justify-start items-center gap-2 flex-wrap">
                        <Link href={"/"} className="p-2 flex justify-center item-center rounded-md text-base sm:text-sm bg-zinc-100 tarnsition-all duration-300 hover:text-white hover:bg-orange-500" >
                            مقاله
                        </Link>
                        <Link href={"/"} className="p-2 flex justify-center item-center rounded-md text-base sm:text-sm bg-zinc-100 tarnsition-all duration-300 hover:text-white hover:bg-orange-500" >
                            مقاله
                        </Link>
                        <Link href={"/"} className="p-2 flex justify-center item-center rounded-md text-base sm:text-sm bg-zinc-100 tarnsition-all duration-300 hover:text-white hover:bg-orange-500" >
                            مقاله
                        </Link>
                        <Link href={"/"} className="p-2 flex justify-center item-center rounded-md text-base sm:text-sm bg-zinc-100 tarnsition-all duration-300 hover:text-white hover:bg-orange-500" >
                            مقاله
                        </Link>
                    </div>
                </div>

                {/* Subcribe */}
                <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
                    <h3 className="text-blue-400">شرکت در خبرنامه</h3>
                    <form className="border-zinc-700 border-2 px-2 rounded-md flex justify-between items-center">
                        <input type="text" className="bg-transparent p-2 outline-none text-sm" placeholder="ایمیل خود را وارد کنید..." />
                        <IoSendOutline className="rotate-180 w-6 h-6" />
                    </form>
                </div>
            </aside>
        </div>
    );
}

export default BlogLayout;