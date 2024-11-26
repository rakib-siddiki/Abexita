// src/types/app1.d.ts (in app2)
declare module "app1/Button" {
  import React from "react";

  export type ButtonProps = {
    text: string;
    onClick: () => void;
  };

  const Button: React.FC<ButtonProps>;
  export default Button;
}
