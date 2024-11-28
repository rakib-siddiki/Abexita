declare module "app1/Button" {
  import React from "react";
  import { ButtonProps, TButtonVariant } from "app1/types";

  const Button: React.FC<ButtonProps>;
  export { TButtonVariant };
  export default Button;
}
declare module "app1/TheHeader" {
  import React from "react";
  import { TActionButtons, TNavList } from "app1/types";

  const TheHeader: React.FC<{
    navList: TNavList[];
    ActionButtons: TActionButtons;
    className?: string;
    headerClasses?: string;
  }>;
  export default TheHeader;
}

declare module "app1/types" {
  export type TButtonVariant =
    | "none"
    | "primary"
    | "secondary"
    | "outline"
    | "ghost";
  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: TButtonVariant;
    children: React.ReactNode;
    className?: string;
    isShowIcon?: boolean;
    icon?: React.ReactNode;
  }
  export type TNavList = {
    id: string;
    path?: string;
    label: string;
    hasDropDown?: boolean;
  };
  export type TActionButtons = ComponentType<{
    className?: string;
  }>;
}
