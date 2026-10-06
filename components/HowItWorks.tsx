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

            {/* TOP ORANGE HEADING AREA */}
            <div className="relative bg-[#FF6B18] px-5 py-[27px] text-center">
                <h2 className="text-[32px] font-extrabold leading-[1.2] text-white sm:text-[38px] lg:text-[45px]">
                    How our Solar Team Works
                </h2>

                {/* ORANGE TRIANGLE */}
                <span
                    className="
                        absolute
                        left-1/2
                        top-full
                        z-10
                        h-0
                        w-0
                        -translate-x-1/2
                        border-l-[26px]
                        border-r-[26px]
                        border-t-[22px]
                        border-l-transparent
                        border-r-transparent
                        border-t-[#FF6B18]
                    "
                />
            </div>

            {/* BLUE GRADIENT CONTENT AREA */}
            <Container
                className="
                    bg-gradient-to-br
                    from-[#020617]
                    via-[#06243D]
                    to-[#072A45]
                    px-5
                    pb-[78px]
                    pt-[60px]
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
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-4
                        lg:gap-[22px]
                    "
                >
                    {steps.map((s) => (
                        <div
                            key={s.n}
                            className="
                                flex
                                h-[364px]
                                w-full
                                flex-col
                                rounded-[16px]
                                border
                                border-white/30
                                bg-gradient-to-br
                                p-[28px]
                                shadow-[0_8px_24px_rgba(0,0,0,0.15)]
                            "
                        >
                            {/* ICON */}
                            <div
                                className="
                                    grid
                                    h-[52px]
                                    w-[52px]
                                    shrink-0
                                    place-items-center
                                    rounded-[10px]
                                    border
                                    border-[#1B4666]
                                    bg-[#0A3154]
                                    text-[#DCE9F4]
                                "
                            >
                                <Icon d={s.i} size={23} />
                            </div>

                            {/* STEP */}
                            <p
                                className="
                                    mt-[22px]
                                    text-[12px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#94A3B8]
                                "
                            >
                                Step
                            </p>

                            {/* NUMBER */}
                            <p
                                className="
                                    mt-[4px]
                                    text-[30px]
                                    font-[800]
                                    leading-[32px]
                                    text-[#FF6B18]
                                "
                            >
                                {s.n}
                            </p>

                            {/* TITLE */}
                            <h3
                                className="
                                    mt-[14px]
                                    text-[20px]
                                    font-bold
                                    leading-[22px]
                                    text-white
                                "
                            >
                                {s.t}
                            </h3>

                            {/* ORANGE LINE */}
                            <span
                                className="
                                    mt-[20px]
                                    block
                                    h-[2px]
                                    w-[29px]
                                    shrink-0
                                    bg-[#FF6B18]
                                "
                            />

                            {/* DESCRIPTION */}
                            <p
                                className="
                                    mt-[18px]
                                    text-[14px]
                                    font-[400]
                                    leading-[22px]
                                    text-[#94A3B8]
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