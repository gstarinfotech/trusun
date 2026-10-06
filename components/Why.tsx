import { Container, Eyebrow, Icon } from "./ui";

const items = [
  {
    t: "Turnkey EPC Precision",
    d: "We manage 100% of municipal sanctions, net-metering approvals, structural dead-load CAD modeling, and civil fabrication on strict timelines.",
    i: "M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6",
  },
  {
    t: "Bankable Yield Engineering",
    d: "Custom shadow LIDAR scanning and Grade-A bifacial monocrystalline silicon eliminate costly oversizing and ensure guaranteed high kWh yields.",
    i: "M3 3v18h18M7 15l4-4 3 3 5-6",
  },
  {
    t: "25-Year Guaranteed SLA",
    d: "Comprehensive long-term performance covenants, proactive drone thermography, smart inverter telematics, and guaranteed rapid repair turnaround.",
    i: "M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5zM9 12l2 2 4-4",
  },
];

export default function Why() {
  return (
    <section id="why" className="py-7 sm:py-10 lg:py-20">
      <Container>
        <div className="mx-auto w-full max-w-[1216px]">

          <div className="mx-auto max-w-2xl text-center">
            <div className="text-[7px] sm:text-[11px]">
              <Eyebrow>The Engineering Distinction</Eyebrow>
            </div>

            <h2 className="mt-2 font-nav text-[27px] font-semibold leading-[1.15] text-ink sm:text-[34px] lg:text-[3.1rem]">
              Why People Trust Us
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {items.map((it) => (
              <article
                key={it.t}
                className="
                  rounded-2xl
                  border border-line
                  bg-card
                  p-5
                  shadow-lg
                  shadow-slate-900/5
                  sm:rounded-3xl
                  sm:p-6
                  lg:p-8
                "
              >
                <div
                  className="
                    mb-4
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-xl
                    bg-accent/15
                    text-[#FF6B18]
                    sm:mb-5
                    sm:h-12
                    sm:w-12
                    sm:rounded-2xl
                  "
                >
                  <Icon d={it.i} size={21} />
                </div>

                <h3 className="font-nav text-[17px] font-semibold leading-[1.3] text-ink sm:text-[19px] lg:text-xl">
                  {it.t}
                </h3>

                <p className="mt-1.5 text-[12px] leading-[1.6] text-mute sm:mt-2 sm:text-[14px] lg:text-[15px]">
                  {it.d}
                </p>
              </article>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}