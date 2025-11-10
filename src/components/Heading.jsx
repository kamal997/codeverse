import { twMerge } from "tailwind-merge";
import { themeClass } from "../constants/colors";

// Removed Next.js local font usage for CRA compatibility

export const Heading = ({ className, children, as: Tag = "h1" }) => {
  return (
    <Tag
      className={twMerge(
        "text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent leading-tight tracking-normal",
        themeClass("headingGradient"),
        className
      )}
    >
      {children}
    </Tag>
  );
};
