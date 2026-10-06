import { Container, Icon } from "../ui";
import { solutionData } from "./solutionData";

function SectionHeading({
    eyebrow,
    title,
    description,
    center = false,
    dark = false,
}) {
    return (
        <div className={center ? "text-center" : ""}>
            {/* Eyebrow */}
            <p
                className={`
                    font-nav
                    text-[12px]
                    font-[700]
                    uppercase
                    tracking-[0.12em]
                    text-[#FF6B18]
                `}
            >
                {eyebrow}
            </p>

            {/* Heading */}
            <h2
                className={`
        mt-2
        max-w-[700px]
        ${center ? "mx-auto" : ""}
        font-nav
        text-[36px]
        font-[700]
        leading-[1.18]
        tracking-[-0.02em]
        lg:text-[36px]
        ${dark
                        ? "text-white"
                        : "text-[#0B2342] dark:text-white"
                    }
    `}
            >
                {title}
            </h2>

            {/* Description */}
            {description && (
                <p
                    className={`
                        mt-4
                        font-sans
                        text-[15px]
                        font-[400]
                        leading-[1.65]
                        ${center
                            ? "mx-auto max-w-[700px]"
                            : "max-w-[563px]"
                        }
                        ${dark
                            ? "text-white/70"
                            : "text-[#414751] dark:text-[#AAB7C8]"
                        }
                    `}
                >
                    {description}
                </p>
            )}
        </div>
    );
}

