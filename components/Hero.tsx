import { Container, Icon, paths } from "./ui";

const stats = [
  { v: "120+", u: "MWp", l: "Clean capacity installed" },
  { v: "3,200+", u: "", l: "Projects commissioned" },
  { v: "99.2%", u: "", l: "Audited grid uptime" },
  { v: "15+", u: "Yrs", l: "Institutional rigor" },
];

const badges = [
  { t: "MNRE Empanelled", d: paths.badge },
  { t: "Tier-1 Monocrystalline", d: paths.bolt },
  { t: "25-Yr Performance SLA", d: paths.shield },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0a1a2e] text-white"
    >
      <img
        src="/main.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,45,.86),rgba(7,24,45,.68))]" />

      <Container className="relative px-6 pb-14 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-16 lg:pt-20">
        {/* FIXED SECTION WIDTH */}
        <div className="mx-auto w-full max-w-[1216px]">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">

            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block rounded-full bg-white px-4 py-2 text-[14px] font-extrabold uppercase tracking-[.06em] text-[#072A45] sm:text-[13px]">
                Engineering next-gen solar
              </span>

              <h1 className="mt-6 font-head text-[70px] font-normal leading-[1.05]">
                <span className="block">Power Your Future</span>
                <span className="block">
                  with <span className="text-[#FF6B18]">Smarter Solar</span>.
                </span>
              </h1>

              <p className="mt-6 max-w-[532px] text-[19px] leading-relaxed text-white/90 sm:text-lg">
                Precision-engineered solar ecosystems engineered with Tier-1
                bifacial panels, real-time telemetric yield control, and 25-year
                guaranteed performance.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#FF6B18] px-7 py-3.5 text-[14px] font-semibold text-white transition hover:brightness-110"
                >
                  Calculate Savings
                  <Icon d={paths.trend} />
                </a>

                <a
                  href="#solutions"
                  className="inline-flex items-center rounded-xl bg-white px-7 py-3.5 text-[14px] font-semibold text-[#0b1f3a] transition hover:bg-white/90"
                >
                  Explore Solutions
                </a>
              </div>

              <ul className="mt-8 flex max-w-[560px] flex-wrap gap-x-7 gap-y-3 border-t border-white/25 pt-5 text-[12px] text-[#acb1b9]">
                {badges.map((b) => (
                  <li key={b.t} className="flex items-center gap-2">
                    <Icon
                      d={b.d}
                      size={16}
                      className="text-[#FF6B18]"
                    />
                    {b.t}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
                relative mx-auto w-full max-w-[570px]
                justify-self-end overflow-hidden rounded-[28px]
                border-2 border-white/70 bg-[#16283d] shadow-2xl
                lg:mx-0 lg:-mt-12
              "
            >
              <img
                src="/hero.png"
                alt="Modern villa with solar panels"
                className="aspect-[5/4] w-full object-cover"
              />

              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3.5 text-[#0b1f3a] sm:inset-x-6 sm:bottom-6 sm:gap-4 sm:px-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#fff1e8] text-[#FF6B18]">
                  <Icon
                    d="M12 2v3M4.9 4.9L7 7M19.1 4.9L17 7M3 20l2-9h14l2 9zM8 11l-1 9M16 11l1 9M12 11v9M4 15.5h16"
                    size={24}
                  />
                </div>

                <div className="flex-1 leading-tight">
                  <small className="text-[11px] font-semibold uppercase tracking-[.08em] text-slate-500">
                    Live Generation
                  </small>

                  <p className="text-lg font-bold sm:text-xl">
                    148.4 kW / hr
                  </p>
                </div>

                <span className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-[#e9f8ef] px-3.5 py-2 text-[12px] font-semibold text-[#15803d] sm:inline-flex">
                  <i className="h-2 w-2 rounded-full bg-[#16a34a]" />
                  99.4% Peak Yield
                </span>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 lg:mt-16 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="flex items-baseline gap-2">
                  <strong className="font-head text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-none">
                    {s.v}
                  </strong>

                  {s.u && (
                    <em className="text-lg font-semibold not-italic text-[#FF6B18]">
                      {s.u}
                    </em>
                  )}
                </p>

                <span className="mt-1.5 block text-[11px] font-semibold uppercase tracking-[.1em] text-white/65">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}