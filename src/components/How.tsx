import Image from "next/image";
import { duru_Sans, exo } from "../ui/font";
import HowOne from "../ui/HowOne";
import HowTwo from "../ui/HowTwo";
import HowThree from "../ui/HowThree";

export default function How() {
  const colT = `[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-1 lg:gap-8`;
  return (
    <section
      className={`bgHow relative px-[1rem] md:px-[9rem] pt-14 py-[0rem] md:py-[1rem] flex items-center justify-center flex-col gap-10 md:gap-x-[0rem] md:grid grid-rows-2 grid-flow-col md:items-start`}
    >
    {/* // <section className={`${colT} px-[4rem] md:px-[9rem] pt-14 py-[0rem] md:py-[1rem]`}> */}
      <div>
        <div className="flex items-center md:items-start md:text-left justify-center flex-col text-center">
          <h1
            className={`${exo.className} text-cl text-[32px] md:text-[52px] md:tracking-tighter	font-extrabold`}
          >
            How it Works?
          </h1>
          <p className={`${duru_Sans.className} text-[12px] md:text-[15px] md:w-[26rem] text-indigo-900 `}>
            Resolving neglected sir tolerably but existence conveying for. Day
            his put off unaffected literature partiality inhabiting.
          </p>
        </div>
      </div>

      <HowOne />
      <HowTwo />
      <HowThree />
    </section>
  );
}
