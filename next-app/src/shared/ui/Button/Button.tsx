// import { Button as RadixButton } from "@radix-ui/themes";

import React, { memo } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center gap-2 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        default: "border-[2px] border-primary rounded-full",
        outline: "border-[2px] border-primary rounded-full",
        ghost: "border-[2px] border-primary rounded-full",
        onlyText: "",
      },
      hover: {
        default: "",
        underline: "hover:underline",
      },
      size: {
        default: "px-4 py-2 h-[40px]",
        sm: "h-8 rounded-full px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      alignItems: {
        default: "",
        between: "justify-between",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  alignItems?: "between";
  hover?: "underline";
}

export default memo(function Button({
  children,
  type = "button",
  onClick,
  variant,
  size,
  className,
  alignItems,
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className, alignItems }))}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
