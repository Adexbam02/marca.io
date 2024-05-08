import GradientButton from "../ui/GradientButton";

export default function Soon() {
  return (
    <div className="px-[1rem] md:px-[9rem]  grid h-screen place-content-center bg-white py-[0rem]  md:py-[1rem]">
      <div className="text-center flex items-center justify-center flex-col gap-[1rem]">
        <h1 className="text-[4rem] md:text-9xl font-black text-gray-200">Coming Soon</h1>
        <GradientButton button="Go Back Home" link="/" />
      </div>
    </div>
  );
}
