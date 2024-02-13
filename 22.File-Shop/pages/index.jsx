import MainSlider from "@/components/mainSlider";
import ProductsSlider from "@/components/product-slider";
// import MainSlider from "../components/mainSlider/index";


export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-12">
        <MainSlider />
        <ProductsSlider />
      </main>
    </div>
  );
}
