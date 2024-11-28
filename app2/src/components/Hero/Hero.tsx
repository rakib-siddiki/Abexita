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
          <div className="bg-[#ECECEC] p-1 flex rounded-lg mx-auto relative">
            {/* Animated Slider */}
            <div
              className={`absolute top-[4px] bottom-[4px] w-[48%] bg-white rounded-lg transition-transform duration-300 ${
                plan === "monthly" ? "translate-x-0" : "translate-x-full"
              }`}
            />
            <button
              onClick={() => setPlan("monthly")}
              className={`px-8 py-2 text-xs font-semibold sm:text-sm relative z-10 ${
                plan === "monthly" ? "text-primary-500" : "text-gray-500"
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setPlan("yearly")}
              className={`px-8 py-2 text-xs font-semibold sm:text-sm relative z-10 ${
                plan === "yearly" ? "text-primary-500" : "text-gray-500"
              }`}
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
