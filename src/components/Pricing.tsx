import Image from "next/image";
import { exo, poppins } from "../ui/font";
import Button from "../ui/Button";

export default function Pricing() {
  return (
    <section className="flex flex-col items-center justify-center gap-3">
      <div className="text-center mb-8">
        <h1 className={`${exo.className} text-cl font-extrabold text-[35px] `}>
          Our plans scale with your product
        </h1>
        <p> in virtual space through communication platforms. </p>
      </div>

      <div>
        <div className="card">
          <h4>For Starter</h4>
          <h3>$59</h3>
          <div>
            <span className="flex items-center justify-center gap-1">
              <Image src="/mark.svg" width={10} height={10} alt="" />
              <small className={`${poppins.className}`}>
                Feedback Categorization
              </small>
            </span>
            <span className="flex items-center justify-center gap-1">
              <Image src="/mark.svg" width={10} height={10} alt="" />
              <small className={`${poppins.className}`}>
                Feedback Categorization
              </small>
            </span>
            <span className="flex items-center justify-center gap-1">
              <Image src="/mark.svg" width={10} height={10} alt="" />
              <small className={`${poppins.className}`}>
                Feedback Categorization
              </small>
            </span>
            <span className="flex items-center justify-center gap-1">
              <Image src="/mark.svg" width={10} height={10} alt="" />
              <small className={`${poppins.className}`}>
                Feedback Categorization
              </small>
            </span>
            <span className="flex items-center justify-center gap-1">
              <Image src="/mark.svg" width={10} height={10} alt="" />
              <small className={`${poppins.className}`}>
                Feedback Categorization
              </small>
            </span>
          </div>
          <Button button={`Contact Us`} />
        </div>
      </div>
    </section>
  );
}
