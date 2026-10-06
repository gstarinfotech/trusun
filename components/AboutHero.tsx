export default function AboutHero() {
    return (
        <section className="py-6 font-sans sm:py-9 lg:py-12">
            <div className="mx-auto w-full max-w-[1216px] px-5 sm:px-8 lg:px-0">

                <p className="text-[9px] font-bold uppercase tracking-[.08em] text-[#FF6B18] sm:text-[12px]">
                    Turning sunlight into smarter energy.
                </p>

                <div className="relative mt-1.5 sm:mt-3 lg:min-h-[145px]">

                    <h1 className="max-w-[850px] text-[25px] font-[700] leading-[1.1] tracking-[-0.4px] text-ink sm:text-[34px] lg:text-[46px] lg:tracking-[-0.8px]">
                        Our purpose and values:{" "}
                        <span className="text-[#FF6B18]">
                            Powering a cleaner future with smarter solar energy every day
                        </span>
                    </h1>

                    <p className="mt-3 max-w-[600px] text-[11px] font-[500] uppercase leading-[1.6] tracking-[.025em] text-mute sm:mt-5 sm:text-[15px] sm:leading-[1.8] lg:absolute lg:left-[49.9%] lg:bottom-[-62px] lg:mt-0 lg:text-[17px] lg:leading-[1.9] lg:tracking-[.039em]">
                        We deliver smart solar solutions with expert guidance and reliable
                        support, helping homes and businesses switch to cleaner, more
                        efficient energy.
                    </p>
                </div>

                <div className="mt-2 overflow-hidden bg-slate-200 dark:bg-slate-700 sm:mt-9 lg:mt-[104px]">
                    <img
                        src="/about-hero.png"
                        alt="Modern solar-powered home at sunset"
                        className="aspect-[1259/677] w-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
}