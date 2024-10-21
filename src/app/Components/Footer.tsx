import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaGlobe } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="bg-[#A22020] max-w-full text-white flex flex-col md:flex-row">
        <div className="bg-[#171717] w-full max-w-full md:max-w-[30%] flex flex-col justify-center items-center gap-8 py-10">
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
            <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-white">
              <MdOutlineEmail size={20} className="text-[#A22020]" />
            </div>
            <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-white">
              <FaGlobe size={20} className="text-[#A22020]" />
            </div>
            <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-white">
              <FaInstagram size={20} className="text-[#A22020]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-full p-7">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
            <div className="flex flex-col">
              <h1 className="mb-6 text-[24px]">NAVIGASI</h1>
              <div className="flex flex-col gap-4">
                <p className="text-[14px]">HOME</p>
                <p className="text-[14px]">ABOUT US</p>
                <p className="text-[14px]">MENUS</p>
                <p className="text-[14px]">LOCATION</p>
                <p className="text-[14px]">CONTACT</p>
                <p className="text-[14px]">BLOG</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="mb-6 text-[24px]">INFORMASI KONTAK</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-6">
                  <BsFillTelephoneFill size={23} className="text-white" />
                  <p className="text-[14px]">0817 - 6334 - 123</p>
                </div>
                <div className="flex flex-row items-center gap-6">
                  <MdOutlineEmail size={23} className="text-white" />
                  <p className="text-[14px]">simpangraya.official@gmail.com</p>
                </div>
                <div className="flex flex-row items-center gap-6">
                  <FaInstagram size={23} className="text-white" />
                  <p className="text-[14px]">@simpang_raya</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="mb-6 text-[24px]">RESTO CABANG</h1>
              <div className="flex flex-col gap-4">
                <p className="text-[14px]">BANTEN</p>
                <p className="text-[14px]">JAKARTA</p>
                <p className="text-[14px]">JAWA BARAT</p>
                <p className="text-[14px]">JAWA TENGAH</p>
                <p className="text-[14px]">JAWA TIMUR</p>
                <p className="text-[14px]">KALIMANTAN</p>
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
