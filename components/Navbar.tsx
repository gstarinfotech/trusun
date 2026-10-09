"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Icon, paths, wrap } from "./ui";

const solutionItems = [
  {
    href: "/solutions/homes",
    label: "Homes",
    icon: "M3 10.5L12 3l9 7.5M5 9.5V21h14V9.5M9 21v-6h6v6",
  },
  {
    href: "/solutions/commercial",
    label: "Commercial",
    icon: "M4 21V9h6v12M14 21V4h6v17M4 13h6M4 17h6M14 8h6M14 12h6M14 16h6",
  },
  {
    href: "/solutions/housing-societies",
    label: "Housing Societies",
    icon: "M3 21V10h7v11M14 21V4h7v17M5 14h3M5 18h3M16 8h3M16 12h3M16 16h3",
  },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dark = mounted && resolvedTheme === "dark";

  const closeMenus = () => {
    setOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-page shadow-[0_4px_14px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_18px_rgba(0,0,0,0.55)]">
      <div
        className={`${wrap} relative flex h-[76px] items-center gap-3 sm:gap-4 lg:h-[100px]`}
      >
        <Link
          href="/"
          onClick={closeMenus}
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
        >
          <img
            src="/logo.png"
            alt="Trusun Enterprises"
            className="h-9 w-auto sm:h-11 lg:h-[58px]"
          />

          <span className="font-logo text-[0.9rem] font-bold uppercase leading-[.95] text-navy dark:text-white sm:text-[1.1rem] lg:text-[1.6rem]">
            Trusun
            <br />
            Enterprises
          </span>
        </Link>

        <nav
          aria-label="Main"
          className={`${open ? "flex" : "hidden"
            } absolute left-0 right-0 top-full max-h-[calc(100vh-76px)] flex-col gap-1 overflow-y-auto border-b border-line bg-page px-4 py-4 sm:px-5 lg:static lg:ml-auto lg:max-h-none lg:overflow-visible lg:flex lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 xl:gap-9`}
        >
          <Link
            href="/"
            onClick={closeMenus}
            className="inline-flex items-center gap-1 rounded-lg px-2 py-2.5 font-nav text-[16px] font-semibold text-ink transition hover:text-[#FF6B18] sm:text-[17px] lg:px-0 lg:py-0 lg:text-[18px]"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeMenus}
            className="inline-flex items-center gap-1 rounded-lg px-2 py-2.5 font-nav text-[16px] font-semibold text-ink transition hover:text-[#FF6B18] sm:text-[17px] lg:px-0 lg:py-0 lg:text-[18px]"
          >
            About Us
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setSolutionsOpen((prev) => !prev)}
              aria-expanded={solutionsOpen}
              className="inline-flex w-full items-center justify-between gap-1 rounded-lg px-2 py-2.5 font-nav text-[16px] font-semibold text-ink transition hover:text-[#FF6B18] sm:text-[17px] lg:w-auto lg:justify-start lg:px-0 lg:py-0 lg:text-[18px]"
            >
              <span>Solutions</span>

              <Icon
                d={paths.chevron}
                size={18}
                className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {solutionsOpen && (
              <div
                className="
                  mt-1
                  w-full
                  rounded-xl
                  bg-white
                  p-2
                  shadow-[0_8px_25px_rgba(0,0,0,0.18)]
                  dark:bg-[#10253b]

                  lg:absolute
                  lg:left-1/2
                  lg:top-[calc(100%+18px)]
                  lg:w-[300px]
                  lg:-translate-x-1/2
                  lg:rounded-xl
                  lg:p-2
                "
              >
                {solutionItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenus}
                    className="
                      mb-2
                      flex
                      min-h-[48px]
                      items-center
                      gap-3
                      rounded-lg
                      bg-[#e9ecef]
                      px-3
                      py-3
                      font-nav
                      text-[16px]
                      font-semibold
                      text-[#062d49]
                      transition
                      last:mb-0
                      hover:bg-[#dfe4e8]
                      sm:gap-4
                      sm:px-4
                      sm:text-[18px]
                      dark:bg-[#18344c]
                      dark:text-white
                      dark:hover:bg-[#21445f]
                    "
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                      <Icon d={item.icon} size={22} />
                    </span>

                    <span className="truncate">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/projects"
            onClick={closeMenus}
            className="inline-flex items-center gap-1 rounded-lg px-2 py-2.5 font-nav text-[16px] font-semibold text-ink transition hover:text-[#FF6B18] sm:text-[17px] lg:px-0 lg:py-0 lg:text-[18px]"
          >
            Projects
          </Link>

          <Link
            href="/solar-guide"
            onClick={closeMenus}
            className="inline-flex items-center gap-1 rounded-lg px-2 py-2.5 font-nav text-[16px] font-semibold text-ink transition hover:text-[#FF6B18] sm:text-[17px] lg:px-0 lg:py-0 lg:text-[18px]"
          >
            Solar guide
          </Link>

          <a
            href="/contact-us"
            onClick={closeMenus}
            className="mt-2 rounded-full bg-navy px-6 py-3 text-center font-nav text-[15px] font-semibold text-white lg:hidden"
          >
            Get Free Quote
          </a>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">
          <a
            href="/contact-us"
            className="hidden rounded-full bg-navy px-6 py-3 font-nav text-[15px] font-semibold text-white transition hover:brightness-125 lg:inline-block xl:px-8 xl:py-3.5 xl:text-[17px] dark:bg-[#1d5c85]"
          >
            Get Free Quote
          </a>

          <button
            type="button"
            aria-label={
              dark ? "Switch to light mode" : "Switch to dark mode"
            }
            onClick={() => setTheme(dark ? "light" : "dark")}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-alt text-ink transition-all duration-200 hover:scale-105 hover:border-accent hover:text-[#FF6B18] sm:h-11 sm:w-11"
          >
            {dark ? (
              <Icon
                d="M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                size={20}
              />
            ) : (
              <Icon
                d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
                size={20}
              />
            )}
          </button>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line text-ink sm:h-11 sm:w-11 lg:hidden"
          >
            <Icon
              d={
                open
                  ? "M6 6l12 12M18 6L6 18"
                  : "M4 7h16M4 12h16M4 17h16"
              }
              size={22}
            />
          </button>
        </div>
      </div>
    </header>
  );
}