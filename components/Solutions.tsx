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

          <h2 className="mt-2 font-nav text-[27px] font-semibold leading-[1.15] text-ink sm:text-[34px] lg:text-[42px]">
            Powering Every Space With{" "}
            <span className="text-[#FF6B18]">Smarter Solar</span>
          </h2>

          <p className="mt-4 max-w-[700px] text-[17px] leading-relaxed text-mute">
            Whether it’s your home, housing society, or commercial space,
            our solar solutions are designed to reduce energy costs,
            improve efficiency, and deliver dependable clean power for
            years to come.
          </p>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {list.map((s) => (
              <article
                key={s.t}
                className="
        flex flex-col overflow-hidden
        rounded-2xl border border-line
        bg-card shadow-lg shadow-slate-900/10
        sm:rounded-3xl
      "
              >
                <div className="relative h-44 bg-slate-200 dark:bg-slate sm:h-52 lg:h-56">
                  <img
                    src={s.img}
                    alt={s.t}
                    className="h-full w-full object-cover"
                  />

                  <span
                    className="
            absolute left-3 top-3
            rounded-full bg-navy
            px-3 py-1
            text-[10px] font-semibold text-white
            sm:left-4 sm:top-4
            sm:px-3.5 sm:text-[13px]
          "
                  >
                    {s.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-6 sm:pb-5 sm:pt-5 lg:px-7 lg:pb-6 lg:pt-6">
                  <h3 className="font-nav text-[17px] font-semibold leading-[1.25] text-ink sm:text-[20px] lg:text-[1.35rem]">
                    {s.t}
                  </h3>

                  <p className="mt-1.5 flex-1 text-[12px] leading-[1.55] text-mute sm:mt-2 sm:text-[14px] lg:text-[15px]">
                    {s.d}
                  </p>

                  <a
                    href={s.href}
                    className="
            mt-4 flex items-center gap-2
            border-t border-line pt-3
            text-[12px] font-semibold text-ink
            hover:text-[#FF6B18]
            sm:mt-5 sm:pt-4 sm:text-[14px]
          "
                  >
                    {s.cta}
                    <Icon d={paths.arrow} size={14} />
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