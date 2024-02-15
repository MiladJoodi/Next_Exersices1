import BreadCrumb from "@/components/breadCrumb";
import RelatedPosts from "@/components/sliders/realatedPosts";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { TiTickOutline } from "react-icons/ti";



const SingleBlog = () => {
    return (
        <div className="flex flex-col gap-12">
            <BreadCrumb
                secondTitle={"فروشگاه"}
                secondLink={"/shop"}
                title={"فایل لایه باز ادوبی ایکس دی"}
            />
            {/* Top Section */}
            <section className="flex justify-center items-center rounded-xl p-4 shadow-[0px_0px_8px_rgba(0,0,0,0.25)]">
                <div className="flex justify-start items-center gap-2 w-full">
                    <div>
                        <Image
                            className="rounded-xl"
                            width={400}
                            height={200}
                            alt={"this is alt"}
                            src={"/images/ganj1.jpg"}
                            priority={true}
                        />
                    </div>
                    <div className="h-[12rem] flex flex-col gap-8">
                        <h1 className="text-lg">کتاب گنج - جلال آل احمد</h1>
                        <ul className="flex flex-col gap-3">
                            <li className="flex justify-between items-center gap-2 w-48">
                                <div className="flex justify-start items-center gap-1"><TiTickOutline className="text-black" /><span>فرمت</span></div>
                                <div className="text-black">PSD</div>
                            </li>
                            <li className="flex justify-between items-center gap-2 w-48">
                                <div className="flex justify-start items-center gap-1"><TiTickOutline className="text-black" /><span>ابعاد</span></div>
                                <div className="text-black">1080*720</div>
                            </li>
                            <li className="flex justify-between items-center gap-2 w-48">
                                <div className="flex justify-start items-center gap-1"><TiTickOutline className="text-black" /><span>حجم فایل</span></div>
                                <div className="text-black">10 مگ</div>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>

            {/* 3 Items */}
            <section className="flex justify-between items-center gap-2">
                <div className="w-[18rem] rounded-md flex justify-center items-center gap-2 bg-slate-100 p-4 transition-all duration-300 hover:bg-slate-200">
                    <div className="flex justify-start items-center gap-2">
                        <Image
                            className="rounded-xl"
                            width={100}
                            height={100}
                            alt={"this is alt"}
                            src={"/images/icons/trophy.png"}
                            priority={true}
                        />
                        <div className="flex flex-col gap-3">
                            <div className="font-bold text-base sm:text-sm">محصولات اورجینال</div>
                            <div className="text-base sm:text-xs">برترین های دنیای وب</div>
                        </div>
                    </div>
                </div>

                <div className="w-[18rem] rounded-md flex justify-center items-center gap-2 bg-slate-100 p-4 transition-all duration-300 hover:bg-slate-200">
                    <div className="flex justify-start items-center gap-2">
                        <Image
                            className="rounded-xl"
                            width={100}
                            height={100}
                            alt={"this is alt"}
                            src={"/images/icons/feedback.png"}
                            priority={true}
                        />
                        <div className="flex flex-col gap-3">
                            <div className="font-bold text-base sm:text-sm">بالاترین کیفیت</div>
                            <div className="text-base sm:text-xs">تاثیرگذارترین در موفقیت</div>
                        </div>
                    </div>
                </div>

                <div className="w-[18rem] rounded-md flex justify-center items-center gap-2 bg-slate-100 p-4 transition-all duration-300 hover:bg-slate-200">
                    <div className="flex justify-start items-center gap-2">
                        <Image
                            className="rounded-xl"
                            width={100}
                            height={100}
                            alt={"this is alt"}
                            src={"/images/icons/target1.png"}
                            priority={true}
                        />
                        <div className="flex flex-col gap-3">
                            <div className="font-bold text-base sm:text-sm">پشتیبانی فوق سریع</div>
                            <div className="text-base sm:text-xs">کمتر از 30 دقیقه</div>
                        </div>
                    </div>
                </div>

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
                <RelatedPosts title={"محصولات مرتبط"} />
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