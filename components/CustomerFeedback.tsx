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
        <section className="bg-[#F8FAFC] py-7 font-sans dark:bg-[#09111f] sm:py-12 lg:py-14">
            <Container className="px-5 lg:px-0">
                <div className="mx-auto w-full max-w-[1216px] text-center">

                    <div className="flex items-center justify-center gap-2">
                        <span className="h-px w-8 bg-[#FF6B18]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B18]" />
                        <span className="h-px w-8 bg-[#FF6B18]" />
                    </div>

                    <Eyebrow className="mt-2 text-[13px] font-[600] text-[#03111D] dark:text-white sm:mt-4 sm:text-[16px]">
                        Our Testimonials
                    </Eyebrow>

                    <h2
                        className="
              mt-1
              text-[26px]
              font-[800]
              leading-[1.1]
              text-[#03111D]
              dark:text-white
              sm:text-[30px]
              lg:text-[48px]
            "
                    >
                        Customer Feedback
                    </h2>
                </div>

                <div
                    className="
            mx-auto
            mt-6
            grid
            w-full
            max-w-[1216px]
            grid-cols-1
            gap-4
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
                h-auto
                w-full
                flex-col
                rounded-[16px]
                bg-white
                p-4
                shadow-lg
                shadow-slate-900/5
                sm:h-[379px]
                sm:p-[28px]
                lg:w-[378.66px]
                dark:border
                dark:border-white/10
                dark:bg-[#111b2e]
                dark:shadow-black/20
              "
                        >
                            <Icon
                                d="M7 7h5v5a4 4 0 01-4 4H7v-3h1a1 1 0 001-1V9H7zM15 7h5v5a4 4 0 01-4 4h-1v-3h1a1 1 0 001-1V9h-2z"
                                size={20}
                                className="shrink-0 text-[#03111D] dark:text-white/80"
                            />

                            <div className="mt-2 flex gap-0.5 text-[#FF6B18] sm:mt-3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Icon
                                        key={i}
                                        d="M12 2l3 7h7l-5.6 4.2L18.4 21 12 16.8 5.6 21l2-7.8L2 9h7z"
                                        size={14}
                                        className="sm:h-4 sm:w-4"
                                    />
                                ))}
                            </div>

                            <p
                                className="
                  mt-3
                  text-[14px]
                  font-[400]
                  leading-[1.5]
                  text-[#475569]
                  sm:mt-4
                  sm:text-[16px]
                  sm:leading-[1.7]
                  dark:text-slate-300
                "
                            >
                                "{r.q}"
                            </p>

                            <div
                                className="
                  mt-4
                  flex
                  items-center
                  gap-2.5
                  border-t
                  border-[#E5E7EB]
                  pt-3
                  sm:mt-auto
                  sm:gap-3
                  sm:pt-5
                  dark:border-white/10
                "
                            >
                                <div
                                    className="
                    h-12
                    w-12
                    shrink-0
                    rounded-full
                    bg-slate-200
                    bg-cover
                    bg-center
                    dark:bg-slate-700
                    sm:h-16
                    sm:w-16
                  "
                                    style={{
                                        backgroundImage: `url(${r.img})`,
                                    }}
                                />

                                <div className="min-w-0 leading-tight">
                                    <b
                                        className="
                      block
                      text-[14px]
                      font-[700]
                      text-[#03111C]
                      sm:text-[16px]
                      dark:text-white
                    "
                                    >
                                        {r.n}
                                    </b>

                                    <small
                                        className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wide
                      text-[#FF6B18]
                      sm:text-[12px]
                    "
                                    >
                                        {r.r}
                                    </small>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div
                    className="
            mx-auto
            mt-6
            flex
            w-full
            max-w-[1216px]
            flex-col
            gap-5
            rounded-[20px]
            bg-navy
            px-5
            py-6
            text-white
            sm:mt-9
            sm:gap-6
            sm:px-10
            sm:py-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
                >
                    <div>
                        <p
                            className="
                text-[9px]
                font-bold
                uppercase
                tracking-[.1em]
                text-[#FF6B18]
                sm:text-[11px]
              "
                        >
                            Accelerate your energy independence
                        </p>

                        <h3
                            className="
                mt-1.5
                text-[21px]
                font-[700]
                leading-tight
                text-white
                sm:mt-2
                sm:text-[24px]
                lg:text-[36px]
              "
                        >
                            Ready to Make the Switch to Solar?
                        </h3>

                        <p
                            className="
                mt-2
                max-w-[533.54px]
                text-[12px]
                font-[400]
                leading-relaxed
                text-[#D9E3F1]
                sm:text-[15px]
              "
                        >
                            Connect with our lead photovoltaic engineers for a personalized
                            3D rooftop simulation, tariff payback model, and zero-obligation
                            site visit.
                        </p>
                    </div>

                    <div className="flex w-full shrink-0 flex-row gap-2 sm:w-auto sm:gap-3">
                        <a
                            href="#contact"
                            className="
                inline-flex
                min-w-0
                flex-1
                items-center
                justify-center
                rounded-xl
                bg-[#FF6B18]
                px-3
                py-3
                text-center
                text-[10px]
                font-semibold
                text-white
                transition
                hover:brightness-110
                sm:flex-none
                sm:px-6
                sm:py-3.5
                sm:text-[14px]
              "
                        >
                            Schedule Free Consultation
                        </a>

                        <a
                            href="#"
                            className="
                inline-flex
                min-w-0
                flex-1
                items-center
                justify-center
                rounded-xl
                bg-white/10
                px-3
                py-3
                text-center
                text-[10px]
                font-semibold
                text-white
                transition
                hover:bg-white/20
                sm:flex-none
                sm:px-6
                sm:py-3.5
                sm:text-[14px]
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