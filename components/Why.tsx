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
    <section id="why" className="py-16 lg:py-20">
      <Container>
        <div className="mx-auto w-full max-w-[1216px]">

          {/* HEADING */}
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>The Engineering Distinction</Eyebrow>

            <h2 className="mt-2 font-serif text-[clamp(1.9rem,3.8vw,3.1rem)] font-semibold leading-tight text-ink">
              Why People Trust Us
            </h2>
          </div>

          {/* CARDS */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {items.map((it) => (
              <article
                key={it.t}
                className="
                  rounded-3xl
                  border border-line
                  bg-card
                  p-8
                  shadow-lg
                  shadow-slate-900/5
                "
              >
                <div
                  className="
                    mb-5
                    grid h-12 w-12
                    place-items-center
                    rounded-2xl
                    bg-accent/15
                    text-[#FF6B18]
                  "
                >
                  <Icon d={it.i} size={24} />
                </div>

                <h3 className="font-serif text-xl font-semibold text-ink">
                  {it.t}
                </h3>

                <p className="mt-2 text-[15px] leading-relaxed text-mute">
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