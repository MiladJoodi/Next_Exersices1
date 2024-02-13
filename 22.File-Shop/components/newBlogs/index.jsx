import BlogBox from "./BlogBox";

const NewBlogs = () => {
    return (
        <section className="flex justify-between items-center flex-wrap gap-2">
            <BlogBox/>
            <BlogBox/>
            <BlogBox/>
            <BlogBox/>
        </section>
    );
}

export default NewBlogs;