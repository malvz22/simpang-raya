"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <div className="flex flex-col mx-auto sticky top-0 bg-white z-[1000]">
      <div className="flex flex-row justify-between items-center px-12 h-[110px]">
        <Link href={"/"}>
          <Image src={"/srlogo.png"} alt="" width={70} height={70}></Image>
        </Link>

        <div className="hidden md:flex flex-row gap-5 font-[700] text-[12px] text-[#070707] tracking-[3.4px]">
          <Link href={"/"}>
            <p className="hover:text-[#A22020] transition-all duration-900 px-3">
              HOME
            </p>
          </Link>
          <Link href={"/about"}>
            <p className="hover:text-[#A22020] transition-all duration-900 px-3">
              ABOUT US
            </p>
          </Link>
          <Link href={"/menu"}>
            <p className="hover:text-[#A22020] transition-all duration-900 px-3">
              MENU
            </p>
          </Link>
          <Link href={"/location"}>
            <p className="hover:text-[#A22020] transition-all duration-900 px-3">
              LOCATION
            </p>
          </Link>
          <Link href={"/contact"}>
            <p className="hover:text-[#A22020] transition-all duration-900 px-3">
              CONTACT
            </p>
          </Link>
        </div>
        <RxHamburgerMenu
          className="md:hidden cursor-pointer"
          size={20}
          onClick={handleMenu}
        />
      </div>
      <div
        className={
          menu
            ? "flex flex-col bg-white max-w-full text-center md:hidden"
            : "hidden"
        }
      >
        <Link href={"/"}>
          <p className="p-4">HOME</p>
        </Link>
        <Link href={"/about"}>
          <p className="p-4">ABOUT US</p>
        </Link>
        <Link href={"/menu"}>
          <p className="p-4">MENU</p>
        </Link>
        <Link href={"/location"}>
          <p className="p-4">LOCATION</p>
        </Link>
        <Link href={"/contact"}>
          <p className="p-4">CONTACT</p>
        </Link>
      </div>
    </div>
  );
}
