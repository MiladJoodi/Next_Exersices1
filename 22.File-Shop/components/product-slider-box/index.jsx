import Image from "next/image";
import { HiShoppingBag } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";



const SlideBox = () => {
   return (
      <article className="sliderItem p-2">
         <Link href={"/shop"} target={"_blank"}>
            <div className="relative bg-white h-[28rem] w-72 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] hover:shadow-[0px_1px_8px_rgba(0,0,0,0.5)] transition-all duration-500">
               <div className="flex justify-center items-center pt-3">
                  <Image
                     width={260}
                     height={150}
                     src={"/images/ganj1.jpg"}
                     alt="alt"
                     className="rounded-md"
                  />
               </div>
               <div>
                  <div className="flex flex-col gap-2 p-2">
                     <h3 className="">
                        عنوان محصول هستنوان محصول هستنوان محصول هستنوان محصول
                        هستنوان محصول هست این
                     </h3>
                     <div className="categories flex justify-start items-center flex-wrap gap-1">
                        <Link href={"/"} className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">رمان</Link>
                        <Link href={"/"} className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">داستانی</Link>
                        <Link href={"/"} className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">آل احمد</Link>
                     </div>
                  </div>

                  <div className=" absolute bottom-2  w-full flex justify-between items-center">
                     <div className="bg-zinc-200 flex justify-center items-center w-9 h-9 rounded-lg transition-all duration-500 hover:bg-zinc-300 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 font-bold">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>

                     </div>
                     <HiShoppingBag className=" mr-1 w-10 h-10 p-2 rounded bg-zinc-200 text-indigo-600  cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-white" />
                     <div className=" bg-zinc-500 text-white p-2 rounded-tr-md rounded-br-md">
                        5000 تومان
                     </div>
                  </div>
               </div>
            </div>
         </Link>
      </article>
   );
};

export default SlideBox;
