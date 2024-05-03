import Link from "next/link";
import { duru_Sans, poppins, roboto } from "../ui/font";

export default function Home() {
  return (
    <>
      <header className="flex items-center bg-ed-300 justify-between px-[9rem] py-[1rem]">
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
        <div>stat</div>
      </header>
    </>
  );
}
