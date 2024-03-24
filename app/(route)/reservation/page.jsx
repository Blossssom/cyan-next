import ReserveCalendar from "@/app/_components/calendar/ReserveCalendar";
import React from "react";

export default function page() {
  return (
    <main className="w-full h-full min-h-full flex justify-center">
      <section className="w-full flex flex-col gap-14 max-w-[1440px]">
        <div className="text-[60px] font-bold leading-tight">
          <p>시안 사진관에</p>
          <p>예약해주셔서 감사합니다</p>
        </div>
        <article className="flex ">
          <div className="border-t-[1px] border-[#959595] py-3">
            <div>
              <p className="text-2xl font-bold">예약 지점</p>
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
    </main>
  );
}
