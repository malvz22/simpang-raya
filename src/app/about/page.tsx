import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="relative w-full max-w-full h-[400px]">
        <Image src={"/hero1.png"} alt="reklame" fill objectFit="cover" />
        <div className="absolute flex flex-col translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-full max-w-[1170px] text-start text-white px-10">
          <h1 className="text-[20px]">SIMPANG RAYA</h1>
          <h1 className="text-[70px]">About Us</h1>
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto text-center flex flex-col py-[100px]">
        <h1 className="text-[60px] text-[#A22020]">Perjalanan Kami</h1>
        <p className="text-[25px] mb-6">
          <b>Restoran Simpang Raya</b> adalah usaha pribumi yang bergerak
          dibidang masakan Minang (Padang), dan pada awalnya Restoran Simpang
          Raya berdiri di Bukit Tinggi daerah Sumatra Barat oleh Alm.Muhammad
          Noor Datuk Maharajo bersama rekan-rekannya. Setelah itu adik dari Alm.
          Muhammad Noor yakni H.Noersal Zainuddin mengembangkan usaha ini di
          Pulau Jawa dan sekitarnya dengan niat untuk melakukan suatu hijrah
        </p>
        <p className="text-[25px] mb-6">
          <b>Tahun 1976</b> membuka usaha dengan pola bagi hasil di Cipanas
          kabupaten Cianjur oleh H.Noersal Zainnudin dan rekan-rekan bersama
          dengan H.Safri Awih (Alm) sebagai pemilik lahan, Alhamdulillah berkat
          rahmat Allah Subhanahu wa ta’ala, usaha restoran kami berjalan dengan
          baik.
        </p>
        <p className="text-[25px] mb-6">
          <b>Tahun 1981</b> kami mengembangkan usaha di Jakarta dan sekitarnya
          diantaranya: Jl Kramat Raya Jakarta Pusat, Taman Impian Jaya Ancol
          Jakarta Utara, Jl.Margonda Raya Depok, dan Alhamdulillah sampai saat
          ini Restoran Simpang telah mencapai lebih dari 45 cabang yang tersebar
          di Pulau Jawa, Bali dan Kalimantan.
        </p>
        <div className="flex flex-col md:flex-row justify-evenly text-center">
          <div className="flex flex-col">
            <span className="forum-regular text-[60px]">40</span>
            <h1 className="text-[#A22020] text-[12px]">CABANG RESTO</h1>
          </div>
          <div className="flex flex-col">
            <span className="forum-regular text-[60px]">800</span>
            <h1 className="text-[#A22020] text-[12px]">KARYAWAN RESTO</h1>
          </div>
          <div className="flex flex-col">
            <span className="forum-regular text-[60px]">50</span>
            <h1 className="text-[#A22020] text-[12px]">MENU PILIHAN</h1>
          </div>
          <div className="flex flex-col">
            <span className="forum-regular text-[60px]">40</span>
            <h1 className="text-[#A22020] text-[12px]">TAHUN BERDIRI</h1>
          </div>
        </div>
      </div>
      <div className="bg-black grid grid-cols-2">
        <div className="col-span-2 lg:col-span-1 justify-center flex py-[50px]">
          <Image
            src={"/logo-reklame.jpg"}
            alt="reklame"
            objectFit="cover"
            width={800}
            height={800}
          />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-center text-white items-center text-center px-[100px] py-[50px]">
          <h1>PENGALAMAN 50 TAHUN</h1>
          <h1 className="text-[60px] text-[#FFEB9A]">Salero Nan Tau Raso</h1>
          <p>
            Restoran Simpang Raya selalu menjamin mutu produk-produknya dengan
            cita rasa makanan khas Minang, memberikan pelayanan yang memuaskan,
            menawarkan kebersihan dan keamanan produk pangan yang halal serta
            nilai-nilai tambah lainnya.
          </p>
        </div>
      </div>
    </>
  );
}
