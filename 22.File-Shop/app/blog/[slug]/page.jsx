import BreadCrumb from "@/components/breadCrumb";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";


const SingleBlog = () => {
    return (
        <div className="flex flex-col gap-8">
            <BreadCrumb secondTitle={"وبلاگ"} secondLink={"/blog"} title={"این مقاله به عنوان تست است"} />
            <section className="flex justify-center items-center">
                <Image
                    className="rounded-xl"
                    width={800}
                    height={400}
                    alt={"this is alt"}
                    src={"/images/ganj1.jpg"}
                    priority={true}
                />
            </section>
            <section className="flex flex-col gap-6">
                <h1 className="text-blue-400 text-lg">این مقاله به عنوان تست می باشد</h1>
                <div className="flex justify-start items-center gap-4 text-base sm:text-sm">
                    <div className="bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-3">
                        <FaRegEye className="w-6 h-6" />
                        <span>تعداد بازدید</span>
                        <span>5</span>
                    </div>
                    
                    <div className="bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-3">
                        <FaRegComment className="w-6 h-6" />
                        <span>تعداد دیدگاه:</span>
                        <span>5</span>
                    </div>

                    <div className="bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-3">
                        <SlCalender className="w-6 h-6" />
                        <span>آخرین به روزرسانی:</span>
                        <span>1402/11/25</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SingleBlog;