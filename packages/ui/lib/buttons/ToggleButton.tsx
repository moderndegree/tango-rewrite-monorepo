import React from "react";
import { ToggleButton as AriaToggleButton } from "react-aria-components";
import type { ToggleButtonProps as AriaToggleButtonProps } from "react-aria-components";
import { cn } from "../utils";

interface ToggleButtonProps extends AriaToggleButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function ToggleButton({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ToggleButtonProps) {
  return (
    <AriaToggleButton
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium",
        "data-[selected]:bg-primary-600 data-[selected]:text-white",
        variant === "primary" && "bg-gray-100 text-gray-900 hover:bg-gray-200",
        variant === "secondary" &&
          "border border-gray-300 bg-transparent hover:bg-gray-50",
        size === "sm" && "h-8 px-3 text-sm",
        size === "md" && "h-10 px-4 text-base",
        size === "lg" && "h-12 px-6 text-lg",
        className
      )}
      {...props}
    />
  );
}
