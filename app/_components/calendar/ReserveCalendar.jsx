"use client";

import React from "react";
import useCalendar from "./useCalendar";

export default function ReserveCalendar() {
  const [days, daysList] = useCalendar();
  return (
    <div className="grid grid-cols-7 gap-[10px] w-[536px]">
      {days.map((week, index) => {
        return (
          <React.Fragment key={index}>
            {week.map((day, index) => {
              return (
                <div
                  key={day.fullDate}
                  className="p-2 border border-gray-200 flex items-center justify-center"
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
