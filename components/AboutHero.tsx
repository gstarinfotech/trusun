export default function AboutHero() {
    return (
        <section className="py-10 font-sans lg:py-12">
            <div className="mx-auto w-full max-w-[1216px] px-5 lg:px-0">

                {/* EYEBROW */}
                <p
                    className="
                        text-[12px]
                        font-bold
                        uppercase
                        tracking-[.08em]
                        text-[#FF6B18]
                    "
                >
                    Turning sunlight into smarter energy.
                </p>

                {/* MAIN CONTENT */}
                <div className="relative mt-3 min-h-[145px]">

                    {/* HEADING */}
                    <h1
                        className="
                            max-w-[850px]
                            text-[38px]
                            font-[700]
                            leading-[1.04]
                            tracking-[-0.8px]
                            text-ink
                            lg:text-[46px]
                        "
                    >
                        Our purpose and values:{" "}
                        <span className="text-[#FF6B18]">
                            Powering a cleaner future with smarter solar
                            energy every day
                        </span>
                    </h1>

                    {/* RIGHT DESCRIPTION */}
                    <p
                        className="
                            mt-6
                            max-w-[600px]
                            text-[17px]
                            font-[500]
                            uppercase
                            leading-[1.9]
                            tracking-[.039em]
                            text-mute
                            lg:absolute
                            lg:left-[49.9%]
                            lg:bottom-[-62px]
                            lg:mt-0
                        "
                    >
                        We deliver smart solar solutions with expert
                        guidance and reliable support, helping homes and
                        businesses switch to cleaner, more efficient energy.
                    </p>
                </div>

                {/* IMAGE */}
                <div
                    className="
                        mt-26
                        overflow-hidden
                        bg-slate-200
                        dark:bg-slate-700
                    "
                >
                    <img
                        src="/about-hero.png"
                        alt="Modern solar-powered home at sunset"
                        className="
                            aspect-[1259/677]
                            w-full
                            object-cover
                        "
                    />
                </div>
            </div>
        </section>
    );
}