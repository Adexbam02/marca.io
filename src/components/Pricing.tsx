import Image from "next/image";
import { duru_Sans, exo, poppins } from "../ui/font";
import Button from "../ui/Button";
import PricingCard from "../ui/PricingCard";

export default function Pricing() {
  return (
    <section className="px-[1rem] md:px-[9rem] flex flex-col items-center justify-center gap-3">
      <div className="flex flex-col items-center justify-center gap-3 text-center mb-8">
        <h1
          className={`${exo.className} text-cl text-[32px] md:text-[52px] md:tracking-tighter	font-extrabold`}
        >
          Pricing
        </h1>
        <p
          className={`${duru_Sans.className} text-[12px] md:text-[15px] md:w-[80%] text-indigo-900 `}
        >
          In virtual space through communication platforms.{" "}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row md:gap-3">
        <PricingCard
          who={`For Starter`}
          price={`$59`}
          color="bg-white"
          textColor=""
          priceValText="text-indigo-900"
          padding="p-[35px]"
        />
        <PricingCard
          who={`For Teams`}
          price={`$99`}
          color="bg-purple-950"
          textColor="text-white"
          priceValText="text-white"
          padding="p-[45px]"
        />
        <PricingCard
          who={`For Company`}
          price={`Custom`}
          color="bg-white"
          textColor=""
          priceValText="text-indigo-900"
          padding="p-[35px]"
        />
      </div>
    </section>
  );
}
