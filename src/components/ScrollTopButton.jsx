import { IconArrowUp } from "@tabler/icons-react";
import React from "react";

export const ScrollTopButton = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={toTop}
      aria-label="Nach oben"
      className="fixed bottom-6 right-6 z-[200] rounded-full p-2 text-white shadow-lg ring-1 ring-white/10 bg-gradient-primary hover:opacity-95 transition-opacity"
    >
      <IconArrowUp className="h-5 w-5" />
    </button>
  );
};