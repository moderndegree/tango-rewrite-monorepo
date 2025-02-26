import React from "react";
import {
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
} from "react-aria-components";
import type {
  ListBoxProps as AriaListBoxProps,
  ListBoxItemProps,
} from "react-aria-components";
import { cn } from "../utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ListBoxProps extends AriaListBoxProps<any> {
  className?: string;
}

export function ListBox({ className, children, ...props }: ListBoxProps) {
  return (
    <AriaListBox className={cn("rounded-md border p-1", className)} {...props}>
      {children}
    </AriaListBox>
  );
}

export function ListBoxItem({
  className,
  children,
  ...props
}: ListBoxItemProps) {
  return (
    <AriaListBoxItem
      className={cn(
        "px-4 py-2 outline-none cursor-default rounded-sm",
        "data-[highlighted]:bg-primary-100",
        "data-[selected]:bg-primary-600 data-[selected]:text-white",
        className
      )}
      {...props}
    >
      {children}
    </AriaListBoxItem>
  );
}
