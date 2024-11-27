import { FC } from "react";
import { IndustriesCardsProps } from "./IndustriesCards";

interface IIndustriesCardTextContentProps
  extends Omit<IndustriesCardsProps, "image"> {
  badgeClasses?: string;
  titleClasses?: string;
  descriptionClasses?: string;
}
const IndustriesCardTextContent: FC<IIndustriesCardTextContentProps> = ({
  badge,
  title,
  description,
  badgeClasses,
  titleClasses,
  descriptionClasses,
}) => (
  <>
    <span
      className={`px-2 py-1 text-xs xl:text-sm font-medium text-gray-800 rounded-full bg-gray-50 whitespace-nowrap ${badgeClasses}`}
    >
      {badge}
    </span>
    <h2
      className={` md:text-xl xl:text-2xl font-semibold text-balance xl:leading-8 w-[260px] ${titleClasses}`}
    >
      {title}
    </h2>
    <p
      className={`w-[260px] text-xs xl:text-sm text-start ${descriptionClasses}`}
    >
      {description}
    </p>
  </>
);
export default IndustriesCardTextContent;
