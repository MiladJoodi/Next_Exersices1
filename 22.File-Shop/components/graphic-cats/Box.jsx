import Image from "next/image";
import Link from "next/link";

import { IoResizeOutline } from "react-icons/io5";
import { MdFileCopy } from "react-icons/md"
import { TiBrush } from "react-icons/ti"

const CatBox = () => {
    return (
        <Link href={"/"}>
            <div className="flex justify-between items-center bg-slate-200 transition-all duration-500 hover:bg-yellow-200 rounded-lg p-3 w-72">
                <div className="flex flex-col gap-2">
                    <h3 className="text-black">فایل لایه باز فتوشاپ</h3>
                    <p className="text-base sm:text-sm">وکتورهای گرافیکی قدرتمند</p>
                </div>
                <div className="w-16">
                    <Image
                        alt="،ایل های لایه باز گرافیکی"
                        width={60}
                        height={60}
                        src={"/images/categories/photoshop2-min.png"}

                    />
                </div>
            </div>
        </Link>
    );
}

export default CatBox;