import { Container, Icon } from "./ui";

const reviews = [
  {
    chip: "₹18,000 → ₹0 Bill",
    cls: "bg-[#e9f8ef] text-[#0f7a4a] border-[#bfe9d3]",
    q: "My solar journey with TruSun has been satisfying. Power bills dropped from ₹18,000 to zero! Generating 50-55 units consistently.",
    n: "Santosh Singh",
    m: "10kW On-Grid • Lucknow",
    thumb: "/testimonials/santosh.jpg",
    av: "/testimonials/johndoe.jpg",
  },
  {
    chip: "70% Drop in Bills",
    cls: "bg-[#eaf2ff] text-[#1d5fb8] border-[#c9dcf7]",
    q: "Flawless from consultation to commissioning! The plant delivers 22-24 units/day with zero downtime. Very impressed with the engineering.",
    n: "Dr. Sushma Shukla",
    m: "4kW Rooftop • Bhopal",
    thumb: "/testimonials/sudhakar.jpg",
    av: "/testimonials/lilly.jpg",
  },
  {
    chip: "Elevated Premium Rig",
    cls: "bg-[#fff4e0] text-[#b45f06] border-[#f6dcae]",
    q: "The installation was clean, damage-free, and elevated so my terrace space wasn't compromised. Truly superior execution.",
    n: "Sarah Patil",
    m: "6kW Elevated • Nagpur",
    thumb: "/testimonials/samir.jpg",
    av: "/testimonials/sarah.jpg",
  },
  {
    chip: "Zero Bill in 3 Months",
    cls: "bg-[#e9f8ef] text-[#0f7a4a] border-[#bfe9d3]",
    q: "Subsidy and net-metering paperwork was fully handled by the team. My bill has been zero since the third month.",
    n: "Vani Verma",
    m: "5kW On-Grid • Jaipur",
    thumb: "/testimonials/rakesh.jpg",
    av: "/testimonials/lilly.jpg",
  },
  {
    chip: "Smooth Installation",
    cls: "bg-[#eaf2ff] text-[#1d5fb8] border-[#c9dcf7]",
    q: "Installation finished in two days. The crew was professional and the monitoring app makes tracking daily generation easy.",
    n: "Johni Deshmukh",
    m: "3kW Rooftop • Pune",
    thumb: "/testimonials/johndoe.jpg",
    av: "/testimonials/mike.jpg",
  },
  {
    chip: "Factory Savings",
    cls: "bg-[#fff4e0] text-[#b45f06] border-[#f6dcae]",
    q: "Our factory's monthly power cost fell sharply. Good build quality and the after-sales support has been responsive.",
    n: "Rashi Choudhary",
    m: "25kW Commercial • Indore",
    thumb: "/testimonials/vikram.jpg",
    av: "/testimonials/robert.jpg",
  },
];

const badges = [
  "25-Yr Linear Warranty",
  "DISCOM Net-metering Approved",
  "Tier-1 Monocrystalline Panels",
];

