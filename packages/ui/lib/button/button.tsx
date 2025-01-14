import React from "react";
import { ButtonProps, Button as RAC_Button } from "react-aria-components";

export const Button = (props: ButtonProps) => (
  <RAC_Button
    className="px-4 py-2 bg-bhn-theme-dark text-bhn-text-neutral"
    {...props}
  />
);
