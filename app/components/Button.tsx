"use client";

import clsx from "clsx";

type ButtonProps = {
  title: string;
  onClick: () => void;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
};

const variantStyles = {
  primary: "bg-transparent text-[#3EA513] border border-[#404B69]",
  secondary: "bg-[#3EA513] text-white",
};

const sizeStyles = {
  sm: "text-sm px-5 py-3 w-[200px] rounded-full",
  md: "text-base px-7 py-3 w-[250px] rounded-full",
  lg: "text-lg px-10 py-3 w-[300px] rounded-full",
};
export const Button = ({ title, onClick, variant, size }: ButtonProps) => {
  return (
    <button
      className={clsx(
        `px-4 py-2 rounded cursor-pointer ${
          variant ? variantStyles[variant] : variantStyles.primary
        } ${sizeStyles.sm}`
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
