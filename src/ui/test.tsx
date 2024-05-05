import Image from "next/image";

<div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
  <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
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

          <div className="nameStars">
            <Image src={`/Reviews.svg`} width={100} height={100} alt="" />

            <p className="mt-0.5 text-lg font-medium text-gray-900">
              Paul Starr
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit
          rerum incidunt, a consequuntur recusandae ab saepe illo est quia
          obcaecati neque quibusdam eius accusamus error officiis atque
          voluptates magnam!
        </p>
      </blockquote>
    </div>

    <div className="mb-8 sm:break-inside-avoid">
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <Image
            src={"/personOne.png"}
            width={50}
            height={50}
            alt=""
            className="size-14 rounded-full object-cover"
          />
          <div>
            <Image src={`/Reviews.svg`} width={100} height={100} alt="" />
            <p className="mt-0.5 text-lg font-medium text-gray-900">
              Paul Starr
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad mollitia
          rerum quo unde neque atque molestias quas pariatur! Sint, maxime?
        </p>
      </blockquote>
    </div>

    <div className="mb-8 sm:break-inside-avoid">
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <Image
            src={"/personOne.png"}
            width={50}
            height={50}
            alt=""
            className="size-14 rounded-full object-cover"
          />

          <div>
            <Image src={`/Reviews.svg`} width={100} height={100} alt="" />
            <p className="mt-0.5 text-lg font-medium text-gray-900">
              Paul Starr
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          esse delectus, maiores fugit, reiciendis culpa inventore sint
          accusantium libero dolore eos quasi a ex aliquam molestiae. Tenetur
          hic delectus maxime.
        </p>
      </blockquote>
    </div>

    <div className="mb-8 sm:break-inside-avoid">
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <Image
            src={"/personOne.png"}
            width={50}
            height={50}
            alt=""
            className="size-14 rounded-full object-cover"
          />

          <div>
            <Image src={`/Reviews.svg`} width={100} height={100} alt="" />
            <p className="mt-0.5 text-lg font-medium text-gray-900">
              Paul Starr
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga?
        </p>
      </blockquote>
    </div>
  </div>
</div>;
