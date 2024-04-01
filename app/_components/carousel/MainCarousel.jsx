"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function MainCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const imageList = [
    "/images/image7.png",
    "/images/image6.png",
    "/images/image2.png",
  ];

  return (
    <article
      className="embla__viewport overflow-hidden w-full h-full"
      ref={emblaRef}
    >
      <div className="embla__container flex">
        {imageList.map((image, index) => {
          return (
            <div
              key={index}
              className={`embla__slide overflow-hidden rounded-xl mx-5 relative flex-none w-[80%] min-w-0 h-[600px] bg-slate-900`}
            >
              <Image
                fill
                style={{ objectFit: "cover" }}
                priority
                src={image}
                alt="image"
              />
            </div>
          );
        })}
      </div>
    </article>
  );
}
