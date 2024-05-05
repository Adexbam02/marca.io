import Image from "next/image";
import { exo, poppins } from "../ui/font";
import Button from "../ui/Button";
import PricingCard from "../ui/PricingCard";

export default function Pricing() {
  return (
    <section className="flex flex-col items-center justify-center gap-3">
      <div className="text-center mb-8">
        <h1 className={`${exo.className} text-cl font-extrabold text-[35px] `}>
          Pricing
        </h1>
        <p>In virtual space through communication platforms. </p>
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row md:gap-3">
        <PricingCard
          who={`For Starter`}
          price={`$59`}
          color="bg-white"
          textColor=""
          priceValText="text-indigo-900"
          padding="p-[30px]"
        />
        <PricingCard
          who={`For Teams`}
          price={`$99`}
          color="bg-purple-950"
          textColor="text-white"
          priceValText="text-white"
          padding="p-[35px]"
        />
        <PricingCard
          who={`For Company`}
          price={`Custom`}
          color="bg-white"
          textColor=""
          priceValText="text-indigo-900"
          padding="p-[30px]"
        />
      </div>
    </section>
  );
}
