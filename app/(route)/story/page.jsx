import React from "react";
import StudioSlider from "@/app/_components/carousel/StudioSlider";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="text-[72px] leading-tight font-bold flex flex-col items-center justify-center">
        <p>어느 때나</p>
        <p className="text-[#0094FF]">누구보다 더</p>
        <p>당신이 좋아할 사진</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 font-medium text-2xl">
        <div className="flex flex-col items-center">
          <p>모두가 좋아할 사진을 담고 찍습니다.</p>
          <p>그날의 사진이 주는 이야기에서 기억과 추억을 발견합니다.</p>
        </div>
        <div className="flex flex-col items-center">
          <p>
            새로운 증명사진에 담겨 웃고 있는 미소와 반짝이는 눈동자 등 모두의
            모습들
          </p>
          <p>
            오늘 찍은 사진이 훗날 미래의 내가 보고 추억하며 따뜻한 마음을 간직할
            수 있게
          </p>
          <p>모든 이들에게 좋아하는 사진을 함께 만들어 나가고 있습니다.</p>
        </div>
        <div className="w-full flex flex-col gap-14 items-center">
          <StudioSlider />
          <div className="flex justify-center items-center max-w-[254px] px-6 py-3 border border-black rounded-[60px]">
            <Link href="/studio" className="font-bold text-base">
              시안사진관 지점 소개
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
