"use client";

import { duru_Sans, poppins } from "../ui/font";
import { links } from "../data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full flex items-center justify-between bg-transparent px-[9rem] py-[3rem]">
      <Link href={"/"} className="logo flex items-center justify-center gap-2">
        <Image
          width={25}
          height={25}
          src="/logo.png"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <h4 className="font-medium text-base text-[#3E4581]">Marca.io</h4>
      </Link>
      <div className="menu flex items-center justify-center gap-10">
        {links.map(({ id, name, link }) => {
          return (
            <ul key={id}>
              <Link
                href={`${link}`}
                className={`${poppins.className} ${
                  pathname == link ? "text-cl" : "text-[#3E4581]"
                } font-medium`}
              >
                {name}
              </Link>
            </ul>
          );
        })}
      </div>
      <Link
        href={"/"}
        className={`${duru_Sans.className} w-[120px] h-[45px] rounded-[5px] gradient-bg flex items-center justify-center text-[14px] text-white`}
      >
        Login
      </Link>
    </nav>
  );
}
