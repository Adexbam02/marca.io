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
    className={`${poppins.className} w-[200px] h-[45px] rounded-[5px] gradient-bg font-bold flex items-center justify-center text-[16px] text-white`}
  >
    {button}
  </Link>
  );
}
