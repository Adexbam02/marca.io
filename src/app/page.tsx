import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <header className="flex items-center bg-ed-300 justify-center mx-[5rem] my-[3rem]">
        <Navbar />
        {/* <div className="flex items-center bg-red-300 justify-center mx-[5rem] my-[3rem]">
          Home
        </div> */}
      </header>
    </>
  );
}