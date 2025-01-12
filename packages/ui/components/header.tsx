import React from "react";

export const Header = ({ title }: { title: string }) => (
  <header id="header" className="p-4 bg-gray-800 text-white">
    <h1>{title}</h1>
  </header>
);
export default Header;
