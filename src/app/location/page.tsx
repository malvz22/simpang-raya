"use client";

import Image from "next/image";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";

interface Branch {
  province: string;
  name: string;
  address: string;
  addressLink: string;
  telephone: string;
  imgSrc: string;
  imgAlt: string;
}

const branches: Branch[] = [
  {
    province: "Bali",
    name: "Restoran Simpang Raya Legian",
    address:
      "Jl. Dewi Sri No.112, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361",
    addressLink:
      "https://www.google.com/maps/place/Jl.+Dewi+Sri+No.112,+Kuta,+Kec.+Kuta,+Kabupaten+Badung,+Bali+80361/@-8.7076035,115.1786943,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd246cf382e5a01:0x33cf65e89fe9d62!8m2!3d-8.7076035!4d115.1786943!16s%2Fg%2F11fk26svpx?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
    telephone: "0857 7511 3758",
    imgSrc: "/cabang/cabang-legian.jpg",
    imgAlt: "Cabang Legian",
  },
  {
    province: "Bandara",
    name: "Restoran Padang Simpang Raya Soewarna",
    address:
      "Jl. Raya Bandara Soekarno-Hatta, RT.001/RW.004, Pajang, Kec. Benda, Kota Tangerang, Banten 15126",
    addressLink: "https://maps.app.goo.gl/jprhrkFick4GeQ6T7",
    telephone: "-",
    imgSrc: "/cabang/cabang-soewarna.jpeg",
    imgAlt: "Cabang Soewarna",
  },
  {
    province: "Bandara",
    name: "Simpang Raya Terminal 3 Bandara",
    address: "Bandara Soekarno-Hattta, Terminal 3",
    addressLink: "https://maps.app.goo.gl/b2yJcvWDWxQe1uit6",
    telephone: "-",
    imgSrc: "/cabang/cabang-terminal3.jpg",
    imgAlt: "Cabang Terminal 3",
  },
  {
    province: "Bandara",
    name: "Simpang Raya Terminal 2E",
    address: "Bandara Soekarno-Hattta, Terminal 2E",
    addressLink: "https://maps.app.goo.gl/Mox7iCgAYGGr4Mzc8",
    telephone: "-",
    imgSrc: "/cabang/cabang-terminal3.jpg",
    imgAlt: "Cabang Terminal 3",
  },
  {
    province: "Bandara",
    name: "Simpang Raya Terminal 2D",
    address: "Bandara Soekarno-Hattta, Terminal 2D",
    addressLink: "https://maps.app.goo.gl/FSNYWwfUPz4TWj1e7",
    telephone: "0819-11006601",
    imgSrc: "/cabang/cabang-terminal3.jpg",
    imgAlt: "Cabang Terminal 3",
  },
  {
    province: "Depok",
    name: "Restoran Simpang Raya Pancoran Mas",
    address:
      "Jl. Raya Sawangan No.2, Pancoran MAS, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16436",
    addressLink: "https://g.co/kgs/SHpS4PP",
    telephone: "(021) 2920884950",
    imgSrc: "/cabang/cabang-pancoran-mas.jpg",
    imgAlt: "Cabang Pancoran Mas",
  },
  {
    province: "Depok",
    name: "Restoran Simpang Raya Margonda",
    address:
      "Jl. Margonda No.264, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423",
    addressLink: "https://maps.app.goo.gl/JTBg3wj1JasMCu49A",
    telephone: "(021) 7520512",
    imgSrc: "/cabang/cabang-margonda.jpg",
    imgAlt: "Cabang Margonda",
  },
  {
    province: "Jakarta",
    name: "Restoran Simpang Raya Slipi",
    address:
      "Jl. Letjen S. Parman No.Kav 68, RT.1/RW.3, Slipi, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11410",
    addressLink: "https://maps.app.goo.gl/9qs7SocrzzgvTGiL9",
    telephone: "(021) 7520512",
    imgSrc: "/cabang/cabang-slipi.jpg",
    imgAlt: "Cabang Slipi",
  },
  {
    province: "Jakarta",
    name: "Simpang Raya Cibubur Square",
    address:
      "Rest Area Cibubur Square, JL Tol Jagorawi, Jalur A, Km. 10.600, RT.7/RW.1, Cipayung, Kec. Cipayung, Bogor, Daerah Khusus Ibukota Jakarta, 13840",
    addressLink: "https://maps.app.goo.gl/TZX5q37S6TGpUWxW9",
    telephone: "0813-86908711",
    imgSrc: "/cabang/cabang-cibubur-square.jpg",
    imgAlt: "Cabang Cibubur Square",
  },
  {
    province: "Jakarta",
    name: "Simpang Raya Kebayoran",
    address:
      "Jl. KH. Ahmad Dahlan Kby. No.2, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130",
    addressLink: "https://maps.app.goo.gl/UADSdfBapQSnMCBJ9",
    telephone: "081802326655",
    imgSrc: "/cabang/cabang-kebayoran.jpeg",
    imgAlt: "Cabang Kebayoran",
  },
  {
    province: "Jakarta",
    name: "Simpang Raya Jl. Minangkabau",
    address: "Jl.Minangkabau, No.33, Manggarai, Jakarta Selatan",
    addressLink: "https://maps.app.goo.gl/gezRN8rZwPEGua9G6",
    telephone: "0821-1695-1974",
    imgSrc: "/cabang/cabang-minangkabau.jpeg",
    imgAlt: "Cabang Minangkabau",
  },
  {
    province: "Jakarta",
    name: "Simpang Raya Hasyim Ashari",
    address:
      "Jl. KH. Hasyim Ashari No.51 1, RT.1/RW.11, Cideng, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10130",
    addressLink: "https://maps.app.goo.gl/WZaoNBvV9R1X3Gru6",
    telephone: "(021) 6319602",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Hasyim Ashari",
  },
  {
    province: "Jakarta",
    name: "Simpang Raya Ancol",
    address:
      "Jl. Pantai Indah, RW.10, Ancol, Kec. Pademangan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14430",
    addressLink: "https://maps.app.goo.gl/wzKATNuYGJGXJxYm8",
    telephone: "(021) 6455248",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Ancol",
  },
  {
    province: "Jakarta",
    name: "Simpang Raya Kramat",
    address:
      "Jl. Kramat Raya No.71, RT.1/RW.7, Kramat, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10430",
    addressLink: "https://maps.app.goo.gl/r359RVtCngjdeV8b6",
    telephone: "(021) 3920161",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Kramat",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 149",
    address:
      "Rest Area, Jl. Tol Padaleunyi No.Km 149, Cipagalo, Kec. Bojongsoang, Kabupaten Bandung, Jawa Barat 40287",
    addressLink: "https://maps.app.goo.gl/h8HMk8JR33cvP87e7",
    telephone: "082325988807",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM 149",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya Bandung",
    address:
      "Jl. Dr. Djunjunan No.182, Sukagalih, Kec. Sukajadi, Kota Bandung, Jawa Barat 40173",
    addressLink: "https://maps.app.goo.gl/B4UDQrdn9TWQyXKbA",
    telephone: "(022) 20055486",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Bandung",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 229B",
    address: "Rest Area Km 229 B Tol Palikanci - Pejagan",
    addressLink: "https://maps.app.goo.gl/ZfDkyTPJJXvAo9TZ6",
    telephone: "-",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM229B",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 228A",
    address:
      "Rest Area Km 228 A Tol Palikanci - Pejagan, Jatirenggang, Kec. Pabuaran, Kabupaten Cirebon, Jawa Barat 45188",
    addressLink: "https://maps.app.goo.gl/Yk9NcNuUt3KF37X48",
    telephone: "-",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM228A",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 208B",
    address:
      "Rest Area km 208, Jl. Tol Palimanan - Kanci, Setupatok, Kec. Mundu, Kota Cirebon, Jawa Barat 45173",
    addressLink: "https://maps.app.goo.gl/D6h66vhW8EnNSpdN7",
    telephone: "(0231) 8292384",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM228A",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 207A",
    address:
      "Rest Area KM 207, Setupatok, Kec. Mundu, Kabupaten Cirebon, Jawa Barat 45173",
    addressLink: "https://maps.app.goo.gl/DF5Q3TxtoHAKct8TA",
    telephone: "(0231) 8292384",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM207A",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 164B",
    address:
      "Jl. Tol Cikopo - Palimanan, Jatiwangi, Kec. Jatiwangi, Kabupaten Majalengka, Jawa Barat 45454",
    addressLink: "https://maps.app.goo.gl/7WzAVSfKFb7dVkZo6",
    telephone: "087700037755",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM164B",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 166A",
    address:
      "Jl. Tol Cikopo - Palimanan, Jatiwangi, Kec. Jatiwangi, Kabupaten Majalengka, Jawa Barat 45454",
    addressLink: "https://maps.app.goo.gl/2kRPmdmepJaGJhRE7",
    telephone: "087700037755",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM166A",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 101",
    address:
      "Rest area, Jl. Tol Cikopo - Palimanan Rest Area KM 101, Batusari, Kec. Dawuan, Kabupaten Subang, Jawa Barat 41271",
    addressLink: "https://maps.app.goo.gl/9868HWDxKHXtMPBUA",
    telephone: "081947031713",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM101",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 102",
    address:
      "Rest area, Jl. Tol Cikopo - Palimanan Rest Area KM 101, Batusari, Kec. Dawuan, Kabupaten Subang, Jawa Barat 41271",
    addressLink: "https://maps.app.goo.gl/aNZf2oz157zxakPV6",
    telephone: "081947031713",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM102",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 88B Travoy",
    address: "Rest Area Km.88 B Tol Palikanci",
    addressLink: "https://maps.app.goo.gl/HzgUWe4EVNmBLpG5A",
    telephone: "085959055111",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM102",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 72A",
    address: "Rest Area Km.72 A Tol Palikanci",
    addressLink: "https://maps.app.goo.gl/29ANABtkGqvgo2qw8",
    telephone: "085959055111",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM72A",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 19B",
    address: "Rest Area Km19 B Tol Jakarta - Cikampek",
    addressLink: "https://maps.app.goo.gl/f9NLvrTZ5dwzjD1N7",
    telephone: "0813-83339004",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM19B",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 19A",
    address:
      "Rest Area Km19A, Jl. Tol Jakarta - Cikampek Km 19A, Lambangsari, Kec. Tambun Sel., Kota Bks, Jawa Barat 17510",
    addressLink: "https://maps.app.goo.gl/GgzmG27gA4zngYTQ7",
    telephone: "-",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM19A",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 38 Bogor",
    address:
      "Jalan Tol Jagorawi KM.38, Bogor Utara, Cimahpar, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16710",
    addressLink: "https://maps.app.goo.gl/Z39ajnryzaYjecZr9",
    telephone: "08129643306",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM38 Bogor",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 35 A",
    address:
      "Rest Area Km 35A , Jl. Tol Jagorawi, Cipambuan, Kec. Babakan Madang, Kabupaten Bogor, Jawa Barat 16810",
    addressLink: "https://maps.app.goo.gl/4HQrC6mQ9iESxmVc8",
    telephone: "08129643306",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM35A",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya Cirebon",
    address:
      "Jl. Kartini No.67, Kejaksan, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45123",
    addressLink: "https://maps.app.goo.gl/ho9X8igpA3ei2XSh6",
    telephone: "(0231) 238909",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Cirebon",
  },
  {
    province: "Jawa Barat",
    name: "Simpang Raya KM 6B",
    address:
      "Rest Area KM No, RT.008/RW.6, Jatibening Baru, Kec. Pd. Gede, Kota Bks, Jawa Barat",
    addressLink: "https://maps.app.goo.gl/ups3CRvfZMNSVrCN9",
    telephone: "0813-83339004",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM 6B",
  },
  {
    province: "Jawa Tengah",
    name: "Simpang Raya KM 391A Tol Semarang-Batang",
    address:
      "KM 391, tol Batang - Semarang, Rowoaking, Rowobranten, Kec. Ringinarum, Kabupaten Kendal, Jawa Tengah 51356",
    addressLink: "https://maps.app.goo.gl/LeaPkqKDghTTgtpP9",
    telephone: "087876425261",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM 391A Tol Semarang-Batang",
  },
  {
    province: "Jawa Tengah",
    name: "Simpang Raya Rest Area KM 389B",
    address:
      "Rest Area Km 389 B Tol Semarang-Batang, Jatirejo, Wungurejo, Kec. Ringinarum, Kabupaten Kendal, Jawa Tengah 51356",
    addressLink: "https://maps.app.goo.gl/bm5EMbatDAP2fjXq8",
    telephone: "087876425261",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Rest Area KM 389 B",
  },
  {
    province: "Jawa Tengah",
    name: "Simpang Raya Rest Area KM 379A",
    address:
      "Rest Area Km 379 A Tol Semarang-Batang, Plelen Lor, Krengseng, Kec. Gringsing, Kabupaten Batang, Jawa Tengah 51281",
    addressLink: "https://maps.app.goo.gl/zMwHmWuJsoHJg5Uv7",
    telephone: "087876425261",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Rest Area KM 379A",
  },
  {
    province: "Jawa Tengah",
    name: "Simpang Raya Rest Area KM 360B",
    address:
      "Rest area KM 360.B Tol Semarang, Area Kebun/Hutan, Gondang, Kec. Subah, Kabupaten Batang, Jawa Tengah 51263",
    addressLink: "https://maps.app.goo.gl/EJwQnDXt4cQDU8pv5",
    telephone: "087876425261",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Rest Area KM 360B",
  },
  {
    province: "Jawa Tengah",
    name: "Simpang Raya Rest Area KM 260B",
    address:
      "Rest Area Tol Pejagan - Pemalang KM 260 B, Cipugur, Banjaratma, Bulakamba, Brebes Regency, Central Java 52253",
    addressLink: "https://maps.app.goo.gl/fiVnfCjoh1T87hwi6",
    telephone: "085959930789",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Rest Area KM 260B",
  },
  {
    province: "Jawa Tengah",
    name: "Simpang Raya Tegal",
    address:
      "Jl. Mayjend Sutoyo No.14, Pekauman, Kec. Tegal Bar., Kota Tegal, Jawa Tengah 52125",
    addressLink: "https://maps.app.goo.gl/9QsZvSyWtB8M4hJA7",
    telephone: "0283343400",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Tegal",
  },
  {
    province: "Jawa Timur",
    name: "Simpang Raya KM 726B",
    address:
      "Rest area, Jl. Tol Surabaya - Mojokerto km 726 B, Kabupaten Gresik, Jawa Timur 61176",
    addressLink: "https://maps.app.goo.gl/nAzVXtaXgmEfEc55A",
    telephone: "081218260323",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM 726B",
  },
  {
    province: "Jawa Timur",
    name: "Simpang Raya KM 725A",
    address:
      "Restarea Km.725, Jl. Tol Surabaya - Mojokerto, Utara, Sumengko, Kec. Wringinanom, Kabupaten Gresik, Jawa Timur 61176",
    addressLink: "https://maps.app.goo.gl/6qWq6D6venjB9EHx7",
    telephone: "081218260323",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM 725A",
  },
  {
    province: "Jawa Timur",
    name: "Simpang Raya Malang Kauman",
    address:
      "Jl. Merdeka Selatan No.5, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65119",
    addressLink: "https://maps.app.goo.gl/px8HWi7PhfK6QBxZ9",
    telephone: "-",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Malang Kauman",
  },
  {
    province: "Kalimantan",
    name: "Simpang Raya Balikpapan",
    address:
      "Jl. MT Haryono No.27, Damai, Kec. Balikpapan Kota, Kota Balikpapan, Kalimantan Timur 76114",
    addressLink: "https://maps.app.goo.gl/5Cj8oXnbKRCa84kY6",
    telephone: "(0542) 743727",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Balikpapan",
  },
  {
    province: "Tangerang",
    name: "Simpang Raya Bintaro",
    address:
      "Jl. Pulo No.51, RT.3/RW.3, Parigi, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15227",
    addressLink: "https://maps.app.goo.gl/AgyLuQHU18ZodhxA7",
    telephone: "087773339504",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang Bintaro",
  },
  {
    province: "Tangerang",
    name: "Simpang Raya KM 7 Tol Serpong",
    address:
      "Jl. Rest Area KM VII No.19, Jombang, Kec. Ciputat, Kota Tangerang Selatan, Banten 15414",
    addressLink: "https://maps.app.goo.gl/iKAUQj86FJNfYWbn6",
    telephone: "085813144777",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM 7 Tol Serpong",
  },
  {
    province: "Tangerang",
    name: "Simpang Raya KM 14B Tol Tangerang – Jakarta",
    address: "Rest Area Km 14 B Tol Tangerang - Jakarta",
    addressLink: "https://maps.app.goo.gl/GuCye3aJDzKnE3YQ8",
    telephone: "(021) 73441344",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM 14B Tol Tangerang – Jakarta",
  },
  {
    province: "Tangerang",
    name: "Simpang Raya Karang Tengah",
    address: "Rest Area Km 14 B Tol Tangerang - Jakarta",
    addressLink: "https://maps.app.goo.gl/o3yTnMcGNAC2z7Wf8",
    telephone: "(021) 73441381",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM 14B Tol Tangerang – Jakarta",
  },
  {
    province: "Tangerang",
    name: "Simpang Raya KM 13",
    address:
      "Rest Area Km 13, Jl. Tol Jkt - Tangerang, RT.001/RW.007, Kunciran, Kec. Pinang, Kota Tangerang, Banten 15145",
    addressLink: "https://maps.app.goo.gl/27cjm6rqB8eCzDb97",
    telephone: "(021) 73441202",
    imgSrc: "/cabang/cabang.jpg",
    imgAlt: "Cabang KM 13",
  },
];

