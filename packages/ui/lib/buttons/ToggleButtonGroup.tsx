import React from "react";
import { ToggleButtonGroup as AriaToggleButtonGroup } from "react-aria-components";
import type { ToggleButtonGroupProps as AriaToggleButtonGroupProps } from "react-aria-components";
import { cn } from "../utils";

interface ToggleButtonGroupProps extends AriaToggleButtonGroupProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  children?: React.ReactNode;
}

export function ToggleButtonGroup({
  orientation = "horizontal",
  className,
  children,
  ...props
}: ToggleButtonGroupProps) {
  return (
    <AriaToggleButtonGroup
      className={cn(
        "flex gap-1",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
      {...props}
    >
      {children}
    </AriaToggleButtonGroup>
  );
}
