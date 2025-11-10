import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
export const TechStack = () => {
  const stack = [
    { title: "Node", src: "/images/logos/node.webp", className: "h-12 w-20" },
    { title: "Tailwind", src: "/images/logos/tailwind.png", className: "h-12 w-28" },
    { title: "JavaScript", src: "/images/logos/javascript.png", className: "h-12 w-20" },
    { title: "React", src: "/images/logos/react.png", className: "h-12 w-20" },
    { title: "React Native", src: "/images/logos/react-native.svg", className: "h-12 w-24" },
    { title: "MongoDB", src: "/images/logos/mongodb.png", className: "h-12 w-20" },
    { title: "WordPress", src: "/images/logos/wordpress.png", className: "h-12 w-24" },
    { title: "Java", src: "/images/logos/java.webp", className: "h-12 w-20" },
    { title: "Python", src: "/images/logos/python.png", className: "h-12 w-20" },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-2xl lg:text-3xl mt-20 mb-4"
      >
        Tech-Stack
      </Heading>

    
      <div className="overflow-hidden">
        <div className="marquee whitespace-nowrap">
          {[...stack, ...stack].map((item, idx) => (
            <img
              key={`${item.title}-${idx}`}
              src={item.src}
              width={200}
              height={200}
              alt={item.title}
              className={twMerge("object-contain", item.className)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
