import Image from "next/image";

interface AvatarProps {
  avatar: string;
}
export default function CardOne({ avatar }: AvatarProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 p-2 bg-white rounded-md shadow-md">
        <Image
          width={50}
          height={50}
          src={avatar}
          className="rounded-[50%]"
          alt=""
        />
        <div className="flex flex-col items-start justify-start gap-1">
          <div className="w-[90px] h-2 rounded bg-pink-400"></div>
          <div className="w-[150px] h-2 rounded bg-pink-400"></div>
        </div>
        <Image src="/location.svg" width={11} height={11} className="" alt="" />
      </div>
    </div>
  );
}
