import { navlinks } from "../constants/navlinks";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heading } from "./Heading";
import { socials } from "../constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse, IconX } from "@tabler/icons-react";
import { isMobile } from "../lib/utils";
import { themeClass } from "../constants/colors";
import { twMerge } from "tailwind-merge";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      {/* Backdrop overlay on small screens when sidebar is open */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-[2px] lg:hidden z-[80]"
          aria-hidden
        />
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{ x: -200 }}
            className={twMerge(
              "px-4 sm:px-6 z-[100] py-6 sm:py-8 max-w-[24rem] w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-fit fixed lg:sticky lg:top-0 lg:self-start h-screen left-0 flex flex-col justify-between border-r shadow-sm",
              themeClass("sidebarBg"),
              themeClass("sidebarDivider")
            )}
          >
            {/* Close button (mobile/tablet) */}
            <button
              onClick={() => setOpen(false)}
              className={twMerge(
                "lg:hidden absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-md transition shadow-sm",
                themeClass("surface"),
                themeClass("border")
              )}
              aria-label="Close sidebar"
            >
              <IconX className="h-5 w-5 text-neutral-700" />
            </button>
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              <Badge href="/resume" text="Lebenslauf lesen" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className={twMerge(
          "fixed lg:hidden top-6 left-4 h-12 w-12 rounded-full backdrop-blur-sm flex items-center justify-center z-50 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95",
          themeClass("surface"),
          themeClass("border")
        )}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close sidebar" : "Open sidebar"}
      >
        {open ? (
          <IconX className="h-6 w-6 text-neutral-700" />
        ) : (
          <IconLayoutSidebarRightCollapse className="h-6 w-6 text-neutral-600" />
        )}
      </button>
    </>
  );
};

export const Navigation = ({ setOpen }) => {
  const { pathname } = useLocation();

  const isActive = (href) => pathname === href;

  return (
    <div className="flex flex-col space-y-2 my-8 relative z-[100]">
      {navlinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          onClick={() => isMobile() && setOpen(false)}
            className={twMerge(
              twMerge(
                "hover:text-[var(--primary-600)] hover:bg-[var(--primary-50)] transition-all duration-200 flex items-center space-x-3 py-3 px-3 rounded-lg text-sm font-medium group",
                themeClass("sidebarText")
              ),
              isActive(link.href) && "bg-[var(--primary-100)] text-[var(--primary-700)] shadow-sm border border-[var(--primary-200)]"
            )}
        >
          <link.icon
            className={twMerge(
              "h-5 w-5 flex-shrink-0 transition-colors duration-200",
              isActive(link.href) && "text-[var(--primary-600)]",
              !isActive(link.href) && "group-hover:text-[var(--primary-500)]"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className={twMerge("text-sm md:text-sm lg:text-sm pt-8 px-3 font-semibold", themeClass("textSubtle"))}>
        Kontakt
      </Heading>
      {socials.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={twMerge(
            "hover:text-[var(--primary-600)] hover:bg-[var(--primary-50)] transition-all duration-200 flex items-center space-x-3 py-3 px-3 rounded-lg text-sm font-medium group",
            themeClass("sidebarText")
          )}
        >
          <link.icon
            className={twMerge(
              "h-5 w-5 flex-shrink-0 transition-colors duration-200 group-hover:text-[var(--primary-500)]"
            )}
          />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex items-center space-x-4 m-2 mb-6">
      <div className="relative">
        <img
          src="images/kamal.jpg"
          alt="Avatar"
          height="48"
          width="48"
          className="object-cover object-top rounded-full flex-shrink-0 ring-2 ring-[var(--primary-200)]"
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-neutral-800 text-lg">Kamal Idris</p>
        <p className="font-medium text-[var(--primary-600)] text-sm">Full-Stack-Entwickler</p>
      </div>
    </div>
  );
};
