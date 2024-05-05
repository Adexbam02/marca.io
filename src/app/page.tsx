"use client";
import Link from "next/link";
import Image from "next/image";

import { duru_Sans, poppins, roboto, exo } from "../ui/font";

import LogosBar from "../components/LogosBar";
import Offer from "../components/Offer";
import How from "../components/How";
import Pricing from "../components/Pricing";
import Header from "../ui/Header";

export default function Home() {
  return (
    <>
      {/* px-[9rem] py-[1rem] */}
      <main className="px-[4rem md:px-[9rem]">
       <Header />

        <LogosBar />
        <Offer />
        <How />
        <Pricing />
      </main>
    </>
  );
}
