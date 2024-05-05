

import LogosBar from "../components/LogosBar";
import Offer from "../components/Offer";
import How from "../components/How";
import Pricing from "../components/Pricing";
import Header from "../ui/Header";

export default function Home() {
  return (
    <>
      {/* px-[9rem] py-[1rem] */}
      <main className="px-[4rem md:px-[9rem]">
       <Header />

        <LogosBar />
        <Offer />
        <How />
        <Pricing />
      </main>
    </>
  );
}
