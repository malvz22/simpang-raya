import Image from "next/image";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="bg-[#A22020] max-w-full text-white flex flex-col md:flex-row">
        <div className="bg-[#171717] w-full max-w-full md:max-w-[30%] flex flex-col justify-center items-center gap-8 py-20">
          <Image
            src={"/sr-logo-white.png"}
            width={120}
            height={0}
            alt="logosrwhite"
          />
          <p className="text-[16px] text-center px-5">
            Restoran Simpang Raya pertama kali di dirikan pada tanggal 5 juli
            1969 di kota Bukittinggi, Provinsi Sumatera Barat.
          </p>
          <div className="flex flex-row gap-2">
            <Link href={"mailto:simpangraya.official@gmail.com"}>
              <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-white">
                <MdOutlineEmail size={20} className="text-[#A22020]" />
              </div>
            </Link>
            <Link href={"tel:6285282419922"}>
              <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-white">
                <BsFillTelephoneFill size={20} className="text-[#A22020]" />
              </div>
            </Link>
            <Link href={"https://www.instagram.com/simpangraya/"}>
              <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-white">
                <FaInstagram size={20} className="text-[#A22020]" />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-full p-7">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
            <div className="flex flex-col">
              <h1 className="mb-6 text-[24px]">NAVIGASI</h1>
              <div className="flex flex-col gap-4 text-[14px]">
                <Link href={"/"}>
                  <p className="hover:text-[#FFEB9A] transition-all duration-900">
                    HOME
                  </p>
                </Link>
                <Link href={"/about"}>
                  <p className="hover:text-[#FFEB9A] transition-all duration-900">
                    ABOUT US
                  </p>
                </Link>
                <Link href={"/menu"}>
                  <p className="hover:text-[#FFEB9A] transition-all duration-900">
                    MENU
                  </p>
                </Link>
                <Link href={"/location"}>
                  <p className="hover:text-[#FFEB9A] transition-all duration-900">
                    LOCATION
                  </p>
                </Link>
                <Link href={"/contact"}>
                  <p className="hover:text-[#FFEB9A] transition-all duration-900">
                    CONTACT
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="mb-6 text-[24px]">INFORMASI KONTAK</h1>
              <div className="flex flex-col gap-4">
                <Link href={"tel:6285282419922"} target="_blank">
                  <div className="flex flex-row items-center gap-6 hover:text-[#FFEB9A] transition-all duration-900">
                    <BsFillTelephoneFill size={23} />
                    <p className="text-[14px]">0817 - 6334 - 123</p>
                  </div>
                </Link>
                <Link
                  href={"mailto:simpangraya.official@gmail.com"}
                  target="_blank"
                >
                  <div className="flex flex-row items-center gap-6 hover:text-[#FFEB9A] transition-all duration-900">
                    <MdOutlineEmail size={23} />
                    <p className="text-[14px]">
                      simpangraya.official@gmail.com
                    </p>
                  </div>
                </Link>
                <Link
                  href={"https://www.instagram.com/simpangraya/"}
                  target="_blank"
                >
                  <div className="flex flex-row items-center gap-6 hover:text-[#FFEB9A] transition-all duration-900">
                    <FaInstagram size={23} />
                    <p className="text-[14px]">@simpang_raya</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="mb-6 text-[24px]">RESTO CABANG</h1>
              <div className="flex flex-col gap-4">
                <Link href={"/location"} target="_blank">
                  <p className="text-[14px] hover:text-[#FFEB9A] transition-all duration-900">
                    BANTEN
                  </p>
                </Link>
                <Link href={"/location"} target="_blank">
                  <p className="text-[14px] hover:text-[#FFEB9A] transition-all duration-900">
                    JAKARTA
                  </p>
                </Link>
                <Link href={"/location"} target="_blank">
                  <p className="text-[14px] hover:text-[#FFEB9A] transition-all duration-900">
                    JAWA BARAT
                  </p>
                </Link>
                <Link href={"/location"} target="_blank">
                  <p className="text-[14px] hover:text-[#FFEB9A] transition-all duration-900">
                    JAWA TENGAH
                  </p>
                </Link>
                <Link href={"/location"} target="_blank">
                  <p className="text-[14px] hover:text-[#FFEB9A] transition-all duration-900">
                    JAWA TIMUR
                  </p>
                </Link>
                <Link href={"/location"} target="_blank">
                  <p className="text-[14px] hover:text-[#FFEB9A] transition-all duration-900">
                    KALIMANTAN
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <hr className="py-3"></hr>
          <p>Copyright © 2024 Simpang Raya</p>
        </div>
      </div>
    </>
  );
}
