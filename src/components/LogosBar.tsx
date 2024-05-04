import Image from "next/image";
import { logos } from "../data";

export default function LogosBar() {
  return (
    <div className="flex gap-6 flex-wrap items-center justify-center px-[4rem] py-[2rem] md:px-[9rem] md:py-[3rem]">
      {logos.map(({ id, src }) => (
        <Image
          key={id}
          src={src}
          width={100}
          height={100}
          className="object-contain"
          alt=""
        />
      ))}
    </div>
  );
}
