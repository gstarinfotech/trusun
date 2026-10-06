"use client";

import { useState } from "react";
import { Container, Eyebrow, Icon, paths } from "./ui";

const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function Calculator() {
  const [bill, setBill] = useState(450);
  const [roof, setRoof] = useState(1200);

  const kw =
    Math.round(Math.min(bill / 65, roof / 100) * 10) / 10;

  const yearly = Math.round(kw * 722.5);

  const pct = (v: number, a: number, b: number) =>
    `${((v - a) / (b - a)) * 100}%`;

  return (
    <section
      id="calculator"
      className="bg-[#F8FAFC] py-8 dark:bg-[#09111f] sm:py-10 lg:py-16"
    >
      <Container>
        <div className="mx-auto grid w-full max-w-[980px] overflow-hidden rounded-[1.5rem] border border-line bg-card shadow-xl shadow-slate-900/10 sm:rounded-[2rem] lg:grid-cols-[1.4fr_1fr]">

          {/* LEFT */}
          <div className="p-6 sm:p-9 lg:p-12">
            <Eyebrow>Financial Forecast Engine</Eyebrow>

            <h2 className="mt-3 font-serif text-[24px] font-bold leading-tight text-ink">
              Estimate Your Energy Independence
            </h2>

            <p className="mt-2 max-w-md text-[14px] font-[400] leading-snug text-mute sm:text-[15px]">
              Adjust your parameters below for instant sizing and cost
              avoidance projections.
            </p>

            <div className="mt-6 space-y-6 sm:mt-7 sm:space-y-7">

              {/* BILL */}
              <label className="block">
                <span className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <b className="text-[15px] font-semibold text-ink sm:text-[16px]">
                    Monthly Electricity Bill
                  </b>

                  <em className="font-serif text-lg not-italic text-[#FF6B18] sm:text-xl">
                    {inr(bill)} / mo
                  </em>
                </span>

                <input
                  type="range"
                  min={100}
                  max={4000}
                  step={50}
                  value={bill}
                  onChange={(e) => setBill(+e.target.value)}
                  style={{
                    ["--p" as string]: pct(bill, 100, 4000),
                  }}
                />

                <span className="mt-3 flex justify-between text-xs text-mute sm:text-sm">
                  <span>₹100</span>
                  <span>₹4,000+</span>
                </span>
              </label>

              {/* ROOF */}
              <label className="block">
                <span className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <b className="text-[15px] font-semibold text-ink sm:text-[16px]">
                    Available Roof Space
                  </b>

                  <em className="font-serif text-lg not-italic text-[#FF6B18] sm:text-xl">
                    {roof.toLocaleString("en-IN")} sq.ft
                  </em>
                </span>

                <input
                  type="range"
                  min={300}
                  max={10000}
                  step={100}
                  value={roof}
                  onChange={(e) => setRoof(+e.target.value)}
                  style={{
                    ["--p" as string]: pct(roof, 300, 10000),
                  }}
                />

                <span className="mt-3 flex justify-between text-xs text-mute sm:text-sm">
                  <span>300 sq.ft</span>
                  <span>10,000+ sq.ft</span>
                </span>
              </label>
            </div>

            <p className="mt-6 flex items-start gap-2 text-[12px] leading-relaxed text-mute sm:mt-7 sm:text-[14px]">
              <Icon
                d={paths.info}
                size={17}
                className="mt-0.5 shrink-0 text-[#FF6B18]"
              />
              <span>
                Calculated with Tier-1 tariffs &amp; average seasonal solar
                insolation.
              </span>
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative flex flex-col justify-between bg-navy p-6 text-white sm:p-9 lg:p-11">

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.1em] text-white/70 sm:text-[12px]">
                Recommended Plant
              </p>

              <p className="mt-2 text-[clamp(2.4rem,8vw,3.3rem)] font-extrabold leading-none">
                {kw} kW
              </p>

              <p className="mt-2 text-[13px] text-white/75 sm:text-[14px]">
                Grid-tied monocrystalline setup
              </p>
            </div>

            <div className="mt-6 border-t border-white/15 pt-6">
              <p className="text-[13px] text-white/70 sm:text-[14px]">
                Estimated Annual Savings
              </p>

              <p className="mt-1 text-[1.7rem] font-bold text-[#FF6B18] sm:text-[1.9rem]">
                {inr(yearly)} / yr
              </p>

              <p className="mt-3 text-[13px] text-white/70 sm:text-[14px]">
                25-Year Lifetime Savings
              </p>

              <p className="mt-1 text-[1.45rem] font-semibold sm:text-[1.6rem]">
                {inr(yearly * 25)}
              </p>
            </div>

            <a
              href="#contact"
              className="mt-6 block rounded-2xl bg-accent px-5 py-3.5 text-center text-[13px] font-semibold text-white transition hover:brightness-110 sm:mt-7 sm:px-6 sm:text-[14px]"
            >
              Request Detailed CAD Quote
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}