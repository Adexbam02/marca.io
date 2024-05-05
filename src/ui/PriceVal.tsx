import Image from "next/image";

import { poppins } from "../ui/font";

interface Text {
  text: string;
}
export default function PriceVal({ text }: Text) {
  return (
    <span className="flex items-center justify-center gap-1">
      <Image src="/mark.svg" width={10} height={10} alt="" />
      <small className={`${poppins.className} `}>{text}</small>
    </span>
  );
}
