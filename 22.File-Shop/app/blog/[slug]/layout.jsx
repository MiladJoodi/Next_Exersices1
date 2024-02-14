import { BiSearchAlt } from "react-icons/bi";

const BlogLayout = ({ children }) => {
    return (
        <div className="flex justify-between items-start container mx-auto gap-2">
            <main className="w-[75%]">{children}</main>
            <aside className="w-80 max-w-80 p-2 rounded-md bg-zinc-100">
                <form className="border-zinc-700 border-2 px-2 rounded-md flex justify-between items-center">
                    <input type="text" className="bg-transparent p-2 outline-none text-sm" placeholder="جستجو در بلاگ" />
                    <BiSearchAlt className="w-8 h-8" />
                </form>
            </aside>
        </div>
    );
}

export default BlogLayout;