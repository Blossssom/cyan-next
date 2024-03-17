"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { getGalleryApi } from "../../_api/index";
export default function ImageSlider() {
  useEffect(() => {
    getGalleryData();
  }, []);
  const [emblaRef] = useEmblaCarousel({ dragFree: true });
  const [imageList, setImageList] = useState([]);

  const getGalleryData = async () => {
    const result = await getGalleryApi();
    setImageList(await result.json());
  };
  return (
    <article className="embla__viewport overflow-hidden w-full" ref={emblaRef}>
      <div className="embla__container flex gap-4">
        {imageList.map((image) => {
          return (
            <div
              key={image.commonFileSeq}
              className={`embla__slide overflow-hidden flex-none w-[297px] min-w-0 h-[297px] rounded-md relative`}
            >
              <Image
                priority
                src={`https://photocyan.com:8000${image.fileWeb}`}
                alt="image"
                object-fit="cover"
                width={297}
                height={297}
              />
            </div>
          );
        })}
      </div>
    </article>
  );
}
