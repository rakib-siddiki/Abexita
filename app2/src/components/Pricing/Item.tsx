import { FC, HTMLAttributes } from "react";
import { Icons } from "../../Icons";
interface IProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}
const Item: FC<IProps> = ({ text, className, ...rest }) => {
  return (
    <span
      {...rest}
      className={`inline-flex items-center gap-3 text-sm text-slate-600  ${className}`}
    >
      <Icons.Check /> {text}
    </span>
  );
};

export default Item;
