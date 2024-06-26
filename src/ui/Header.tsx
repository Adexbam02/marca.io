import Link from "next/link";
import Image from "next/image";

import { duru_Sans, poppins, roboto, exo } from "../ui/font";

export default function Header() {
  return (
    <header className="bgHeader px-[1rem] md:px-[9rem] flex flex-col md:py-[1rem] items-center  justify-between py-[0rem]">
      <div className="p-6 flex flex-col items-center justify-center mb-[1.5rem] gap-3">
        <h1
          className={`${exo.className} text-center ] text-cl text-[50px] md:text-[4rem] font-extrabold leading-[3rem] md:leading-[5rem]`}
        >
          Amplify your brand voice!
        </h1>
        <p className={`${duru_Sans.className} text-center w-[100%]`}>
          Crafted strategies, compelling designs, and impactful storytelling for
          unforgettable brand experiences. Let&apos;s shape your brand journey
          together.
        </p>
        <span className="flex items-center justify-center gap-4">
          <Link
            href={"/"}
            className={`${roboto.className}  w-[150px] h-[45px] rounded-[5px] gradient-bg font-bold flex items-center justify-center text-[16px] text-white`}
          >
            Get Started
          </Link>
          <Link
            href={"./contact-us"}
            className={`${roboto.className} w-[150px] h-[45px] rounded-[5px] border-gradient font-bold text-bt flex items-center justify-center text-[16px] text-white btnBg`}
          >
            Contact Us
          </Link>
        </span>
      </div>
      <div
        className={` bg-gray-400/20 w-fit flex items-center justify-center shadow-md backdrop-blur p-[0.3rem]`}
      >
        <Image
          src="/Dashboard4.svg"
          width={600}
          height={600}
          alt=""
          className="md:w-[70rem] p-1"
        />
      </div>
    </header>
  );
}
