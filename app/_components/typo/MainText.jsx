import React from "react";
import "./typo.css";
export default function MainText() {
  return (
    <div className="text flex flex-col items-center overflow-hidden">
      <div className="item">
        <p className={`text-6xl `}>어느 때나</p>
      </div>
      <div className="middle-wrapper overflow-hidden h-[72px]">
        <div className="item flex flex-col items-center">
          <p className={`text-6xl text-[#F35103]`}>누구보다 더</p>
          <p className={`text-6xl text-[#F35103]`}>내가 더</p>
          <p className={`text-6xl text-[#F35103]`}>니가 더</p>
          <p className={`text-6xl text-[#F35103]`}>우리가 더</p>
        </div>
      </div>
      <div className="item">
        <p className={`text-6xl`}>당신이 좋아할 사진</p>
      </div>
    </div>
  );
}
