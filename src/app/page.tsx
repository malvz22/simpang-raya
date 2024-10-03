"use client";
import Image from "next/image";
import Hero from "./Components/Hero";

import Slider from "react-slick";

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
      <div className="flex flex-col mt-7 max-w-[1170px] mx-auto">
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
      </div>
    </>
  );
}
