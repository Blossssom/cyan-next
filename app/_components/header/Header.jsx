import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "@/public/images/icon/cyan-logo.svg";

export default function Header() {
  return (
    <header className="flex font-bold h-24 mb-3 items-center justify-between w-full px-60">
      <Link href="/">
        <Image src={logoImage} width="136" height="auto" alt="logo" priority />
      </Link>
      <div className="flex items-center gap-14">
        <Link href="/studio">시안 스토리</Link>
        <Link href="/studio">지점 소개</Link>
        <Link href="/reservation">예약하기</Link>
        <Link href="/studio">비즈니스 문의</Link>
      </div>
    </header>
  );
}
