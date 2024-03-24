"use client";
import React, { useState } from "react";
import ReserveCalendar from "@/app/_components/calendar/ReserveCalendar";
import Listbox from "@/app/_components/menus/ListBox";

export default function reservationIntro() {
  const [list, setList] = useState([
    "서울",
    "부산",
    "대구",
    "대전",
    "광주",
    "인천",
    "울산",
    "세종",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
  ]);
  return (
    <section className="w-full flex flex-col gap-14 max-w-[1440px]">
      <div className="text-[60px] font-bold leading-tight">
        <p>시안 사진관에</p>
        <p>예약해주셔서 감사합니다</p>
      </div>
      <article className="flex w-full overflow-hidden">
        <div className="w-full border-t-[1px] border-[#959595] py-3">
          <div className="w-full flex justify-between align-top">
            <p className="text-2xl font-bold">예약 지점</p>
            <Listbox options={list} />
          </div>
        </div>
        <div className="flex border-t-[1px] border-[#959595] py-3 gap-14">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">예약날짜</p>
            <div>
              <div className="flex gap-2 items-center">
                <div className="w-[20px] h-[14px] bg-[#F5F7F8] border border-[#DDDFE0]"></div>
                <p className="text-sm">예약 불가</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[20px] h-[14px] bg-[#4B9DFD] border border-[#448EE4]"></div>
                <p className="text-sm">예약 선택</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[20px] h-[14px] bg-[#DFECFB] border border-[#C9D5E2]"></div>
                <p className="text-sm">예약 가능</p>
              </div>
            </div>
          </div>
          <ReserveCalendar />
        </div>
      </article>
    </section>
  );
}