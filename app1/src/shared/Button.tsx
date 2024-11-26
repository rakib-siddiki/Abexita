import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { Icons } from "../Icons";

type TButtonVariant = keyof typeof variantClasses;
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  children: ReactNode;
  className?: string;
  isShowIcon?: boolean;
  icon?: ReactNode;
}

const variantClasses = {
  none: "",
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus:bg-primary-600 focus:outline-none",
  secondary:
    "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none",
  outline:
    "bg-gray-50 border border-gray-600 text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-100 focus:outline-none",
  ghost:
    "bg-transparent hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-100 focus:outline-none",
};
const baseClasses =
  "rounded-lg px-4 py-2 inline-flex items-center max-md:text-sm gap-2 leading-6 transition duration-200 ease-in-out max-md:rounded-sm";

const Button: FC<IProps> = ({
  variant = "primary",
  children,
  className,
  isShowIcon,
  icon,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${variantClasses[variant]} ${baseClasses} ${className}`}
    >
      {isShowIcon && (icon ?? <Icons.Search />)} {children}
    </button>
  );
};

export default Button;
