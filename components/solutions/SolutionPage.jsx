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
            <p
                className="
                    font-nav
                    text-[10px]
                    font-[700]
                    uppercase
                    tracking-[0.12em]
                    text-[#FF6B18]
                    sm:text-[12px]
                "
            >
                {eyebrow}
            </p>

            <h2
                className={`
        mt-1.5
        max-w-[700px]
        ${center ? "mx-auto" : ""}
        font-nav
        text-[22px]
        font-[700]
        leading-[1.15]
        tracking-[-0.02em]
        sm:mt-2
        sm:text-[32px]
        lg:text-[36px]
        ${dark
                        ? "text-white"
                        : "text-[#0B2342] dark:text-white"
                    }
    `}
            >
                {title}
            </h2>

            {description && (
                <p
                    className={`
                        mt-3
                        font-sans
                        text-[13px]
                        font-[400]
                        leading-[1.6]
                        sm:mt-4
                        sm:text-[15px]
                        sm:leading-[1.65]
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
                min-h-0
                overflow-hidden
                bg-[#06182A]
                text-white
                lg:min-h-[550px]
            "
        >
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

            <Container className="relative z-10 px-5 py-7 sm:px-8 sm:py-14 lg:px-0 lg:py-[76px]">
                <div
                    className="
                        mx-auto
                        grid
                        w-full
                        max-w-[1250px]
                        items-center
                        gap-7
                        sm:gap-10
                        lg:grid-cols-[1fr_1fr]
                        lg:gap-14
                    "
                >
                    <div>
                        <span
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/15
                                bg-white/10
                                px-3
                                py-1.5
                                font-nav
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.06em]
                                text-white/90
                                backdrop-blur
                                sm:px-3.5
                                sm:text-[10px]
                            "
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B18]" />
                            {h.eyebrow}
                        </span>

                        <h1
                            className="
                                mt-3
                                max-w-[762.33px]
                                font-nav
                                text-[34px]
                                font-[800]
                                leading-[1.08]
                                tracking-[-0.025em]
                                text-white
                                sm:mt-6
                                sm:text-[50px]
                                lg:text-[54px]
                            "
                        >
                            {h.title}
                        </h1>

                        <p
                            className="
                                mt-3
                                max-w-[563.38px]
                                font-sans
                                text-[13px]
                                font-[400]
                                leading-[1.6]
                                text-white/75
                                sm:mt-5
                                sm:text-[15px]
                                lg:text-[18px]
                            "
                        >
                            {h.description}
                        </p>

                        <div className="mt-5 flex flex-row gap-2.5 sm:mt-7 sm:flex-wrap sm:gap-3">
                            <a
                                href="#contact"
                                className="
                                    inline-flex
                                    min-h-[42px]
                                    shrink-0
                                    items-center
                                    justify-center
                                    gap-1.5
                                    rounded-lg
                                    bg-[#FF6B18]
                                    px-3
                                    py-2.5
                                    font-nav
                                    text-[10px]
                                    font-[600]
                                    text-white
                                    shadow-lg
                                    shadow-orange-500/20
                                    transition
                                    hover:brightness-110
                                    sm:px-5
                                    sm:py-3
                                    sm:text-[14px]
                                "
                            >
                                {h.primaryCta}
                                <span>→</span>
                            </a>

                            <a
                                href="#sectors"
                                className="
                                    inline-flex
                                    min-h-[42px]
                                    shrink-0
                                    items-center
                                    justify-center
                                    gap-1.5
                                    rounded-lg
                                    border
                                    border-white/25
                                    bg-white/[0.03]
                                    px-3
                                    py-2.5
                                    font-nav
                                    text-[10px]
                                    font-[600]
                                    text-white
                                    transition
                                    hover:bg-white/10
                                    sm:px-5
                                    sm:py-3
                                    sm:text-[14px]
                                "
                            >
                                {h.secondaryCta}
                                <span>↗</span>
                            </a>
                        </div>

                        <div
                            className="
                                mt-5
                                grid
                                max-w-[560px]
                                grid-cols-3
                                border-t
                                border-white/15
                                pt-3
                                sm:mt-7
                                sm:pt-5
                            "
                        >
                            {h.stats.map((s) => (
                                <div key={s.label} className="min-w-0">
                                    <p
                                        className="
                                            font-nav
                                            text-[8px]
                                            font-[500]
                                            uppercase
                                            leading-tight
                                            tracking-[0.04em]
                                            text-[#94A3B8]
                                            sm:text-[12px]
                                            sm:tracking-[0.08em]
                                        "
                                    >
                                        {s.label}
                                    </p>

                                    <p className="mt-1 font-nav text-[19px] font-[700] text-white sm:text-[24px]">
                                        <span
                                            className={
                                                s.accent
                                                    ? "text-[#FF6B18]"
                                                    : "text-white"
                                            }
                                        >
                                            {s.value}
                                        </span>{" "}
                                        <span className="font-nav text-[9px] font-[400] text-[#94A3B8] sm:text-[14px]">
                                            {s.suffix}
                                        </span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

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
                                className="h-[270px] w-full object-cover sm:h-[340px] lg:h-[400px]"
                            />

                            <div
                                className="
                                    absolute
                                    bottom-3
                                    left-3
                                    right-3
                                    flex
                                    items-center
                                    justify-between
                                    gap-2
                                    rounded-[10px]
                                    border
                                    border-white/10
                                    bg-[#09233B]/95
                                    px-3
                                    py-2.5
                                    backdrop-blur
                                    sm:bottom-4
                                    sm:left-4
                                    sm:right-4
                                    sm:px-4
                                    sm:py-3
                                "
                            >
                                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                                    <div
                                        className="
                                            grid
                                            h-8
                                            w-8
                                            shrink-0
                                            place-items-center
                                            rounded-lg
                                            bg-[#0867B5]
                                            text-white
                                            sm:h-10
                                            sm:w-10
                                        "
                                    >
                                        <Icon
                                            d="M4 18l5-6 4 3 7-9"
                                            size={17}
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <p
                                            className="
                                                truncate
                                                font-nav
                                                text-[8px]
                                                uppercase
                                                tracking-[0.1em]
                                                text-white/50
                                                sm:text-[9px]
                                            "
                                        >
                                            {h.telemetry.eyebrow}
                                        </p>

                                        <p className="mt-0.5 truncate font-nav text-[10px] font-semibold sm:text-[12px]">
                                            {h.telemetry.title}
                                        </p>
                                    </div>
                                </div>

                                <div className="shrink-0 text-right">
                                    <p className="font-nav text-[9px] font-bold text-[#FF6B18] sm:text-[10px]">
                                        {h.telemetry.pr}
                                    </p>

                                    <p className="font-sans text-[8px] text-white/55 sm:text-[9px]">
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
        <section className="bg-[#F8FAFC] py-9 dark:bg-[#09111f] sm:py-12 lg:py-[68px]">
            <Container>
                <div className="mx-auto w-full max-w-[1250px]">
                    <div className="grid items-end gap-5 lg:grid-cols-2 lg:gap-6">
                        <SectionHeading
                            eyebrow={section.eyebrow}
                            title={section.title}
                        />

                        <p
                            className="
                                max-w-[390px]
                                font-sans
                                text-[12px]
                                leading-[1.6]
                                text-[#475569]
                                dark:text-[#AAB7C8]
                                sm:text-[13px]
                                lg:justify-self-end
                            "
                        >
                            {section.description}
                        </p>
                    </div>

                    <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {section.items.map((item) => (
                            <article
                                key={item.title}
                                className="
                                    flex
                                    min-h-0
                                    max-w-none
                                    flex-col
                                    rounded-[10px]
                                    border
                                    border-[#D9E4F0]
                                    bg-white
                                    p-4
                                    dark:border-white/10
                                    dark:bg-card
                                    sm:p-6
                                    lg:min-h-[327.20px]
                                    lg:max-w-[310px]
                                "
                            >
                                <div
                                    className={`
                                        grid
                                        h-9
                                        w-9
                                        place-items-center
                                        rounded-lg
                                        sm:h-10
                                        sm:w-10
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
                                        mt-3
                                        font-nav
                                        text-[17px]
                                        font-semibold
                                        leading-[1.25]
                                        text-[#121C26]
                                        dark:text-white
                                        sm:mt-5
                                        sm:text-[20px]
                                        sm:leading-[1.3]
                                    "
                                >
                                    {item.title}
                                </h2>

                                <p
                                    className="
                                        mt-1.5
                                        font-sans
                                        text-[11px]
                                        leading-[1.5]
                                        text-[#475569]
                                        dark:text-[#AAB7C8]
                                        sm:mt-2
                                        sm:text-[13px]
                                        sm:leading-[1.6]
                                    "
                                >
                                    {item.description}
                                </p>

                                <div className="mt-4 border-t border-[#E5EAF1] pt-3 dark:border-white/10 sm:mt-auto sm:pt-4">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="font-sans text-[9px] text-[#414751] dark:text-[#94A3B8] sm:text-[12px]">
                                            {item.label}
                                        </span>

                                        <span className="font-nav text-[9px] font-[700] text-[#075A9F] dark:text-[#65B4FF] sm:text-[12px]">
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
            className="bg-[#EDF4FF] py-9 dark:bg-[#09111f] sm:py-12 lg:py-[68px]"
        >
            <Container>
                <div className="mx-auto w-full max-w-[1250px]">
                    <SectionHeading
                        center
                        eyebrow={section.eyebrow}
                        title={section.title}
                        description={section.description}
                    />

                    <div className="mt-7 grid gap-4 sm:mt-11 sm:gap-5 lg:grid-cols-3 lg:gap-6">
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
                                <div className="relative h-[150px] overflow-hidden sm:h-[170px] lg:h-[185px]">
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
                                            text-[9px]
                                            font-semibold
                                            text-white
                                            sm:text-[10px]
                                        "
                                    >
                                        {item.tag}
                                    </span>
                                </div>

                                <div className="p-4 sm:p-5">
                                    <h3
                                        className="
                                            font-nav
                                            text-[16px]
                                            font-semibold
                                            text-[#17202A]
                                            dark:text-white
                                            sm:text-[17px]
                                        "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1.5
                                            font-sans
                                            text-[11px]
                                            leading-[1.6]
                                            text-[#475569]
                                            dark:text-[#AAB7C8]
                                            sm:mt-2
                                            sm:min-h-[62px]
                                            sm:text-[12px]
                                        "
                                    >
                                        {item.description}
                                    </p>

                                    <div className="mt-3 border-t border-[#DCE5EF] pt-2.5 dark:border-white/10 sm:mt-4 sm:pt-3">
                                        <p className="font-nav text-[9px] font-semibold text-[#0867B5] dark:text-[#65B4FF] sm:text-[10px]">
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
        <section className="bg-[#F8FAFC] py-9 dark:bg-[#09111f] sm:py-12 lg:py-[68px]">
            <Container>
                <div className="mx-auto w-full max-w-[1250px]">
                    <SectionHeading
                        center
                        eyebrow={section.eyebrow}
                        title={section.title}
                        description={section.description}
                    />

                    <div className="mx-auto mt-7 grid max-w-[1400px] gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-2">
                        {section.items.map((item) => (
                            <article
                                key={item.title}
                                className="
                                    rounded-[12px]
                                    border
                                    border-[#D9E4F0]
                                    bg-white
                                    p-4
                                    dark:border-white/10
                                    dark:bg-card
                                    sm:p-6
                                "
                            >
                                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                                    <span
                                        className={`
                                            rounded-full
                                            px-3
                                            py-1
                                            font-nav
                                            text-[9px]
                                            font-bold
                                            uppercase
                                            tracking-wide
                                            sm:text-[10px]
                                            ${item.badgeBlue
                                                ? "bg-[#E8F2F8] text-[#075A9F]"
                                                : "bg-[#FFF0E9] text-[#FF6B18]"
                                            }
                                        `}
                                    >
                                        {item.badge}
                                    </span>

                                    <h3 className="font-nav text-[20px] font-[700] text-[#0B2342] dark:text-white sm:text-[24px]">
                                        {item.title}
                                    </h3>
                                </div>

                                <p
                                    className="
                                        mt-3
                                        font-sans
                                        text-[13px]
                                        font-[400]
                                        leading-[1.65]
                                        text-[#414751]
                                        dark:text-[#AAB7C8]
                                        sm:mt-5
                                        sm:text-[15px]
                                        sm:leading-[1.7]
                                    "
                                >
                                    {item.description}
                                </p>

                                <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
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

                                            <span className="font-sans text-[12px] font-[700] leading-[1.55] text-[#121C26] dark:text-[#AAB7C8] sm:text-[13px]">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-5 flex flex-col items-start gap-3 border-t border-[#E5EAF1] pt-4 dark:border-white/10 sm:mt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:pt-5">
                                    <div>
                                        <p className="font-nav text-[9px] uppercase tracking-wide text-[#64748B] sm:text-[10px]">
                                            {item.metricLabel}
                                        </p>

                                        <p
                                            className={`
                                                mt-1
                                                font-nav
                                                text-[19px]
                                                font-bold
                                                sm:text-[21px]
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
                                            w-full
                                            rounded-lg
                                            px-4
                                            py-2.5
                                            font-nav
                                            text-[10px]
                                            font-semibold
                                            text-white
                                            sm:w-auto
                                            sm:text-[11px]
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
        <section className="bg-[#041929] py-9 text-white sm:py-12 lg:py-[68px]">
            <Container>
                <div className="mx-auto w-full max-w-[1250px]">
                    <SectionHeading
                        center
                        dark
                        eyebrow={section.eyebrow}
                        title={section.title}
                        description={section.description}
                    />

                    <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-4">
                        {section.items.map((item) => (
                            <article
                                key={item.number}
                                className={`
                                    flex
                                    min-h-0
                                    flex-col
                                    rounded-[10px]
                                    border
                                    p-4
                                    sm:min-h-[225px]
                                    sm:p-5
                                    ${item.orange
                                        ? "border-orange-200 bg-gradient-to-br from-[#FFF4EC] to-[#FFD9C2] text-[#17202A]"
                                        : "border-[#D9E4F0] bg-white text-[#17202A]"
                                    }
                                `}
                            >
                                <div className="flex items-center justify-between gap-2">
                                    <span
                                        className={`
                                            grid
                                            h-7
                                            w-7
                                            place-items-center
                                            rounded-full
                                            font-nav
                                            text-[11px]
                                            font-[500]
                                            text-white
                                            sm:text-[12px]
                                            ${item.orange
                                                ? "bg-[#FF6B18]"
                                                : "bg-[#0B2B4D]"
                                            }
                                        `}
                                    >
                                        {item.number}
                                    </span>

                                    <span
                                        className={`
                                            font-sans
                                            text-[10px]
                                            font-[700]
                                            sm:text-[12px]
                                            ${item.orange
                                                ? "text-[#FF6B18]"
                                                : "text-[#0B2B4D]"
                                            }
                                        `}
                                    >
                                        {item.timing}
                                    </span>
                                </div>

                                <h3 className="mt-3 font-nav text-[18px] font-semibold sm:mt-4 sm:text-[20px]">
                                    {item.title}
                                </h3>

                                <p className="mt-2 mb-3 font-sans text-[12px] font-[400] leading-[1.6] text-[#414751] sm:mb-4 sm:text-[13px] sm:leading-[1.65]">
                                    {item.description}
                                </p>

                                <div className="mt-auto border-t border-[#DCE5EF] pt-2.5 sm:pt-3">
                                    <p
                                        className={`
                                            font-nav
                                            text-[10px]
                                            font-[700]
                                            sm:text-[12px]
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
            className="bg-[#F8FAFC] px-4 py-6 dark:bg-[#09111f] sm:px-5 sm:py-8 lg:py-9"
        >
            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-[1216px]
                    flex-col
                    gap-5
                    rounded-[18px]
                    bg-[#061C2D]
                    px-4
                    py-6
                    text-white
                    shadow-[0_12px_35px_rgba(2,23,39,.18)]
                    sm:gap-6
                    sm:rounded-[20px]
                    sm:px-9
                    sm:py-7
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    lg:px-9
                    lg:py-8
                "
            >
                <div className="min-w-0">
                    <p className="font-nav text-[9px] font-bold uppercase tracking-[0.1em] text-[#FF6B18] sm:text-[10px]">
                        {cta.eyebrow}
                    </p>

                    <h2 className="mt-1.5 font-nav text-[21px] font-bold leading-[1.15] sm:mt-2 sm:text-[25px] lg:text-[30px]">
                        {cta.title}
                    </h2>

                    <p className="mt-2 max-w-[540px] font-sans text-[12px] leading-[1.55] text-white/70 sm:text-[13px] sm:leading-relaxed">
                        {cta.description}
                    </p>
                </div>

                <div className="grid w-full shrink-0 grid-cols-2 gap-2 sm:flex sm:w-auto sm:gap-3">
                    <a
                        href="#"
                        className="
                            inline-flex
                            min-h-[42px]
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#FF6B18]
                            px-2
                            py-2.5
                            text-center
                            font-nav
                            text-[10px]
                            font-bold
                            leading-tight
                            text-white
                            transition
                            hover:brightness-110
                            sm:min-h-[48px]
                            sm:px-5
                            sm:py-3
                            sm:text-[12px]
                            lg:px-6
                        "
                    >
                        {cta.primary}
                    </a>

                    <a
                        href="#"
                        className="
                            inline-flex
                            min-h-[42px]
                            items-center
                            justify-center
                            rounded-lg
                            bg-white/10
                            px-2
                            py-2.5
                            text-center
                            font-nav
                            text-[10px]
                            font-semibold
                            leading-tight
                            text-white
                            transition
                            hover:bg-white/20
                            sm:min-h-[48px]
                            sm:px-5
                            sm:py-3
                            sm:text-[12px]
                            lg:px-6
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