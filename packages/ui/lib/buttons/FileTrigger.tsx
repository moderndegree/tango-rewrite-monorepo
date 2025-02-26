import React from "react";
import { FileTrigger as AriaFileTrigger, Button } from "react-aria-components";
import type { FileTriggerProps as AriaFileTriggerProps } from "react-aria-components";
import { cn } from "../utils";

interface FileTriggerProps extends Omit<AriaFileTriggerProps, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export function FileTrigger({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: FileTriggerProps) {
  return (
    <AriaFileTrigger {...props}>
      <Button
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
          size === "lg" && "h-12 px-6 text-lg",
          className
        )}
      >
        {children}
      </Button>
    </AriaFileTrigger>
  );
}
