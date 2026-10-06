import { Container, Icon } from "./ui";

export default function AboutFounder() {
    return (
        <section
            className="
                bg-gradient-to-br
                from-[#020617]
                via-[#06243D]
                to-[#072A45]
                py-10
                text-white
                lg:py-12
            "
        >
            <Container className="px-5 lg:px-0">
                <div
                    className="
                        mx-auto grid w-full max-w-[1216px]
                        items-center gap-8
                        lg:grid-cols-[1.05fr_0.95fr]
                        lg:gap-[50px]
                    "
                >
                    {/* LEFT CONTENT */}
                    <div>
                        <span
                            className="
                                inline-block rounded-full
                                bg-white
                                px-4 py-[7px]
                                text-[11px] font-extrabold
                                uppercase tracking-[.06em]
                                text-[#0b1f3a]
                            "
                        >
                            About the Founder
                        </span>

                        <h2
                            className="
                                mt-4
                                text-[32px] font-bold leading-[1.08]
                                text-white
                                sm:text-[36px]
                                lg:text-[54px]
                            "
                        >
                            <span className="block">
                                Engineering Trust,
                            </span>

                            <span className="block">
                                One{" "}
                                <span className="text-[#FF6B18]">
                                    Rooftop
                                </span>{" "}
                                at a Time.
                            </span>
                        </h2>

                        <p
                            className="
                                mt-4 max-w-[540px]
                                text-[14px] font-normal
                                leading-[1.65]
                                text-white/75
                                lg:text-[18px]
                            "
                        >
                            Founded by{" "}
                            <b className="text-white">
                                Arjun Mehta
                            </b>
                            , a solar engineer with over 15 years in
                            grid-scale and rooftop photovoltaic systems,
                            TruSun Enterprises was built on a simple
                            belief: clean energy should be bankable, not
                            just green. From his first 5kW residential
                            install to a 120+ MWp telemetry fleet today,
                            his focus has stayed the same — engineering
                            precision over quick sales, and long-term
                            performance over short-term promises.
                        </p>

                        {/* FOUNDER INFO */}
                        <div
                            className="
                                mt-5 flex items-center gap-3
                                border-t border-white/15
                                pt-4
                            "
                        >
                            <div
                                className="
                                    grid h-10 w-10 shrink-0
                                    place-items-center rounded-full
                                    bg-[#FF6B18]/15
                                    text-[#FF6B18]
                                "
                            >
                                <Icon
                                    d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5zM9 12l2 2 4-4"
                                    size={18}
                                />
                            </div>

                            <div className="leading-tight">
                                <p className="text-[17px] font-bold text-white">
                                    Arjun Mehta
                                </p>

                                <p className="mt-1 text-[14px] text-white/60">
                                    Founder &amp; Chief Solar Engineer
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div
                        className="
                            relative ml-auto
                            w-full max-w-[420px]
                            px-5 pb-5
                            sm:max-w-[440px]
                            lg:-translate-x-2
                        "
                    >
                        {/* BLUE GLOW */}
                        <div
                            className="
                                absolute inset-2
                                rounded-[18px]
                                bg-[#123c5c]/70
                                blur-[18px]
                            "
                        />

                        {/* LEFT ORANGE BAR */}
                        <span
                            className="
                                absolute left-0 top-5 bottom-12
                                z-0 w-[19px]
                                rounded-[5px]
                                bg-accent
                            "
                        />

                        {/* BOTTOM ORANGE BAR */}
                        <span
                            className="
                                absolute bottom-0
                                left-[50px] right-12
                                z-0 h-[19px]
                                rounded-[5px]
                                bg-accent
                            "
                        />

                        {/* IMAGE */}
                        <div
                            className="
                                relative z-10
                                h-[340px] w-full
                                overflow-hidden
                                rounded-[12px]
                                border border-white/15
                                bg-[#16354d]
                                shadow-[0_0_28px_rgba(80,150,190,0.35)]
                                sm:h-[390px]
                                lg:h-[460px]
                            "
                        >
                            <img
                                src="/founder.png"
                                alt="Arjun Mehta, Founder of Trusun Enterprises"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}