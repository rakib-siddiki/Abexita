import { APPOINTMENT_TAGS, APPOINTMENT_TOOLS } from "../../constant";
import { APPOINTMENT_CARD_DATA } from "../../constant/appointment";
import { Icons } from "../../Icons";
import AppointmentForm from "./AppointmentForm";
import StackCard from "./StackCard";
import Tag from "./Tag";

const LargeDevice = () => {
  return (
    <>
      <div className="relative">
        <div
          className="w-full  px-3 lg:px-24 py-5 lg:py-12 border rounded-[36px] mb-3 md:mb-10"
          style={{ position: "sticky", top: "15vh", zIndex: 0 }}
        >
          <h1 className="text-lg  xs:text-2xl md:text-4xl font-semibold text-center text-slate-700 mb-4 md:mb-8 lg:mb-12 lg:!leading-[50px] text-pretty">
            Find and Book Appointments with Local and International
            Professionals
          </h1>
          {/* form  */}
          <AppointmentForm />
          {/* tags  */}
          <div className="space-y-4">
            <p className="text-gray-900">Are you looking for</p>
            <div className="flex flex-wrap gap-3 lg:gap-2 text-sm">
              {APPOINTMENT_TAGS.map((label) => (
                <Tag label={label} key={label} />
              ))}
              <Tag
                label="More"
                iconVisible={false}
                className="!text-blue-600 !rounded bg-indigo-50"
              />
              <Icons.SquareSetting />
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href="/"
              className="inline-flex items-center text-indigo-500 text-processing_ hover:underline"
            >
              Explore advanced search
              <Icons.ArrowRight />
            </a>
          </div>
        </div>
        {/* stack card */}
        {APPOINTMENT_CARD_DATA.map((card, index) => {
          const isLastCard = APPOINTMENT_CARD_DATA.length === index;
          const position = isLastCard ? "relative" : "sticky";
          return (
            <StackCard
              key={card.id}
              {...card}
              position={position}
              className="max-lg:hidden"
            />
          );
        })}
      </div>
      <div className="flex flex-wrap items-center lg:justify-center gap-3 mt-8">
        <span className="font-bold text-gray-700">Replace:</span>
        {APPOINTMENT_TOOLS.map((tool) => (
          <Tag
            label={tool}
            key={tool}
            iconVisible={false}
            className="px-4 py-2 font-medium bg-sky-50 text-sky-700 hover:bg-blue-100"
          />
        ))}
      </div>
    </>
  );
};

export default LargeDevice;
