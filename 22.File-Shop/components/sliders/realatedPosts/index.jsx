"use client"

import BlogBox from "../../newBlogs/BlogBox";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";

const RelatedPosts = () => {

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
      <div className="">
         <div className="container mx-auto py-8">
            <section className="flex flex-col gap-6 px-2">
               <header className=" flex justify-between items-center">
                <h2 className="text-xl">مطالب مرتبط</h2>
                  <div className="flex gap-1">
                     <div className=" flex items-center gap-1 text-zinc-500">
                        <FaChevronRight onClick={() => { carouselSwitcher(1) }} className=" cursor-pointer bg-zinc-200 transition-all duration-300 hover:text-white hover:bg-orange-400 w-10 h-10 p-3 rounded" />
                        <FaChevronLeft onClick={() => { carouselSwitcher(-1) }} className=" cursor-pointer bg-zinc-200 transition-all duration-300 hover:text-white hover:bg-orange-400 w-10 h-10 p-3 rounded" />
                     </div>
                  </div>
               </header>
               <div ref={carouselRef} className="sliderContainer mx-auto w-full max-w-7xl overflow-x-scroll px-4  ">
                  <div className=" flex justify-between items-center gap-4 ">
                     <BlogBox />
                     <BlogBox />
                     <BlogBox />
                     <BlogBox />
                     <BlogBox />
                     <BlogBox />
                     <BlogBox />
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default RelatedPosts;
