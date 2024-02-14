
const BlogLayout = ({ children }) => {
    return (
        <div className="flex justify-between items-start container mx-auto">
            <main className="w-full">{children}</main>
            <aside className="w-72 max-w-72 p-4 rounded-md bg-zinc-100">
                1
            </aside>
        </div>
    );
}

export default BlogLayout;