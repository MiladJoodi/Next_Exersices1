import BreadCrumb from "@/components/breadCrumb";
import RelatedPosts from "@/components/sliders/realatedPosts";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";


const SingleBlog = () => {
    return (
        <div className="flex flex-col gap-12">
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
                    <div className="bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-2">
                        <FaRegEye className="w-6 h-6 text-black" />
                        <span>تعداد بازدید</span>
                        <span>5</span>
                    </div>

                    <div className="bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-2">
                        <FaRegComment className="w-6 h-6 text-black" />
                        <span>تعداد دیدگاه:</span>
                        <span>5</span>
                    </div>

                    <div className="bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-2">
                        <SlCalender className="w-6 h-6 text-black" />
                        <span>آخرین به روزرسانی:</span>
                        <span>1402/11/25</span>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-6">
                <h2 className="text-xl">توضیحات کامل</h2>
                <p className="leading-9">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.</p>
            </section>
            <section>
                <RelatedPosts title={"مقالات مرتبط"} />
            </section>
            <section className="flex flex-col gap-6">
                <h2 className="text-xl">دیدگاه ها</h2>
                <form className="bg-zinc-700 rounded-md h-48">
                    1
                </form>
            </section>
        </div>
    );
}

export default SingleBlog;