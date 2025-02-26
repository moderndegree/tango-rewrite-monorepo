import React from "react";
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import type {
  MenuProps as AriaMenuProps,
  MenuItemProps,
} from "react-aria-components";
import { cn } from "../utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface MenuProps extends AriaMenuProps<any> {
  className?: string;
}

export function Menu({ className, children, ...props }: MenuProps) {
  return (
    <AriaMenu
      className={cn(
        "min-w-[200px] rounded-md border bg-white p-1 shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </AriaMenu>
  );
}

export function MenuItem({ className, children, ...props }: MenuItemProps) {
  return (
    <AriaMenuItem
      className={cn(
        "flex items-center px-4 py-2 outline-none cursor-default rounded-sm",
        "data-[highlighted]:bg-primary-100",
        "data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </AriaMenuItem>
  );
}

export { MenuTrigger, Popover };
