import React from "react";
import Image from "next/image";
import { colorList } from "../../_constance/studio";

export default function StudioCard(props) {
  console.log("StudioCard Rendered", props.seq);
  const idColor = colorList[props.seq];
  const cardClickHandler = () => {
    console.log("StudioCard Clicked :", props.isSelected, props.seq);
    props.itemSetter(props.seq);
  };
  return (
    <div
      className="w-full h-[400px] rounded-xl relative overflow-hidden shadow"
      onClick={() => cardClickHandler()}
    >
      {/* <Image
        property
        src={`${props.image}`}
        alt="studio-image"
        object-fit="cover"
        width={345}
        height={400}
      /> */}
      <img
        className="w-full h-full object-cover"
        src={`https://photocyan.com:8000${props.image}`}
        draggable="false"
        alt="studio-image"
      />
      <div
        style={{
          backgroundColor: props.isSelected ? colorList[props.seq] : "#F4F1ED",
        }}
        className={`${props.isSelected ? `h-72` : "h-28"} opacity-90 absolute bottom-0 overflow-hidden flex flex-col w-full px-3 py-[14px] transition-all duration-500`}
      >
        <span
          className={`${props.isSelected ? "mb-6 text-white" : "mb-0"} text-2xl font-bold`}
        >
          시안사진관 {props.name}
        </span>
        <div
          className={`flex flex-col text-sm gap-5 ease-out duration-500 font-bold text-white ${props.isSelected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <div className="flex flex-col border-l-4 border-white px-3">
            <span className="">월요일 - 금요일</span>
            <span>AM 10:00 - PM 09:00</span>
          </div>
          <div className="flex flex-col border-l-4 border-white px-3">
            <span>서울 강남구 언주로 6길 1층</span>
            <span>TEL: 010-1234-5678</span>
          </div>

          <div className="flex justify-end gap-3 mt-7">
            <button className="border border-white rounded-[60px] px-8 py-3">
              더 보기
            </button>
            <button className="border border-white rounded-[60px] px-8 py-3">
              예약하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
