"use client";

import Image from "next/image";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

interface Branch {
  province: string;
  name: string;
  address: string;
  addressLink: string;
  telephone: string;
  imgSrc: string;
  imgAlt: string;
}

const branches: Branch[] = [
  {
    province: "Bali",
    name: "Restoran Simpang Raya Legian",
    address:
      "Jl. Dewi Sri No.112, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361",
    addressLink:
      "https://www.google.com/maps/place/Jl.+Dewi+Sri+No.112,+Kuta,+Kec.+Kuta,+Kabupaten+Badung,+Bali+80361/@-8.7076035,115.1786943,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd246cf382e5a01:0x33cf65e89fe9d62!8m2!3d-8.7076035!4d115.1786943!16s%2Fg%2F11fk26svpx?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
    telephone: "0857 7511 3758",
    imgSrc: "/cabang/cabang-legian.jpg",
    imgAlt: "Cabang Legian",
  },
];

export default function About() {
  const [selectedProvince, setSelectedProvince] = useState<string>("All");

  function filterBranch(branch: string) {
    setSelectedProvince(branch);
  }

  const filteredBranch =
    selectedProvince === "All"
      ? branches.sort((a, b) => a.name.localeCompare(b.name))
      : branches
          .filter((branch) => branch.province === selectedProvince)
          .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="relative w-full max-w-full h-[400px]">
        <Image src={"/hero1.png"} alt="reklame" fill objectFit="cover" />
        <div className="absolute flex flex-col translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-full max-w-[1170px] text-start text-white px-10">
          <h1 className="text-[20px]">SIMPANG RAYA</h1>
          <h1 className="text-[70px]">Location</h1>
        </div>
      </div>
      <div className="w-full max-w-[1170px] px-12 mx-auto text-center flex flex-col py-[100px] justify-center items-center gap-6">
        <div className="w-full max-w-full flex flex-wrap justify-center items-center gap-6 font-normal">
          {[
            "All",
            "Bali",
            "Bandara",
            "Depok",
            "Jakarta",
            "Jawa Barat",
            "Jawa Tengah",
            "Jawa Timur",
            "Kalimantan",
            "Tangerang",
          ].map((province) => (
            <p
              key={province}
              className={`px-5 py-2 col-span-1 font-semibold flex-wrap border-solid border-[2px] border-[#A22020] text-[16px] cursor-pointer transition-all duration-950 hover:bg-[#A22020] hover:text-white ${
                selectedProvince === province
                  ? "bg-[#A22020] text-white"
                  : "bg-white"
              }`}
              onClick={() => filterBranch(province)}
            >
              {province}
            </p>
          ))}
        </div>
        <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full max-w-full h-[512px] flex flex-col p-4">
            <div className="w-full max-w-full h-[250px] relative">
              <Image
                src={"/cabang/cabang-legian.jpg"}
                alt="Cabang Legian"
                fill
                objectFit="cover"
              />
            </div>
            <div className="p-5 flex flex-col text-start gap-6 border-solid border-[1px]">
              <h1 className="text-[21px]">Restoran Simpang Raya Legian</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-start items-start gap-3">
                  <FaLocationDot size={18} className="text-[#A22020]" />
                  <p className="text-[16px] leading-normal">
                    Jl. Dewi Sri No.112, Legian, Kec. Kuta, Kabupaten Badung,
                    Bali 80361
                  </p>
                </div>
                <div className="flex flex-row justify-start items-start gap-3">
                  <BsFillTelephoneFill size={18} className="text-[#A22020]" />
                  <p className="text-[16px] leading-normal">0857 7511 3758</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full h-[512px] flex flex-col p-4">
            <div className="w-full max-w-full h-[250px] relative">
              <Image
                src={"/cabang/cabang-legian.jpg"}
                alt="Cabang Legian"
                fill
                objectFit="cover"
              />
            </div>
            <div className="p-5 flex flex-col text-start gap-6 border-solid border-[1px]">
              <h1 className="text-[21px]">Restoran Simpang Raya Legian</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-start items-start gap-3">
                  <FaLocationDot size={18} className="text-[#A22020]" />
                  <p className="text-[16px] leading-normal">
                    Jl. Dewi Sri No.112, Legian, Kec. Kuta, Kabupaten Badung,
                    Bali 80361
                  </p>
                </div>
                <div className="flex flex-row justify-start items-start gap-3">
                  <BsFillTelephoneFill size={18} className="text-[#A22020]" />
                  <p className="text-[16px] leading-normal">0857 7511 3758</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full h-[512px] flex flex-col p-4">
            <div className="w-full max-w-full h-[250px] relative">
              <Image
                src={"/cabang/cabang-legian.jpg"}
                alt="Cabang Legian"
                fill
                objectFit="cover"
              />
            </div>
            <div className="p-5 flex flex-col text-start gap-6 border-solid border-[1px]">
              <h1 className="text-[21px]">Restoran Simpang Raya Legian</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-start items-start gap-3">
                  <FaLocationDot size={18} className="text-[#A22020]" />
                  <p className="text-[16px] leading-normal">
                    Jl. Dewi Sri No.112, Legian, Kec. Kuta, Kabupaten Badung,
                    Bali 80361
                  </p>
                </div>
                <div className="flex flex-row justify-start items-start gap-3">
                  <BsFillTelephoneFill size={18} className="text-[#A22020]" />
                  <p className="text-[16px] leading-normal">0857 7511 3758</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full h-[512px] flex flex-col p-4">
            <div className="w-full max-w-full h-[250px] relative">
              <Image
                src={"/cabang/cabang-legian.jpg"}
                alt="Cabang Legian"
                fill
                objectFit="cover"
              />
            </div>
            <div className="p-5 flex flex-col text-start gap-6 border-solid border-[1px]">
              <h1 className="text-[21px]">Restoran Simpang Raya Legian</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-start items-start gap-3">
                  <FaLocationDot size={18} className="text-[#A22020]" />
                  <p className="text-[16px] leading-normal">
                    Jl. Dewi Sri No.112, Legian, Kec. Kuta, Kabupaten Badung,
                    Bali 80361
                  </p>
                </div>
                <div className="flex flex-row justify-start items-start gap-3">
                  <BsFillTelephoneFill size={18} className="text-[#A22020]" />
                  <p className="text-[16px] leading-normal">0857 7511 3758</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full h-[512px] flex flex-col p-4">
            <div className="w-full max-w-full h-[250px] relative">
              <Image
                src={"/cabang/cabang-legian.jpg"}
                alt="Cabang Legian"
                fill
                objectFit="cover"
              />
            </div>
            <div className="p-5 flex flex-col text-start gap-6 border-solid border-[1px]">
              <h1 className="text-[21px]">Restoran Simpang Raya Legian</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-start items-start gap-3">
                  <FaLocationDot size={18} className="text-[#A22020]" />
                  <p className="text-[16px] leading-normal">
                    Jl. Dewi Sri No.112, Legian, Kec. Kuta, Kabupaten Badung,
                    Bali 80361
                  </p>
                </div>
                <div className="flex flex-row justify-start items-start gap-3">
                  <BsFillTelephoneFill size={18} className="text-[#A22020]" />
                  <p className="text-[16px] leading-normal">0857 7511 3758</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full h-[512px] flex flex-col p-4">
            <div className="w-full max-w-full h-[250px] relative">
              <Image
                src={"/cabang/cabang-legian.jpg"}
                alt="Cabang Legian"
                fill
                objectFit="cover"
              />
            </div>
            <div className="p-5 flex flex-col text-start gap-6 border-solid border-[1px]">
              <h1 className="text-[21px]">Restoran Simpang Raya Legian</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-start items-start gap-3">
                  <FaLocationDot size={18} className="text-[#A22020]" />
                  <p className="text-[16px] leading-normal">
                    Jl. Dewi Sri No.112, Legian, Kec. Kuta, Kabupaten Badung,
                    Bali 80361
                  </p>
                </div>
                <div className="flex flex-row justify-start items-start gap-3">
                  <BsFillTelephoneFill size={18} className="text-[#A22020]" />
                  <p className="text-[16px] leading-normal">0857 7511 3758</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
