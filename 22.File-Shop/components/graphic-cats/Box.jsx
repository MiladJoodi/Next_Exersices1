import Image from "next/image";

const CatBox = () => {
    return (
        <div className="flex justify-between items-center bg-slate-200 rounded-lg p-3">
            <div className="flex flex-col gap-2">
                <h3>فایل لایه باز فتوشاپ</h3>
                <p>وکتورهای گرافیکی قدرتمند</p>
            </div>
            <div className="w-20">
                <Image
                    alt="،ایل های لایه باز گرافیکی"
                    width={50}
                    height={50}
                    src={"/images/categories/photoshop2-min.png"}

                />
            </div>
        </div>
    );
}

export default CatBox;