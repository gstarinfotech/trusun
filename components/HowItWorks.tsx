import { Container, Icon } from "./ui";

const steps = [
    {
        n: "01.",
        t: "Meet Consultant",
        d: "Discuss your facility's energy requirements with certified solar engineers for an accurate site assessment.",
        i: "M16 11a4 4 0 10-8 0M4 21a8 8 0 0116 0",
    },
    {
        n: "02.",
        t: "Generate Power",
        d: "Tier-1 monocrystalline panels installed with precision civil engineering to capture maximum irradiance.",
        i: "M12 2v3M4.9 4.9L7 7M19.1 4.9L17 7M3 20l2-9h14l2 9zM8 11l-1 9M16 11l1 9M12 11v9",
    },
    {
        n: "03.",
        t: "Save the Energy",
        d: "High-efficiency hybrid inverters and optional smart battery backup to manage peak load seamlessly.",
        i: "M13 2L4 14h7l-1 8 9-12h-7z",
    },
    {
        n: "04.",
        t: "Use the Power",
        d: "Power your daily operations with clean, zero-emission electricity and enjoy up to 90% savings on bills.",
        i: "M3 11l9-8 9 8M5 10v10h14V10",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative overflow-hidden font-sans">
            <div className="relative bg-[#FF6B18] px-5 py-5 text-center sm:py-[27px]">
                <h2 className="text-[27px] font-extrabold leading-[1.2] text-white sm:text-[38px] lg:text-[45px]">
                    How our Solar Team Works
                </h2>

                <span
                    className="
                        absolute
                        left-1/2
                        top-full
                        z-10
                        h-0
                        w-0
                        -translate-x-1/2
                        border-l-[22px]
                        border-r-[22px]
                        border-t-[18px]
                        border-l-transparent
                        border-r-transparent
                        border-t-[#FF6B18]
                        sm:border-l-[26px]
                        sm:border-r-[26px]
                        sm:border-t-[22px]
                    "
                />
            </div>

            <Container
                className="
                    bg-gradient-to-br
                    from-[#020617]
                    via-[#06243D]
                    to-[#072A45]
                    px-5
                    pb-8
                    pt-10
                    sm:pb-12
                    sm:pt-[55px]
                    lg:px-0
                    lg:pb-[78px]
                    lg:pt-[92px]
                "
            >
                <div
                    className="
                        mx-auto
                        grid
                        w-full
                        max-w-[1216px]
                        grid-cols-1
                        gap-3.5
                        sm:grid-cols-2
                        sm:gap-5
                        lg:grid-cols-4
                        lg:gap-[22px]
                    "
                >
                    {steps.map((s) => (
                        <div
                            key={s.n}
                            className="
                                flex
                                h-[250px]
                                w-full
                                flex-col
                                rounded-[14px]
                                border
                                border-white/30
                                bg-gradient-to-br
                                p-[18px]
                                shadow-[0_8px_24px_rgba(0,0,0,0.15)]
                                sm:h-[290px]
                                sm:rounded-[16px]
                                sm:p-6
                                lg:h-[364px]
                                lg:p-[28px]
                            "
                        >
                            <div
                                className="
                                    grid
                                    h-11
                                    w-11
                                    shrink-0
                                    place-items-center
                                    rounded-[9px]
                                    border
                                    border-[#1B4666]
                                    bg-[#0A3154]
                                    text-[#DCE9F4]
                                    sm:h-[52px]
                                    sm:w-[52px]
                                    sm:rounded-[10px]
                                "
                            >
                                <Icon d={s.i} size={21} />
                            </div>

                            <p
                                className="
                                    mt-3
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#94A3B8]
                                    sm:mt-4
                                    sm:text-[12px]
                                "
                            >
                                Step
                            </p>

                            <p
                                className="
                                    mt-0.5
                                    text-[27px]
                                    font-[800]
                                    leading-[30px]
                                    text-[#FF6B18]
                                    sm:text-[30px]
                                    sm:leading-[32px]
                                "
                            >
                                {s.n}
                            </p>

                            <h3
                                className="
                                    mt-2.5
                                    text-[18px]
                                    font-bold
                                    leading-[21px]
                                    text-white
                                    sm:mt-3.5
                                    sm:text-[20px]
                                    sm:leading-[22px]
                                "
                            >
                                {s.t}
                            </h3>

                            <span
                                className="
                                    mt-3.5
                                    block
                                    h-[2px]
                                    w-[29px]
                                    shrink-0
                                    bg-[#FF6B18]
                                    sm:mt-5
                                "
                            />

                            <p
                                className="
                                    mt-2.5
                                    text-[13px]
                                    font-[400]
                                    leading-[19px]
                                    text-[#94A3B8]
                                    sm:mt-4
                                    sm:text-[14px]
                                    sm:leading-[21px]
                                "
                            >
                                {s.d}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}