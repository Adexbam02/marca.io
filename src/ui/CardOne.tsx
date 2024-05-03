import { roboto } from "../ui/font";
import Image from "next/image";

export default function CardOne() {
  return (
    <div
      className={`${roboto.className} relative w-[160px] h-[170px] p-4 bg-white flex flex-col items-center justify-between shadow-md rounded-[10px]`}
    >
      <p className="text-[#3E4581] leading-5 text-[20px] font-normal text-center">
        Amanda M. <br /> Data
      </p>
      <span className="flex flex-col items-center">
        <small>Your Growth</small>
        <h4 className="text-[30px] font-bold text-cl">3,000</h4>
      </span>
      <span>
        <Image
          width={35}
          height={35}
          src="/personOne.png"
          alt={""}
          className="absolute -top-4 -right-3"
        />
      </span>
    </div>
  );
}
