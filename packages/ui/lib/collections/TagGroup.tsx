import React from "react";
import {
  TagGroup as AriaTagGroup,
  Tag as AriaTag,
} from "react-aria-components";
import type {
  TagGroupProps as AriaTagGroupProps,
  TagProps,
} from "react-aria-components";
import { cn } from "../utils";

interface TagGroupProps extends AriaTagGroupProps {
  className?: string;
}

export function TagGroup({ className, children, ...props }: TagGroupProps) {
  return (
    <AriaTagGroup className={cn("flex flex-wrap gap-2", className)} {...props}>
      {children}
    </AriaTagGroup>
  );
}

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <AriaTag
      className={cn(
        "inline-flex items-center rounded-full bg-gray-100 px-3 py-1",
        "text-sm font-medium text-gray-800",
        "hover:bg-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </AriaTag>
  );
}
