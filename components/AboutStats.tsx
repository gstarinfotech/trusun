import { Container } from "./ui";

const stats = [
    { v: "120+", u: "MWp", l: "Clean capacity installed" },
    { v: "3,200+", u: "", l: "Projects commissioned" },
    { v: "99.2%", u: "", l: "Audited grid uptime" },
    { v: "15+", u: "Yrs", l: "Institutional rigor" },
];

export default function AboutStats() {
    return (
        <section className="pt-3 pb-7 text-ink sm:py-9 lg:pb-16 lg:pt-8">
            <Container className="px-5 lg:px-0">
                <div className="mx-auto grid w-full max-w-[1150px] grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-[22px]">
                    {stats.map((s) => (
                        <div key={s.l} className="text-center">
                            <p className="flex items-baseline justify-center gap-1.5 sm:gap-2">
                                <strong className="font-sans text-[25px] font-bold leading-none text-ink sm:text-[30px] lg:text-[38px]">
                                    {s.v}
                                </strong>

                                {s.u && (
                                    <em className="font-sans text-[12px] font-semibold not-italic text-[#FF6B18] sm:text-base">
                                        {s.u}
                                    </em>
                                )}
                            </p>

                            <span className="mt-1.5 block px-1 text-[8px] font-semibold uppercase tracking-[0.07em] text-mute sm:mt-2 sm:text-[11px] sm:tracking-[0.1em]">
                                {s.l}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}