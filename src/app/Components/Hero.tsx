"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Hero() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: number) => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          color: "#FFFFFF",
        }}
        className="slick-dots"
      >
        <ul
          style={{
            color: "white",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div className="w-full max-w-full h-[700px] mx-auto relative">
            <Image src={"/hero1.png"} fill alt="hero1" objectFit="cover" />
            <div className="absolute flex flex-col translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] text-center gap-5 break-words text-balance w-full max-w-[1024px] p-12">
              <h1 className="text-white text-[50px] font-normal text-center">
                SIMPANG RAYA
              </h1>
              <p className="text-center text-white text-[18px]">
                Simpang Raya adalah restoran khas Minang yang telah berdiri
                lebih dari 45 tahun, menyajikan masakan tradisional padang
                dengan cita rasa autentik. Dengan pengalaman puluhan tahun, kami
                menawarkan berbagai hidangan lezat yang menggunakan resep
                turun-temurun dan bahan-bahan berkualitas tinggi. Nikmati
                pengalaman kuliner yang kaya akan budaya dan tradisi di setiap
                sajian kami.
              </p>

              <p className="text-white mx-auto text-[15px] px-4 py-3 bg-[#A22020] inline-block font-semibold">
                SELENGKAPNYA
              </p>
            </div>
          </div>
          <div className="w-full max-w-full h-[700px] mx-auto relative">
            <Image src={"/hero2.jpg"} fill alt="hero1" objectFit="cover" />
            <div className="absolute flex flex-col translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] text-center gap-5 break-words text-balance w-full max-w-[1024px] p-12">
              <h1 className="text-white text-[50px] font-normal text-center">
                MASAKAN KHAS MINANG
              </h1>
              <p className="text-center text-white text-[18px]">
                Simpang Raya menyajikan beragam masakan khas Minang yang
                dipadukan dengan cita rasa modern. Setiap hidangan dibuat dengan
                bahan-bahan segar dan resep turun-temurun, namun diberi sentuhan
                inovasi untuk menciptakan pengalaman kuliner yang unik. Nikmati
                perpaduan sempurna antara tradisi dan modernitas di setiap
                sajian kami.
              </p>

              <p className="text-white mx-auto text-[15px] px-4 py-3 bg-[#A22020] inline-block font-semibold">
                SELENGKAPNYA
              </p>
            </div>
          </div>
          <div className="w-full max-w-full h-[700px] mx-auto relative">
            <Image src={"/hero3.jpg"} fill alt="hero1" objectFit="cover" />
            <div className="absolute flex flex-col translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] text-center gap-5 break-words text-balance w-full max-w-[1024px] p-12">
              <h1 className="text-white text-[50px] font-normal text-center">
                AKSES YANG DEKAT
              </h1>
              <p className="text-center text-white text-[18px]">
                Kami membuka cabang di berbagai wilayah di Pulau Jawa dan
                Kalimantan untuk memudahkan Anda mencicipi rasa khas Minang.
                Dengan kehadiran kami di lokasi-lokasi strategis, Anda dapat
                menikmati hidangan autentik Minang tanpa harus jauh-jauh ke
                Padang. Setiap cabang kami memastikan kualitas dan cita rasa
                yang sama, menghadirkan pengalaman kuliner Minang yang otentik
                di dekat Anda.
              </p>

              <p className="text-white mx-auto text-[15px] px-4 py-3 bg-[#A22020] inline-block font-semibold">
                SELENGKAPNYA
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
