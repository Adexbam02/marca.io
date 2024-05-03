import Image from "next/image";

export default function CardThree() {
  return (
    <div className="flex flex-col items-center justify-between gap-3  p-4 rounded-[10px] bg-white shadow-md">
      <div>
        <span className="flex items-center justify-between gap-7">
          <p className="font-bold text-[#3E4581]">Follower Growth</p>
          <Image src="/medias.png" width={60} height={60} alt="" />
        </span>
        <span className="flex items-center gap-1 text-[#3E4581]">
          <h2 className="text-[15px]">16.2k</h2>
          <h4>New Followers</h4>
        </span>
      </div>
      <span>
        <Image src="/barChart.svg" width={150} height={150} alt="" />
      </span>
    </div>
  );
}
