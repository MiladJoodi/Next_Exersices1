import Image from "next/image";
import Link from "next/link";

const BlogBox = () => {
    return (
        <article className="sliderItem p-2 transition-all duration-300 hover:pt-0">

            <div className="relative bg-white shadow-[0px_1px_8px_rgba(0,0,0,.2)] h-[28rem] w-72 rounded-lg">

                <Link href={"/shop"} target={"_blank"}>
                    <div className="flex justify-center items-center pt-2">
                        <Image
                            width={270}
                            height={150}
                            src={"/images/ganj1.jpg"}
                            alt="alt"
                            className="rounded-md"
                        />
                    </div>
                </Link>

                <div>
                    <div className="flex flex-col gap-6 p-2">
                        <Link href={"/shop"}>
                            <h3 className="line-clamp-3">
                                عنوان محصول هستن و ان محصول هستن وان محصول هستن وان محصول
                                هستن وانهستن وان محصول هستن وان محصول
                                هستن وانهستن وان محصول هستن وان محصول
                                هستن وانهستن وان محصول هستن وان محصول
                                هستن وانهستن وان محصول هستن وان محصول
                                هستن وانهستن وان محصول هستن وان محصول
                                هستن وان محصول هست این
                            </h3>
                        </Link>

                        <p className="text-base sm:text-sm text-justify line-clamp-3">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستونبلکه روزنامه و مجله در ستونبلکه روزنامه و مجله در ستونبلکه بلکه روزنامه و مجله در ستونبلکه روزنامه و مجله در ستونروزنامه و مجله در ستونبلکه روزنامه و مجله بلکه روزنامه و مجله در ستون که لازم است
                        </p>
                        <div className="h-1 w-[90%] bg-zinc-300 border-2 rounded-full mx-auto"/>
                        <div className="flex justify-between items-center">
                            <div className="text-base sm:text-sm bg-zinc-300 rounded-md py-1 px-3">1402/04/15</div>
                            <div className="text-base sm:text-sm bg-zinc-300 rounded-md py-1 px-3">5 دیدگاه</div>
                        </div>
                    </div>

                </div>
            </div>

        </article>
    );
};

export default BlogBox;
