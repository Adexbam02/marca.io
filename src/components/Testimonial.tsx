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
            comment="Collaborating with Marca.io was delightful! Their creativity and professionalism resulted in designs that exceeded expectations. Highly recommended for exceptional branding."
          />

          <TestimonialCard
            userImg="/Avatar2.png"
            name="Nurain Bamidele"
            stars="/Review.svg"
            comment="Working with Marca.io was a pleasure! Their creativity and professionalism resulted in designs that exceeded our expectations. Highly recommended for exceptional branding services."
          />

          <TestimonialCard
            userImg="/Avatar2.png"
            name="Rose Mosely"
            stars="/Review.svg"
            comment="Choosing Marca.io was one of the best decisions we made for our business. Their creativity and expertise helped us stand out in a competitive market. They listened to our needs and delivered outstanding results within our timeline."
          />

          <TestimonialCard
            userImg="/Avatar.svg"
            name="Wadnik Boser"
            stars="/Review.svg"
            comment="From the initial consultation to the final deliverables, Marca.io exceeded our expectations. Their innovative ideas brought our brand to life in ways we never imagined."
          />

          <TestimonialCard
            userImg="/Avatar.svg"
            name="Klopp Angap"
            stars="/Review.svg"
            comment="If you're looking for a branding agency that delivers results, look no further than Marca.io . Their team's passion for what they do shines through in their work."
          />

          <TestimonialCard
            userImg="/Avatar.svg"
            name="Moses Noah"
            stars="/Review.svg"
            comment="The team at Marca.io is incredibly talented and professional. They delivered beyond our expectations and helped elevate our brand."
          />
        </div>
      </div>
    </section>
  );
}
