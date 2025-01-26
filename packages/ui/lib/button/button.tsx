import React from "react";
import { ButtonProps, Button as RAC_Button } from "react-aria-components";

export const Button = (props: ButtonProps) => (
  <RAC_Button
    className="rounded-lg px-4 py-2 bg-primary text-dark bg-opacity-10 hover:opacity-100 hover:text-light cursor-pointer"
    {...props}
  />
);