function Hero({ data }) {
    const h = data.hero;

    return (
        <section
            className="
                relative
                min-h-[550px]
                overflow-hidden
                bg-[#06182A]
                text-white
            "
        >
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0">
                <img
                    src={h.bgImage}
                    alt=""
                    className="h-full w-full object-cover"
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#020A14]/95
                        via-[#06182A]/80
                        to-[#06182A]/45
                    "
                />
            </div>

            <Container className="relative z-10 px-5 py-16 lg:px-0 lg:py-[76px]">
                <div
                    className="
                        mx-auto
                        grid
                        w-full
                        max-w-[1250px]
                        items-center
                        gap-14
                        lg:grid-cols-[1fr_1fr]
                    "
                >
                    {/* LEFT */}
                    <div>
                        {/* EYEBROW */}
                        <span
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/15
                                bg-white/10
                                px-3.5
                                py-1.5
                                font-nav
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.06em]
                                text-white/90
                                backdrop-blur
                            "
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B18]" />
                            {h.eyebrow}
                        </span>

                        {/* TITLE */}
                        <h1
                            className="
                                mt-6
                                max-w-[762.33px]
                                font-nav
                                text-[42px]
                                font-[800]
                                leading-[1.08]
                                tracking-[-0.025em]
                                text-white
                                sm:text-[50px]
                                lg:text-[54px]
                            "
                        >
                            {h.title}
                        </h1>

                        {/* DESCRIPTION */}
                        <p
                            className="
                                mt-5
                                max-w-[563.38px]
                                font-sans
                                text-[15px]
                                font-[400]
                                leading-[1.65]
                                text-white/75
                                lg:text-[18px]
                            "
                        >
                            {h.description}
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-7 flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    bg-[#FF6B18]
                                    px-5
                                    py-3
                                    font-nav
                                    text-[14px]
                                    font-[600]
                                    text-white
                                    shadow-lg
                                    shadow-orange-500/20
                                    transition
                                    hover:brightness-110
                                "
                            >
                                {h.primaryCta}
                                <span>→</span>
                            </a>

                            <a
                                href="#sectors"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    border
                                    border-white/25
                                    bg-white/[0.03]
                                    px-5
                                    py-3
                                    font-nav
                                    text-[14px]
                                    font-[600]
                                    text-white
                                    transition
                                    hover:bg-white/10
                                "
                            >
                                {h.secondaryCta}
                                <span>↗</span>
                            </a>
                        </div>

                        {/* STATS */}
                        <div
                            className="
                                mt-7
                                grid
                                max-w-[560px]
                                grid-cols-3
                                border-t
                                border-white/15
                                pt-5
                            "
                        >
                            {h.stats.map((s) => (
                                <div key={s.label}>
                                    <p
                                        className="
                                            font-nav
                                            text-[12px]
                                            font-[500]
                                            uppercase
                                            tracking-[0.08em]
                                            text-[#94A3B8]
                                        "
                                    >
                                        {s.label}
                                    </p>

                                    <p className="mt-1 font-nav text-[24px] font-[700] text-white">
                                        <span
                                            className={
                                                s.accent
                                                    ? "text-[#FF6B18]"
                                                    : "text-white"
                                            }
                                        >
                                            {s.value}
                                        </span>{" "}
                                        <span className="font-nav text-[14px] font-[400] text-[#94A3B8]">
                                            {s.suffix}
                                        </span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT HERO IMAGE */}
                    <div className="relative mx-auto w-full max-w-[528.75px] lg:ml-auto">
                        <div
                            className="
                                overflow-hidden
                                rounded-[12px]
                                border
                                border-white/20
                                bg-[#16354D]
                                shadow-[0_20px_60px_rgba(0,0,0,.35)]
                            "
                        >
                            <img
                                src={h.image}
                                alt={h.title}
                                className="h-[400px] w-full object-cover"
                            />

                            {/* TELEMETRY CARD */}
                            <div
                                className="
                                    absolute
                                    bottom-4
                                    left-4
                                    right-4
                                    flex
                                    items-center
                                    justify-between
                                    rounded-[10px]
                                    border
                                    border-white/10
                                    bg-[#09233B]/95
                                    px-4
                                    py-3
                                    backdrop-blur
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="
                                            grid
                                            h-10
                                            w-10
                                            place-items-center
                                            rounded-lg
                                            bg-[#0867B5]
                                            text-white
                                        "
                                    >
                                        <Icon
                                            d="M4 18l5-6 4 3 7-9"
                                            size={19}
                                        />
                                    </div>

                                    <div>
                                        <p
                                            className="
                                                font-nav
                                                text-[9px]
                                                uppercase
                                                tracking-[0.1em]
                                                text-white/50
                                            "
                                        >
                                            {h.telemetry.eyebrow}
                                        </p>

                                        <p className="mt-0.5 font-nav text-[12px] font-semibold">
                                            {h.telemetry.title}
                                        </p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="font-nav text-[10px] font-bold text-[#FF6B18]">
                                        {h.telemetry.pr}
                                    </p>

                                    <p className="font-sans text-[9px] text-white/55">
                                        {h.telemetry.actual}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function Advantages({ data }) {
    const section = data.advantages;

    return (
        <section className="bg-[#F8FAFC] py-14 dark:bg-[#09111f] lg:py-[68px]">
            <Container>
                <div className="mx-auto w-full max-w-[1250px]">
                    <div className="grid items-end gap-6 lg:grid-cols-2">
                        <SectionHeading
                            eyebrow={section.eyebrow}
                            title={section.title}
                        />

                        <p
                            className="
                                max-w-[390px]
                                justify-self-end
                                font-sans
                                text-[13px]
                                leading-[1.65]
                                text-[#475569]
                                dark:text-[#AAB7C8]
                            "
                        >
                            {section.description}
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {section.items.map((item) => (
                            <article
                                key={item.title}
                                className="
                                    flex
                                    min-h-[327.20px]
                                    max-w-[310px]
                                    flex-col
                                    rounded-[10px]
                                    border
                                    border-[#D9E4F0]
                                    bg-white
                                    p-6
                                    dark:border-white/10
                                    dark:bg-card
                                "
                            >
                                <div
                                    className={`
                                        grid
                                        h-10
                                        w-10
                                        place-items-center
                                        rounded-lg
                                        ${item.orange
                                            ? "bg-[#FFF0E9] text-[#FF6B18]"
                                            : "bg-[#E7F1F8] text-[#0867B5]"
                                        }
                                    `}
                                >
                                    <Icon d={item.icon} size={19} />
                                </div>

                                <h2
                                    className="
                                        mt-5
                                        font-nav
                                        text-[20px]
                                        font-semibold
                                        leading-[1.3]
                                        text-[#121C26]
                                        dark:text-white
                                    "
                                >
                                    {item.title}
                                </h2>

                                <p
                                    className="
                                        mt-2
                                        font-sans
                                        text-[13px]
                                        leading-[1.65]
                                        text-[#475569]
                                        dark:text-[#AAB7C8]
                                    "
                                >
                                    {item.description}
                                </p>

                                <div className="mt-auto border-t border-[#E5EAF1] pt-4 dark:border-white/10">
                                    <div className="flex items-center justify-between gap-2">
                                        <span
                                            className="
                                                font-sans
                                                text-[12px]
                                                text-[#414751]
                                                dark:text-[#94A3B8]
                                            "
                                        >
                                            {item.label}
                                        </span>

                                        <span className="font-nav text-[12px] font-[700] text-[#075A9F] dark:text-[#65B4FF]">
                                            {item.value}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function Sectors({ data }) {
    const section = data.sectors;

    return (
        <section
            id="sectors"
            className="bg-[#EDF4FF] py-14 dark:bg-[#09111f] lg:py-[68px]"
        >
            <Container>
                <div className="mx-auto w-full max-w-[1250px]">
                    <SectionHeading
                        center
                        eyebrow={section.eyebrow}
                        title={section.title}
                        description={section.description}
                    />

                    <div className="mt-11 grid gap-6 lg:grid-cols-3">
                        {section.items.map((item) => (
                            <article
                                key={item.title}
                                className="
                                    overflow-hidden
                                    rounded-[12px]
                                    border
                                    border-[#D9E4F0]
                                    bg-white
                                    shadow-sm
                                    dark:border-white/10
                                    dark:bg-card
                                "
                            >
                                <div className="relative h-[185px] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover"
                                    />

                                    <span
                                        className="
                                            absolute
                                            right-2
                                            top-2
                                            rounded
                                            bg-[#082844]/90
                                            px-2
                                            py-1
                                            font-nav
                                            text-[10px]
                                            font-semibold
                                            text-white
                                        "
                                    >
                                        {item.tag}
                                    </span>
                                </div>

                                <div className="p-5">
                                    <h3
                                        className="
                                            font-nav
                                            text-[17px]
                                            font-semibold
                                            text-[#17202A]
                                            dark:text-white
                                        "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            min-h-[62px]
                                            font-sans
                                            text-[12px]
                                            leading-[1.65]
                                            text-[#475569]
                                            dark:text-[#AAB7C8]
                                        "
                                    >
                                        {item.description}
                                    </p>

                                    <div className="mt-4 border-t border-[#DCE5EF] pt-3 dark:border-white/10">
                                        <p className="font-nav text-[10px] font-semibold text-[#0867B5] dark:text-[#65B4FF]">
                                            <span className="text-[#FF6B18]">
                                                ✓
                                            </span>{" "}
                                            {item.feature}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function Finance({ data }) {
    const section = data.finance;

    return (
        <section className="bg-[#F8FAFC] py-14 dark:bg-[#09111f] lg:py-[68px]">
            <Container>
                <div className="mx-auto w-full max-w-[1250px]">
                    <SectionHeading
                        center
                        eyebrow={section.eyebrow}
                        title={section.title}
                        description={section.description}
                    />

                    <div className="mx-auto mt-10 grid max-w-[1400px] gap-6 lg:grid-cols-2">
                        {section.items.map((item) => (
                            <article
                                key={item.title}
                                className="
                                    rounded-[12px]
                                    border
                                    border-[#D9E4F0]
                                    bg-white
                                    p-6
                                    dark:border-white/10
                                    dark:bg-card
                                "
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <span
                                        className={`
                                            rounded-full
                                            px-3
                                            py-1
                                            font-nav
                                            text-[10px]
                                            font-bold
                                            uppercase
                                            tracking-wide
                                            ${item.badgeBlue
                                                ? "bg-[#E8F2F8] text-[#075A9F]"
                                                : "bg-[#FFF0E9] text-[#FF6B18]"
                                            }
                                        `}
                                    >
                                        {item.badge}
                                    </span>

                                    <h3 className="font-nav text-[24px] font-[700] text-[#0B2342] dark:text-white">
                                        {item.title}
                                    </h3>
                                </div>

                                <p
                                    className="
                                        mt-5
                                        font-sans
                                        text-[15px]
                                        font-[400]
                                        leading-[1.7]
                                        text-[#414751]
                                        dark:text-[#AAB7C8]
                                    "
                                >
                                    {item.description}
                                </p>

                                <div className="mt-5 space-y-3">
                                    {item.points.map((point) => (
                                        <div
                                            key={point}
                                            className="
                                                flex
                                                gap-2
                                                font-sans
                                                text-[11px]
                                                font-semibold
                                                leading-[1.55]
                                                text-[#17202A]
                                                dark:text-white/85
                                            "
                                        >
                                            <span
                                                className={
                                                    item.badgeBlue
                                                        ? "text-[#075A9F]"
                                                        : "text-[#FF6B18]"
                                                }
                                            >
                                                ⊙
                                            </span>

                                            <span className="font-sans text-[13px] font-[700] leading-[1.6] text-[#121C26] dark:text-[#AAB7C8]">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-end justify-between gap-4 border-t border-[#E5EAF1] pt-5 dark:border-white/10">
                                    <div>
                                        <p className="font-nav text-[10px] uppercase tracking-wide text-[#64748B]">
                                            {item.metricLabel}
                                        </p>

                                        <p
                                            className={`
                                                mt-1
                                                font-nav
                                                text-[21px]
                                                font-bold
                                                ${item.orangeMetric
                                                    ? "text-[#FF6B18]"
                                                    : "text-[#0867B5]"
                                                }
                                            `}
                                        >
                                            {item.metric}
                                        </p>
                                    </div>

                                    <button
                                        className={`
                                            rounded-lg
                                            px-4
                                            py-2.5
                                            font-nav
                                            text-[11px]
                                            font-semibold
                                            text-white
                                            ${item.buttonBlue
                                                ? "bg-[#0867B5]"
                                                : "bg-[#FF6B18]"
                                            }
                                        `}
                                    >
                                        {item.button}
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function Workflow({ data }) {
    const section = data.workflow;

    return (
        <section className="bg-[#041929] py-14 text-white lg:py-[68px]">
            <Container>
                <div className="mx-auto w-full max-w-[1250px]">
                    <SectionHeading
                        center
                        dark
                        eyebrow={section.eyebrow}
                        title={section.title}
                        description={section.description}
                    />
                    <div className="mt-10 grid gap-5 lg:grid-cols-4">
                        {section.items.map((item) => (
                            <article
                                key={item.number}
                                className={`
                                    flex
                                    min-h-[225px]
                                    flex-col
                                    rounded-[10px]
                                    border
                                    p-5
                                    ${item.orange
                                        ? "border-orange-200 bg-gradient-to-br from-[#FFF4EC] to-[#FFD9C2] text-[#17202A]"
                                        : "border-[#D9E4F0] bg-white text-[#17202A]"
                                    }
                                `}
                            >
                                <div className="flex items-center justify-between">
                                    <span
                                        className={`
                                            grid
                                            h-7
                                            w-7
                                            place-items-center
                                            rounded-full
                                            font-nav
                                            text-[12px]
                                            font-[500]
                                            text-white
                                            ${item.orange
                                                ? "bg-[#FF6B18]"
                                                : "bg-[#0B2B4D]"
                                            }
                                        `}
                                    >
                                        {item.number}
                                    </span>

                                    <span className={`font-sans text-[12px] font-[700] text-[#414751]  ${item.orange
                                        ? "text-[#FF6B18]"
                                        : "text-[#0B2B4D]"
                                        }`}>
                                        {item.timing}
                                    </span>
                                </div>

                                <h3 className="mt-4 font-nav text-[20px] font-[600] font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-2 mb-4 font-sans text-[13px] font-[400] leading-[1.65] text-[#414751]">
                                    {item.description}
                                </p>

                                <div className="mt-auto border-t border-[#DCE5EF] pt-3">
                                    <p
                                        className={`
                                            font-nav
                                            text-[12px]
                                            font-[700]
                                            ${item.orange
                                                ? "text-[#FF6B18]"
                                                : "text-[#075A9F]"
                                            }
                                        `}
                                    >
                                        Deliverable: {item.deliverable}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function CTA({ data }) {
    const cta = data.cta;

    return (
        <section
            id="contact"
            className="bg-[#F8FAFC] px-5 py-8 dark:bg-[#09111f] lg:py-9"
        >
            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-[1216px]
                    flex-col
                    gap-6
                    rounded-[20px]
                    bg-[#061C2D]
                    px-7
                    py-8
                    text-white
                    shadow-[0_12px_35px_rgba(2,23,39,.18)]
                    sm:px-9
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >
                <div>
                    <p className="font-nav text-[10px] font-bold uppercase tracking-[0.1em] text-[#FF6B18]">
                        {cta.eyebrow}
                    </p>

                    <h2 className="mt-2 font-nav text-[25px] font-bold leading-tight lg:text-[30px]">
                        {cta.title}
                    </h2>

                    <p className="mt-2 max-w-[540px] font-sans text-[13px] leading-relaxed text-white/70">
                        {cta.description}
                    </p>
                </div>

                <div className="flex shrink-0 flex-wrap gap-3">
                    <a
                        href="#"
                        className="
                            rounded-lg
                            bg-[#FF6B18]
                            px-6
                            py-3
                            font-nav
                            text-[12px]
                            font-bold
                            text-white
                            transition
                            hover:brightness-110
                        "
                    >
                        {cta.primary}
                    </a>

                    <a
                        href="#"
                        className="
                            rounded-lg
                            bg-white/10
                            px-6
                            py-3
                            font-nav
                            text-[12px]
                            font-semibold
                            text-white
                            transition
                            hover:bg-white/20
                        "
                    >
                        {cta.secondary}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default function SolutionPage({ type }) {
    const data = solutionData[type];

    if (!data) {
        return null;
    }

    return (
        <main className="font-sans">
            <Hero data={data} />
            <Advantages data={data} />
            <Sectors data={data} />
            <Finance data={data} />
            <Workflow data={data} />
            <CTA data={data} />
        </main>
    );
}