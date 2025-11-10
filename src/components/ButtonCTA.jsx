import { themeClass } from "../constants/colors";
import { twMerge } from "tailwind-merge";

export const ButtonCTA = () => {
  return (
    <div className="absolute top-0 inset-x-0 flex justify-center">
      <a
        href="/projects"
        className="no-underline group cursor-pointer relative rounded-full p-px text-xs font-semibold leading-6 inline-block transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)] shadow-lg"
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(245,158,11,0.25)_0%,rgba(245,158,11,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div
          className={twMerge(
            "relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4 ring-1",
            themeClass("surface"),
            themeClass("text"),
            themeClass("ring")
          )}
        >
          <span>Projekte ansehen</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-[var(--secondary-400)] opacity-0 transition-opacity duration-500 group-hover:opacity-60"></span>
      </a>
    </div>
  );
};
