import { stat } from "../data";
import Button from "../ui/Button";
import GradientButton from "../ui/GradientButton";
import { exo } from "../ui/font";

export default function Stat() {
  return (
    <section className="bg-violet-50 w-full py-12 px-[15rem]">
      <div className="flex flex-wrap items-center justify-between text-center mb-10">
        {stat.map(({ id, number, small }) => (
          <span key={id}>
            <h1 className="text-cl text-[35px] font-extrabold">{number}</h1>
            <small className="text-indigo-900">{small}</small>
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-[3rem] text-center mb-3">
        <div className="
        flex flex-col items-center justify-center gap-[0.7rem] text-center">
          <h1
            className={`${exo.className} text-cl font-extrabold text-[35px] `}
          >
            Want to start a Project With us?
          </h1>
          <p className="max-w-[80%]">
            Warrant present garrets limited cordial in inquiry to. Supported me
            sweetness behaviour shameless excellent so arranging.
          </p>
        </div>
        
        <GradientButton button="Get Started" link="/" />
      </div>
    </section>
  );
}
