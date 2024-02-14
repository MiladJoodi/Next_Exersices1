import MainSlider from "@/components/sliders/mainSlider";
import MiddleBanner from "@/components/middle-banner";
import ProductsSlider from "@/components/sliders/product-slider";
import GraphicCategories from "@/components/graphic-cats";
import GraphicSlider from "@/components/sliders/graphic-slider";
import NewBlogs from "@/components/newBlogs";
// import MainSlider from "../components/mainSlider/index";

const Home = () => {
   return (
      <div>
         <main className="flex flex-col gap-12">
            <MainSlider />
            <ProductsSlider title="اپلیکیشن ها" linkCom="apps" />
            <MiddleBanner />
            <ProductsSlider title="کتاب ها" linkCom="books" />
            <GraphicCategories />
            <GraphicSlider />
            <NewBlogs />
         </main>
      </div>
   );
}

export default Home;

