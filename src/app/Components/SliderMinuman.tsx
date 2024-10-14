"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuCard from "./MenuCard";

export default function SliderMinuman() {
  const settings = {
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-full">
        <Slider className="align-top" {...settings}>
          <MenuCard
            imageSrc="/teh-telur.jpg"
            menu="Teh Telur"
            desc="
							Teh Telur adalah minuman unik khas Padang dari Simpang Raya yang terbuat dari campuran teh hitam, susu kental manis, dan telur ayam. Rasakan kelezatan kombinasi rasa yang khas dan otentik.
"
          />
          <MenuCard
            imageSrc="/jus-alpukat.jpg"
            menu="Jus Alpukat"
            desc="
							Nikmati segarnya jus alpukat khas Indonesia di Simpang Raya. Diproses dari alpukat pilihan, jus ini menghadirkan cita rasa lembut alpukat yang kaya akan nutrisi. Rasakan kelezatan alpukat yang lembut dan manis dalam setiap tegukan, sempurna untuk menemani santapan Anda di Restoran Padang Simpang Raya.						"
          />
          <MenuCard
            imageSrc="/jus-kopyor.jpg"
            menu="Jus Kopyor"
            desc="
							Nikmati kesegaran dan kelezatan Jus Kopyor di Restoran Padang Simpang Raya. Dibuat dengan kelapa muda yang lembut dan air kelapa berkualitas, Jus Kopyor kami menawarkan cita rasa alami yang segar dan menyegarkan. Cocok dinikmati sebagai pendamping hidangan Padang kami yang khas atau sebagai minuman penutup yang menyegarkan setelah makan. Temukan sensasi alami yang tiada duanya dalam setiap tegukan Jus Kopyor kami."
          />
          <MenuCard
            imageSrc="/es-jeruk.jpg"
            menu="Es Jeruk"
            desc="
							
							Nikmati kesegaran Es Jeruk yang menyegarkan dari Simpang Raya. Dibuat dari jeruk pilihan yang segar, Es Jeruk kami menawarkan rasa manis alami dengan sedikit sentuhan asam yang memanjakan lidah. Minuman ini sempurna untuk menemani makanan khas Padang Anda, menghadirkan sensasi menyegarkan di setiap tegukan. Es Jeruk kami disajikan dingin, cocok untuk melepas dahaga di hari yang panas."
          />
          <MenuCard
            imageSrc="/jus-sirsak.jpg"
            menu="Jus Sirsak"
            desc="
							
							Nikmati segarnya jus alpukat khas Indonesia di Simpang Raya. Diproses dari alpukat pilihan, jus ini menghadirkan cita rasa lembut alpukat yang kaya akan nutrisi. Rasakan kelezatan alpukat yang lembut dan manis dalam setiap tegukan, sempurna untuk menemani santapan Anda di Restoran Padang Simpang Raya."
          />
          <MenuCard
            imageSrc="/jus-buah-naga.jpg"
            menu="Jus Buah Naga"
            desc="
							Nikmati kelezatan segar jus buah naga dari Simpang Raya, restoran Padang yang terkenal. Dibuat dengan buah naga segar yang kaya akan antioksidan, jus ini menggabungkan rasa manis alami buah naga dengan kesegaran yang tak tertandingi. Sajikan dalam sajian yang menyegarkan dan cocok untuk dinikmati setiap saat."
          />
        </Slider>
      </div>
    </>
  );
}
