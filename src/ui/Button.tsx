import Link from "next/link";
import { poppins } from "./font";

interface ButtonProps {
  button: string;
  link: string;
}

export default function Button({ button, link }: ButtonProps) {
  return (
    <Link
      href={link}
      className={`${poppins} w-[100%] h-[45px] rounded-[5px] border-gradient hover:text-[#f7f7f7] font-bold text-bt flex items-center justify-center text-[16px] `}
    >
      {button}
    </Link>
  );
}
