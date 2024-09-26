"use client";

import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <div className="flex flex-col mx-auto">
      <div className="flex flex-row justify-between items-center px-12 h-[110px]">
        <Image src={"/srlogo.png"} alt="" width={70} height={70}></Image>
        <div className="hidden md:flex flex-row gap-5 font-[700] text-[12px] text-[#070707] tracking-[3.4px]">
          <p>HOME</p>
          <p>ABOUT US</p>
          <p>MENU</p>
          <p>LOCATION</p>
          <p>CONTACT</p>
          <p>BLOG</p>
        </div>
        <RxHamburgerMenu className="md:hidden" size={20} onClick={handleMenu} />
      </div>
      <div
        className={
          menu
            ? "flex flex-col bg-white max-w-full text-center gap-4 md:hidden"
            : "hidden"
        }
      >
        <p>HOME</p>
        <p>ABOUT US</p>
        <p>MENU</p>
        <p>LOCATION</p>
        <p>CONTACT</p>
        <p>BLOG</p>
      </div>
    </div>
  );
}
