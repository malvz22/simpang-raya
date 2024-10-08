import Image from "next/image";

type props = {
  imageSrc: string;
  menu: string;
  desc: string;
};

export default function MenuCard({ imageSrc, menu, desc }: props) {
  return (
    <>
      <div className="h-[800px] flex flex-col items-start px-4">
        <div className="flex flex-col gap-[30px] bg-[#282828] rounded-xl my-[50%] relative">
          <div className="rounded-full w-[180px] h-[180px] absolute translate-x-[-50%] translate-y-[-50%] top-[-1%] left-[50%] z-40 overflow-hidden">
            <Image src={imageSrc} alt="ayampop" fill objectFit="cover" />
          </div>
          <div className="p-5 pt-[100px] flex flex-col">
            <h1 className="text-[#FFEB9A] text-[21px]">{menu}</h1>
            <p className="text-white text-[16px]">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
