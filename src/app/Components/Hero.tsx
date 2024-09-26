"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div className="h-[280px] w-auto mx-auto">
            <Image src={"/hero1.png"} fill alt="hero1" objectFit="cover" />
            <div className="absolute flex flex-col translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] text-center gap-5 break-words text-balance w-auto">
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
        </Slider>
      </div>
    </>
  );
}
