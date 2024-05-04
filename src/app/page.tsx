import Link from "next/link";
import { duru_Sans, poppins, roboto } from "../ui/font";
import CardOne from "../ui/CardOne";
import CardTwo from "../ui/CardTwo";
import CardThree from "../ui/CardThree";
import Image from "next/image";
import LogosBar from "../components/LogosBar";
export default function Home() {
  return (
    <>
      {/* px-[9rem] py-[1rem] */}
      <header className="flex flex-col md:flex-row md:px-[9rem] md:py-[4rem] items-center  justify-between px-[4rem] py-[0rem]">
        <div className="p-6 flex flex-col items-center justify-center md:items-start gap-3">
          <h1 className={`${poppins.className} text-center md:text-left max-w-[640px] text-cl text-[50px] md:text-[70px] head-txt`}>
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
        {/* <div className="p-6 flex items-center justify-center gap-0">
          <div className="flex flex-col items-end justify-end gap-3">
            <CardOne />
            <CardThree />
            
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <CardTwo />
            <Image src="/followers.png" width={300} height={300} alt="" />
          </div>
        </div> */}
        <div className="bg-gray-400/20 rounded-lg shadow-md backdrop-blur p-[0.3rem]">
          <div className="bg-gray-400/10 rounded-lg shadow-md backdrop-blur p-1">
            <Image src="/Dashboard.jpg" width={400} height={400} alt="" className="md:w-[50rem]" />
          </div>
        </div>
      </header>
      <LogosBar />
    </>
  );
}
