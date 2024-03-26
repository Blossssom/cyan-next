"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ProductCard(props) {
  return (
    <article
      onClick={() => props.onSelect(props.productInfo)}
      className={`flex max-h-24 items-center gap-6 px-[14px] py-3 h-36 bg-[#F5F5F7] border ${props.isSelect ? "border-[#4B9DFD]" : ""} rounded-xl`}
    >
      <div className="w-6 h-6 flex-none bg-white flex justify-center items-center  border border-[#e6e6e6] rounded-full">
        <div
          className={`w-[14px] h-[14px] rounded-full ${props.isSelect ? "bg-[#4B9DFD]" : "bg-white"}`}
        />
      </div>
      <div className="flex gap-4 h-full w-full relative overflow-hidden">
        <Image
          src={props.image}
          width={70}
          height={"auto"}
          priority
          alt="product-image"
          style={{ objectFit: "cover" }}
        />
        <div className="flex flex-col">
          <p>{props.productInfo.itemName}</p>
          <p>{props.productInfo.itemPrice}</p>
        </div>
      </div>
    </article>
  );
}
