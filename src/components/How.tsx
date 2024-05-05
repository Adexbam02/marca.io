import Image from "next/image";
import { exo } from "../ui/font";
import HowOne from "../ui/HowOne";
import HowTwo from "../ui/HowTwo";
import HowThree from "../ui/HowThree";

export default function How() {
  return (
    <section
      className={`px-[2rem] pt-14 py-[0rem] md:px-[9rem] md:py-[1rem] flex items-center justify-center flex-col gap-10 md:gap-4 md:grid grid-rows-2 grid-flow-col md:items-start`}
    >
      <div>
        <div className="flex items-center md:items-start justify-center flex-col">
          <h1
            className={`${exo.className} text-cl font-bold text-[35px] md:text-[45px]`}
          >
            How it Works?
          </h1>
          <p className="w-[100%] md:w-[400px] text-center md:text-left text-indigo-900">
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
