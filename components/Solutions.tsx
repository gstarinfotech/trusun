import { Container, Eyebrow, Icon, paths } from "./ui";

const list = [
  {
    tag: "Homes",
    t: "Solar for Your Home",
    d: "Switch to clean, reliable solar energy and reduce your monthly electricity bills. Our rooftop solutions are designed to fit your home’s energy needs while delivering long-term savings.",
    cta: "Explore Home Solar",
    img: "/solutions/homes.png",
    href: "/solutions/homes",
  },
  {
    tag: "Housing Societies",
    t: "Solar for Housing Societies",
    d: "Power common areas, lifts, lighting and other shared facilities with solar energy. Reduce society-wide electricity expenses and move towards a cleaner, more sustainable community.",
    cta: "Explore Society Solar",
    img: "/solutions/societies.jpg",
    href: "/solutions/housing-societies",
  },
  {
    tag: "Commercial",
    t: "Solar for Your Business",
    d: "Turn your commercial space into a smarter, more energy-efficient workplace. Our solar solutions help reduce operating costs while providing reliable clean energy for your business.",
    cta: "Explore Commercial Solar",
    img: "/solutions/commercial.jpg",
    href: "/solutions/commercial",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-[#F8FAFC] py-8 dark:bg-[#09111f] sm:py-12 lg:py-20"
    >
      <Container>
        <div className="mx-auto w-full max-w-[1216px]">
          <Eyebrow>Targeted Solutions</Eyebrow>

          <h2 className="mt-2 font-serif text-[clamp(1.9rem,3.8vw,3.1rem)] font-semibold leading-tight text-ink">
            Powering Every Space with{" "}
            <span className="text-[#FF6B18]">
              Smarter Solar
            </span>
          </h2>

          <p className="mt-4 max-w-[700px] text-[17px] leading-relaxed text-mute">
            Whether it’s your home, housing society, or commercial space,
            our solar solutions are designed to reduce energy costs,
            improve efficiency, and deliver dependable clean power for
            years to come.
          </p>

          <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-3">
            {list.map((s) => (
              <article
                key={s.t}
                className="
                  flex flex-col overflow-hidden
                  rounded-3xl border border-line
                  bg-card shadow-lg shadow-slate-900/10
                "
              >
                <div className="relative h-56 bg-slate-200 dark:bg-slate">
                  <img
                    src={s.img}
                    alt={s.t}
                    className="h-full w-full object-cover"
                  />

                  <span
                    className="
                      absolute left-4 top-4
                      rounded-full bg-navy
                      px-3.5 py-1
                      text-[13px] font-semibold text-white
                    "
                  >
                    {s.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-7 pb-6 pt-6">
                  <h3 className="font-serif text-[1.35rem] font-semibold text-ink">
                    {s.t}
                  </h3>

                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-mute">
                    {s.d}
                  </p>

                  <a
                    href={s.href}
                    className="
                      mt-5 flex items-center gap-2
                      border-t border-line pt-4
                      text-[14px] font-semibold text-ink
                      hover:text-[#FF6B18]
                    "
                  >
                    {s.cta}
                    <Icon d={paths.arrow} size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}