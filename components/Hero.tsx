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

      <Container className="relative px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-14 lg:px-12 lg:pb-16 lg:pt-20">
        <div className="mx-auto w-full max-w-[1216px]">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">

            <div>
              <span className="inline-block rounded-full bg-white px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[.06em] text-[#072A45] sm:px-4 sm:text-[13px]">
                Engineering next-gen solar
              </span>

              <h1 className="mt-5 font-head text-[34px] font-normal leading-[1.05] sm:mt-6 sm:text-[54px] md:text-[62px] lg:text-[70px]">
                <span className="block">Power Your Future</span>
                <span className="block">
                  with <span className="text-[#FF6B18]">Smarter Solar</span>.
                </span>
              </h1>

              <p className="mt-5 max-w-[532px] text-[16px] leading-relaxed text-white/90 sm:mt-6 sm:text-lg lg:text-[19px]">
                Precision-engineered solar ecosystems engineered with Tier-1
                bifacial panels, real-time telemetric yield control, and 25-year
                guaranteed performance.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a
                  href="#calculator"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B18] px-6 py-3.5 text-[14px] font-semibold text-white transition hover:brightness-110 sm:w-auto sm:px-7"
                >
                  Calculate Savings
                  <Icon d={paths.trend} />
                </a>

                <a
                  href="#solutions"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0b1f3a] transition hover:bg-white/90 sm:w-auto sm:px-7"
                >
                  Explore Solutions
                </a>
              </div>

              <ul className="mt-7 flex max-w-full flex-row flex-wrap gap-x-5 gap-y-3 border-t border-white/25 pt-5 text-[11px] text-[#acb1b9] sm:mt-8 sm:max-w-[560px] sm:gap-x-7 sm:gap-y-3 sm:text-[12px]">
                {badges.map((b) => (
                  <li key={b.t} className="flex items-center gap-2">
                    <Icon
                      d={b.d}
                      size={16}
                      className="shrink-0 text-[#FF6B18]"
                    />
                    {b.t}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[570px]
                justify-self-center
                overflow-hidden
                rounded-[22px]
                border-2
                border-white/70
                bg-[#16283d]
                shadow-2xl
                sm:rounded-[28px]
                lg:mx-0
                lg:-mt-12
                lg:justify-self-end
              "
            >
              <img
                src="/hero.png"
                alt="Modern villa with solar panels"
                className="aspect-[5/4] w-full object-cover"
              />

              <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl bg-white/95 px-3 py-3 text-[#0b1f3a] sm:inset-x-6 sm:bottom-6 sm:gap-4 sm:px-5 sm:py-3.5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#fff1e8] text-[#FF6B18] sm:h-11 sm:w-11">
                  <Icon
                    d="M12 2v3M4.9 4.9L7 7M19.1 4.9L17 7M3 20l2-9h14l2 9zM8 11l-1 9M16 11l1 9M12 11v9M4 15.5h16"
                    size={22}
                  />
                </div>

                <div className="min-w-0 flex-1 leading-tight">
                  <small className="block truncate text-[9px] font-semibold uppercase tracking-[.08em] text-slate-500 sm:text-[11px]">
                    Live Generation
                  </small>

                  <p className="mt-0.5 text-[16px] font-bold sm:text-xl">
                    148.4 kW / hr
                  </p>
                </div>

                <span className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#e9f8ef] px-3.5 py-2 text-[12px] font-semibold text-[#15803d] sm:inline-flex">
                  <i className="h-2 w-2 rounded-full bg-[#16a34a]" />
                  99.4% Peak Yield
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-7 sm:mt-14 sm:gap-x-8 sm:gap-y-8 lg:mt-16 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="flex flex-wrap items-baseline gap-1.5 sm:gap-2">
                  <strong className="font-head text-[clamp(2rem,7vw,3.6rem)] font-normal leading-none">
                    {s.v}
                  </strong>

                  {s.u && (
                    <em className="text-sm font-semibold not-italic text-[#FF6B18] sm:text-lg">
                      {s.u}
                    </em>
                  )}
                </p>

                <span className="mt-1.5 block max-w-[150px] text-[9px] font-semibold uppercase tracking-[.08em] text-white/65 sm:max-w-none sm:text-[11px] sm:tracking-[.1em]">
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