import Link from "next/link";
import { exo, poppins } from "../ui/font";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="px-[1rem] md:px-[9rem] py-[3rem]">
      <div className="flex flex-col items-center justify-between text-center gap-14 ">
        <h1 className={`${exo.className} text-cl text-[32px] md:text-[52px] md:tracking-tighter	font-extrabold`}>
          Social Media Its Ways Of Our Excellence.
        </h1>
        <form className="w-[80%] h-[70px] bg-gray-800 rounded-[10px] shadow-inner flex items-center justify-between p-1">
          <input
            placeholder="Enter your Email..."
            type="email"
            className={`p-2 w-[66%] h-[90%] placeholder bg-gray-800 placeholder:italic focus:outline-none `}
          />
          <Link
            href={"/"}
            className={`${poppins.className} w-fit h-[90%] rounded-[10px] gradient-bg font-medium flex items-center justify-center text-[16px] text-white px-7`}
          >
            Get Started
          </Link>
        </form>
        <div className="flex items-center justify-center gap-3">
          <div className="relative ">
            <Image src={"/ctaImg.svg"} width={50} height={50} alt="" />
            <Image src={"/playVideo.svg"} width={15} height={15} alt="" className="absolute bottom-[40%] left-[85%]" />
          </div>
          <Link href={"/"} className="underline text-indigo-900 text-[15px]">
            Watch our video
          </Link>
        </div>
      </div>
    </section>
  );
}
