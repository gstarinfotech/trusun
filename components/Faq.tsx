"use client";

import { useState } from "react";
import { Eyebrow, Icon, paths } from "./ui";

const list = [
  {
    q: "What happens during cloudy, overcast, or rainy days?",
    a: "Panels still generate power in diffuse light, at reduced output. Annual yield estimates already account for seasonal weather, and net-metering credits balance low-output days.",
  },
  {
    q: "Does solar installation damage my roof terrace or void warranties?",
    a: "No. We use non-penetrative, structurally certified mounting and waterproofing methods, so your roof warranty stays intact.",
  },
  {
    q: "How does net-metering settlement work on my electricity bill?",
    a: "Excess energy is exported to the grid and credited on your bill. We handle the DISCOM application and approvals end to end.",
  },
  {
    q: "What routine maintenance is required for residential panels?",
    a: "Periodic cleaning and an annual inspection. Our 25-year SLA covers monitoring, thermography and service response.",
  },
  {
    q: "What if part of my roof is shaded by trees or a neighbouring building?",
    a: "We run a shadow analysis before design and place panels and micro-inverters to minimize shading losses.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#F8FAFC] py-16 dark:bg-[#09111f] lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1216px] px-5 sm:px-8 lg:px-0">

        <div className="text-center">
          <Eyebrow>Clarity &amp; Confidence</Eyebrow>

          <h2 className="mt-2 font-serif text-[clamp(1.9rem,3.8vw,3.1rem)] font-semibold leading-tight text-ink">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-[640px] text-[17px] text-mute">
            Straight answers to common questions about rooftop durability,
            weather variations, maintenance, and utility credits.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1000px] space-y-3">
          {list.map((f, i) => (
            <div
              key={f.q}
              className={`overflow-hidden rounded-2xl border ${open === i
                  ? "border-accent"
                  : "border-line"
                } bg-[#EDF4FF] dark:bg-card`}
            >
              <button
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[16px] font-semibold text-ink"
              >
                {f.q}

                <Icon
                  d={paths.chevron}
                  size={20}
                  className={`shrink-0 transition ${open === i
                      ? "rotate-180 text-[#FF6B18]"
                      : "text-mute"
                    }`}
                />
              </button>

              {open === i && (
                <p className="px-6 pb-5 text-[15px] leading-relaxed text-mute">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}