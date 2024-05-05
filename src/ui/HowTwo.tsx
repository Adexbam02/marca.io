import Image from "next/image";

export default function HowTwo() {
  return (
    <div className="row-span-0">
      <div className="w-fit gap-4 p-6 bg-blue-50 cbg rounded-[20px] flex flex-col items-center justify-between relative text-center shadow-md">
        <div className="bg-white rounded-md shadow-md px-8 py-5 flex flex-col items-start gap-3">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="w-[90px] h-2 rounded bg-pink-400"></div>
            <div className="w-[150px] h-2 rounded bg-pink-400"></div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              width={50}
              height={50}
              src="/Avatar.svg"
              className="rounded-[50%]"
              alt=""
            />
            <div className="w-[70px] h-2 rounded bg-pink-400"></div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 p-2 bg-white rounded-md shadow-md">
          <Image
            width={50}
            height={50}
            src="/Avatar2.png"
            className="rounded-[25%]"
            alt=""
          />
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="w-[170px] h-2 rounded bg-pink-400"></div>
          </div>
        </div>
        <h4 className="text-indigo-900 text-[24px] font-semibold">
          Intelligence
        </h4>
        <p className="text-[15px] text-indigo-900 max-w-[15rem]">
          Marketing intelligence (MI) is the everyday information relevant to a
          company’s markets
        </p>
      </div>
    </div>
  );
}
