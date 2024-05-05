import CardOne from "./CardOne";

export default function HowOne() {
  return (
    <div
      className={`relativ w-fit gap-4 p-6 bg-blue-50 cbg rounded-[20px] flex flex-col items-center justify-between text-center shadow-md`}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <CardOne avatar="/Avatar.svg" />
        <CardOne avatar="/Avatar.svg" />
      </div>
      <h4 className="text-indigo-900 text-[24px] font-semibold">Marketing</h4>
      <p className="text-[15px] text-indigo-900 max-w-[15rem]">
        Marketing intelligence is necessary when entering a foreign market.
        determines the intelligence needed
      </p>
    </div>
  );
}
