import Link from "next/link";
import { poppins } from "./font";

interface ButtonProps {
  button: string;
  link: string;
}

export default function Button({ button, link }: ButtonProps) {
  const btnHover = `hover:gradient-bg`;
  return (
    <Link
      href={link}
      className={`${poppins} hover:${btnHover} w-[100%] h-[45px] rounded-[5px] border-gradient lack font-bold text-bt flex items-center justify-center text-[16px] text-white`}
    >
      {button}
    </Link>
  );
}