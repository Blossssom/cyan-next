import React from "react";
import TimeCalendar from "../calendar/TimeCalendar";

export default function ReservationTime(props) {
  return (
    <section className="fade-in w-full flex flex-col gap-14 max-w-[1440px]">
      <div className="w-full text-[60px] font-bold leading-tight">
        <p>예약자 정보와</p>
        <p>오시는 시간을 알려주세요</p>
      </div>
      <article className="w-full h-full flex gap-[40px]">
        <div className="flex flex-col gap-12 w-[50%] overflow-hidden">
          <div className="flex py-3 justify-between border-t-[1px] border-[#959595]">
            <p className="text-2xl font-bold">예약자 성함</p>
            <input
              className="outline-none border align-middle text-lg bg-[#F5F7F8] px-4 py-3 rounded-[60px]"
              type="text"
              placeholder="성함을 입력해주세요"
            />
          </div>
          <div className="flex py-3 justify-between border-t-[1px] border-[#959595]">
            <p className="text-2xl font-bold">예약자 연락처</p>
            <input
              className="outline-none border align-middle text-lg bg-[#F5F7F8] px-4 py-3 rounded-[60px]"
              type="tel"
              placeholder="연락처를 입력해주세요"
            />
          </div>
          <div className="flex gap-6 py-3 border-t-[1px] border-[#959595]">
            <input
              id="check-show"
              className="w-6 h-6 flex-none bg-[#F5F7F8]"
              type="radio"
            />
            <label for="check-show" className="">
              <p>
                (필수) 서비스 이용 약관에 따라 상습적으로 예약 후 미
                방문(노쇼)이 3회 이상 지속될 경우 해당 예약자 정보로 시안
                사진관을 일정 기간 예약할 수 없습니다.
              </p>
            </label>
          </div>
        </div>
        <div className="w-[50%] min-h-[450px] flex justify-between border-t-[1px] border-[#959595] py-3 gap-14">
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
          <TimeCalendar />
        </div>
      </article>
      <div className="w-full flex justify-between items-center my-20">
        <button
          onClick={() => props.prevStep()}
          className="rounded-full border-black border py-5 px-10 font-bold"
        >
          이전
        </button>
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
