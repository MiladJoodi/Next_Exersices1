"use client"

import Image from "next/image";

const Box = ({ data, setmidBanDetCtrl }) => {
  return (
    <div onClick={()=>setmidBanDetCtrl(data._id)} className="cursor-pointer p-6 w-full rounded bg-zinc-100 border-2 border-zinc-200 transition-all duration-500 hover:border-orange-500">
      <div className="flex justify-start items-center">
        <Image
          className="rounded-lg"
          src={data.image}
          alt={data.imageAlt}
          title={data.imageAlt}
          width={400}
          height={200}
        />
      </div>
      <div className="flex justify-end items-center gap-3">
        {data.situation == true ? (
          <div className="text-xs bg-green-600 text-white px-3 py-1 rounded">
            روشن
          </div>
        ) : (
          <div className="text-xs bg-rose-600 text-white px-3 py-1 rounded">
            خاموش
          </div>
        )}
        <div className="text-xs bg-orange-500 text-white px-3 py-1 rounded">
          {data.date}
        </div>
      </div>
    </div>
  );
};
export default Box;
