"use client";

import Image from "next/image";
import { useState } from "react";

interface Image {
  category: string;
  alt: string;
  src: string;
}

export default function About() {
  const [selectedButton, setSelectedButton] = useState<string>("All");

  const filterMenu = (category: string) => {
    setSelectedButton(category);
  };

  return (
    <>
      <div className="relative w-full max-w-full h-[400px]">
        <Image src={"/hero1.png"} alt="reklame" fill objectFit="cover" />
        <div className="absolute flex flex-col translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-full max-w-[1170px] text-start text-white px-10">
          <h1 className="text-[20px]">SIMPANG RAYA</h1>
          <h1 className="text-[70px]">Menu</h1>
        </div>
      </div>
      <div className="max-w-[1170px] px-12 mx-auto text-center flex flex-col py-[100px] justify-center items-center">
        <div className="flex gap-6 flex-row">
          {["Makanan", "Minuman", "Dessert", "Nasi Box"].map((category) => (
            <p
              key={category}
              className={`px-6 py-2 font-semibold rounded-xl text-[18px] text-white  cursor-pointer transition-all duration-950 hover:bg-[#f03838] ${
                selectedButton === category ? "bg-[#f03838]" : "bg-[#A22020]"
              }`}
              onClick={() => filterMenu(category)}
            >
              {category}
            </p>
          ))}

          {/* <p className="px-6 py-2 font-semibold hover:bg-[#f03838] rounded-xl text-[18px] text-white bg-[#A22020] cursor-pointer transition-all duration-950 ">
            Minuman
          </p>
          <p className="px-6 py-2 font-semibold hover:bg-[#f03838] rounded-xl text-[18px] text-white bg-[#A22020] cursor-pointer transition-all duration-950 ">
            Dessert
          </p> */}
        </div>
      </div>
    </>
  );
}
