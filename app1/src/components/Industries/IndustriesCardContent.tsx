import { FC } from "react";
import { IndustriesCardsProps } from "./IndustriesCards";

const IndustriesCardContent: FC<IndustriesCardsProps> = ({
  active,
  badge,
  title,
  description,
  image,
}) => {
  return (
    <div className="flex justify-between w-full h-full gap-1 text-white">
      <div className={`space-y-4 w-3/5 ${active ? "" : "hidden"}`}>
        {/* badge */}
        <span className="px-2 py-1 text-xs xl:text-sm font-medium text-gray-800 rounded-full bg-gray-50 whitespace-nowrap">
          {badge}
        </span>
        <h2 className="text-xl xl:text-2xl font-semibold text-balance xl:leading-8 w-[260px]">
          {title}
        </h2>
        <p className="w-[260px] text-xs xl:text-sm text-start">{description}</p>
      </div>
      {/* card image */}
      <div className={`w-2/5 h-full ${active ? "" : "hidden"}`}>
        <img
          src={image}
          alt={badge}
          loading="lazy"
          className="size-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default IndustriesCardContent;
