import React from "react";
import { twMerge } from "tailwind-merge";
import { themeClass } from "../constants/colors";

export const Paragraph = ({ className, children }) => {
  return (
    <p
      className={twMerge(
        "text-base lg:text-lg font-normal leading-relaxed tracking-wide",
        themeClass("textMuted"),
        className
      )}
    >
      {children}
    </p>
  );
};
