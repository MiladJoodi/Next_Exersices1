import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import { IoSendOutline } from "react-icons/io5";

const BlogLayout = ({ children }) => {
    return (
        <div className="flex justify-between items-start container mx-auto gap-2">
            <main className="w-[75%]">{children}</main>
            <aside className="w-80 max-w-80 p-2 rounded-md flex flex-col gap-12">
                {/*Search  */}
                <form className="border-zinc-700 border-2 px-2 rounded-md flex justify-between items-center">
                    <input type="text" className="bg-transparent p-2 outline-none text-sm" placeholder="جستجو در بلاگ" />
                    <BiSearchAlt className="w-8 h-8" />
                </form>

                {/* Desc */}
                <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
                    <h3 className="text-blue-400">توضیحات خلاصه</h3>
                    <p className="leading-8 text-base sm:text-sm text-justify">طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی</p>
                </div>
                
                {/* popular */}
                <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
                    <h3 className="text-blue-400">پرفروشترین محصولات</h3>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link className="p-2 flex justify-center item-center text-base sm:text-sm border-r-2 border-zinc-600" href={"/"}>مقاله تستی اول این نوشته بای تست است</Link>
                        </li>
                        <li>
                            <Link className="p-2 flex justify-center item-center text-base sm:text-sm border-r-2 border-zinc-600" href={"/"}>مقاله تستی اول این نوشته بای تست است</Link>
                        </li>
                        <li>
                            <Link className="p-2 flex justify-center item-center text-base sm:text-sm border-r-2 border-zinc-600" href={"/"}>مقاله تستی اول این نوشته بای تست است</Link>
                        </li>
                    </ul>
                </div>
                
                {/* Most View */}
                <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
                    <h3 className="text-blue-400">پربازدید ترین مقالات</h3>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link className="p-2 flex justify-center item-center text-base sm:text-sm border-r-2 border-zinc-600" href={"/"}>مقاله تستی اول این نوشته بای تست است</Link>
                        </li>
                        <li>
                            <Link className="p-2 flex justify-center item-center text-base sm:text-sm border-r-2 border-zinc-600" href={"/"}>مقاله تستی اول این نوشته بای تست است</Link>
                        </li>
                        <li>
                            <Link className="p-2 flex justify-center item-center text-base sm:text-sm border-r-2 border-zinc-600" href={"/"}>مقاله تستی اول این نوشته بای تست است</Link>
                        </li>
                    </ul>
                </div>

                {/* Subcribe */}
                <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
                    <h3 className="text-blue-400">شرکت در خبرنامه</h3>
                    <form className="border-zinc-700 border-2 px-2 rounded-md flex justify-between items-center">
                    <input type="text" className="bg-transparent p-2 outline-none text-sm" placeholder="جستجو در بلاگ" />
                    <IoSendOutline className="rotate-180 w-6 h-6" />
                </form>
                </div>
            </aside>
        </div>
    );
}

export default BlogLayout;