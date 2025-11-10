import { Sidebar, ScrollTopButton } from "../components";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { themeClass } from "../constants/colors";
import { AnimationSettingsProvider } from "../context/AnimationSettings";

export default function RootLayout({ children }) {
  return (
    <div
      className={twMerge(
        "flex antialiased h-screen overflow-hidden",
        themeClass("appBg")
      )}
    >
      <AnimationSettingsProvider>
        <Sidebar />
        <div className="lg:pl-2 flex-1 overflow-y-auto relative">
          <div aria-hidden className="pointer-events-none fixed inset-0 z-0 grid-bg" />
          <div className="flex max-w-6xl mx-auto h-full">
            <div className="flex-1 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:pl-8 lg:pr-4 md:pr-8">
              {children}
            </div>
          </div>
          <ScrollTopButton />
        </div>
      </AnimationSettingsProvider>
    </div>
  );
}
