import { Icons } from "../../Icons";
import { Button } from "../../shared";
const Hero = () => {
  return (
    <section className="my-12 object-cover size-full bg-no-repeat bg-hero-pattern bg-cover bg-center h-full">
      <div className="mx-auto px-4 sm:text-center max-w-screen-lg space-y-7 ">
        {/* heading */}
        <h1 className="font-bold text-3xl md:text-4xl  md:!leading-[52px] text-balance ">
          Looking for a
          <span className="text-red-500 mx-1">
            Business Solution <br className="max-lg:hidden" />
            for
          </span>
          appointments?
        </h1>
        {/* description */}
        <p className="text-gray-600 max-md:text-sm">
          Ambel simplifies business management by providing tools for scheduling
          appointments, managing bookkeeping, accepting payments, sharing
          resources with customers, sending reminders, and running email
          marketing campaigns.
        </p>
        {/* hero buttons */}
        <div className="flex lg:items-center max-xs:flex-col sm:justify-center gap-4 md:gap-7">
          <div className="relative">
            <Button className="max-xs:w-48 max-md:rounded-sm">
              Start A Free Trial
            </Button>
            <Icons.PointToTrail className="absolute right-full top-4 max-sm:hidden" />
          </div>
          <div className="">
            <Button
              isShowIcon
              variant="none"
              className="max-xs:w-48 max-md:rounded-sm bg-orange-500 text-gray-50 hover:bg-orange-600 active:bg-orange-700 focus:outline-none w-fit"
            >
              Find Professionals
            </Button>
          </div>
        </div>
        {/* pointer options */}

        <div className="flex max-sm:flex-col items-center justify-center gap-6 max-sm:hidden">
          <Badge text="No credit card required" />
          <Badge text="Try one month for free" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Badge = ({ text, className }: { text: string; className?: string }) => (
  <span
    className={`inline-flex items-center px-2 py-1 rounded-full gap-2 bg-green-100/50 text-xs text-green-500 ${className}`}
  >
    <Icons.Success /> {text}
  </span>
);
