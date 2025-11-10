import React from "react";
import { themeClass } from "../constants/colors";
import { twMerge } from "tailwind-merge";

export const Container = ({ children }) => {
  return (
    <main
      className={twMerge(
        "relative max-w-5xxl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16 animate-fade-in overflow-hidden",
        themeClass("containerBg")
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
};
