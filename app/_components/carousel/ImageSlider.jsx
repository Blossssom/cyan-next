"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { getGalleryApi } from "../../_api/index";
export default function ImageSlider() {
  useEffect(() => {
    getGalleryData();
  }, []);
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [imageList, setImageList] = useState([]);

  const getGalleryData = async () => {
    const result = await getGalleryApi();
    setImageList(await result.json());
  };
  return (
    <div className="embla__viewport overflow-hidden w-full" ref={emblaRef}>
      <div className="embla__container flex gap-4">
        {imageList.slice(0, 8).map((image) => {
          return (
            <div
              key={image.commonFileSeq}
              className={`embla__slide overflow-hidden min-w-0 w-[297px] h-[297px] rounded-md relative`}
            >
              <Image
                priority
                src={`https://photocyan.com:8000${image.fileWeb}`}
                alt="image"
                fill
                objectFit="cover"
                // style={{ width: "100%", height: "auto" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
