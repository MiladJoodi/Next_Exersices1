import CatBox from "./Box"

const GraphicCategories = () => {
    return (
        // Grid test *
        // <section className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <section className=" container mx-auto flex justify-center sm:justify-between items-center flex-wrap gap-2">
            <CatBox />
            <CatBox />
            <CatBox />
            <CatBox />
            <CatBox />
            <CatBox />
            <CatBox />
            <CatBox />
        </section>
    );
}

export default GraphicCategories;