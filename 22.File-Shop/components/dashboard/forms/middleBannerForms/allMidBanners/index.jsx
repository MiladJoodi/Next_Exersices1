"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "./Box";
import Image from "next/image";

const AllMidBanners = () => {
  const [banners, setbanners] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    axios
      .get(`http://localhost:27017/api/middle-banners?pn=${pageNumber}`)
      .then((d) => setbanners(d.data))
      .catch((e) => console.log(e));
  }, [banners]);
  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        {banners.length < 1 ? (
          <div className="flex justify-center items-center p-12">
            <Image
              width={100}
              height={100}
              alt="loading"
              src={"/images/loading.svg"}
            />
          </div>
        ) : (
          banners.map((ba, i) => <Box key={i} data={ba} />)
        )}
      </div>
    </div>
  );
};

export default AllMidBanners;
