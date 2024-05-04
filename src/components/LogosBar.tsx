import Image from "next/image";
import { logos } from "../data";

export default function LogosBar() {
  return (
    <div className="flex gap-7 flex-wrap items-center justify-center md:justify-between px-[4rem] py-[2rem] md:px-[9rem] md:py-[2rem]">
      {logos.map(({ id, src }) => (
        <Image
          key={id}
          src={src}
          width={100}
          height={100}
        //   className="object-contain md:h-[150px] w-[150px]"
          alt=""
        />
      ))}
    </div>
  );
}
