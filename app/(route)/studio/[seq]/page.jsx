"use client";

import { getStudioListApi } from "@/app/_api";
import React, { useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";

export default function page() {
  const [studioImage, setStudioImage] = useState("");
  const params = useSearchParams();
  //   useEffect(() => {
  //     getStudioImageData();
  //   }, [useSearchParams]);

  //   const getStudioImageData = async () => {
  //     const result = await getStudioListApi();
  //     console.log(await result.json());
  //     setStudioImage(await result.json());
  //   };
  return (
    <div className="w-full h-full min-h-[840px] relative bg-black">
      <Image
        fill
        src={`https://photocyan.com:8000${params.get("image")}`}
        alt="studio"
        style={{ objectFit: "cover", opacity: 0.7 }}
      />

      <div className="p-6 z-2 w-full h-full absolute flex justify-end">
        <div
          className={`opacity-60 font-bold text-8xl text-[${params.get("color")}]`}
        >
          <p>WELCOME</p>
          <p>THIS IS</p>
          <p>SYAN</p>
          <p>STUDIO</p>
        </div>
      </div>
    </div>
  );
}
