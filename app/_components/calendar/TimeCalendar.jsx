"use client";
import useTimeCalendar from "@/app/_hooks/useTimeCalendar";
import React, { useState } from "react";

export default function TimeCalendar() {
  const [reservation] = useTimeCalendar();
  const [activeId, setActiveId] = useState(null);

  const itemClickHandler = (id) => {
    console.log("click");
    setActiveId(id);
  };
  return (
    <article className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <p className="text-xl font-semibold">오전</p>
        <div className="grid grid-cols-4 gap-[10px]">
          {reservation.map((time, index) => {
            const itemId = `am-${time.rsrvtTimeHH}${index}`;
            if (time.rsrvtTimeHH < 12) {
              return (
                <button
                  key={time.rsrvtTime}
                  onClick={() => itemClickHandler(itemId)}
                  disabled={time.disabled}
                  className={`${activeId === itemId ? "!border-[#448EE4] !bg-[#4B9DFD] text-white" : ""} py-[14px] px-6 border ${time.disabled ? "cursor-not-allowed border-[#DDDFE0] bg-[#F5F7F8]" : "cursor-pointer border-[#C9D5E2] bg-[#DFECFB]"}`}
                >
                  {time.rsrvtTimeHH}:{time.rsrvtTimeMM}
                </button>
              );
            }
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-xl font-semibold">오후</p>
        <div className="grid grid-cols-4 gap-[10px]">
          {reservation.map((time, index) => {
            const itemId = `pm-${time.rsrvtTimeHH}${index}`;
            if (time.rsrvtTimeHH >= 12) {
              return (
                <button
                  onClick={() => itemClickHandler(itemId)}
                  key={`${time.rsrvtTimeHH}${index}`}
                  disabled={time.disabled}
                  className={`${activeId === itemId ? "!border-[#448EE4] !bg-[#4B9DFD] text-white" : ""} py-[14px] px-6 border ${time.disabled ? "cursor-not-allowed border-[#DDDFE0] bg-[#F5F7F8]" : "cursor-pointer border-[#C9D5E2] bg-[#DFECFB]"}`}
                >
                  {time.rsrvtTimeHH}:{time.rsrvtTimeMM}
                </button>
              );
            }
          })}
        </div>
      </div>
    </article>
  );
}
