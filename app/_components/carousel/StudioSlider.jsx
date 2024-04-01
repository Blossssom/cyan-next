"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { getStudioListApi } from "@/app/_api";

export default function StudioSlider() {
  useEffect(() => {
    getStudioImageData();
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: false });
  const [imageList, setImageList] = useState([]);
  const getStudioImageData = async () => {
    const result = await getStudioListApi();
    setImageList(await result.json());
  };
  return (
    <article className="embla__vieport overflow-hidden w-full" ref={emblaRef}>
      <div className="embla__container flex gap-4">
        {imageList.map((image) => {
          return (
            <div
              key={image.studioSeq}
              className={`embla__slide overflow-hidden flex-none w-[297px] min-w-0 h-[297px] rounded-md relative`}
            >
              <Image
                priority
                src={`https://photocyan.com:8000${image.fileWeb}`}
                fill
              />
            </div>
          );
        })}
      </div>
    </article>
  );
}
