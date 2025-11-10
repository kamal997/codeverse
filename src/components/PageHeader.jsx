import React from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { DecorativeBlobs } from "./DecorativeBlobs";

export const PageHeader = ({ emoji, title, subtitle, className }) => {
  return (
    <div className={twMerge("flex items-center space-x-4 mb-8 relative", className)}>
      <DecorativeBlobs className="absolute -top-16 -left-24 w-[320px] h-[220px] pointer-events-none" />
      <div className="text-5xl animate-slide-up drop-shadow-[0_0_0.6rem_rgba(245,158,11,0.35)]">{emoji}</div>
      <div className="space-y-2">
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <Heading className="font-black">
            {title}
          </Heading>
      <div className="mt-2 h-1 w-24 bg-gradient-to-r from-[var(--primary-500)] via-[var(--secondary-500)] to-[var(--secondary-600)] rounded-full" />
        </div>
        {subtitle && (
          <div className="text-lg text-neutral-500 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Paragraph>
              {subtitle}
            </Paragraph>
          </div>
        )}
      </div>
    </div>
  );
};