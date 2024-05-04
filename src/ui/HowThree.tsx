import Image from "next/image";

export default function HowThree() {
  return (
    <div className="w-fit gap-4 p-6 bg-blue-50 cbg rounded-[20px] flex flex-col items-center justify-between relative text-center shadow-md">
      <div className="bg-white rounded-md shadow-md px-8 py-5 flex flex-col items-center gap-3 relative">
        <div className="flex justify-center items-center gap-10">
          <span className="flex flex-col items-start ">
            <h4 className="text-indigo-900 font-medium">$500+</h4>
            <small className="text-neutral-400 ">Earn per day</small>
          </span>
          <span className="flex flex-col items-start">
            <h4 className="text-indigo-900 font-medium">$50</h4>
            <small className="text-neutral-400 ">Pay us</small>
          </span>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/followers.svg"
            width={200}
            height={200}
            alt=""
            className="shadow-md"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-indigo-900 text-[20px] font-semibold">
            $15,000+
          </h2>
          <small className="text-neutral-400 ">Earning</small>
        </div>
      </div>

      <div className="w-[80px] h-[80px] flex items-center justify-center rounded-md gradient-bg absolute bottom-[14rem] left-[15rem]">
        <h1 className="text-white font-semibold text-[30px]">$5k</h1>
      </div>
    </div>
  );
}
