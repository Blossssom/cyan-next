import StudioGrid from "@/app/_components/studio/StudioGrid";
import React from "react";

export default function page() {
  return (
    <main className="w-full h-full flex flex-col gap-[140px] items-center">
      <section className="w-full max-w-[1440px] flex items-end justify-between">
        <div className="text-[64px] flex flex-col font-bold tracking-[-0.5rem]">
          <span>여러분이 있는 모든 곳에서</span>
          <span>시안사진관을 만날 수 있도록</span>
        </div>
        <div className="text-xl flex flex-col tracking-tighter font-medium">
          <span>
            앞으로 더 많은 곳에서 가깝게 만날 수 있도록 노력해야하지만
          </span>
          <span>
            시안사진관은 여러 고객분들이 계시는 곳에서 사진과 가까워질 수 있도록
          </span>
          <span>많은 곳에서 스튜디오를 운영하고 있어요</span>
        </div>
      </section>
      <section className="mb-[180px]">
        <StudioGrid />
      </section>
    </main>
  );
}
