import { Container, Eyebrow, Icon } from "./ui";

const reviews = [
    {
        q: "I was very impressed by the turnkey installation service. Our household electricity expenses dropped drastically within the very first billing cycle, and the telemetry app keeps us informed daily.",
        n: "Sarah Albert",
        r: "Residential Homeowner",
        img: "/testimonials/sarah.jpg",
    },
    {
        q: "The engineering team handled our complete net metering approvals and commercial rooftop deployment without any downtime. Truly seamless execution from start to finish.",
        n: "John Doe",
        r: "Commercial Property Owner",
        img: "/testimonials/johndoe.jpg",
    },
    {
        q: "Exceptional workmanship and tier-1 panel quality. The post-commissioning maintenance and rapid response customer support have provided complete peace of mind.",
        n: "Lilly Rowe",
        r: "Villa Owner",
        img: "/testimonials/lilly.jpg",
    },
];

export default function CustomerFeedback() {
    return (
        <section className="bg-[#F8FAFC] py-12 font-sans dark:bg-[#09111f] lg:py-14">
            <Container className="px-5 lg:px-0">

                {/* HEADER */}
                <div className="mx-auto w-full max-w-[1216px] text-center">
                    <div className="flex items-center justify-center gap">
                        <span className="h-px w-8 bg-[#FF6B18]" />
                    </div>

                    <Eyebrow className="mt-4 text-[16px] font-[600] text-[#03111D] dark:text-white">
                        Our Testimonials
                    </Eyebrow>

                    <h2
                        className="
                            mt-1
                            text-[30px]
                            font-[800]
                            leading-tight
                            text-[#03111D]
                            dark:text-white
                            lg:text-[48px]
                        "
                    >
                        Customer Feedback
                    </h2>
                </div>

                {/* TESTIMONIAL CARDS */}
                <div
                    className="
                        mx-auto
                        mt-9
                        grid
                        w-full
                        max-w-[1216px]
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-3
                        lg:gap-[22px]
                    "
                >
                    {reviews.map((r) => (
                        <article
                            key={r.n}
                            className="
                                flex
                                h-[379px]
                                w-full
                                flex-col
                                rounded-[16px]
                                bg-white
                                p-[28px]
                                shadow-lg
                                shadow-slate-900/5
                                lg:w-[378.66px]
                                dark:border
                                dark:border-white/10
                                dark:bg-[#111b2e]
                                dark:shadow-black/20
                            "
                        >
                            {/* QUOTE ICON */}
                            <Icon
                                d="M7 7h5v5a4 4 0 01-4 4H7v-3h1a1 1 0 001-1V9H7zM15 7h5v5a4 4 0 01-4 4h-1v-3h1a1 1 0 001-1V9h-2z"
                                size={26}
                                className="shrink-0 text-[#03111D] dark:text-white/80"
                            />

                            {/* STARS */}
                            <div className="mt-3 flex gap-0.5 text-[#FF6B18]">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Icon
                                        key={i}
                                        d="M12 2l3 7h7l-5.6 4.2L18.4 21 12 16.8 5.6 21l2-7.8L2 9h7z"
                                        size={16}
                                    />
                                ))}
                            </div>

                            {/* REVIEW */}
                            <p
                                className="
                                    mt-4
                                    text-[16px]
                                    font-[400]
                                    leading-[1.7]
                                    text-[#475569]
                                    dark:text-slate-300
                                "
                            >
                                "{r.q}"
                            </p>

                            {/* USER */}
                            <div
                                className="
                                    mt-auto
                                    flex
                                    items-center
                                    gap-3
                                    border-t
                                    border-[#E5E7EB]
                                    pt-5
                                    dark:border-white/10
                                "
                            >
                                <div
                                    className="
                                        h-16
                                        w-16
                                        shrink-0
                                        rounded-full
                                        bg-slate-200
                                        bg-cover
                                        bg-center
                                        dark:bg-slate-700
                                    "
                                    style={{
                                        backgroundImage: `url(${r.img})`,
                                    }}
                                />

                                <div className="leading-tight">
                                    <b
                                        className="
                                            block
                                            text-[16px]
                                            font-[700]
                                            text-[#03111C]
                                            dark:text-white
                                        "
                                    >
                                        {r.n}
                                    </b>

                                    <small
                                        className="
                                            text-[12px]
                                            font-semibold
                                            uppercase
                                            tracking-wide
                                            text-[#FF6B18]
                                        "
                                    >
                                        {r.r}
                                    </small>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div
                    className="
                        mx-auto
                        mt-9
                        flex
                        w-full
                        max-w-[1216px]
                        flex-col
                        gap-6
                        rounded-[20px]
                        bg-navy
                        px-7
                        py-8
                        text-white
                        sm:px-10
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                    "
                >
                    <div>
                        <p
                            className="
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[.1em]
                                text-[#FF6B18]
                            "
                        >
                            Accelerate your energy independence
                        </p>

                        <h3
                            className="
                                mt-2
                                text-[24px]
                                font-[700]
                                leading-tight
                                text-white
                                lg:text-[36px]
                            "
                        >
                            Ready to Make the Switch to Solar?
                        </h3>

                        <p
                            className="
                                mt-2
                                max-w-[533.54px]
                                text-[15px]
                                font-[400]
                                leading-relaxed
                                text-[#D9E3F1]
                            "
                        >
                            Connect with our lead photovoltaic engineers
                            for a personalized 3D rooftop simulation,
                            tariff payback model, and zero-obligation
                            site visit.
                        </p>
                    </div>

                    <div className="flex shrink-0 flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="
                                rounded-xl
                                bg-[#FF6B18]
                                px-6
                                py-3.5
                                text-[14px]
                                font-semibold
                                text-white
                                transition
                                hover:brightness-110
                            "
                        >
                            Schedule Free Consultation
                        </a>

                        <a
                            href="#"
                            className="
                                rounded-xl
                                bg-white/10
                                px-6
                                py-3.5
                                text-[14px]
                                font-semibold
                                text-white
                                transition
                                hover:bg-white/20
                            "
                        >
                            Download Solar Guide
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}