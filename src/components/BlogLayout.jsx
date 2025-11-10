import { Prose } from "./Prose";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Link } from "react-router-dom";
import { Paragraph } from "./Paragraph";
import { themeClass } from "../constants/colors";
import { twMerge } from "tailwind-merge";

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({ children, meta }) {
  const formatDate = (d) => {
    try {
      return new Date(d).toLocaleDateString("de-DE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return d;
    }
  };

  return (
    <Container>
      <article>
        <header className="flex flex-col">
          <Link
            type="button"
            to="/blog"
            aria-label="Go back to articles"
            className={twMerge(
              "group mb-4 flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 transition",
              themeClass("surface"),
              themeClass("ring")
            )}
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 d" />
          </Link>

          <Heading className=" py-4">{meta.title}</Heading>
          <time
            dateTime={meta.date}
            className="flex items-center text-base text-zinc-400 "
          >
            <Paragraph className=" text-zinc-700">
              {formatDate(meta.date)}
            </Paragraph>
          </time>
          <div
            className={twMerge(
              "w-full mt-4 aspect-w-16 aspect-h-10 rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative",
              themeClass("overlaySoft")
            )}
          >
            <img
              src={meta.image}
              alt="thumbnail"
              height="800"
              width="800"
              className={`object-cover object-left-top w-full max-h-96`}
            />
          </div>
        </header>
        <Prose className="mt-8">{children}</Prose>
      </article>
    </Container>
  );
}
