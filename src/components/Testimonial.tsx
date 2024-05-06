import React from "react";
import { duru_Sans, exo } from "../ui/font";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonial() {
  return (
    <section className="px-[1rem] md:px-[9rem] pt-14 py-[0rem] md:py-[1rem]">
      <div className="flex flex-col items-center justify-center gap-3 text-center mb-3">
        <h1 className={`${exo.className} text-cl text-[32px] md:text-[52px] md:tracking-tighter	font-extrabold`}>
          What Our Clients Say About Us
        </h1>
        <p className={`${duru_Sans.className} text-[12px] md:text-[15px] md:w-[80%] text-indigo-900 `}>
          Community development is often linked with community work or community
          planning, and may involve stakeholders, foundations,
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10">
        <div className=" [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          <TestimonialCard
            userImg="/personOne.png"
            name="Trade William"
            stars="/Review.svg"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!"
          />

          <TestimonialCard
            userImg="/Avatar2.png"
            name="Nurain Bamidele"
            stars="/Review.svg"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad mollitia rerum quo unde neque atque molestias quas pariatur! Sint, maxime?"
          />

          <TestimonialCard
            userImg="/Avatar2.png"
            name="Rose Mosely"
            stars="/Review.svg"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse delectus, maiores fugit, reiciendis culpa inventore sint accusantium libero dolore eos quasi a ex aliquam molestiae. Tenetur hic delectus maxime."
          />

          <TestimonialCard
            userImg="/Avatar.svg"
            name="Wadnik Boser"
            stars="/Review.svg"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga?"
          />

          <TestimonialCard
            userImg="/Avatar.svg"
            name="Klopp Angap"
            stars="/Review.svg"
            comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quo reiciendis et enim, quam dignissimos voluptatibus neque, repudiandae ipsum quisquam veniam deserunt perferendis!"
          />

          <TestimonialCard
            userImg="/Avatar.svg"
            name="Moses Noah"
            stars="/Review.svg"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla corporis consequuntur dignissimos explicabo culpa tempore provident, praesentium aut. Alias, molestiae."
          />
        </div>
      </div>
    </section>
  );
}
