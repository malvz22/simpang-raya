"use client";
import Image from "next/image";
import Hero from "./Components/Hero";

import Slider from "react-slick";
import SliderMakanan from "./Components/SliderMakanan";
import SliderMinuman from "./Components/SliderMinuman";
import SliderDessert from "./Components/SliderDessert";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Hero />
      <div className="flex flex-col mt-7 max-w-[1170px] mx-auto px-5 gap-6 py-10">
        <h1 className="text-center text-[60px] text-[#A22020]">Menu Favorit</h1>
        <div className="hidden lg:flex flex-row justify-center">
          <div className="px-3 py-4">
            <div className="flex flex-col max-w-[250px] bg-[#323232] text-white rounded-3xl overflow-hidden relative">
              <p className="absolute z-20 text-[16px] text-white bg-[#A22020] font-semibold rounded-md translate-x-[-50%] translate-y-[-50%] left-[25%] top-[8%] px-[10px] py-[10px]">
                Rp27.000
              </p>
              <div className="max-w-[270px] h-[250px] relative">
                <Image
                  src={"/ayampop.jpg"}
                  fill
                  objectFit="cover"
                  alt="ayampop"
                />
              </div>
              <div className="flex flex-col p-7 gap-2">
                <h1 className="text-[24px]">Ayam Pop</h1>
                <p className="text-[14px] font-normal">
                  Ayam Pop dari Restoran Simpang Raya adalah hidangan khas dari
                  Sumatera Barat yang menawarkan cita rasa yang unik dan lezat.
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 py-4">
            <div className="flex flex-col max-w-[250px] bg-[#323232] text-white rounded-3xl overflow-hidden relative">
              <p className="absolute z-20 text-[16px] text-white bg-[#A22020] font-semibold rounded-md translate-x-[-50%] translate-y-[-50%] left-[25%] top-[8%] px-[10px] py-[10px]">
                Rp27.000
              </p>
              <div className="max-w-[270px] h-[250px] relative">
                <Image
                  src={"/rendang.jpg"}
                  fill
                  objectFit="cover"
                  alt="rendang"
                />
              </div>

              <div className="flex flex-col p-7 gap-2">
                <h1 className="text-[24px]">Rendang</h1>
                <p className="text-[14px] font-normal">
                  Rendang adalah hidangan khas Minangkabau yang terkenal dengan
                  kelezatannya dan aroma rempah yang kuat.
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 py-4">
            <div className="flex flex-col max-w-[250px] bg-[#323232] text-white rounded-3xl overflow-hidden relative">
              <p className="absolute z-20 text-[16px] text-white bg-[#A22020] font-semibold rounded-md translate-x-[-50%] translate-y-[-50%] left-[25%] top-[8%] px-[10px] py-[10px]">
                Rp29.000
              </p>
              <div className="max-w-[270px] h-[250px] relative">
                <Image
                  src={"/ayampanas.jpg"}
                  fill
                  objectFit="cover"
                  alt="ayampanas"
                />
              </div>

              <div className="flex flex-col p-7 gap-2">
                <h1 className="text-[24px]">Ayam Panas</h1>
                <p className="text-[14px] font-normal">
                  Ayam panas adalah sajian khas yang memadukan cita rasa gurih
                  khas masakan Padang.
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 py-4">
            <div className="flex flex-col max-w-[250px] bg-[#323232] text-white rounded-3xl overflow-hidden relative">
              <p className="absolute z-20 text-[16px] text-white bg-[#A22020] font-semibold rounded-md translate-x-[-50%] translate-y-[-50%] left-[25%] top-[8%] px-[10px] py-[10px]">
                Rp27.000
              </p>
              <div className="max-w-[270px] h-[250px] relative">
                <Image src={"/dendengbatoko.jpg"} fill alt="dendengbatoko" />
              </div>

              <div className="flex flex-col p-7 gap-2">
                <h1 className="text-[24px]">Dendeng Batokok</h1>
                <p className="text-[14px] font-normal">
                  Dendeng Batokok adalah salah satu hidangan khas Padang yang
                  menggugah selera.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden justify-center">
          <Slider {...settings}>
            <div className="px-3 py-4">
              <div className="flex flex-col bg-[#323232] text-white rounded-3xl overflow-hidden relative">
                <p className="absolute z-20 text-[16px] text-white bg-[#A22020] font-semibold rounded-md translate-x-[-50%] translate-y-[-50%] left-[70px] top-[40px] px-[10px] py-[10px]">
                  Rp27.000
                </p>
                <div className="max-w-full h-[200px] relative">
                  <Image
                    src={"/ayampop.jpg"}
                    fill
                    objectFit="cover"
                    alt="ayampop"
                  />
                </div>
                <div className="flex flex-col p-7 gap-2">
                  <h1 className="text-[24px]">Ayam Pop</h1>
                  <p className="text-[14px] font-normal">
                    Ayam Pop dari Restoran Simpang Raya adalah hidangan khas
                    dari Sumatera Barat yang menawarkan cita rasa yang unik dan
                    lezat.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 py-4">
              <div className="flex flex-col bg-[#323232] text-white rounded-3xl overflow-hidden relative">
                <p className="absolute z-20 text-[16px] text-white bg-[#A22020] font-semibold rounded-md translate-x-[-50%] translate-y-[-50%] left-[70px] top-[40px] px-[10px] py-[10px]">
                  Rp27.000
                </p>

                <div className="max-w-full h-[200px] relative">
                  <Image
                    src={"/rendang.jpg"}
                    fill
                    objectFit="cover"
                    alt="rendang"
                  />
                </div>
                <div className="flex flex-col p-7 gap-2">
                  <h1 className="text-[24px]">Rendang</h1>
                  <p className="text-[14px] font-normal">
                    Rendang adalah hidangan khas Minangkabau yang terkenal
                    dengan kelezatannya dan aroma rempah yang kuat.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 py-4">
              <div className="flex flex-col bg-[#323232] text-white rounded-3xl overflow-hidden relative">
                <p className="absolute z-20 text-[16px] text-white bg-[#A22020] font-semibold rounded-md translate-x-[-50%] translate-y-[-50%] left-[70px] top-[40px] px-[10px] py-[10px]">
                  Rp29.000
                </p>
                <div className="max-w-full h-[200px] relative">
                  <Image
                    src={"/ayampanas.jpg"}
                    fill
                    objectFit="cover"
                    alt="ayampanas"
                  />
                </div>
                <div className="flex flex-col p-7 gap-2">
                  <h1 className="text-[24px]">Ayam Panas</h1>
                  <p className="text-[14px] font-normal">
                    Ayam panas adalah sajian khas yang memadukan cita rasa gurih
                    khas masakan Padang.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 py-4">
              <div className="flex flex-col bg-[#323232] text-white rounded-3xl overflow-hidden relative">
                <p className="absolute z-20 text-[16px] text-white bg-[#A22020] font-semibold rounded-md translate-x-[-50%] translate-y-[-50%] left-[70px] top-[40px] px-[10px] py-[10px]">
                  Rp27.000
                </p>
                <div className="max-w-full h-[200px] relative">
                  <Image
                    src={"/dendengbatoko.jpg"}
                    fill
                    objectFit="cover"
                    alt="dendengbatoko"
                  />
                </div>
                <div className="flex flex-col p-7 gap-2">
                  <h1 className="text-[24px]">Dendeng Batokok</h1>
                  <p className="text-[14px] font-normal">
                    Dendeng Batokok adalah salah satu hidangan khas Padang yang
                    menggugah selera.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="grid grid-cols-2 gap-5 justify-items-center items-center mx-5">
          <Image
            className="object-cover p-2 col-span-2 md:col-span-1 rounded-[25px]"
            src={"/logo-reklame.jpg"}
            alt="reklame"
            width={600}
            height={600}
            layout="intrinsic"
          ></Image>
          <div className="text-center md:text-start col-span-2 flex flex-col md:col-span-1 gap-6 max-w-[550px]">
            <h1 className="text-[#A22020] text-[60px] ">SIMPANG RAYA</h1>
            <p className="text-[14px] font-normal">
              <span className="font-semibold">Restoran Simpang Raya</span>{" "}
              adalah usaha pribumi yang bergerak dibidang masakan Minang
              (Padang), dan pada awalnya Restoran Simpang Raya berdiri di Bukit
              Tinggi daerah Sumatra Barat oleh Alm.Muhammad Noor Datuk Maharajo
              bersama rekan-rekannya. Setelah itu adik dari Alm. Muhammad Noor
              yakni H.Noersal Zainuddin mengembangkan usaha ini di Pulau Jawa
              dan sekitarnya dengan niat untuk melakukan suatu hijrah
            </p>
            <p className="bg-[#A22020] px-10 py-5 text-[12px] text-[#f9f9f9] md:me-auto justify-start">
              BACA TENTANG KAMI
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-full bg-[#A22020]">
        <div className="max-w-[1170px] mx-auto flex flex-col py-20 px-7">
          <p className="text-white text-center text-[16px]">
            Menu - Simpang Raya
          </p>
          <h1 className="text-[#FFEB9A] text-center text-[60px]">MAKANAN</h1>
          <SliderMakanan />
          <h1 className="text-[#FFEB9A] text-center text-[60px]">MINUMAN</h1>
          <SliderMinuman />
          <h1 className="text-[#FFEB9A] text-center text-[60px]">DESSERT</h1>
          <SliderDessert />
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto flex flex-col py-20">
        <h1 className="text-center text-[60px] text-[#A22020]">
          CABANG SIMPANG RAYA
        </h1>
        <p className="text-center">(Work in Progress :))</p>
      </div>
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row py-20 px-5 justify-between gap-4">
        <div className="flex flex-col max-w-full md:max-w-[512px] p-3 gap-6">
          <h1 className="text-[60px] text-black">Kirim Kami Pesan!</h1>
          <div>
            <p className="mb-3 text-[16px]">
              Anda dapat menguhubungi kami melalui kontak atau sosial media
              kami. Kami dengan senang hati terhubung bersama Anda.
            </p>
            <p className="text-[16px]">
              Kunjungi Kami di resto cabang Kami yang tersebar di berbagai
              provinsi dan kota-kota besar di Indonesia.
            </p>
          </div>
          <div className="flex flex-row gap-6">
            <div className="rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[#A22020]">
              <BsFillTelephoneFill size={35} className="text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-[25px]">Telepon</h1>
              <p>0852 8241 9922</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[#A22020]">
              <MdOutlineEmail size={35} className="text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-[25px]">Email</h1>
              <p>official@simpangraya.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[#A22020]">
              <FaInstagram size={35} className="text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-[25px]">Instagram</h1>
              <p>@simpang_raya</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full">
          <div className="bg-[#747474] flex justify-center items-center h-[700px]">
            <form className="flex flex-col justify-center items-center gap-3 w-full max-w-[100%]">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[42px] w-full max-w-[90%]"
              ></input>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email (example@rmail.com)"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[42px] w-full max-w-[90%]"
              ></input>
              <input
                type="number"
                id="contactNumber"
                name="contactNumber"
                placeholder="Your Contact Number"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[42px] w-full max-w-[90%]"
              ></input>
              <input
                type="text"
                id="messageSubject"
                name="messageSubject"
                placeholder="Your Message Subject"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[42px] w-full max-w-[90%]"
              ></input>
              <input
                type="textarea"
                id="message"
                name="message"
                placeholder="Your Message Here"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[160px] w-full max-w-[90%]"
              ></input>
              <button
                type="submit"
                className="bg-[#A22020] text-white px-10 py-5 font-bold "
              >
                KIRIM PESAN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
