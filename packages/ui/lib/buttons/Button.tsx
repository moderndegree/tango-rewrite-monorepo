import React from "react";
import { Button as AriaButton } from "react-aria-components";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import { cn } from "../utils";

interface ButtonProps extends AriaButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <AriaButton
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium",
        variant === "primary" &&
          "bg-primary-600 text-white hover:bg-primary-700",
        variant === "secondary" &&
          "bg-gray-100 text-gray-900 hover:bg-gray-200",
        variant === "outline" &&
          "border border-gray-300 bg-transparent hover:bg-gray-50",
        variant === "ghost" && "bg-transparent hover:bg-gray-50",
        size === "sm" && "h-8 px-3 text-sm",
        size === "md" && "h-10 px-4 text-base",
        className
      )}
      {...props}
    />
  );
}
