import React from "react";
import { exo } from "../ui/font";
import Image from "next/image";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonial() {
  return (
    <section>
      <div className="text-center mb-8">
        <h1 className={`${exo.className} text-cl font-extrabold text-[35px] `}>
          What Our Clients Say About Us
        </h1>
        <p>
          Community development is often linked with community work or community
          planning, and may involve stakeholders, foundations,
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          <TestimonialCard
            userImg="/personOne.png"
            name="Trade William"
            stars="/Review.svg"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!"
          />

          <div className="mb-8 sm:break-inside-avoid">
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <Image
                  src={"/personOne.png"}
                  width={50}
                  height={50}
                  alt=""
                  className="size-14 rounded-full object-cover"
                />
                <div>
                  <Image src={`/Review.svg`} width={100} height={100} alt="" />
                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Paul Starr
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                mollitia rerum quo unde neque atque molestias quas pariatur!
                Sint, maxime?
              </p>
            </div>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <Image
                  src={"/personOne.png"}
                  width={50}
                  height={50}
                  alt=""
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <Image src={`/Review.svg`} width={100} height={100} alt="" />
                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Paul Starr
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit esse delectus, maiores fugit, reiciendis culpa
                inventore sint accusantium libero dolore eos quasi a ex aliquam
                molestiae. Tenetur hic delectus maxime.
              </p>
            </div>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <Image
                  src={"/personOne.png"}
                  width={50}
                  height={50}
                  alt=""
                  className="size-14 rounded-full object-cover"
                />

                <div>
                  <Image src={`/Review.svg`} width={100} height={100} alt="" />
                  <p className="mt-0.5 text-lg font-medium text-gray-900">
                    Paul Starr
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                fuga?
              </p>
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
}
