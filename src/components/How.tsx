import Image from "next/image";

export default function How() {
  return (
    <section>
      <div>
        <h1>How it Works?</h1>
        <p>
          Resolving neglected sir tolerably but existence conveying for. Day his
          put off unaffected literature partiality inhabiting.
        </p>
      </div>
      <div className="w-[475px] h-[580px] bg-green-500 cbg rounded-[25px] flex items-center justify-center relative">
        <div>
          <div className="flex items-center justify-between p-1">
            <Image src="/user1.svg" className="w-[50px] h-[50px]" alt="" />
            <div>
              <span className="w-11 h-2 rounded"></span>
              <span className="w-15 h-2 rounded"></span>
            </div>
            <Image src="/location.svg" className="w-4 h-4" alt="" />
          </div>
        </div>
        <h4>Marketing</h4>
        <p>
          Marketing intelligence is necessary when entering a foreign market.
          determines the intelligence needed
        </p>
      </div>
      <div></div>
      <div></div>
    </section>
  );
}
