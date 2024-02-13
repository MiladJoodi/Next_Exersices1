import BlogBox from "./BlogBox";

const NewBlogs = () => {
    return (
        <section className="flex flex-col gap-[1.5rem] container mx-auto">
            <header className=" flex justify-between items-center">
                  <h2 className=" text-2xl border-r-zinc-700 border-r-2 pr-1">
                     آخرین مقالات
                  </h2>
               </header>
            <div className="container flex justify-center items-center flex-wrap gap-2">
                <BlogBox />
                <BlogBox />
                <BlogBox />
                <BlogBox />
            </div>

        </section>
    );
}

export default NewBlogs;