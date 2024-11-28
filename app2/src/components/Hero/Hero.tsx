import { useState } from "react";
import { Pricing, HeroSummery } from "..";
export type TPricePlan = "monthly" | "yearly";
const Hero = () => {
  const [plan, setPlan] = useState<TPricePlan>("monthly");
  return (
    <>
      <section className="w-full bg-[#F5FFF6]">
        <div className="w-full text-center px-4 pt-14 bg-[#F5FFF6] flex flex-col gap-3 lg:!gap-6 justify-center items-center">
          <HeroSummery />
          <div className="bg-[#ECECEC] p-1 flex rounded-lg mx-auto">
            <button
              onClick={() => setPlan("monthly")}
              className="px-8 py-2 text-xs font-semibold bg-white rounded-lg sm:text-sm"
            >
              MONTHLY
            </button>
            <button
              onClick={() => setPlan("yearly")}
              className="xsm:text-sm text-xs font-semibold bg-[#ECECEC] rounded-lg py-2 px-8"
            >
              YEARLY
            </button>
          </div>
        </div>
      </section>
      <Pricing plan={plan} />
    </>
  );
};

export default Hero;
