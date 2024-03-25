"use client";

import React from "react";
import useCalendar from "./useCalendar";

const weekTextArray = ["일", "월", "화", "수", "목", "금", "토"];

export default function ReserveCalendar() {
  const [days, daysList] = useCalendar();

  return (
    <div className="grid grid-cols-7 gap-[10px] w-[536px]">
      {weekTextArray.map((weekText) => {
        return (
          <div
            key={weekText}
            className="flex items-center justify-center text-[14px] font-bold"
          >
            {weekText}
          </div>
        );
      })}
      {days.map((week, index) => {
        return (
          <React.Fragment key={index}>
            {week.map((day, index) => {
              return (
                <div
                  key={day.fullDate}
                  className={`cursor-pointer p-2 border border-gray-200 flex items-center justify-center`}
                  style={{
                    backgroundColor: day.css.bgColor,
                    opacity: day.css.opacity,
                    color: day.css.color,
                    borderColor: day.css.border,
                  }}
                >
                  <span>{day.day}</span>
                </div>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
