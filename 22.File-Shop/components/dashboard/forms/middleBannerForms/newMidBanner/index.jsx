"use client";
import { useRef } from "react";
import axios from "axios";

const NewMidBanner = () => {
  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const imageLinkRef = useRef();
  const imageSituationRef = useRef();

  const submiter = (e) => {
    e.preventDefault();
    const formData = {
      image: imageUrlRef.current.value,
      imageAlt: imageAltRef.current.value,
      link: imageLinkRef.current.value,
      situation: imageSituationRef.current.value,
    };
    const url = `${process.env.SERVER_URL}`
    console.log(url)
    // axios.post(url, formData)
    // .then(d=> console.log("ok"))
    // .catch(e=> console.log("error"))
  };

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-orange-500">بنر جدید</h2>
      <form onSubmit={submiter} className="flex flex-col gap-6">
        {/* img url */}
        <div className="flex flex-col gap-2">
          <div>آدرس عکس</div>
          <input
            ref={imageUrlRef}
            type="text"
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        {/* img alt */}
        <div className="flex flex-col gap-2">
          <div>توضیحات عکس</div>
          <input
            ref={imageAltRef}
            type="text"
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        {/* Link */}
        <div className="flex flex-col gap-2">
          <div>توضیحات عکس</div>
          <input
            ref={imageLinkRef}
            type="text"
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        {/* On Off */}
        <div className="flex flex-col gap-2">
          <div>روشن و خاموش</div>
          <select
            ref={imageSituationRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          >
            <option value={true}>روشن</option>
            <option value={false}>خاموش</option>
          </select>
        </div>

        {/* button */}
        <button
          type="submit"
          className="p-2 bg-indigo-600 text-white w-full rounded-md transition-all duration-500 hover:bg-orange-500"
        >
          ارسال
        </button>
      </form>
    </div>
  );
};

export default NewMidBanner;
