import { Container } from "./ui";

const stats = [
    { v: "120+", u: "MWp", l: "Clean capacity installed" },
    { v: "3,200+", u: "", l: "Projects commissioned" },
    { v: "99.2%", u: "", l: "Audited grid uptime" },
    { v: "15+", u: "Yrs", l: "Institutional rigor" },
];

export default function AboutStats() {
    return (
        <section className="py-10 text-ink lg:pb-16 lg:pt-8">
            <Container className="px-5 lg:px-0">
                <div
                    className="
                        mx-auto
                        grid
                        w-full
                        max-w-[1150px]
                        grid-cols-2
                        gap-x-6
                        gap-y-8
                        lg:grid-cols-4
                        lg:gap-x-[22px]
                    "
                >
                    {stats.map((s) => (
                        <div
                            key={s.l}
                            className="text-center"
                        >
                            {/* VALUE */}
                            <p className="flex items-baseline justify-center gap-2">
                                <strong
                                    className="
                                        font-sans
                                        text-[30px]
                                        font-bold
                                        leading-none
                                        text-ink
                                        lg:text-[38px]
                                    "
                                >
                                    {s.v}
                                </strong>

                                {s.u && (
                                    <em
                                        className="
                                            font-sans
                                            text-base
                                            font-semibold
                                            not-italic
                                            text-[#FF6B18]
                                        "
                                    >
                                        {s.u}
                                    </em>
                                )}
                            </p>

                            {/* LABEL */}
                            <span
                                className="
                                    mt-2
                                    block
                                    text-[11px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.1em]
                                    text-mute
                                "
                            >
                                {s.l}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}