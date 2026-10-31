
import { asset } from "@/lib/asset";
import { Container, Icon } from "./ui";

export default function AboutFounder() {
    return (
        <section
            className="
                bg-gradient-to-br
                from-[#020617]
                via-[#06243D]
                to-[#072A45]
                py-7
                text-white
                sm:py-9
                lg:py-12
            "
        >
            <Container className="px-5 lg:px-0">
                <div
                    className="
                        mx-auto grid w-full max-w-[1216px]
                        items-center gap-5
                        sm:gap-8
                        lg:grid-cols-[1.3fr_0.7fr]
                        lg:gap-[35px]
                    "
                >
                    {/* Founder Content */}
                    <div className="w-full">
                        <span
                            className="
                                inline-block rounded-full
                                bg-white
                                px-3.5 py-[6px]
                                text-[9px] font-extrabold
                                uppercase tracking-[.06em]
                                text-[#0b1f3a]
                                sm:px-4 sm:py-[7px]
                                sm:text-[11px]
                            "
                        >
                            About the Founder
                        </span>

                        <h2
                            className="
                                mt-3
                                text-[27px] font-bold leading-[1.08]
                                text-white
                                sm:mt-4
                                sm:text-[36px]
                                lg:text-[54px]
                            "
                        >
                            <span className="block">
                                Man behind the vision -
                            </span>

                            <span className="block text-[#FF6B18]">
                                Ashok Kumar
                            </span>
                        </h2>

                        <div
                            className="
                                mt-3 max-w-[680px]
                                text-[12px] font-normal
                                leading-[1.55]
                                text-white/75
                                sm:mt-4
                                sm:text-[14px]
                                sm:leading-[1.65]
                                lg:text-[17px]
                                lg:leading-[1.65]
                            "
                        >
                            <p>
                                Mr. Ashok Kumar is a visionary leader with 30+ years of experience in renewable energy and sustainable infrastructure. Holding a B.Tech in Electrical Engineering from NIT Warangal and an MBA in Information Technology from JMI, New Delhi, he began his career as an Assistant Commandant in the Indian Coast Guard, developing expertise in operational management and leadership of large scale initiatives.
                            </p>

                            <p className="mt-3">
                                As Chief Engineer at Prasar Bharati under the Ministry of Information and Broadcasting, Mr Kumar oversaw civil, electrical, and mechanical services across India's premier public broadcaster. He spearheaded energy efficiency initiatives and sustainable architecture optimization across broadcasting studios and transmission networks.
                            </p>

                            <p className="mt-3">
                                His technical expertise has been sought by leading institutions including Corporation Bank, Punjab National Bank, NIT Surat, and FTII (Film and Television Institute of India), where he pioneered India's first patented movable projection screen technology. Throughout his career, he has consistently integrated cutting edge technology with sustainable practices.
                            </p>

                            <p className="mt-3">
                                Mr Kumar's diverse experience from maritime operations to institutional infrastructure management culminated in establishing a dedicated platform for renewable solar and sustainable energy solutions. As Founder and Chief Visionary Officer, he now drives India's renewable energy transition, addressing the nation's critical need for scalable, efficient, and environmentally responsible energy infrastructure across institutions and industries.
                            </p>
                        </div>

                        {/* Founder Designation */}
                        <div
                            className="
                                mt-4 flex items-center gap-3
                                border-t border-white/15
                                pt-3
                                sm:mt-5 sm:pt-4
                            "
                        >
                            <div
                                className="
                                    grid h-9 w-9 shrink-0
                                    place-items-center rounded-full
                                    bg-[#FF6B18]/15
                                    text-[#FF6B18]
                                    sm:h-10 sm:w-10
                                "
                            >
                                <Icon
                                    d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5zM9 12l2 2 4-4"
                                    size={17}
                                />
                            </div>

                            <div className="leading-tight">
                                <p className="text-[15px] font-bold text-white sm:text-[17px]">
                                    Ashok Kumar
                                </p>

                                <p className="mt-0.5 text-[11px] text-white/60 sm:mt-1 sm:text-[14px]">
                                    Founder &amp; Chief Visionary Officer
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Founder Image - Unchanged */}
                    <div
                        className="
                            relative ml-auto
                            w-full max-w-[420px]
                            px-5 pb-5
                            sm:max-w-[440px]
                            lg:-translate-x-2
                        "
                    >
                        <div
                            className="
                                absolute inset-2
                                rounded-[18px]
                                bg-[#123c5c]/70
                                blur-[18px]
                            "
                        />

                        <span
                            className="
                                absolute left-0 top-5 bottom-12
                                z-0 w-[19px]
                                rounded-[5px]
                                bg-accent
                            "
                        />

                        <span
                            className="
                                absolute bottom-0
                                left-[50px] right-12
                                z-0 h-[19px]
                                rounded-[5px]
                                bg-accent
                            "
                        />

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
                                src={asset("/founder.jpeg")}
                                alt="Mr. Ashok Kumar, Founder of TruSun Enterprises"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
