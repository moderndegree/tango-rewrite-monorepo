import React from "react";
import {
  Table as AriaTable,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell,
} from "react-aria-components";
import type { TableProps as AriaTableProps } from "react-aria-components";
import { cn } from "../utils";

interface TableProps extends AriaTableProps {
  className?: string;
}

export function Table({ className, children, ...props }: TableProps) {
  return (
    <AriaTable className={cn("w-full border-collapse", className)} {...props}>
      {children}
    </AriaTable>
  );
}

export { TableHeader, TableBody, Column, Row, Cell };
