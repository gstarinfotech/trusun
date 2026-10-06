import { Container, Icon, paths } from "./ui";

export default function Cta() {
  return (
    <section
      id="contact"
      className="bg-[#F8FAFC] py-8 dark:bg-[#09111f] lg:py-12"
    >
      <Container>
        <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center rounded-[2rem] bg-[#0b1b33] px-6 py-9 text-center text-white sm:px-10 lg:py-11">

          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent">
            <Icon
              d="M13 2L4 14h7l-1 8 9-12h-7z"
              size={23}
            />
          </span>

          <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide">
            Seamless Consultation Process
          </p>

          <h2 className="mt-2 max-w-[1170px] font-serif text-[46px] font-[700] leading-tight">
            Ready to Transition to Sovereign Clean Power?
          </h2>

          <p className="mt-6 max-w-[748px] text-[18px] font-[400] leading-relaxed text-white">
            Receive a customized 3D solar generation forecast, shadow report,
            exact roof layout schematic, and precise ROI financial model—at
            zero cost or commitment.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:pro@trusunenergy.com"
              className="inline-flex items-center gap-6 rounded-xl bg-accent px-6 py-3 text-[14px] font-semibold text-white transition hover:brightness-110"
            >
              Schedule Site Feasibility visit
              <Icon d={paths.cal} size={16} />
            </a>

            <a
              href="tel:18008787866"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[14px] font-semibold text-[#0b3a63]"
            >
              <Icon d={paths.phone} size={16} />
              Talk to Solar Engineer
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px]">
            {[
              "Zero Obligation",
              "48-Hour Report Turnaround",
              "Expert Structural Engineer",
            ].map((b) => (
              <li
                key={b}
                className="flex items-center gap-1.5"
              >
                <Icon
                  d={paths.check}
                  size={14}
                  className="text-[#FF6B18]"
                />
                {b}
              </li>
            ))}
          </ul>

        </div>
      </Container>
    </section>
  );
}