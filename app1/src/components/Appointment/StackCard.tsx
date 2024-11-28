import { FC } from "react";
import { Icons } from "../../Icons";

export interface IStackCard {
  position: "relative" | "sticky";
  cardClasses: string;
  linkColor: string;
  title: string;
  description: string;
  image: string;
}
interface IProps extends IStackCard {
  className?: string;
}
const StackCard: FC<IProps> = ({
  position,
  cardClasses,
  linkColor,
  title,
  description,
  image,
  className,
}) => {
  return (
    <div
      className={`flex justify-between items-center md:gap-8  py-8 px-6 rounded-3xl  h-[480px] mb-4 ${cardClasses} ${className}`}
      style={{ position: position, top: "5vh", zIndex: 8 }}
    >
      <div className="space-y-8 md:max-w-screen-sm ">
        <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-9">
          {title}
        </h3>
        <p className="max-lg:text-sm">{description}</p>
        <div>
          <a
            className={`underline text-sm font-semibold text-gray-100 inline-flex gap-3 items-center max-md:text-sm ${linkColor}`}
            href="/"
          >
            Learn more
            <Icons.LinkSquare className="max-md:w-3" />
          </a>
        </div>
      </div>
      <div className="md:max-w-screen-sm h-full flex justify-end rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className=" max-w-58 md:max-w-full object-cover "
        />
      </div>
    </div>
  );
};

export default StackCard;
