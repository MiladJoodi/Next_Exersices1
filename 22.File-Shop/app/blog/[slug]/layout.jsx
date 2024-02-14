import { BiSearchAlt } from "react-icons/bi";

const BlogLayout = ({ children }) => {
    return (
        <div className="flex justify-between items-start container mx-auto gap-2">
            <main className="w-[75%]">{children}</main>
            <aside className="w-80 max-w-80 p-2 rounded-md flex flex-col gap-12">
                <form className="border-zinc-700 border-2 px-2 rounded-md flex justify-between items-center">
                    <input type="text" className="bg-transparent p-2 outline-none text-sm" placeholder="جستجو در بلاگ" />
                    <BiSearchAlt className="w-8 h-8" />
                </form>

                <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
                    <h3>توضیحات محصول</h3>
                    <p className="leading-8 text-base sm:text-sm text-justify">طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی</p>
                </div>
            </aside>
        </div>
    );
}

export default BlogLayout;