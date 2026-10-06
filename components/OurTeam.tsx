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
        <section className="bg-[#F8FAFC] py-8 dark:bg-[#09111f] sm:py-10 lg:py-[72px]">
            <Container>
                <div className="mx-auto max-w-[536.6px] text-center">
                    <h2 className="font-serif text-[28px] font-bold leading-[1.2] text-[#17202A] dark:text-white sm:text-[32px] lg:text-[36px]">
                        Our Team
                    </h2>

                    <p className="mx-auto mt-2.5 max-w-[536.6px] text-[13px] font-[400] leading-[1.6] text-[#414751] dark:text-slate-300 sm:mt-3 sm:text-[15px] sm:leading-[24px]">
                        Certified solar engineers, system architects, and field
                        installation specialists dedicated to multi-decade
                        performance.
                    </p>
                </div>

                <div className="mx-auto mt-6 flex max-w-[1200px] flex-col items-center justify-center gap-7 sm:mt-8 sm:gap-9 lg:mt-[38px] lg:flex-row lg:items-start lg:gap-[24px]">
                    {team.map((m) => (
                        <div
                            key={m.n}
                            className="relative w-full max-w-[340px] pt-0 sm:max-w-[373.32px]"
                        >
                            <div className="h-[300px] w-full overflow-hidden rounded-[12px] bg-slate-200 dark:bg-slate-800 sm:h-[350px] lg:h-[373.32px]">
                                <img
                                    src={m.img}
                                    alt={m.n}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div
                                className="
                                    relative z-10
                                    mx-auto
                                    -mt-[42px]
                                    flex
                                    h-[145px]
                                    w-[calc(100%-28px)]
                                    max-w-[328.52px]
                                    flex-col
                                    items-center
                                    rounded-[12px]
                                    bg-white
                                    px-4
                                    pt-[21px]
                                    text-center
                                    shadow-[0_8px_20px_rgba(15,23,42,0.10)]
                                    dark:bg-[#111b2e]
                                    dark:shadow-[0_8px_25px_rgba(0,0,0,0.35)]
                                    sm:-mt-[48px]
                                    sm:h-[160px]
                                    sm:pt-[24px]
                                    lg:-mt-[52px]
                                    lg:h-[168px]
                                    lg:w-[328.52px]
                                    lg:pt-[27px]
                                "
                            >
                                <span
                                    className="
                                        absolute
                                        left-1/2
                                        top-0
                                        h-[4px]
                                        w-[170px]
                                        -translate-x-1/2
                                        rounded-b-full
                                        bg-[#FF6B35]
                                        sm:w-[190px]
                                        lg:w-[210px]
                                    "
                                />

                                <h3 className="font-serif mt-[3px] text-[18px] font-[600] leading-[20px] text-[#121C26] dark:text-white sm:text-[20px]">
                                    {m.n}
                                </h3>

                                <p className="mt-2.5 text-[12px] font-semibold leading-[18px] text-[#414751] dark:text-slate-300 sm:mt-[12px] sm:text-[14px]">
                                    {m.r}
                                </p>

                                <div className="mt-3.5 flex items-center justify-center gap-2.5 sm:mt-[16px] sm:gap-[12px]">
                                    <a
                                        href="#"
                                        aria-label={`${m.n} Facebook`}
                                        className="
                                            flex h-[29px] w-[29px]
                                            items-center justify-center
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

                                    <a
                                        href="#"
                                        aria-label={`${m.n} X`}
                                        className="
                                            flex h-[27px] w-[27px]
                                            items-center justify-center
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

                                    <a
                                        href="#"
                                        aria-label={`${m.n} LinkedIn`}
                                        className="
                                            flex h-[27px] w-[27px]
                                            items-center justify-center
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