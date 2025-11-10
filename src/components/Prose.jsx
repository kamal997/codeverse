import clsx from "clsx";

export function Prose({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "prose prose-sm prose-teal max-w-none prose-p:text-[var(--secondary-600)] prose-headings:text-[var(--primary-600)]"
      )}
    >
      {children}
    </div>
  );
}
