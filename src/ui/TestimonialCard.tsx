import Image from "next/image";
import { testimonial } from "../data";

interface Testimonial {
  userImg: string;
  stars: string;
  name: string;
  comment: string;
}

export default function TestimonialCard({
  userImg,
  stars,
  name,
  comment,
}: Testimonial) {
  return (
    <div className="mb-8 sm:break-inside-avoid">
      <div className="rounded-lg bg-gray-50 p-6 shadow-md sm:p-8">
        <div className="flex items-center gap-4">
          <Image
            src={userImg}
            width={50}
            height={50}
            alt=""
            className="size-14 rounded-full object-cover"
          />
          <div>
            <Image src={stars} width={100} height={100} alt="" />
            <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">{comment}</p>
      </div>
    </div>
  );
}