export default function About() {
  const [selectedProvince, setSelectedProvince] = useState<string>("All");

  function filterBranch(branch: string) {
    setSelectedProvince(branch);
  }

  const filteredBranch =
    selectedProvince === "All"
      ? branches.sort((a, b) => a.name.localeCompare(b.name))
      : branches
          .filter((branch) => branch.province === selectedProvince)
          .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="relative w-full max-w-full h-[400px]">
        <Image src={"/hero1.png"} alt="reklame" fill objectFit="cover" />
        <div className="absolute flex flex-col translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-full max-w-[1170px] text-start text-white px-10">
          <h1 className="text-[20px]">SIMPANG RAYA</h1>
          <h1 className="text-[70px]">Location</h1>
        </div>
      </div>
      <div className="w-full max-w-[1170px] px-12 mx-auto text-center flex flex-col py-[100px] justify-center items-center gap-6">
        <div className="w-full max-w-full flex flex-wrap justify-center items-center gap-6 font-normal">
          {[
            "All",
            "Bali",
            "Bandara",
            "Depok",
            "Jakarta",
            "Jawa Barat",
            "Jawa Tengah",
            "Jawa Timur",
            "Kalimantan",
            "Tangerang",
          ].map((province) => (
            <p
              key={province}
              className={`px-5 py-2 col-span-1 font-semibold flex-wrap border-solid border-[2px] border-[#A22020] text-[16px] cursor-pointer transition-all duration-950 hover:bg-[#A22020] hover:text-white ${
                selectedProvince === province
                  ? "bg-[#A22020] text-white"
                  : "bg-white"
              }`}
              onClick={() => filterBranch(province)}
            >
              {province}
            </p>
          ))}
        </div>
        <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredBranch.map((branch, index) => (
            <div
              key={index}
              className="w-full max-w-full h-[512px] flex flex-col p-4"
            >
              <div className="w-full max-w-full h-[250px] relative">
                <Image
                  src={branch.imgSrc}
                  alt={branch.imgAlt}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="p-5 flex flex-col text-start gap-6 border-solid border-[1px] h-[70%]">
                <h1 className="text-[21px]">{branch.name}</h1>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row justify-between items-start">
                    <div className="w-[18px] h-[18px] me-3 mt-1">
                      <FaLocationDot className="text-[#A22020]" size={18} />
                    </div>

                    <Link
                      target="_blank"
                      className="hover:text-[#A22020] transition-all duration-900"
                      href={branch.addressLink}
                    >
                      <p className="text-[16px] leading-normal">
                        {branch.address}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-row items-center">
                    <BsFillTelephoneFill
                      size={18}
                      className="text-[#A22020] me-3"
                    />
                    <p className="text-[16px] leading-normal hover:text-[#A22020] transition-all duration-900">
                      {branch.telephone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
