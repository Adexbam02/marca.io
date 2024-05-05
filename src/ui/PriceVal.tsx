import Image from "next/image";

import { poppins } from "../ui/font";

interface Text {
  text: string;
  src: string;
}
export default function PriceVal({ text, src }: Text) {
  return (
    <span className="flex items-center justify-center gap-1">
      <Image src={src} width={10} height={10} alt=""  />
      <small className={`${poppins.className} `}>{text}</small>
    </span>
  );
}
