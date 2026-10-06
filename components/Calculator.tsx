"use client";

import { useState } from "react";
import { Container, Eyebrow, Icon, paths } from "./ui";

const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

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
      className="bg-[#F8FAFC] py-12 dark:bg-[#09111f] lg:py-16"
    >
      <Container>
        <div className="mx-auto grid w-full max-w-[980px] overflow-hidden rounded-[2rem] border border-line bg-card shadow-xl shadow-slate-900/10 lg:grid-cols-[1.4fr_1fr]">

          {/* LEFT */}
          <div className="p-7 sm:p-9 lg:p-12">
            <Eyebrow>Financial Forecast Engine</Eyebrow>

            <h2 className="mt-3 font-serif text-[24px] font-bold leading-tight text-ink">
              Estimate Your Energy Independence
            </h2>

            <p className="mt-2 max-w-md text-[15px] font-[400] leading-snug text-mute">
              Adjust your parameters below for instant sizing and cost
              avoidance projections.
            </p>

            <div className="mt-7 space-y-7">

              {/* BILL */}
              <label className="block">
                <span className="mb-3 flex items-baseline justify-between">
                  <b className="text-[16px] font-semibold text-ink">
                    Monthly Electricity Bill
                  </b>

                  <em className="font-serif text-xl not-italic text-[#FF6B18]">
                    {usd(bill)} / mo
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

                <span className="mt-3 flex justify-between text-sm text-mute">
                  <span>$100</span>
                  <span>$4,000+</span>
                </span>
              </label>

              {/* ROOF */}
              <label className="block">
                <span className="mb-3 flex items-baseline justify-between">
                  <b className="text-[16px] font-semibold text-ink">
                    Available Roof Space
                  </b>

                  <em className="font-serif text-xl not-italic text-[#FF6B18]">
                    {roof.toLocaleString()} sq.ft
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

                <span className="mt-3 flex justify-between text-sm text-mute">
                  <span>300 sq.ft</span>
                  <span>10,000+ sq.ft</span>
                </span>
              </label>

            </div>

            <p className="mt-7 flex items-center gap-2 text-[14px] text-mute">
              <Icon
                d={paths.info}
                size={17}
                className="shrink-0 text-[#FF6B18]"
              />
              Calculated with Tier-1 tariffs &amp; average seasonal solar
              insolation.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative flex flex-col justify-between bg-navy p-7 text-white sm:p-9 lg:p-11">

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[.1em] text-white/70">
                Recommended Plant
              </p>

              <p className="mt-2 text-[clamp(2.4rem,4vw,3.3rem)] font-extrabold leading-none">
                {kw} kW
              </p>

              <p className="mt-2 text-[14px] text-white/75">
                Grid-tied monocrystalline setup
              </p>
            </div>

            <div className="mt-6 border-t border-white/15 pt-6">
              <p className="text-[14px] text-white/70">
                Estimated Annual Savings
              </p>

              <p className="mt-1 text-[1.9rem] font-bold text-[#FF6B18]">
                {usd(yearly)} / yr
              </p>

              <p className="mt-3 text-[14px] text-white/70">
                25-Year Lifetime Savings
              </p>

              <p className="mt-1 text-[1.6rem] font-semibold">
                {usd(yearly * 25)}
              </p>
            </div>

            <a
              href="#contact"
              className="mt-7 block rounded-2xl bg-accent px-6 py-3.5 text-center text-[14px] font-semibold text-white transition hover:brightness-110"
            >
              Request Detailed CAD Quote
            </a>

          </div>
        </div>
      </Container>
    </section>
  );
}