export default function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container>
        <div className="mx-auto w-full max-w-[1216px]">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
            <div className="w-full sm:w-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-accent sm:gap-2 sm:px-3 sm:text-[11px]">
                <i className="h-1.5 w-1.5 rounded-full bg-accent" />
                Real Homeowner Impact
              </span>

              <h2 className="mt-3 max-w-[780px] font-serif text-[22px] font-semibold leading-[1.2] text-ink sm:mt-2.5 sm:text-[34px]">
                Trusted by 15,000+ rooftops.{" "}
                <span className="text-blue">90% referral rate.</span>
              </h2>
            </div>

            <div className="mt-1 flex w-fit items-center gap-2.5 rounded-xl border border-line bg-card px-3 py-2 shadow-sm sm:mt-0 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-2.5">
              <div className="h-8 w-8 shrink-0 rounded-lg bg-alt sm:h-9 sm:w-9" />

              <div className="leading-tight">
                <b className="block text-[14px] text-ink sm:text-[15px]">
                  4.8
                </b>
                <small className="whitespace-nowrap text-[10px] text-mute sm:text-[12px]">
                  Google Verified (15k+ Reviews)
                </small>
              </div>
            </div>
          </div>

          {/* LEFT big card + RIGHT 3x2 grid (6 cards) */}
          <div className="mt-5 grid gap-4 sm:mt-5 sm:gap-5 lg:grid-cols-[1.25fr_3fr]">
            {/* LEFT CARD */}
            <article className="relative flex min-h-[350px] flex-col justify-end overflow-hidden rounded-2xl bg-[#0d2240] p-4 text-white sm:min-h-[390px] sm:rounded-3xl sm:p-6 lg:min-h-[440px]">
              <div className="absolute inset-0 bg-[url('/testimonials/trusted.jpeg')] bg-cover bg-center" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a30] via-[#0a1a30]/80 to-[#0a1a30]/30" />

              <span className="absolute left-4 top-4 rounded-md bg-black/50 px-2.5 py-1 text-[10px] font-medium backdrop-blur sm:left-6 sm:top-6 sm:px-3 sm:text-[12px]">
                Verified
              </span>

              <span className="absolute right-4 top-4 h-9 w-9 rounded-full bg-accent sm:right-6 sm:top-6 sm:h-11 sm:w-11" />

              <div className="relative">
                <span className="inline-block rounded bg-[#0f5a3c] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#4ee2a0] sm:px-2.5 sm:text-[11px]">
                  92% Monthly Bill Drop
                </span>

                <p className="mt-1 text-[12px] text-white/85 sm:mt-1.5 sm:text-[13px]">
                  Electricity Expenses
                </p>

                <p className="mt-1 flex items-baseline gap-2 sm:mt-1.5 sm:gap-3">
                  <s className="text-lg text-white/60 sm:text-xl">₹4,000</s>
                  <b className="text-[2rem] font-extrabold leading-none sm:text-[2.35rem]">
                    ₹300
                  </b>
                  <span className="text-xs text-white/70 sm:text-sm">/mo</span>
                </p>

                <blockquote className="mt-2.5 border-l-[3px] border-accent pl-2.5 text-[12px] leading-relaxed text-white/90 sm:mt-3 sm:pl-3 sm:text-[14px]">
                  "The team handled the DISCOM net-metering approvals seamlessly.
                  Generating surplus energy every single day."
                </blockquote>

                <div className="mt-4 flex items-end justify-between gap-3 border-t border-white/15 pt-3 sm:mt-5">
                  <div className="min-w-0 leading-tight">
                    <b className="block text-[13px] sm:text-[14px]">
                      Mahendra Thakre
                    </b>

                    <small className="text-[10px] text-white/70 sm:text-[12px]">
                      Residential Villa • 5kW On-Grid System
                    </small>
                  </div>

                  <a
                    href="#"
                    className="inline-flex shrink-0 items-center gap-1 text-[10px] font-medium text-accent sm:text-[12px]"
                  >
                    Watch story (1:14)
                    <Icon d="M9 6l6 6-6 6" size={13} />
                  </a>
                </div>
              </div>
            </article>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2">
              {reviews.map((r) => (
                <article
                  key={r.n}
                  className="flex min-h-[170px] flex-col overflow-hidden rounded-2xl border border-line bg-card sm:rounded-3xl lg:min-h-0"
                >
                  <div className="p-4 sm:p-4">
                    <span
                      className={`inline-block rounded-md border px-2 py-1 text-[10px] font-semibold sm:px-2.5 sm:text-[12px] ${r.cls}`}
                    >
                      {r.chip}
                    </span>

                    <p className="mt-2 line-clamp-4 text-[12px] leading-relaxed text-mute sm:text-[13px]">
                      "{r.q}"
                    </p>
                  </div>

                  <div className="mt-auto border-t border-line">
                    <div className="flex items-center gap-2.5 px-4 py-3 sm:gap-3">
                      <div
                        className="h-8 w-8 shrink-0 rounded-full border border-line bg-slate-200 bg-cover bg-center dark:bg-slate-700 sm:h-9 sm:w-9"
                        style={{
                          backgroundImage: `url(${r.av})`,
                        }}
                      />

                      <div className="min-w-0 leading-tight">
                        <b className="block truncate text-[13px] text-ink sm:text-[14px]">
                          {r.n}
                        </b>

                        <small className="block truncate text-[10px] text-mute sm:text-[12px]">
                          {r.m}
                        </small>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-line pt-4 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:pt-5">
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] font-medium text-ink sm:gap-x-8 sm:gap-y-2 sm:text-[13px]">
              {badges.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <a
              href="#calculator"
              className="w-full rounded-xl bg-navy px-5 py-2.5 text-center text-[13px] font-semibold text-white transition hover:brightness-125 sm:w-auto sm:px-6 sm:py-3 sm:text-[14px] dark:bg-[#1d5c85]"
            >
              Calculate Solar ROI
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}