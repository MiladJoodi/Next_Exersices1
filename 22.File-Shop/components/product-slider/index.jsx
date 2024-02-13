"use client"

import SlideBox from "../../components/product-slider-box";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";
import Link from "next/link";

const ProductsSlider = ({title, linkCom}) => {

   const carouselRef = useRef();
   const carouselSwitcher = (data) => {
      if (carouselRef.current) {
         const width = carouselRef.current.offsetWidth;
         carouselRef.current.scrollTo(
            carouselRef.current.scrollLeft + width * data, 0
         )
      }
   }

   return (
      <div className=" bg-indigo-500">
         <div className="container mx-auto py-8">
            <section className="flex flex-col gap-4 px-2">
               <header className=" flex justify-between items-center">
                  <h2 className=" text-2xl border-r-white border-r-2 pr-1 text-white">
                     {title}
                  </h2>
                  <div className="flex gap-1">
                     <div className=" flex items-center gap-1 text-zinc-500">
                        <FaChevronRight onClick={() => { carouselSwitcher(1) }} className=" cursor-pointer bg-zinc-200 transition-all duration-300 hover:text-white hover:bg-orange-400 w-10 h-10 p-3 rounded" />
                        <FaChevronLeft onClick={() => { carouselSwitcher(-1) }} className=" cursor-pointer bg-zinc-200 transition-all duration-300 hover:text-white hover:bg-orange-400 w-10 h-10 p-3 rounded" />
                     </div>
                     <Link href={`/${linkCom}`}>
                        <div className="bg-orange-500 text-white border-white border-2 px-4 py-1.5 rounded-md transition-all duration-500 hover:bg-orange-600">مشاهده همه</div>
                     </Link>
                  </div>
               </header>
               <div ref={carouselRef} className="sliderContainer mx-auto w-full max-w-7xl overflow-x-scroll px-4  ">
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
         </div>
      </div>
   );
};

export default ProductsSlider;
