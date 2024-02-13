"use client"

import SlideBox from "../../components/product-slider-box";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";

const ProductsSlider = () => {

    const carouselRef=useRef();
    const carouselSwitcher=(data)=>{
        if (carouselRef.current) {
            const width=carouselRef.current.offsetWidth;
            carouselRef.current.scrollTo(
                carouselRef.current.scrollLeft+width*data,0
            )
        }
    }

   return (
      <main className=" container mx-auto  mb-40">
         <section className="flex flex-col gap-4 px-2">
            <header className=" flex justify-between items-center">
               <h2 className=" text-orange-500 text-2xl border-r-orange-400 border-r-2 pr-1">
                  محصولات
               </h2>
               <div className=" flex items-center gap-1 text-zinc-800">
                  <FaChevronRight onClick={()=>{carouselSwitcher(1)}} className=" cursor-pointer bg-zinc-200 transition-all duration-300 hover:bg-orange-400 w-10 h-10 p-2 rounded" />
                  <FaChevronLeft onClick={()=>{carouselSwitcher(-1)}} className=" cursor-pointer bg-zinc-200 transition-all duration-300 hover:bg-orange-400 w-10 h-10 p-2 rounded" />
               </div>
            </header>
            <div ref={carouselRef} className="sliderContainer w-full max-w-7xl overflow-x-scroll px-4  ">
               <div className=" flex justify-between items-center gap-4 ">
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
                  <SlideBox />
               </div>
            </div>
         </section>
      </main>
   );
};

export default ProductsSlider;
