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
    name: "Jus Alpukat",
    category: "Minuman",
    imageSrc: "/jus-alpukat.jpg",
    imageAlt: "jusalpukat",
    menuDesc:
      "Terbuat dari daging sapi yang dipukul hingga empuk, kemudian dipanggang dan disajikan dengan cabai hijau yang pedas dan segar. Proses pemukulan daging menghasilkan tekstur yang lembut dan mudah dikunyah, sementara bumbu rempah yang meresap sempurna memberikan cita rasa yang kaya dan autentik.",
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
          {["Makanan", "Minuman", "Dessert", "Nasi Box"].map((category) => (
            <p
              key={category}
              className={`px-6 py-2 col-span-1 font-semibold flex-wrap rounded-xl text-[18px] text-white  cursor-pointer transition-all duration-950 hover:bg-[#f03838] ${
                selectedButton === category ? "bg-[#f03838]" : "bg-[#A22020]"
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
                <p className="absolute z-20 text-[16px] text-white bg-[#A22020] font-semibold rounded-md translate-x-[-50%] translate-y-[-50%] left-[70px] top-[40px] px-[10px] py-[10px]">
                  {menu.harga}
                </p>
              </div>
              <div className="flex flex-col p-7 gap-2 text-start">
                <h1 className="text-[24px]">{menu.name}</h1>
                <p className="text-[14px] font-normal">{menu.menuDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
