export default function ProjectsPage() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-page px-4 py-16">
            <div className="mx-auto w-full max-w-[650px] text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    Our Projects
                </span>

                <h1 className="mt-6 font-serif text-[42px] font-bold leading-tight text-ink sm:text-[58px]">
                    Coming Soon<span className="text-[#FF6B18]">.</span>
                </h1>

                <p className="mx-auto mt-4 max-w-[500px] font-sans text-[15px] leading-7 text-mute sm:text-[17px]">
                    We are preparing our project showcase. Soon, you will be able
                    to explore our solar installations and the impact they create.
                </p>

                <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-[#FF6B18]" />

                <p className="mt-5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">
                    Trusun Enterprises
                </p>
            </div>
        </main>
    );
}