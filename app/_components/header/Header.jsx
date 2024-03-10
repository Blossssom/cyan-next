import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/public/images/icon/cyan-logo.svg'

export default function Header() {
  return (
    <header className="flex h-24 items-center justify-between w-full px-60">
        <Image src={logoImage} width='136' height='auto' alt='logo' priority />
        <div className='flex items-center gap-14'>
          <Link href='#'>시안 스토리</Link>
          <Link href='#'>지점 소개</Link>
          <Link href='#'>예약하기</Link>
          <Link href='#'>비즈니스 문의</Link>
        </div>
    </header>
  )
}
