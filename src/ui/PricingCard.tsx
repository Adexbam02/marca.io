import Image from "next/image";
import { exo, poppins } from "../ui/font";
import Button from "../ui/Button";
import PriceVal from "./PriceVal";

interface Pricing {
  who: string;
  price: string;
  color: string;
  textColor: string;
  priceValText: string;
  padding: string
}
export default function PricingCard({ who, price, color, textColor, priceValText, padding }: Pricing) {
  return (
    <div
      className={`${color} flex flex-col items-center justify-center gap-4 ${padding} rounded-md mb-4 shadow-xl`}
    >
      <h4 className={`${exo.className} ${textColor} font-medium text-[20px]`}>{who}</h4>
      <h3 className={`${exo.className} font-bold text-[25px] text-cl`}>
        {price}
      </h3>
      <div className={`flex flex-col gap-2 items-start ${priceValText} font-medium`}>
        <PriceVal text="Feedback Categorization" src={'/mark.svg'} />
        <PriceVal text="Feedback Categorization" src={'/mark.svg'} />
        <PriceVal text="Feedback Categorization" src={'/mark.svg'} />
        {/* <PriceVal text="Feedback Categorization" src={'/mark.svg'} /> */}
        <PriceVal text="Feedback Categorization" src={'/mark.svg'} />
      </div>
      <Button button={`Contact Us`} link="./contact-us" />
    </div>
  );
}
