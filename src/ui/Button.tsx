import Link from "next/link";
import { poppins } from "./font";

export default function Button({ button }) {
  return (
    <Link
      href={"./contact-us"}
      className={`${poppins} w-[150px] h-[45px] rounded-[5px] border-gradient font-bold text-bt flex items-center justify-center text-[16px] text-white`}
    >
      {button}
    </Link>
  );
}
