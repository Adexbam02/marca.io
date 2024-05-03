import Image from "next/image";

export default function CardTwo() {
  return (
    <div className="flex flex-col items-center justify-between gap-3  p-4 rounded-[10px] bg-white shadow-md">
      <span className="flex justify-between gap-5 items-center">
        <p className="font-bold text-[#3E4581]">Media Type</p>
        <Image src="/medias.png" width={50} height={50} alt="" />
      </span>
      <Image src="/pieChart.png" width={120} height={120} alt="" />
    </div>
  );
}
