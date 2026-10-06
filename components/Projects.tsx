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
    <section id="projects" className="py-12 lg:py-16">
      <Container>
        <div className="mx-auto w-full max-w-[1216px]">

          {/* HEADER */}
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Track Record</Eyebrow>

              <h2 className="mt-2 font-serif text-[clamp(1.9rem,3.8vw,3.1rem)] font-semibold leading-tight text-ink">
                Featured Installations
              </h2>
            </div>

            <a
              href="#contact"
              className="mb-2 inline-flex items-center gap-2 text-[15px] font-semibold text-ink hover:text-[#FF6B18]"
            >
              Explore All Projects
              <Icon d={paths.arrow} size={16} />
            </a>
          </div>

          {/* PROJECT CARDS */}
          <div className="mt-8 grid items-start gap-5 lg:grid-cols-2">
            {list.map((p) => (
              <article
                key={p.t}
                className="flex flex-col overflow-hidden rounded-[2rem] border border-line bg-alt sm:flex-row"
              >
                <img
                  src={p.img}
                  alt={p.t}
                  className="h-56 w-full bg-slate-200 object-cover sm:h-[300px] sm:w-1/2 dark:bg-slate-700"
                />

                <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-[#FF6B18]">
                    {p.tag}
                  </p>

                  <h3 className="mt-2 font-serif text-[18px] font-[700] leading-snug text-ink">
                    {p.t}
                  </h3>

                  <p className="mt-2 text-[14px] font-[400] leading-relaxed text-mute">
                    {p.d}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-line pt-4 text-[12px] font-semibold text-ink">
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