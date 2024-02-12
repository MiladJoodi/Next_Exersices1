import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
   Navigation,
   Pagination,
   Scrollbar,
   Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
SwiperCore.use([Autoplay]);

import Image from "next/image";

const MainSlider = () => {
   return (
      <main>
         <section className=" container mx-auto p-4">
            <Swiper
               modules={[Navigation, Pagination, Scrollbar]}
               spaceBetween={20}
               slidesPerView={1}
               navigation
               pagination
               autoplay={{ delay: 3000 }}
               scrollbar={{ draggable: true }}
            >
               <SwiperSlide>
                  <div className="flex justify-center items-center">
                     <Image
                        src={"/images/slider/slide1.jpg"}
                        objectFit="cover"
                        className="rounded-lg"
                        width={1280}
                        height={310}
                        alt="alt"
                     />
                  </div>
               </SwiperSlide>

               <SwiperSlide>
                  <div className="flex justify-center items-center">
                     <Image
                        src={"/images/slider/slide2.jpg"}
                        objectFit="cover"
                        className="rounded-lg"
                        width={1280}
                        height={310}
                        alt="alt"
                     />
                  </div>
               </SwiperSlide>

               <SwiperSlide>
                  <div className="flex justify-center items-center">
                     <Image
                        src={"/images/slider/slide3.jpg"}
                        objectFit="cover"
                        className="rounded-lg"
                        width={1320}
                        height={310}
                        alt="alt"
                     />
                  </div>
               </SwiperSlide>
            </Swiper>
         </section>
      </main>
   );
};

export default MainSlider;