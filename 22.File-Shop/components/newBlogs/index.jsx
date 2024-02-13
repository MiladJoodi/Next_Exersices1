import BlogBox from "./BlogBox";

const NewBlogs = () => {
    return (
        <section className="container flex justify-center items-center flex-wrap gap-2">
            <BlogBox/>
            <BlogBox/>
            <BlogBox/>
            <BlogBox/>
        </section>
    );
}

export default NewBlogs;