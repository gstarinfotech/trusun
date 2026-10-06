import { Container, Eyebrow, Icon, paths } from "./ui";

const list = [
  {
    img: "/projects/apex.jpg",
    tag: "Commercial Hub",
    t: "Apex Infotech Park",
    d: "340 kWp rooftop solar plant offsetting 380 Tons of CO₂ annually with automated zero-export grid synchronization.",
    a: "340 kWp Capacity",
    b: "Active Yield",
  },
  {
    img: "/projects/palm-meadows.jpg",
    tag: "Residential Estate",
    t: "Palm Meadows Residence",
    d: "12.5 kWp bifacial micro-inverter setup delivering complete power independence with 96% electricity bill reduction.",
    a: "12.5 kWp Capacity",
    b: "Zero Grid Outage",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-6 sm:py-9 lg:py-16">
      <Container>
        <div className="mx-auto w-full max-w-[1216px]">

          <div className="flex flex-wrap items-end justify-between gap-2 sm:gap-4">
            <div>
              <Eyebrow>Track Record</Eyebrow>

              <h2 className="mt-1.5 font-serif text-[24px] font-semibold leading-[1.15] text-ink sm:mt-2 sm:text-[clamp(1.9rem,3.8vw,3.1rem)]">
                Featured Installations
              </h2>
            </div>

            <a
              href="#contact"
              className="mb-0.5 inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold text-ink hover:text-[#FF6B18] sm:mb-2 sm:gap-2 sm:text-[15px]"
            >
              Explore All Projects
              <Icon d={paths.arrow} size={13} />
            </a>
          </div>

          <div className="mt-5 grid items-start gap-4 sm:mt-8 sm:gap-5 lg:grid-cols-2">
            {list.map((p) => (
              <article
                key={p.t}
                className="flex flex-col overflow-hidden rounded-2xl border border-line bg-alt sm:rounded-[2rem] sm:flex-row"
              >
                <img
                  src={p.img}
                  alt={p.t}
                  className="h-40 w-full bg-slate-200 object-cover sm:h-[300px] sm:w-1/2 dark:bg-slate-700"
                />

                <div className="flex flex-1 flex-col justify-center p-4 sm:p-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.06em] text-[#FF6B18] sm:text-[12px] sm:tracking-wide">
                    {p.tag}
                  </p>

                  <h3 className="mt-1 font-serif text-[16px] font-[700] leading-[1.25] text-ink sm:mt-2 sm:text-[18px]">
                    {p.t}
                  </h3>

                  <p className="mt-1.5 text-[11px] font-[400] leading-[1.55] text-mute sm:mt-2 sm:text-[14px] sm:leading-relaxed">
                    {p.d}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-t border-line pt-3 text-[9px] font-semibold text-ink sm:mt-4 sm:gap-x-4 sm:pt-4 sm:text-[12px]">
                    <span>{p.a}</span>
                    <span className="text-[#0f9d63]">{p.b}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}