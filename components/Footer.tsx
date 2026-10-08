"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Container, Icon, paths } from "./ui";

const sol: { name: string; badge: string; href: string }[] = [
  { name: "Homes", badge: "Residential", href: "/solutions/homes" },
  { name: "Commercial Solar", badge: "C&I", href: "/solutions/commercial" },
  { name: "Housing Societies", badge: "Multi-Family", href: "/solutions/housing-societies" },
];

const co: { name: string; href: string }[] = [
  { name: "Home Overview", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Why trust us", href: "/#why" },
  { name: "How it Works", href: "/about#how-it-works" },
  { name: "Customer Reviews", href: "/about#feedbacks" },
];

const legal: { name: string; href: string }[] = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Engineering", href: "/terms" },
];

const social = [
  { name: "Facebook", href: "https://facebook.com/trusun", Icon: FaFacebookF },
  { name: "Instagram", href: "https://instagram.com/trusun", Icon: FaInstagram },
  { name: "LinkedIn", href: "https://linkedin.com/company/trusun", Icon: FaLinkedinIn }
];

export default function Footer() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    const [base, h] = href.split("#");
    const clean = (s: string) => s.replace(/\/$/, "") || "/";
    if (clean(base) !== clean(pathname)) return false;
    return (h ? "#" + h : "") === hash;
  };

  return (
    <footer className="bg-[#071a2f] text-white">
      <Container className="pt-10 sm:pt-14 lg:pt-20">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_1.3fr]">

          <div>
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
              <img
                src="/logo.png"
                alt="TruSun Enterprises"
                className="h-9 w-auto rounded bg-white p-0.5 sm:h-10"
              />

              <span className="text-lg sm:text-xl">
                <b className="font-semibold">TruSun</b>{" "}
                <span className="font-light text-white/80">Enterprises</span>{" "}
                <i className="text-[#FF6B18]">•</i>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/60 sm:mt-5 sm:text-[14px]">
              Engineering institutional-grade solar generation infrastructure,
              AI string telemetry, and balance-sheet grade clean energy assets
              engineered for 25+ years.
            </p>

            <span className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] sm:mt-5 sm:px-3 sm:py-2 sm:text-[13px]">
              <i className="h-2 w-2 rounded-full bg-emerald-400" />
              120+ MWp Active Telemetry Fleet
            </span>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[.1em] text-white/50 sm:mt-8 sm:text-[11px]">
              Follow our grid updates
            </p>

            <div className="mt-2.5 flex gap-2.5 sm:mt-3 sm:gap-3">
              {social.map(({ name, href, Icon: Brand }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-[#FF6B18] hover:text-[#FF6B18] sm:h-9 sm:w-9"
                >
                  <Brand size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[.12em] sm:text-[13px]">
              Solutions
            </h4>

            <ul className="mt-4 space-y-2.5 text-[13px] text-white/70 sm:mt-5 sm:space-y-3.5 sm:text-[15px]">
              {sol.map(({ name, badge, href }) => {
                const active = pathname === href;
                return (
                  <li
                    key={name}
                    className="flex items-center justify-between gap-3"
                  >
                    <Link
                      href={href}
                      className={
                        active
                          ? "font-semibold text-[#FF6B18]"
                          : "hover:text-[#FF6B18]"
                      }
                    >
                      {name}
                    </Link>

                    <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold sm:px-2 sm:text-[11px]">
                      {badge}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[.12em] sm:text-[13px]">
              Company
            </h4>

            <ul className="mt-4 space-y-2.5 text-[13px] text-white/70 sm:mt-5 sm:space-y-3.5 sm:text-[15px]">
              {co.map(({ name, href }) => {
                const active = isActive(href);
                return (
                  <li key={name}>
                    <Link
                      href={href}
                      onClick={() =>
                        setHash(href.includes("#") ? "#" + href.split("#")[1] : "")
                      }
                      className={
                        active
                          ? "font-semibold text-[#FF6B18]"
                          : "hover:text-[#FF6B18]"
                      }
                    >
                      {name}
                      {active && " •"}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-[13px]">
                <b className="uppercase tracking-[.1em]">Project Briefing</b>

                <span className="text-[10px] font-semibold text-[#FF6B18] sm:text-[12px]">
                  • Quarterly Tech
                </span>
              </div>

              <p className="mt-3 text-[12px] leading-relaxed text-white/60 sm:mt-4 sm:text-[14px]">
                Subscribe for institutional solar LCOE models, bi-facial
                technology briefs, and grid parity research.
              </p>

              <form
                className="mt-3 flex gap-2 sm:mt-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="corporate.email@domain.com"
                  aria-label="Email"
                  className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-[12px] text-white placeholder:text-white/40 sm:px-4 sm:py-3 sm:text-[14px]"
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid h-[42px] w-11 shrink-0 place-items-center rounded-lg bg-accent sm:h-[48px] sm:w-12"
                >
                  <Icon d={paths.arrow} size={17} />
                </button>
              </form>
            </div>

            <div className="mt-4 grid gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-3">
              <a
                href="tel:18008787866"
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 sm:gap-3 sm:p-4"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent/20 text-[#FF6B18] sm:h-9 sm:w-9">
                  <Icon d={paths.phone} size={15} />
                </span>

                <span className="leading-tight">
                  <small className="block text-[9px] font-semibold uppercase tracking-wide text-white/60 sm:text-[10px]">
                    Hotline 24/7
                  </small>

                  <b className="text-[12px] sm:text-[14px]">1800-TRUSUN</b>
                </span>
              </a>

              <a
                href="mailto:pro@trusun.com"
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 sm:gap-3 sm:p-4"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-sky-400/20 text-sky-300 sm:h-9 sm:w-9">
                  <Icon d={paths.mail} size={15} />
                </span>

                <span className="min-w-0 leading-tight">
                  <small className="block text-[9px] font-semibold uppercase tracking-wide text-white/60 sm:text-[10px]">
                    Institutional Desk
                  </small>

                  <b className="break-all text-[11px] sm:text-[14px]">
                    pro@trusun.com
                  </b>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 py-5 text-[11px] text-white/60 sm:mt-12 sm:gap-4 sm:py-6 sm:text-[13px] lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span>
              © {new Date().getFullYear()} TruSun Enterprises Pvt. Ltd. All
              rights reserved.
            </span>

            <span className="rounded border border-white/10 bg-white/5 px-2 py-1 text-[10px] sm:px-2.5 sm:text-[12px]">
              ISO 9001:2015 &amp; MNRE Registered EPC
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6">
            {legal.map(({ name, href }) => (
              <Link key={name} href={href} className="hover:text-white">
                {name}
              </Link>
            ))}

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="border-l border-white/15 pl-4 hover:text-white sm:pl-6"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </Container>
    </footer>
  );
}