"use client";

import Image from "next/image";
import { useState } from "react";

interface Menu {
  category: string;
  name: string;
  imageAlt: string;
  imageSrc: string;
  menuDesc: string;
  harga: string;
}

const menus: Menu[] = [
  {
    name: "Ayam Pop",
    category: "Makanan",
    imageSrc: "/ayampop.jpg",
    imageAlt: "ayampop",
    menuDesc:
      "Daging ayam yang lembut dimasak dengan teknik khusus hingga menghasilkan warna putih yang khas dan rasa yang gurih. Ayam Pop disajikan dengan sambal khas yang pedas dan segar, serta lalapan seperti daun singkong atau sayuran rebus.",
    harga: "Rp27.000",
  },
  {
    name: "Rendang",
    category: "Makanan",
    imageSrc: "/rendang.jpg",
    imageAlt: "rendang",
    menuDesc:
      "Terbuat dari daging sapi yang dimasak perlahan dalam campuran santan dan bumbu-bumbu khas Indonesia. Rendang Simpang Raya menawarkan keaslian cita rasa tradisional yang tidak hanya memanjakan lidah, tetapi juga menghadirkan pengalaman kuliner yang autentik.",
    harga: "Rp27.000",
  },
  {
    name: "Ayam Panas",
    category: "Makanan",
    imageSrc: "/ayampanas.jpg",
    imageAlt: "ayampanas",
    menuDesc:
      "Potongan ayam kampung yang empuk dimasak dengan bumbu rempah pilihan, lalu digoreng hingga kulitnya renyah sempurna. Hidangan ini disajikan dengan sambal cabai merah yang pedas dan segar, menambah sensasi kenikmatan di setiap gigitan.",
    harga: "Rp27.000",
  },
  {
    name: "Soto Padang",
    category: "Makanan",
    imageSrc: "/soto-padang.jpg",
    imageAlt: "soto",
    menuDesc:
      "Hidangan khas Minangkabau yang terkenal dengan kuah kaldu sapi kaya rempah dan santan, disajikan dengan dendeng kering, bihun, perkedel, dan bawang goreng sebagai pelengkap.",
    harga: "Rp27.000",
  },
  {
    name: "Ikan Kepala Kakap",
    category: "Makanan",
    imageSrc: "/ikan-kepala-kakap.jpg",
    imageAlt: "kakap",
    menuDesc:
      "Dibuat dengan kepala kakap segar yang dimasak dalam campuran rempah-rempah khas Minang yang melahirkan cita rasa gurih dan lezat. Setiap gigitan menghadirkan paduan kuah santan kental yang melimpah, memanjakan lidah dengan tekstur lembut dan aroma rempah yang menggugah selera.",
    harga: "Rp27.000",
  },
  {
    name: "Dendeng Batoko",
    category: "Makanan",
    imageSrc: "/dendengbatoko.jpg",
    imageAlt: "batoko",
    menuDesc:
      "Terbuat dari daging sapi yang dipukul hingga empuk, kemudian dipanggang dan disajikan dengan cabai hijau yang pedas dan segar. Proses pemukulan daging menghasilkan tekstur yang lembut dan mudah dikunyah, sementara bumbu rempah yang meresap sempurna memberikan cita rasa yang kaya dan autentik.",
    harga: "Rp27.000",
  },
  {
    name: "Udang Lado",
    category: "Makanan",
    imageSrc: "/udang-lado.jpg",
    imageAlt: "udanglado",
    menuDesc:
      "Hidangan udang yang digoreng dengan bumbu cabe hijau khas Padang. Nikmati kombinasi udang yang segar dengan cita rasa pedas dan menggugah selera.",
    harga: "Rp27.000",
  },
  {
    name: "Ikan Bilis",
    category: "Makanan",
    imageSrc: "/ikan-bilis.jpg",
    imageAlt: "ikanbilis",
    menuDesc:
      "Dibuat dengan teknik tradisional yang dipadu dengan rempah-rempah pilihan, hidangan ini adalah kombinasi sempurna dari keseimbangan rasa dan tekstur. Setiap gigitan memberikan pengalaman kuliner yang tak terlupakan dari dapur kami yang terkenal dengan keahlian dalam masakan Padang.",
    harga: "Rp27.000",
  },
  {
    name: "Tunjang Kikil",
    category: "Makanan",
    imageSrc: "/tunjang-kikil.jpg",
    imageAlt: "tunjangkikil",
    menuDesc:
      "Hidangan khas Padang yang terbuat dari kikil sapi yang dimasak dengan bumbu rempah yang kaya rasa. Rasakan kelezatan daging kikil dengan cita rasa rempah yang khas.",
    harga: "Rp27.000",
  },
  {
    name: "Soto Padang",
    category: "Makanan",
    imageSrc: "/soto-padang.jpg",
    imageAlt: "sotopadang",
    menuDesc:
      "Hidangan khas Minangkabau yang terkenal dengan kuah kaldu sapi kaya rempah dan santan, disajikan dengan dendeng kering, bihun, perkedel, dan bawang goreng sebagai pelengkap. Rasakan cita rasa yang kaya dan tekstur yang lezat dalam setiap suapan.",
    harga: "Rp27.000",
  },
  {
    name: "Sop Iga",
    category: "Makanan",
    imageSrc: "/sop-iga.jpg",
    imageAlt: "sopiga",
    menuDesc:
      "Hidangan khas yang terbuat dari iga sapi yang dimasak dalam kuah kaldu gurih dengan tambahan sayuran segar. Nikmati iga sapi yang lembut dan kuah kaldu yang kaya rasa.",
    harga: "Rp27.000",
  },
  {
    name: "Gulai Gajeboh",
    category: "Makanan",
    imageSrc: "/gulai-gajeboh.jpg",
    imageAlt: "gulai gajeboh",
    menuDesc:
      "Terbuat dari daging sapi bagian punuk yang empuk, gulai ini dimasak dengan santan kental dan rempah-rempah seperti kunyit, lengkuas, serai, dan daun jeruk. Hasilnya adalah kuah berwarna kuning keemasan dengan rasa gurih dan pedas yang sempurna.",
    harga: "Rp27.000",
  },
  {
    name: "Dendeng Lambok",
    category: "Makanan",
    imageSrc: "/dendeng-lambok.jpg",
    imageAlt: "dendeng lambok",
    menuDesc:
      "Hidangan khas Padang yang menggugah selera dengan potongan daging sapi tipis yang dimasak hingga empuk. Daging sapi ini dibalut bumbu rempah pilihan seperti cabai merah, bawang putih, dan serai, menghasilkan rasa pedas dan gurih yang khas. Setiap potongan dendeng lambok memiliki tekstur yang lembut namun kaya akan cita rasa.",
    harga: "Rp27.000",
  },
  {
    name: "Ayam Bakar Padang",
    category: "Makanan",
    imageSrc: "/ayam-bakar.jpg",
    imageAlt: "ayam bakar",
    menuDesc:
      "Hidangan khas Sumatera Barat yang menggugah selera. Ayam dibumbui dengan rempah-rempah khas Padang seperti kunyit, serai, dan lengkuas, lalu dipanggang hingga sempurna. Hidangan ini terkenal dengan cita rasa pedas dan gurih yang meresap hingga ke dalam daging, memberikan pengalaman kuliner yang otentik dan lezat.",
    harga: "Rp27.000",
  },
  {
    name: "Ayam Goreng",
    category: "Makanan",
    imageSrc: "/ayam-goreng.jpg",
    imageAlt: "ayam goreng",
    menuDesc:
      "Hidangan khas Minangkabau yang menawarkan rasa autentik dan lezat. Ayam yang telah direndam dalam bumbu rempah khas Padang, seperti kunyit, lengkuas, dan serai.",
    harga: "Rp27.000",
  },
  {
    name: "Ayam Gulai",
    category: "Makanan",
    imageSrc: "/ayam-gulai.jpg",
    imageAlt: "ayam gulai",
    menuDesc:
      "Hidangan khas Padang yang kaya akan cita rasa rempah. Potongan ayam dimasak dalam kuah santan yang gurih, berpadu dengan bumbu-bumbu tradisional seperti kunyit, lengkuas, serai, daun jeruk, dan cabai. Proses pemasakan yang lambat memastikan setiap potongan ayam meresap dengan sempurna, menciptakan tekstur yang lembut dan rasa yang mendalam.",
    harga: "Rp27.000",
  },
  {
    name: "Gulai Tambusu",
    category: "Makanan",
    imageSrc: "/gulai-tambusu.jpg",
    imageAlt: "gulai tambusu",
    menuDesc:
      "Hidangan khas Padang yang memukau dengan kombinasi lembut usus sapi yang di isi dengan adonan telur, santan kental yang kaya rasa, dan rempah-rempah pilihan. Setiap suapan mempersembahkan sentuhan lembut dan kaya rasa dari rempah tradisional Minangkabau.",
    harga: "Rp27.000",
  },
  {
    name: "Telur Barendo",
    category: "Makanan",
    imageSrc: "/telur-barendo.jpg",
    imageAlt: "telur barendo",
    menuDesc:
      "Hidangan telur dadar yang digoreng dengan bumbu rempah, menciptakan tekstur lembut serta crispy dan rasa gurih yang memikat.",
    harga: "Rp27.000",
  },
  {
    name: "Ikan Kembung Bakar Balado",
    category: "Makanan",
    imageSrc: "/ikan-kembung-bakar-balado.jpg",
    imageAlt: "ikan kembung bakar balado",
    menuDesc:
      "Hidangan khas Padang yang menggugah selera. Ikan kembung segar dipanggang hingga sempurna, kemudian disajikan dengan sambal balado pedas yang menggigit. Kombinasi rasa gurih dari ikan bakar dengan kepedasan sambal balado menjadikan hidangan ini favorit bagi pecinta makanan pedas.",
    harga: "Rp27.000",
  },
  {
    name: "Sayur Pepaya",
    category: "Makanan",
    imageSrc: "/sayur-pepaya.jpg",
    imageAlt: "sayur pepaya",
    menuDesc:
      "Hidangan yang terbuat dari pepaya muda yang dipotong kecil dan dimasak dengan santan serta rempah-rempah khas Padang. Memiliki tekstur lembut dan cita rasa yang khas.",
    harga: "Rp27.000",
  },
  {
    name: "Sambal Hijau",
    category: "Makanan",
    imageSrc: "/sambal-hijau.jpg",
    imageAlt: "sambal hijau",
    menuDesc:
      "Sajian pedas dan segar yang terbuat dari cabai hijau yang dihaluskan dan dibumbui dengan rempah-rempah khas. Cocok sebagai pelengkap hidangan untuk menambah selera makan Anda.",
    harga: "Rp27.000",
  },
  {
    name: "Perkedel Kentang",
    category: "Makanan",
    imageSrc: "/perkedel-kentang.jpg",
    imageAlt: "perkedel kentang",
    menuDesc:
      "Camilan lezat yang terbuat dari kentang yang dihaluskan dan dibumbui dengan rempah khas. Digoreng hingga kecokelatan, perkedel ini cocok sebagai pelengkap hidangan utama atau dinikmati sendiri.",
    harga: "Rp27.000",
  },
  {
    name: "Gulai Cumi",
    category: "Makanan",
    imageSrc: "/gulai-cumi.jpg",
    imageAlt: "gulai cumi",
    menuDesc:
      "Terbuat dari cumi-cumi segar yang dimasak dalam kuah santan beraroma rempah. Cumi-cumi yang kenyal dan gurih menyerap bumbu-bumbu seperti kunyit, lengkuas, serai, dan daun jeruk, menciptakan perpaduan rasa yang kaya dan nikmat.",
    harga: "Rp27.000",
  },
  {
    name: "Sayur Pare",
    category: "Makanan",
    imageSrc: "/sayur-pare.jpg",
    imageAlt: "sayur pare",
    menuDesc:
      "Hidangan yang terbuat dari pare yang dipotong tipis dan dimasak dengan rempah-rempah khas. Memiliki cita rasa yang sedikit pahit namun sangat nikmat, cocok sebagai pelengkap hidangan utama.",
    harga: "Rp27.000",
  },
  {
    name: "Jus Alpukat",
    category: "Minuman",
    imageSrc: "/jus-alpukat.jpg",
    imageAlt: "jusalpukat",
    menuDesc:
      "Diproses dari alpukat pilihan, jus ini menghadirkan cita rasa lembut alpukat yang kaya akan nutrisi. Rasakan kelezatan alpukat yang lembut dan manis dalam setiap tegukan, sempurna untuk menemani santapan Anda di Restoran Padang Simpang Raya.",
    harga: "Rp27.000",
  },
  {
    name: "Jus Sirsak",
    category: "Minuman",
    imageSrc: "/jus-sirsak.jpg",
    imageAlt: "jus sirsak",
    menuDesc:
      "Diproses dari buah sirsak pilihan, jus ini menawarkan kombinasi sempurna antara rasa manis dan sedikit asam yang menyegarkan. Dibuat tanpa tambahan gula, jus sirsak kami adalah pilihan sehat dan menyegarkan untuk menemani santap Anda di restoran kami.",
    harga: "Rp27.000",
  },
  {
    name: "Jus Kopyor",
    category: "Minuman",
    imageSrc: "/jus-kopyor.jpg",
    imageAlt: "jus kopyor",
    menuDesc:
      "Dibuat dengan kelapa muda yang lembut dan air kelapa berkualitas, Jus Kopyor kami menawarkan cita rasa alami yang segar dan menyegarkan. Cocok dinikmati sebagai pendamping hidangan Padang kami yang khas atau sebagai minuman penutup yang menyegarkan setelah makan.",
    harga: "Rp27.000",
  },
  {
    name: "Es Jeruk",
    category: "Minuman",
    imageSrc: "/es-jeruk.jpg",
    imageAlt: "es jeruk",
    menuDesc:
      "Dibuat dari jeruk pilihan yang segar, Es Jeruk kami menawarkan rasa manis alami dengan sedikit sentuhan asam yang memanjakan lidah. Minuman ini sempurna untuk menemani makanan khas Padang Anda, menghadirkan sensasi menyegarkan di setiap tegukan.",
    harga: "Rp27.000",
  },
  {
    name: "Teh Telur",
    category: "Minuman",
    imageSrc: "/teh-telur.jpg",
    imageAlt: "teh telur",
    menuDesc:
      "Teh Telur adalah minuman unik khas Padang dari Simpang Raya yang terbuat dari campuran teh hitam, susu kental manis, dan telur ayam. Rasakan kelezatan kombinasi rasa yang khas dan otentik.",
    harga: "Rp27.000",
  },
  {
    name: "Jus Buah Naga",
    category: "Minuman",
    imageSrc: "/jus-buah-naga.jpg",
    imageAlt: "jus buah naga",
    menuDesc:
      "Dibuat dengan buah naga segar yang kaya akan antioksidan, jus ini menggabungkan rasa manis alami buah naga dengan kesegaran yang tak tertandingi. ",
    harga: "Rp27.000",
  },
  {
    name: "Strawberry Squash",
    category: "Minuman",
    imageSrc: "/strawberry-squash.jpg",
    imageAlt: "strawberry squash",
    menuDesc:
      "Minuman segar yang terbuat dari jus strawberry asli yang dicampur dengan air soda atau air soda kental untuk rasa yang menyegarkan. Cocok dinikmati sebagai minuman penyegar di hari yang panas.",
    harga: "Rp27.000",
  },
  {
    name: "Lemon Squash",
    category: "Minuman",
    imageSrc: "/lemon-squash.jpg",
    imageAlt: "lemon squash",
    menuDesc:
      "Minuman segar yang terbuat dari lemon dan dicampur dengan air soda. Rasakan kesegaran dan keasaman yang menyegarkan, cocok untuk dinikmati di hari yang panas.",
    harga: "Rp27.000",
  },
  {
    name: "Banana Split",
    category: "Dessert",
    imageSrc: "/banana-split.jpg",
    imageAlt: "banana split",
    menuDesc:
      "Hidangan ini terdiri dari pisang matang yang dibelah dua, disajikan dengan tiga bola es krim rasa vanila, coklat, dan stroberi. Ditambahkan dengan siraman saus coklat dan stroberi, kacang almond panggang, whipped cream, dan ceri merah di atasnya.",
    harga: "Rp27.000",
  },
  {
    name: "Es Teler",
    category: "Dessert",
    imageSrc: "/es-teler.jpg",
    imageAlt: "es teler",
    menuDesc:
      "Terdiri dari campuran buah-buahan tropis seperti alpukat, kelapa muda, nangka, dan kolang-kaling, disajikan dengan sirup gula, santan, dan es serut. Minuman ini adalah pilihan sempurna untuk melepas dahaga di hari yang panas, menawarkan kombinasi rasa manis dan creamy yang memanjakan lidah.",
    harga: "Rp27.000",
  },
  {
    name: "Es Campur",
    category: "Dessert",
    imageSrc: "/es-campur.jpg",
    imageAlt: "es campur",
    menuDesc:
      "Terdiri dari campuran es serut, sirup manis, dan susu kental, dilengkapi dengan aneka topping seperti cincau, tape, kelapa muda, dan buah-buahan segar. Es Campur ini adalah pilihan sempurna untuk menghilangkan dahaga dan menikmati manisnya cita rasa khas Indonesia.",
    harga: "Rp27.000",
  },
  {
    name: "Es Cianjur",
    category: "Dessert",
    imageSrc: "/es-cianjur.jpg",
    imageAlt: "es cianjur",
    menuDesc:
      "Minuman segar khas yang menawarkan kesegaran es durian yang dipadukan dengan aneka topping seperti surup manis, jelly dan buah-buahan. Cocok dinikmati pada hari yang panas, Es Cianjur ini menawarkan perpaduan rasa manis dan segar yang sempurna, menjadikannya pilihan favorit pelanggan untuk melepas dahaga.",
    harga: "Rp27.000",
  },
  {
    name: "Sop Durian",
    category: "Dessert",
    imageSrc: "/sop-durian.jpg",
    imageAlt: "sop durian",
    menuDesc:
      "Hidangan yang menggabungkan durian matang dengan santan dan gula, menciptakan rasa manis dan tekstur lembut yang khas. Cocok sebagai hidangan penutup yang memikat.",
    harga: "Rp27.000",
  },
];

