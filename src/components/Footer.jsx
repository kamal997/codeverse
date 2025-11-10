import { themeClass } from "../constants/colors";
import { twMerge } from "tailwind-merge";
import { socials } from "../constants/socials";

export const Footer = () => {
  return (
    <footer
      className={twMerge(
        "border-t",
        themeClass("border")
      )}
    >
      {/* top divider */}
      <div className="h-px w-full bg-[var(--primary-500)] opacity-40" />

      {/* content */}
      <div className={twMerge("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8", themeClass("textSubtle"))}>
        <div className="flex items-start justify-between gap-6">
          {/* Brand / About */}
          <div className="w-full sm:w-1/2">
            <h3 className="text-sm font-semibold text-neutral-900 mb-2">Kamal Idris</h3>
            <p className="text-xs leading-6 w-75">
              Full-Stack-Entwickler und Designer. Ich baue performante, zugängliche
              und schöne Produkte mit modernen Web-Technologien.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="w-full sm:w-1/2">
            <h3 className="text-sm font-semibold text-neutral-900 mb-2">Kontakt</h3>
            <p className="text-xs leading-6 pb-3">
              <a href="mailto:idris.kamal.997@gmail.com" className="hover:text-[var(--primary-600)]">Idris.kamal.997@gmail.com</a>
              <br />
              <a href="tel:+4915775074522" className="hover:text-[var(--primary-600)]">+49 157 750 745 22</a>
            </p>
             <div className="flex items-center gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 inline-flex items-center justify-center rounded-full border transition-colors hover:border-[var(--primary-300)] hover:text-[var(--primary-600)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-8 flex items-center justify-between text-[11px]">
          <p>
            <span className="font-semibold text-neutral-800">{new Date().getFullYear()}</span> 
            &nbsp;— Individuelles Design von Kamal Idris
          </p>
          <p>Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  );
};
