

import LogosBar from "../components/LogosBar";
import Offer from "../components/Offer";
import How from "../components/How";
import Pricing from "../components/Pricing";
import Header from "../ui/Header";
import Testimonial from "../components/Testimonial";
import Stat from "../components/Stat";

export default function Home() {
  return (
    <>
      {/* px-[9rem] py-[1rem] */}
      <main className="">
       <Header />

        <LogosBar />
        <Offer />
        <How />
        <Pricing />
        <Testimonial />
        <Stat />
      </main>
    </>
  );
}
