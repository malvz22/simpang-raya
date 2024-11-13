import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function About() {
  return (
    <>
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row py-20 px-5 justify-between gap-4">
        <div className="flex flex-col max-w-full md:max-w-[512px] p-3 gap-6">
          <h1 className="text-[60px] text-black">Kirim Kami Pesan!</h1>
          <div>
            <p className="mb-3 text-[16px] font-normal">
              Anda dapat menguhubungi kami melalui kontak atau sosial media
              kami. Kami dengan senang hati terhubung bersama Anda.
            </p>
            <p className="text-[16px]">
              Kunjungi Kami di resto cabang Kami yang tersebar di berbagai
              provinsi dan kota-kota besar di Indonesia.
            </p>
          </div>
          <div className="flex flex-row gap-6">
            <div className="rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[#A22020]">
              <BsFillTelephoneFill size={35} className="text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-[25px]">Telepon</h1>
              <p>0852 8241 9922</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[#A22020]">
              <MdOutlineEmail size={35} className="text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-[25px]">Email</h1>
              <p>official@simpangraya.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[#A22020]">
              <FaInstagram size={35} className="text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-[25px]">Instagram</h1>
              <p>@simpang_raya</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full">
          <div className="bg-[#747474] flex justify-center items-center">
            <form className="flex flex-col justify-center items-center gap-3 w-full max-w-[100%] py-20">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[42px] w-full max-w-[90%]"
              ></input>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email (example@email.com)"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[42px] w-full max-w-[90%]"
              ></input>
              <input
                type="number"
                id="contactNumber"
                name="contactNumber"
                placeholder="Your Contact Number"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[42px] w-full max-w-[90%]"
              ></input>
              <input
                type="text"
                id="messageSubject"
                name="messageSubject"
                placeholder="Your Message Subject"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[42px] w-full max-w-[90%]"
              ></input>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message Here"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[160px] w-full max-w-[90%]"
                cols={50}
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="bg-[#A22020] text-white px-10 py-5 font-bold "
              >
                KIRIM PESAN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
