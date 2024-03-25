"use client";
import React, { useState } from "react";
import ReserveCalendar from "@/app/_components/calendar/ReserveCalendar";
import Listbox from "@/app/_components/menus/ListBox";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

export default function ReservationIntro(props) {
  const [customer, setCustomer] = useState(1);

  const addCustomerHandler = () => {
    if (customer >= 4) {
      return;
    }
    setCustomer(customer + 1);
  };

  const removeCustomerHandler = () => {
    if (customer <= 1) {
      return;
    }
    setCustomer(customer - 1);
  };
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
    <section className="fade-in w-full flex flex-col gap-14 max-w-[1440px]">
      <div className="w-full text-[60px] font-bold leading-tight">
        <p>시안 사진관에</p>
        <p>예약해주셔서 감사합니다</p>
      </div>
      <article className="w-full flex gap-[40px]">
        <div className="flex flex-col gap-12 w-[50%] border-t-[1px] border-[#959595] py-3 overflow-hidden">
          <div className="flex justify-between align-top">
            <p className="text-2xl font-bold">예약 지점</p>
            <Listbox options={list} />
          </div>
          <div className="flex justify-between align-top border-t-[1px] py-3 border-[#959595]">
            <p className="text-2xl font-bold">예약 인원</p>
            <div className="flex items-center gap-6">
              <button onClick={() => removeCustomerHandler()}>
                <CiCircleMinus size={40} />
              </button>
              <p className="text-center font-bold text-[32px] min-w-6">
                {customer}
              </p>
              <button onClick={() => addCustomerHandler()}>
                <CiCirclePlus size={40} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex border-t-[1px] border-[#959595] py-3 gap-14">
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
      <div className="w-full flex justify-end items-center my-20">
        <button
          onClick={() => props.nextStep()}
          className="rounded-full border-black border py-5 px-10 font-bold"
        >
          다음
        </button>
      </div>
    </section>
  );
}
