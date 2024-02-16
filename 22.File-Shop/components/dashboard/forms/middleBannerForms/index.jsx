"use client"
import { useState, useEffect } from "react";
import AllMidBanners from "./allMidBanners";
import NewMidBanner from "./newMidBanner";

const MiddleBannerAll = ()=>{
    const [det, setDet] = useState(<AllMidBanners/>)

    // useEffect(()=>{
    //     if(det ==="xx" ){
    //         setDet()
    //     }
    // },[det])

    return(
        <div className="flex flex-col gap-8">
            <section className="flex justify-between items-center gap-2">
                <h1 className="text-blue-500 text-lg">بنرهای تبلیغاتی</h1>
                <div className="flex justify-end items-center gap-2">
                    <button onClick={()=>setDet(<AllMidBanners/>)} className="px-3 py-1 rounded-md bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500">
                        همه
                    </button>
                    <button onClick={()=>setDet(<NewMidBanner/>)}  className="px-3 py-1 rounded-md bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500">
                        بنر جدید
                    </button>
                </div>
            </section>

            <section>
                {det}
            </section>
        </div>
    )
}
export default MiddleBannerAll;