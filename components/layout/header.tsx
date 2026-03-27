"use client";

import Logo from "@/components/icons/logo";
import NavLink from "./nav-link";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { navItems } from "@/config/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function Header() {
  /**
   * @description - 햄버거 버튼 클릭 시 sheet 표출 상태
   */
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="w-full h-14 px-4 flex justify-between items-center md:px-8 lg:px-16">
        <Logo />
        <nav className="hidden md:flex items-center gap-12">
          {navItems &&
            navItems.map((item) => (
              <NavLink key={item.id} href={item.href}>
                {item.label}
              </NavLink>
            ))}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>
                <span className="font-bold text-xl">메뉴</span>
              </SheetTitle>
              <nav className="flex flex-col gap-4 py-6">
                {navItems &&
                  navItems.map((item) => (
                    <NavLink key={item.id} href={item.href}>
                      {item.label}
                    </NavLink>
                  ))}
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
