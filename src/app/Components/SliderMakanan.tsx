"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuCard from "./MenuCard";

export default function SliderMakanan() {
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
            imageSrc="/ayampop.jpg"
            menu="Ayam Pop"
            desc="Ayam Pop dari Restoran Simpang Raya adalah hidangan khas dari
                  Sumatera Barat yang menawarkan cita rasa yang unik dan lezat.
                  Daging ayam yang lembut dimasak dengan teknik khusus hingga
                  menghasilkan warna putih yang khas dan rasa yang gurih. Ayam
                  Pop disajikan dengan sambal khas yang pedas dan segar, serta
                  lalapan seperti daun singkong atau sayuran rebus."
          />
          <MenuCard
            imageSrc="/rendang.jpg"
            menu="Rendang"
            desc="Rendang adalah hidangan khas Minangkabau yang terkenal dengan
                  kelezatannya dan aroma rempah yang kuat. Terbuat dari daging
                  sapi yang dimasak perlahan dalam campuran santan dan
                  bumbu-bumbu khas Indonesia. Rendang Simpang Raya menawarkan
                  keaslian cita rasa tradisional yang tidak hanya memanjakan
                  lidah, tetapi juga menghadirkan pengalaman kuliner yang
                  autentik."
          />
          <MenuCard
            imageSrc="/ayampanas.jpg"
            menu="Ayam Panas"
            desc="Ayam Panas adalah sajian khas yang memadukan cita rasa gurih
                  khas masakan Padang. Potongan ayam kampung yang empuk dimasak
                  dengan bumbu rempah pilihan, lalu digoreng hingga kulitnya
                  renyah sempurna. Hidangan ini disajikan dengan sambal cabai
                  merah yang pedas dan segar, menambah sensasi kenikmatan di
                  setiap gigitan. Ayam Panas Simpang Raya cocok dinikmati
                  bersama nasi putih hangat dan sayur daun singkong rebus."
          />
          <MenuCard
            imageSrc="/dendengbatoko.jpg"
            menu="Dendeng Batoko"
            desc="
							Dendeng Batokok adalah salah satu hidangan khas Padang yang menggugah selera. Terbuat dari daging sapi yang dipukul hingga empuk, kemudian dipanggang dan disajikan dengan cabai hijau yang pedas dan segar. Proses pemukulan daging menghasilkan tekstur yang lembut dan mudah dikunyah, sementara bumbu rempah yang meresap sempurna memberikan cita rasa yang kaya dan autentik. Hidangan ini cocok disajikan dengan nasi hangat dan sayur-sayuran segar.						"
          />
          <MenuCard
            imageSrc="/ikan-kepala-kakap.jpg"
            menu="Ikan Kepala Kakap"
            desc="
							Nikmati kelezatan Gulai Kepala Kakap di Restoran Padang Simpang Raya. Dibuat dengan kepala kakap segar yang dimasak dalam campuran rempah-rempah khas Minang yang melahirkan cita rasa gurih dan lezat. Setiap gigitan menghadirkan paduan kuah santan kental yang melimpah, memanjakan lidah dengan tekstur lembut dan aroma rempah yang menggugah selera. Sajian yang sempurna untuk menikmati kekayaan kuliner Indonesia di tengah kenyamanan restoran kami.						"
          />
          <MenuCard
            imageSrc="/soto-padang.jpg"
            menu="Soto Padang"
            desc="
							Soto Padang dari Simpang Raya adalah hidangan khas Minangkabau yang terkenal dengan kuah kaldu sapi kaya rempah dan santan, disajikan dengan dendeng kering, bihun, perkedel, dan bawang goreng sebagai pelengkap. Rasakan cita rasa yang kaya dan tekstur yang lezat dalam setiap suapan."
          />
        </Slider>
      </div>
    </>
  );
}
