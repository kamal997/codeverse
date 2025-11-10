import React from "react";

import { twMerge } from "tailwind-merge";
import { themeClass } from "../constants/colors";

export const Highlight = ({ className, children }) => {
  return (
    <span
      className={twMerge(
        "px-2 py-1 rounded-md font-medium",
        themeClass("highlight"),
        className
      )}
    >
      {children}
    </span>
  );
};
