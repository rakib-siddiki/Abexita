import { FC } from "react";
import { Icons } from "../../Icons";

export interface IFeaturesCard {
  title: string;
  description: string;
  Icon: React.ElementType;
}
interface IProps extends IFeaturesCard {
  className?: string;
}
const Card: FC<IProps> = ({ title, description, Icon, className }) => {
  return (
    <div
      className={`p-5 space-y-5  xl:w-[300px] h-[186px] rounded-3xl bg-white bg-opacity-10 border border-transparent hover:border-white hover:shadow-[0px_0px_16px_4px_rgba(255,255,255,0.25)] transition-all ${className}`}
    >
      {/* Icon and Action */}
      <div className="flex justify-between items-center text-white">
        {/* Icon */}
        <Icon />
        {/* Action Icon */}
        <a href="/">
          <Icons.LinkSquare />
        </a>
      </div>
      {/* Text Content */}
      <div className="text-left text-white space-y-2.5">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default Card;
