
"use client";

import { duru_Sans, poppins } from "../ui/font";
import { links } from "../data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex items-start md:items-center justify-between bg-transparent px-[4rem] py-[2rem] md:px-[9rem]">
      <Link href={"/"} className="logo flex items-center justify-center gap-2">
        <Image
          width={25}
          height={25}
          src="/logo.png"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <h4 className="font-medium text-base text-[#3E4581]">Marca.io</h4>
      </Link>
      <div className="hidden md:flex md:flex-row flex-col items-center justify-center gap-10">
        {links.map(({ id, name, link }) => (
          <Link
            key={id}
            href={`${link}`}
            className={`${poppins.className} ${
              pathname == link ? "text-cl" : "text-[#3E4581]"
            } font-medium`}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <button
          className="w-8 h-8 flex items-center justify-center focus:outline-none"
          onClick={toggleDropdown}
        >
          <Image
            src="/menu.svg"
            width={30}
            height={30}
            alt=""
            className={`${isOpen ? "block" : "hidden"}`}
          />

          <Image
            src="/close.svg"
            width={30}
            height={30}
            alt=""
            className={`${!isOpen ? "block" : "hidden"}`}
          />
        </button>
        {isOpen && (
          <div className="absolute right-0 z-10 bg-white shadow rounded-md mt-2 py-2 w-full">
            {links.map(({ id, name, link }) => (
              <Link
                key={id}
                href={`${link}`}
                className={`${
                  pathname == link ? "text-cl" : "text-[#3E4581]"
                } block px-4 py-2 hover:bg-gray-100 `}
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* <Link
        href={"/"}
        className={`${duru_Sans.className} w-[120px] h-[45px] rounded-[5px] gradient-bg flex items-center justify-center text-[14px] text-white`}
      >
        Login
      </Link> */}
    </nav>
  );
}