export default function About() {
  const [selectedButton, setSelectedButton] = useState<string>("All");

  const filterMenu = (category: string) => {
    setSelectedButton(category);
  };

  const filteredMenu =
    selectedButton === "All"
      ? menus
      : menus.filter((menu) => menu.category === selectedButton);

  return (
    <>
      <div className="relative w-full max-w-full h-[400px]">
        <Image src={"/hero1.png"} alt="reklame" fill objectFit="cover" />
        <div className="absolute flex flex-col translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-full max-w-[1170px] text-start text-white px-10">
          <h1 className="text-[20px]">SIMPANG RAYA</h1>
          <h1 className="text-[70px]">Menu</h1>
        </div>
      </div>
      <div className="max-w-[1170px] px-12 mx-auto text-center flex flex-col py-[100px] justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["All", "Makanan", "Minuman", "Dessert"].map((category) => (
            <p
              key={category}
              className={`px-5 py-2 col-span-1 font-semibold flex-wrap border-solid border-[2px] border-[#A22020] text-[16px] cursor-pointer transition-all duration-950 hover:bg-[#A22020] hover:text-white ${
                selectedButton === category
                  ? "bg-[#A22020] text-white"
                  : "bg-white"
              }`}
              onClick={() => filterMenu(category)}
            >
              {category}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-full md:max-w-[745px] lg:max-w-full gap-8 py-[80px] justify-items-center items-center">
          {filteredMenu.map((menu, index) => (
            <div
              key={index}
              className="col-span-1 flex flex-col overflow-hidden w-full max-w-full h-[550px] rounded-2xl text-white bg-[#171717]"
            >
              <div className="w-full max-w-full h-[220px] relative">
                <Image
                  src={menu.imageSrc}
                  alt={menu.imageAlt}
                  fill
                  objectFit="cover"
                />
                {/* <p className="absolute z-20 text-[16px] text-white bg-[#A22020] font-semibold rounded-md translate-x-[-50%] translate-y-[-50%] left-[70px] top-[40px] px-[10px] py-[10px]">
                  {menu.harga}
                </p> */}
              </div>
              <div className="flex flex-col p-7 gap-2 text-start">
                <h1 className="text-[24px] text-[#FFEB9A]">{menu.name}</h1>
                <p className="text-[16px] font-normal">{menu.menuDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
