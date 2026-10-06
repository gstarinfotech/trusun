import { Container } from "./ui";

const team = [
    {
        n: "Robert Smith",
        r: "Director of Engineering",
        img: "/team/robert.jpg",
    },
    {
        n: "John Albert",
        r: "Solar Systems Engineer",
        img: "/team/john.jpg",
    },
    {
        n: "Mike Hardson",
        r: "Master Lead Installer",
        img: "/team/mike.jpg",
    },
];

/* REAL SOCIAL ICONS */
function FacebookIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-[14px] w-[14px]"
            fill="currentColor"
        >
            <path d="M14 8h3V4.5c-.5-.1-1.8-.2-3.2-.2-3.2 0-5.4 2-5.4 5.5V13H5v3.9h3.4V24h4.1v-7.1h3.4l.5-3.9h-3.9V10c0-1.1.3-2 1.5-2Z" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-[13px] w-[13px]"
            fill="currentColor"
        >
            <path d="M18.244 2H21.5l-7.11 8.128L22.75 22h-6.57l-5.144-6.68L5.19 22H1.932l7.608-8.697L1.5 2h6.736l4.65 6.154L18.244 2Zm-1.15 17.923h1.803L7.246 3.984H5.31L17.094 19.923Z" />
        </svg>
    );
}

function LinkedinIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-[13px] w-[13px]"
            fill="currentColor"
        >
            <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.77-2.01-5.52-4.7-5.52-2.16 0-3.13 1.19-3.67 2.03V8.5H9.13V21h3.5v-6.19c0-1.63.31-3.2 2.32-3.2 1.98 0 2 1.86 2 3.31V21h3.5l.55-7.15Z" />
        </svg>
    );
}

export default function OurTeam() {
    return (
        <section className="bg-[#F8FAFC] py-16 dark:bg-[#09111f] lg:py-[72px]">
            <Container>
                {/* HEADING */}
                <div className="mx-auto max-w-[536.6px] text-center">
                    <h2 className="font-serif text-[36px] font-bold leading-[1.2] text-[#17202A] dark:text-white">
                        Our Team
                    </h2>

                    <p className="mx-auto mt-3 max-w-[536.6px] text-[15px] font-[400] leading-[24px] text-[#414751] dark:text-slate-300">
                        Certified solar engineers, system architects, and field
                        installation specialists dedicated to multi-decade
                        performance.
                    </p>
                </div>

                {/* TEAM GRID */}
                <div className="mx-auto mt-[38px] flex max-w-[1200px] flex-col items-center justify-center gap-[40px] lg:flex-row lg:items-start lg:gap-[24px]">
                    {team.map((m) => (
                        <div
                            key={m.n}
                            className="relative w-full max-w-[373.32px] pt-0"
                        >
                            {/* IMAGE */}
                            <div className="h-[373.32px] w-full overflow-hidden rounded-[12px] bg-slate-200 dark:bg-slate-800">
                                <img
                                    src={m.img}
                                    alt={m.n}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* INFO CARD */}
                            <div
                                className="
                                    relative
                                    z-10
                                    mx-auto
                                    -mt-[52px]
                                    flex
                                    h-[168px]
                                    w-[328.52px]
                                    flex-col
                                    items-center
                                    rounded-[12px]
                                    bg-white
                                    px-5
                                    pt-[27px]
                                    text-center
                                    shadow-[0_8px_20px_rgba(15,23,42,0.10)]
                                    dark:bg-[#111b2e]
                                    dark:shadow-[0_8px_25px_rgba(0,0,0,0.35)]
                                "
                            >
                                {/* ORANGE TOP LINE */}
                                <span
                                    className="
                                        absolute
                                        left-1/2
                                        top-0
                                        h-[4px]
                                        w-[210px]
                                        -translate-x-1/2
                                        rounded-b-full
                                        bg-[#FF6B35]
                                    "
                                />

                                {/* NAME */}
                                <h3 className="font-serif mt-[4px] text-[20px] font-[600] leading-[20px] text-[#121C26] dark:text-white">
                                    {m.n}
                                </h3>

                                {/* ROLE */}
                                <p className="mt-[14px] text-[14px] font-semibold leading-[18px] text-[#414751] dark:text-slate-300">
                                    {m.r}
                                </p>

                                {/* SOCIAL ICONS */}
                                <div className="mt-[18px] flex items-center justify-center gap-[12px]">
                                    {/* FACEBOOK */}
                                    <a
                                        href="#"
                                        aria-label={`${m.n} Facebook`}
                                        className="
                                            flex
                                            h-[32px]
                                            w-[32px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#E8F1FB]
                                            text-[#496A93]
                                            transition-all
                                            duration-200
                                            hover:bg-[#496A93]
                                            hover:text-white
                                            dark:bg-[#1d3048]
                                            dark:text-[#8fb8e5]
                                            dark:hover:bg-[#496A93]
                                            dark:hover:text-white
                                        "
                                    >
                                        <FacebookIcon />
                                    </a>

                                    {/* X */}
                                    <a
                                        href="#"
                                        aria-label={`${m.n} X`}
                                        className="
                                            flex
                                            h-[29px]
                                            w-[29px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#E8F1FB]
                                            text-[#496A93]
                                            transition-all
                                            duration-200
                                            hover:bg-[#496A93]
                                            hover:text-white
                                            dark:bg-[#1d3048]
                                            dark:text-[#8fb8e5]
                                            dark:hover:bg-[#496A93]
                                            dark:hover:text-white
                                        "
                                    >
                                        <XIcon />
                                    </a>

                                    {/* LINKEDIN */}
                                    <a
                                        href="#"
                                        aria-label={`${m.n} LinkedIn`}
                                        className="
                                            flex
                                            h-[29px]
                                            w-[29px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#E8F1FB]
                                            text-[#496A93]
                                            transition-all
                                            duration-200
                                            hover:bg-[#496A93]
                                            hover:text-white
                                            dark:bg-[#1d3048]
                                            dark:text-[#8fb8e5]
                                            dark:hover:bg-[#496A93]
                                            dark:hover:text-white
                                        "
                                    >
                                        <LinkedinIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}