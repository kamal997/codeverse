import React from "react";
import { themeClass } from "../constants/colors";
import { twMerge } from "tailwind-merge";

export const Container = ({ children }) => {
  return (
    <main
      className={twMerge(
        "relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-10 lg:py-14 animate-fade-in",
        themeClass("containerBg")
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
};
