"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuCard from "./MenuCard";

export default function SliderDessert() {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: true,
  };
  return (
    <>
      <div className="max-w-full">
        <Slider className="align-top" {...settings}>
          <MenuCard
            imageSrc="/es-campur.jpg"
            menu="Es Campur"
            desc="
							Es Campur adalah hidangan pencuci mulut yang menyegarkan dan kaya akan rasa. Terdiri dari campuran es serut, sirup manis, dan susu kental, dilengkapi dengan aneka topping seperti cincau, tape, kelapa muda, dan buah-buahan segar. Es Campur ini adalah pilihan sempurna untuk menghilangkan dahaga dan menikmati manisnya cita rasa khas Indonesia."
          />
          <MenuCard
            imageSrc="/sop-durian.jpg"
            menu="Sop Durian"
            desc="
							Sop Durian dari Simpang Raya adalah hidangan yang menggabungkan durian matang dengan santan dan gula, menciptakan rasa manis dan tekstur lembut yang khas. Cocok sebagai hidangan penutup yang memikat."
          />
          <MenuCard
            imageSrc="/es-cianjur.jpg"
            menu="Es Cianjur"
            desc="
							Es Cianjur di Simpang Raya adalah minuman segar khas yang menawarkan kesegaran es durian yang dipadukan dengan aneka topping seperti surup manis, jelly dan buah-buahan. Cocok dinikmati pada hari yang panas, Es Cianjur ini menawarkan perpaduan rasa manis dan segar yang sempurna, menjadikannya pilihan favorit pelanggan untuk melepas dahaga."
          />
          <MenuCard
            imageSrc="/stone-cold.jpg"
            menu="Stone Cold"
            desc="Stone Cold merupakan menu desert yang dapet kamu pilih di Simpang raya , Stone Cold merupakan perpaduan ice cream yang disajikan di Simpang Raya."
          />
          <MenuCard
            imageSrc="/banana-split.jpg"
            menu="Banana Split"
            desc="
							Banana Split kami adalah kombinasi sempurna dari kesegaran buah dan kelezatan es krim. Hidangan ini terdiri dari pisang matang yang dibelah dua, disajikan dengan tiga bola es krim rasa vanila, coklat, dan stroberi. Ditambahkan dengan siraman saus coklat dan stroberi, kacang almond panggang, whipped cream, dan ceri merah di atasnya. Banana Split ini menawarkan rasa manis yang sempurna dan tekstur yang memuaskan, membuatnya menjadi pilihan dessert yang tidak boleh dilewatkan di Restoran Padang Simpang Raya."
          />
          <MenuCard
            imageSrc="/es-teler.jpg"
            menu="Es Teler"
            desc="
							Es Teler adalah minuman penutup khas Indonesia yang menyegarkan dan lezat, terdiri dari campuran buah-buahan tropis seperti alpukat, kelapa muda, nangka, dan kolang-kaling, disajikan dengan sirup gula, santan, dan es serut. Minuman ini adalah pilihan sempurna untuk melepas dahaga di hari yang panas, menawarkan kombinasi rasa manis dan creamy yang memanjakan lidah. Es Teler sangat populer di kalangan pencinta kuliner Indonesia dan sering dijadikan penutup dalam berbagai acara."
          />
        </Slider>
      </div>
    </>
  );
}
