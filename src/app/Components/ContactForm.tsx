"use client";

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  contactNumber: string;
  messageSubject: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contactNumber: "",
    messageSubject: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      );
      setStatus("sent");
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        messageSubject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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
            <Link href={"tel:6285282419922"} target="_blank">
              <div className="rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[#A22020]">
                <BsFillTelephoneFill size={35} className="text-white" />
              </div>
            </Link>
            <div className="flex flex-col justify-center">
              <Link href={"tel:tel:6285282419922"} target="_blank">
                <h1 className="text-[25px]">Telepon</h1>
              </Link>
              <p>0852 8241 9922</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <Link href={"mailto:official@simpangraya.com"} target="_blank">
              <div className="rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[#A22020]">
                <MdOutlineEmail size={35} className="text-white" />
              </div>
            </Link>
            <div className="flex flex-col justify-center">
              <Link href={"mailto:official@simpangraya.com"} target="_blank">
                <h1 className="text-[25px]">Email</h1>
              </Link>
              <p>official@simpangraya.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <Link
              href={"https://www.instagram.com/simpangraya/"}
              target="_blank"
            >
              <div className="rounded-full w-[70px] h-[70px] flex justify-center items-center bg-[#A22020]">
                <FaInstagram size={35} className="text-white" />
              </div>
            </Link>
            <div className="flex flex-col justify-center">
              <Link
                href={"https://www.instagram.com/simpangraya/"}
                target="_blank"
              >
                <h1 className="text-[25px]">Instagram</h1>
              </Link>
              <p>@simpang_raya</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full">
          <div className="bg-[#747474] flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-3 w-full max-w-[100%] py-20"
            >
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[42px] w-full max-w-[90%]"
              ></input>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email (example@email.com)"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[42px] w-full max-w-[90%]"
              ></input>
              <input
                type="number"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Your Contact Number"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[42px] w-full max-w-[90%]"
              ></input>
              <input
                type="text"
                id="messageSubject"
                name="messageSubject"
                value={formData.messageSubject}
                onChange={handleChange}
                placeholder="Your Message Subject"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[42px] w-full max-w-[90%]"
              ></input>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message Here"
                className="border-[#A22020] border-solid border-[1px] rounded-sm px-2 h-[160px] w-full max-w-[90%]"
                cols={50}
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="bg-[#A22020] text-white px-10 py-5 font-bold hover:bg-white hover:text-[#A22020] transition-all duration-900 tracking-[.3em] text-[12px]"
              >
                KIRIM PESAN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
