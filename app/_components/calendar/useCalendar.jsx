import moment from "moment";
import React, { useEffect, useState } from "react";

export default function useCalendar() {
  useEffect(() => {
    let indexValue = 0;
    let week = firstWeek;
    const result = [];

    for (week; week <= lastWeek; week++) {
      const weekArray = [];
      for (let i = 0; i < 7; i++) {
        const days = today
          .clone()
          .startOf("year")
          .week(week)
          .startOf("week")
          .add(i, "day");

        if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
          weekArray.push({
            index: i,
            fullDate: days.format("YYYY-MM-DD"),
            monthWithDay: days.format("MM-DD"),
            day: `${days.format("DD")}일`,
            reservation: "",
            css: {
              color: "#fff",
              bgColor: "#4B9DFD",
              display: "",
              border: "#448EE4",
            },
            handler: {
              onClick: () => {},
            },
          });
        } else if (days.format("MM") !== today.format("MM")) {
          weekArray.push({
            index: i,
            fullDate: days.format("YYYY-MM-DD"),
            monthWithDay: days.format("MM-DD"),
            day: `${days.format("DD")}일`,
            reservation: "",
            css: {
              color: "#ACADAE",
              bgColor: "#F5F7F8",
              display: "",
              border: "#DDDFE0",
            },
            handler: {
              onClick: () => {},
            },
          });
        } else {
          weekArray.push({
            index: i,
            fullDate: days.format("YYYY-MM-DD"),
            monthWithDay: days.format("MM-DD"),
            day: `${days.format("DD")}일`,
            reservation: "",
            css: {
              color: "",
              bgColor: "#DFECFB",
              display: "",
              border: "#C9D5E2",
            },
            handler: {
              onClick: () => {},
            },
          });
        }
        indexValue++;
      }
      result.push(weekArray);
    }
    setDayList(result);
    console.log(result);
  }, []);

  const [getMoment, setMoment] = useState(moment());
  const [dayList, setDayList] = useState([]);
  const today = getMoment;
  const dayTextList = ["월", "화", "수", "목", "금", "토", "일"];
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();
  return [dayList, dayTextList];
}
