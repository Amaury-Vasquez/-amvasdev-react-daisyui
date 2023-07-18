import { FC, HTMLProps } from "react";

export type ButtonTypes = "button" | "submit" | "reset";
export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: ButtonTypes;
}

const Button: FC<ButtonProps> = ({ children, type = "button", ...props }) => (
  <button className="w-4 h-4 bg-blue-400" type={type} {...props}>
    {children}
  </button>
);

export default Button;
