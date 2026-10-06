import { Container, Icon } from "./ui";

const reviews = [
  {
    chip: "₹18,000 → ₹0 Bill",
    cls: "bg-[#e9f8ef] text-[#0f7a4a] border-[#bfe9d3]",
    q: "My solar journey with TruSun has been satisfying. Power bills dropped from ₹18,000 to zero! Generating 50-55 units consistently.",
    n: "Santosh Singh",
    m: "10kW On-Grid • Lucknow",
    thumb: "/testimonials/santosh.jpg",
    av: "/testimonials/avatar-1.jpg",
  },
  {
    chip: "70% Drop in Bills",
    cls: "bg-[#eaf2ff] text-[#1d5fb8] border-[#c9dcf7]",
    q: "Flawless from consultation to commissioning! The plant delivers 22-24 units/day with zero downtime. Very impressed with the engineering.",
    n: "Dr. Sudhakar Shukla",
    m: "4kW Rooftop • Bhopal",
    thumb: "/testimonials/sudhakar.jpg",
    av: "/testimonials/avatar-2.jpg",
  },
  {
    chip: "Elevated Premium Rig",
    cls: "bg-[#fff4e0] text-[#b45f06] border-[#f6dcae]",
    q: "The installation was clean, damage-free, and elevated so my terrace space wasn't compromised. Truly superior execution.",
    n: "Samir Patil",
    m: "6kW Elevated • Nagpur",
    thumb: "/testimonials/samir.jpg",
    av: "/testimonials/avatar-3.jpg",
  },
];

const badges = [
  "25-Yr Linear Warranty",
  "DISCOM Net-metering Approved",
  "Tier-1 Monocrystalline Panels",
];

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="mx-auto w-full max-w-[1216px]">

          {/* HEADER */}
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent">
                <i className="h-1.5 w-1.5 rounded-full bg-accent" />
                Real Homeowner Impact
              </span>

              <h2 className="mt-2.5 font-serif text-[34px] font-semibold leading-tight text-ink">
                Trusted by 15,000+ rooftops.{" "}
                <span className="text-blue">90% referral rate.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-2.5 shadow-sm">
              <div className="h-9 w-9 rounded-lg bg-alt" />

              <div className="leading-tight">
                <b className="block text-[15px] text-ink">4.8</b>
                <small className="text-[12px] text-mute">
                  Google Verified (15k+ Reviews)
                </small>
              </div>
            </div>
          </div>

          {/* TESTIMONIAL CARDS */}
          <div className="mt-5 grid gap-5 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">

            {/* FEATURED VIDEO CARD */}
            <article className="relative flex min-h-[390px] flex-col justify-end overflow-hidden rounded-3xl bg-[#0d2240] p-6 text-white lg:min-h-[420px]">

              <div className="absolute inset-0 bg-[url('/testimonials/video-bg.jpg')] bg-cover bg-center" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a30] via-[#0a1a30]/80 to-[#0a1a30]/30" />

              <span className="absolute left-6 top-6 rounded-md bg-black/50 px-3 py-1 text-[12px] font-medium backdrop-blur">
                Verified Video Case
              </span>

              <span className="absolute right-6 top-6 h-11 w-11 rounded-full bg-accent" />

              <div className="relative">
                <span className="inline-block rounded bg-[#0f5a3c] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#4ee2a0]">
                  92% Monthly Bill Drop
                </span>

                <p className="mt-1.5 text-[13px] text-white/85">
                  Electricity Expenses
                </p>

                <p className="mt-1.5 flex items-baseline gap-3">
                  <s className="text-xl text-white/60">₹4,000</s>

                  <b className="text-[2.35rem] font-extrabold leading-none">
                    ₹300
                  </b>

                  <span className="text-sm text-white/70">/mo</span>
                </p>

                <blockquote className="mt-3 border-l-[3px] border-accent pl-3 text-[14px] leading-relaxed text-white/90">
                  "The team handled the DISCOM net-metering approvals seamlessly.
                  Generating surplus energy every single day."
                </blockquote>

                <div className="mt-5 flex items-end justify-between border-t border-white/15 pt-3">
                  <div className="leading-tight">
                    <b className="block text-[14px]">
                      Mahendra Thakre
                    </b>

                    <small className="text-[12px] text-white/70">
                      Residential Villa • 5kW On-Grid System
                    </small>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-[12px] font-medium text-accent"
                  >
                    Watch story (1:14)
                    <Icon d="M9 6l6 6-6 6" size={14} />
                  </a>
                </div>
              </div>
            </article>

            {/* REVIEW CARDS */}
            {reviews.map((r) => (
              <article
                key={r.n}
                className="flex flex-col overflow-hidden rounded-3xl border border-line bg-card"
              >
                <div className="p-5">
                  <span
                    className={`inline-block rounded-md border px-2.5 py-1 text-[12px] font-semibold ${r.cls}`}
                  >
                    {r.chip}
                  </span>

                  <p className="mt-2.5 text-[14px] leading-relaxed text-mute">
                    "{r.q}"
                  </p>
                </div>

                <div className="mt-auto">
                  <div
                    className="h-32 bg-slate-200 bg-cover bg-center dark:bg-slate-700"
                    style={{
                      backgroundImage: `url(${r.thumb})`,
                    }}
                  />

                  <div className="flex items-center gap-3 px-5 py-3.5">
                    <div
                      className="h-9 w-9 shrink-0 rounded-full border border-line bg-slate-200 bg-cover bg-center dark:bg-slate-700"
                      style={{
                        backgroundImage: `url(${r.av})`,
                      }}
                    />

                    <div className="leading-tight">
                      <b className="block text-[14px] text-ink">
                        {r.n}
                      </b>

                      <small className="text-[12px] text-mute">
                        {r.m}
                      </small>
                    </div>
                  </div>
                </div>
              </article>
            ))}

          </div>

          {/* BOTTOM */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] font-medium text-ink">
              {badges.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <a
              href="#calculator"
              className="rounded-xl bg-navy px-6 py-3 text-[14px] font-semibold text-white transition hover:brightness-125 dark:bg-[#1d5c85]"
            >
              Calculate Solar ROI
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}