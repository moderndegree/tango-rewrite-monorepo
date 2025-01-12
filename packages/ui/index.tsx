import React, { ReactNode } from "react";
// utils
export { setupCounter } from "./utils/counter";

// components
export { Header } from "./components/header";
export { Counter } from "./components/counter";

export * from "react-aria-components";

import { Button as RA_Button } from "react-aria-components";

export const Button = ({ children }: { children: ReactNode }) => {
  return <RA_Button className="px-4 py-2 data-[hovered]:bg-slate-500 ">{children}</RA_Button>;
};
