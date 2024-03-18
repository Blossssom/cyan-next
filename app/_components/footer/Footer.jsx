import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center h-[165px] py-10 bg-[#F2F2F2]">
      <div className="w-full max-w-[1440px] flex flex-col gap-4">
        <span>Copyright © 2024 Cyanlab Inc</span>
        <div className="flex gap-3 opacity-40 text-xs">
          <span>대표 | 고태우</span>
          <span>이메일 | cyan@photocyan.com</span>
          <span>연락처 | 02.1234.5678</span>
          <span>주소 | 서울 강남구 언주로 6길 1층</span>
          <span>사업자등록번호 | 111-35-321251</span>
        </div>
      </div>
    </footer>
  );
}
