import Image from "next/image";
import { offer } from "../data";
import { duru_Sans, exo, poppins } from "../ui/font";

export default function Offer() {
  return (
    <section className="px-[1rem] md:px-[9rem] flex flex-col items-center justify-center py-[0rem]  md:py-[1rem]">
      <div className="flex flex-col text-center justify-center items-center">
        <h1
          className={`${exo.className} text-cl text-[32px] md:text-[52px] md:tracking-tighter	font-extrabold`}
        >
          What we Offer?
        </h1>
        <p
          className={`${duru_Sans.className} text-[12px] md:text-[15px] md:w-[80%] text-indigo-900 `}
        >
          In virtual space through communication platforms. Durable relations
          that extend beyond immediate genealogical ties.
        </p>
      </div>
      <div className="grid grid-rows-6 sm:grid-rows-3 md:grid-rows-2 grid-flow-col md:gap-4 p-4 ">
        {offer.map(({ id, src, title, content }) => (
          <div key={id} className="p-2">
            <div className="py-[3rem] px-[2rem] bg-white flex flex-col gap-3 items-start justify-between bg-hite rounded-[10px] drop-shadow-md">
              <span className="w-[50px] h-[50px] bg-indigo-50 rounded-[40px] flex items-center justify-center shadow-sm">
                <Image src={src} width={30} height={30} alt="" className="" />
              </span>
              <p
                className={`${poppins.className} text-indigo-900 text-[18px] md:text-[20px] font-bold`}
              >
                {title}
              </p>
              <p
                className={`${poppins.className} h-[70px] max-w-[90%] p-1 text-indigo-900 text-[15px]  leading-snug`}
              >
                {content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
