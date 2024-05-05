import Image from "next/image";
import { exo, poppins } from "../ui/font";
import Button from "../ui/Button";

export default function PricingCard({who, price}) {
  return (
    <div className="card flex flex-col items-center justify-center gap-4 p-[30px] rounded-md mb-4 shadow-xl">
          <h4 className={`${exo.className} font-medium text-[20px]`}>{who}</h4>
          <h3 className={`${exo.className} font-bold text-[25px] text-cl`}>{price}</h3>
          <div className="flex flex-col gap-2 items-start text-indigo-900 font-medium">
            <span className="flex items-center justify-center gap-1">
              <Image src="/mark.svg" width={10} height={10} alt="" />
              <small className={`${poppins.className} `}>
                Feedback Categorization
              </small>
            </span>
            <span className="flex items-center justify-center gap-1">
              <Image src="/mark.svg" width={10} height={10} alt="" />
              <small className={`${poppins.className} `}>
                Feedback Categorization
              </small>
            </span>
            <span className="flex items-center justify-center gap-1">
              <Image src="/mark.svg" width={10} height={10} alt="" />
              <small className={`${poppins.className} `}>
                Feedback Categorization
              </small>
            </span>
            <span className="flex items-center justify-center gap-1">
              <Image src="/mark.svg" width={10} height={10} alt="" />
              <small className={`${poppins.className} `}>
                Feedback Categorization
              </small>
            </span>
            <span className="flex items-center justify-center gap-1">
              <Image src="/mark.svg" width={10} height={10} alt="" />
              <small className={`${poppins.className} `}>
                Feedback Categorization
              </small>
            </span>
          </div>
          <Button button={`Contact Us`} link="./contact-us" />
        </div>
  )
}
