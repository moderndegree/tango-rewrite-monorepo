import React from "react";
import {
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
} from "react-aria-components";
import type {
  GridListProps as AriaGridListProps,
  GridListItemProps,
} from "react-aria-components";
import { cn } from "../utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface GridListProps extends AriaGridListProps<any> {
  className?: string;
}

export function GridList({ className, children, ...props }: GridListProps) {
  return (
    <AriaGridList className={cn("grid gap-2 p-2", className)} {...props}>
      {children}
    </AriaGridList>
  );
}

export function GridListItem({
  className,
  children,
  ...props
}: GridListItemProps) {
  return (
    <AriaGridListItem
      className={cn(
        "rounded-md p-2 outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
        className
      )}
      {...props}
    >
      {children}
    </AriaGridListItem>
  );
}
