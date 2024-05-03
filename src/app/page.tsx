import Link from "next/link";
import { duru_Sans, poppins, roboto } from "../ui/font";
import CardOne from "../ui/CardOne";
import CardTwo from "../ui/CardTwo";
import CardThree from "../ui/CardThree";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between px-[9rem] py-[1rem]">
        <div className="p-6 flex flex-col items-start gap-3">
          <h1 className={`${poppins.className} max-w-[640px] text-cl head-txt`}>
            Amplify your brand voice
            {/* Tell a better <br /> brand story */}
          </h1>
          <p className={`max-w-[540px] ${duru_Sans.className}`}>
            Warrant present garrets limited cordial in inquiry to. Supported me
            sweetness behaviour shameless excellent so arranging.
          </p>
          <span className="flex items-center justify-center gap-4">
            <Link
              href={"/"}
              className={`${roboto.className} w-[150px] h-[45px] rounded-[5px] gradient-bg font-bold flex items-center justify-center text-[16px] text-white`}
            >
              Get Started
            </Link>
            <Link
              href={"./contact-us"}
              className={`${roboto.className} w-[150px] h-[45px] rounded-[5px] border-gradient font-bold text-bt flex items-center justify-center text-[16px] text-white`}
            >
              Contact Us
            </Link>
          </span>
        </div>
        <div className="p-6 flex items-center justify-center gap-1">
          <div className="flex flex-col items-end justify-end gap-3">
            <CardOne />
            <CardThree />
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <CardTwo />
            <Image src="/followers.png" width={300} height={300} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}
