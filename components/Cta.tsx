import { Container, Icon, paths } from "./ui";

export default function Cta() {
  return (
    <section
      id="contact"
      className="bg-[#F8FAFC] py-6 dark:bg-[#09111f] sm:py-8 lg:py-12"
    >
      <Container>
        <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center rounded-[1.5rem] bg-[#0b1b33] px-4 py-8 text-center text-white sm:rounded-[2rem] sm:px-8 sm:py-9 md:px-10 lg:py-11">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent sm:h-12 sm:w-12">
            <Icon
              d="M13 2L4 14h7l-1 8 9-12h-7z"
              size={22}
            />
          </span>

          <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide sm:text-[11px]">
            Seamless Consultation Process
          </p>

          <h2 className="mt-2 max-w-[1170px] font-serif text-[30px] font-[700] leading-[1.15] sm:text-[38px] md:text-[42px] lg:text-[46px]">
            Ready to Transition to Sovereign Clean Power?
          </h2>

          <p className="mt-5 max-w-[748px] text-[14px] font-[400] leading-[1.65] text-white sm:mt-6 sm:text-[16px] lg:text-[18px]">
            Receive a customized 3D solar generation forecast, shadow report,
            exact roof layout schematic, and precise ROI financial model—at
            zero cost or commitment.
          </p>

          <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href="mailto:pro@trusunenergy.com"
              className="inline-flex w-full items-center justify-center gap-4 rounded-xl bg-accent px-5 py-3 text-[13px] font-semibold text-white transition hover:brightness-110 sm:w-auto sm:gap-6 sm:px-6 sm:text-[14px]"
            >
              Schedule Site Feasibility visit
              <Icon d={paths.cal} size={16} />
            </a>

            <a
              href="tel:18008787866"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-[13px] font-semibold text-[#0b3a63] sm:w-auto sm:px-6 sm:text-[14px]"
            >
              <Icon d={paths.phone} size={16} />
              Talk to Solar Engineer
            </a>
          </div>

          <ul className="mt-7 flex w-full flex-nowrap items-center justify-center gap-x-4 text-[9px] sm:mt-8 sm:flex-wrap sm:gap-x-6 sm:text-[12px]">
            {[
              "Zero Obligation",
              "48-Hour Report Turnaround",
              "Expert Structural Engineer",
            ].map((b) => (
              <li
                key={b}
                className="flex shrink-0 items-center gap-1 whitespace-nowrap"
              >
                <Icon
                  d={paths.check}
                  size={14}
                  className="shrink-0 text-[#FF6B18]"
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