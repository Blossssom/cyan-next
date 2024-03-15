import React from "react";
import Image from "next/image";

export default function StudioCard(props) {
  return (
    <div className="w-full h-[400px] rounded-xl relative">
      <img
        className="w-full h-full object-cover rounded-xl"
        src={props.image}
        alt="studio-image"
      />
      <div className="absolute bottom-0 bg-[#F4F1ED]/90 w-full h-28">
        <span>시안사진관 {props.name}</span>
      </div>
    </div>
  );
}
