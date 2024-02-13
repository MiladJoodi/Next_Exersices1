import Image from "next/image";
import { HiShoppingBag } from "react-icons/hi";
import Link from "next/link";

const SlideBox = () => {
   return (
      <article className="sliderItem p-2  ">
         <Link href={"/shop"} target={"_blank"}>
               <div className="relative h-[20rem] w-72 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] hover:shadow-[0px_1px_8px_rgba(0,0,0,0.5)] transition-all duration-500">
                  <div>
                     <Image
                        width={288}
                        height={160}
                        src={"/images/ganj.jpg"}
                        alt="alt"
                     />
                  </div>
                  <div>
                     <h3 className=" m-2">
                        عنوان محصول هستنوان محصول هستنوان محصول هستنوان محصول
                        هستنوان محصول هست این
                     </h3>
                     <div className=" absolute bottom-2  w-full flex justify-between items-center">
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
