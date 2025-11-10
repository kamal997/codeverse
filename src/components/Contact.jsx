import { useState } from "react";
import { themeClass } from "../constants/colors";
import { twMerge } from "tailwind-merge";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Write your submit logic here
    console.log(formData);
  };
  return (
    <div
      className={twMerge(
        "rounded-2xl border p-4 sm:p-6 shadow-sm",
        themeClass("panel"),
        themeClass("border")
      )}
    >
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="w-full">
            <label className={twMerge("text-sm font-medium mb-1 block", themeClass("textSubtle"))}>
              Name
            </label>
            <input
              type="text"
              placeholder="Dein Name"
              className={twMerge(
                "w-full rounded-lg border px-3 py-2 text-sm transition shadow-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2",
                themeClass("surface"),
                themeClass("border")
              )}
              value={formData.name.value}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: {
                    value: e.target.value,
                    error: "",
                  },
                });
              }}
            />
          </div>
          <div className="w-full">
            <label className={twMerge("text-sm font-medium mb-1 block", themeClass("textSubtle"))}>
              E‑Mail
            </label>
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              className={twMerge(
                "w-full rounded-lg border px-3 py-2 text-sm transition shadow-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2",
                themeClass("surface"),
                themeClass("border")
              )}
              value={formData.email.value}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: {
                    value: e.target.value,
                    error: "",
                  },
                });
              }}
            />
          </div>
        </div>
        <div className="mt-4">
          <label className={twMerge("text-sm font-medium mb-1 block", themeClass("textSubtle"))}>
            Nachricht
          </label>
          <textarea
            placeholder="Deine Nachricht"
            rows={8}
            className={twMerge(
              "w-full rounded-lg border px-3 py-2 text-sm transition shadow-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2",
              themeClass("surface"),
              themeClass("border")
            )}
            value={formData.message.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
        </div>
        <button
          className={twMerge(
            "w-full mt-4 rounded-lg font-semibold py-2.5 shadow transition-colors",
            "bg-[var(--primary-600)] text-white hover:bg-[var(--primary-700)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-300)]"
          )}
          type="submit"
        >
          Senden
        </button>
      </form>
    </div>
  );
};
