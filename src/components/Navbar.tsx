import { duru_Sans } from "../ui/font";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between bg-transparent p-4">
      <div className="logo flex items-center justify-center gap-2">
        <Image
          width={25}
          height={25}
          src="/logo.png"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <h4 className="font-medium text-base text-[#3E4581]">Marca.io</h4>
      </div>
      <div className="menu">s</div>
      <Link
        href={"/"}
        className={`${duru_Sans.className} w-[120px] h-[45px] rounded-[5px] gradient-bg flex items-center justify-center text-[14px] text-white`}
      >
        Login
      </Link>
    </nav>
  );
}
