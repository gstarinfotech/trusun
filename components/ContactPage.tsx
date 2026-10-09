"use client";

import { useState } from "react";
import { Container, Icon } from "./ui";

const profiles = [
    {
        label: "Residential",
        icon: "M3 10.5L12 3l9 7.5M5 9.5V21h14V9.5M9 21v-7h6v7",
    },
    {
        label: "Commercial C&I",
        icon: "M4 21V4h11v17M15 9h5v12M7 8h2m-2 4h2m-2 4h2m7-3h2m-2 4h2M2 21h20",
    },
    {
        label: "Industrial MW",
        icon: "M3 21h18M5 21V8h14v13M8 8V4h8v4M8 12h2m4 0h2m-8 4h2m4 0h2",
    },
];

const clusters = [
    {
        city: "Bengaluru (Karnataka)",
        area: "Electronic City, Phase II • SCADA Lab",
    },
    {
        city: "Ahmedabad (Gujarat)",
        area: "SG Highway Industrial Corridor",
    },
    {
        city: "Pune & Chakan Belt",
        area: "MIDC Automotive Cluster Office",
    },
];

function LineIcon({ d, size = 16, className = "" }) {
    return <Icon d={d} size={size} className={className} />;
}

export default function Contact() {
    const [profile, setProfile] = useState("Residential");
    const [bill, setBill] = useState("₹10,000 – ₹30,000 / mo");

    return (
        <main className="bg-[#F7F9FC] font-sans text-[#10233E]">
            {/* Hero section */}
            <section className="px-1 pb-5 pt-4 sm:px-8 sm:pb-10 sm:pt-10 lg:px-0 lg:pb-10 lg:pt-12">
                <Container>
                    <div className="mx-auto w-full max-w-[1216px]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#072A45] sm:text-[14px]">
                            Connect with Solar Engineers
                        </p>

                        <div className="relative mt-1.5 lg:min-h-[128px]">
                            <h1 className="max-w-[866px] font-nav text-[27px] font-bold leading-[1.08] tracking-[-0.035em] sm:text-[57px]">
                                Let’s Power Your{" "}
                                <span className="text-[#FF6B18]">
                                    Sustainable Future
                                </span>
                            </h1>

                            <p className="mt-3 max-w-[668px] text-[10px] font-normal uppercase leading-[1.8] tracking-[0.032em] text-mute sm:mt-6 sm:text-[13px] lg:absolute lg:left-[545px] lg:top-[80px] lg:mt-0 lg:text-[18px]">
                                Direct access to institutional solar EPC specialists.
                                Receive an exhaustive preliminary generation model and
                                25-year financial feasibility assessment within 24 hours.
                            </p>
                        </div>

                        {/* Statistics */}
                        <div className="mt-5 grid w-full max-w-[783.52px] grid-cols-1 overflow-hidden rounded-[12px] border border-[#E5EAF1] bg-white px-2.5 py-2.5 shadow-[0_3px_5px_rgba(0,0,0,0.16)] sm:mt-20 sm:grid-cols-3 sm:px-0 sm:py-4">
                            {[
                                {
                                    icon: "M13 2L4 14h7l-1 8 10-13h-7z",
                                    label: "Response Guarantee",
                                    value: "Under 2 Hours",
                                },
                                {
                                    icon: "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11zM9 12l2 2 4-4",
                                    label: "Compliance Tier",
                                    value: "MNRE & ISO 9001",
                                },
                                {
                                    icon: "M3 17l6-6 4 4 8-10M15 5h6v6",
                                    label: "Active Telemetry",
                                    value: "120+ MWp Grid-Tied",
                                },
                            ].map((item, i) => (
                                <div
                                    key={item.label}
                                    className={`flex min-w-0 items-center gap-2 px-1.5 py-1.5 sm:justify-center sm:px-2 sm:py-0 ${i
                                            ? "border-t border-[#DCE5EF] sm:border-l sm:border-t-0"
                                            : ""
                                        }`}
                                >
                                    <LineIcon
                                        d={item.icon}
                                        size={18}
                                        className="shrink-0 text-[#004279]"
                                    />
                                    <div className="min-w-0">
                                        <p className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.05em] text-[#727782] sm:text-[11px]">
                                            {item.label}
                                        </p>
                                        <p className="mt-0.5 whitespace-nowrap text-[12px] font-bold leading-tight text-[#004279] sm:text-[18px]">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Contact form and information */}
            <section className="px-1 pb-6 sm:px-8 sm:pb-10 lg:mt-4 lg:px-0 lg:pb-16">
                <Container>
                    <div className="mx-auto grid w-full max-w-[1216px] items-start gap-4 sm:gap-6 lg:grid-cols-[1.38fr_1fr] lg:gap-[46px]">
                        {/* Form card */}
                        <div className="min-w-0 overflow-hidden rounded-[13px] border border-[#E5EAF1] bg-white shadow-[0_2px_4px_rgba(15,23,42,0.10)]">
                            <div className="h-[4px] bg-gradient-to-r from-[#10233E] via-[#FF6B18] to-[#10233E]" />

                            <div className="p-3 sm:p-7 lg:p-[34px]">
                                <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold tracking-[0.04em] sm:text-[11px]">
                                    <span className="font-bold uppercase text-[#FF6B18]">
                                        Project Desk
                                    </span>
                                    <span className="text-[#64748B]">•</span>
                                    <span className="text-[#64748B]">
                                        Turnaround &lt; 24h
                                    </span>
                                </div>

                                <h2 className="mt-2 font-nav text-[21px] font-bold leading-[1.25] tracking-[-0.03em] text-[#121C26] sm:text-[36px]">
                                    Schedule a Site Feasibility Study &amp; Consultation
                                </h2>

                                <p className="mt-2 max-w-[470px] text-[12px] font-normal leading-[1.6] text-[#414751] sm:text-[13px]">
                                    Our design engineers evaluate roof architecture,
                                    irradiance shadows, and grid interconnection feasibility.
                                </p>

                                <form
                                    className="mt-4 space-y-4 sm:mt-6"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    {/* Name and email */}
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                                        <label className="block min-w-0">
                                            <span className="mb-1.5 block text-[11px] font-semibold text-[#17212C] sm:text-[14px]">
                                                Full Name <span className="text-[#D94822]">*</span>
                                            </span>

                                            <div className="flex h-[40px] min-w-0 items-center gap-2 rounded-[7px] border border-[#A7B4C5] bg-[#EDF4FF] px-3">
                                                <LineIcon
                                                    d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
                                                    size={15}
                                                    className="shrink-0 text-[#64748B]"
                                                />
                                                <input
                                                    name="name"
                                                    required
                                                    placeholder="Dr. Rajesh Mehra"
                                                    className="w-full min-w-0 bg-transparent text-[12px] text-[#17212C] outline-none placeholder:text-[#727782] sm:text-[15px]"
                                                />
                                            </div>
                                        </label>

                                        <label className="block min-w-0">
                                            <span className="mb-1.5 block text-[11px] font-semibold text-[#17212C] sm:text-[14px]">
                                                Work Email / Contact{" "}
                                                <span className="text-[#D94822]">*</span>
                                            </span>

                                            <div className="flex h-[40px] min-w-0 items-center gap-2 rounded-[7px] border border-[#A7B4C5] bg-[#EDF4FF] px-3">
                                                <LineIcon
                                                    d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4zM8 10h8"
                                                    size={15}
                                                    className="shrink-0 text-[#64748B]"
                                                />
                                                <input
                                                    name="contact"
                                                    required
                                                    placeholder="r.mehra@enterprise.in"
                                                    className="w-full min-w-0 bg-transparent text-[12px] text-[#17212C] outline-none placeholder:text-[#727782] sm:text-[15px]"
                                                />
                                            </div>
                                        </label>
                                    </div>

                                    {/* Installation profile */}
                                    <fieldset className="min-w-0">
                                        <legend className="mb-2 text-[11px] font-semibold text-[#17212C] sm:text-[14px]">
                                            Installation Profile / Property Type
                                        </legend>

                                        <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-3">
                                            {profiles.map((item) => (
                                                <button
                                                    key={item.label}
                                                    type="button"
                                                    onClick={() => setProfile(item.label)}
                                                    className={`flex h-[68px] w-full min-w-0 items-center gap-2 rounded-[10px] px-2.5 text-left text-[11px] font-semibold transition sm:text-[14px] ${profile === item.label
                                                            ? "bg-[#102743] text-white"
                                                            : "bg-[#EDF4FF] text-[#17212C] hover:bg-[#E2EDFC]"
                                                        }`}
                                                >
                                                    <LineIcon d={item.icon} size={15} />
                                                    <span className="min-w-0 flex-1">
                                                        {item.label}
                                                    </span>
                                                    {profile === item.label && (
                                                        <LineIcon
                                                            d="M12 22a10 10 0 110-20 10 10 0 010 20zM8 12l3 3 5-6"
                                                            size={13}
                                                        />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </fieldset>

                                    {/* Bill and location */}
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                                        <label className="block min-w-0">
                                            <span className="mb-1.5 block text-[11px] font-semibold text-[#17212C] sm:text-[15px]">
                                                Monthly Electricity Bill
                                            </span>

                                            <select
                                                value={bill}
                                                onChange={(e) => setBill(e.target.value)}
                                                className="h-[43px] w-full min-w-0 rounded-[7px] border border-[#A7B4C5] bg-[#EDF4FF] px-3 text-[12px] text-[#17212C] outline-none sm:text-[15px]"
                                            >
                                                <option>Below ₹10,000 / mo</option>
                                                <option>₹10,000 – ₹30,000 / mo</option>
                                                <option>₹30,000 – ₹1,00,000 / mo</option>
                                                <option>Above ₹1,00,000 / mo</option>
                                            </select>
                                        </label>

                                        <label className="block min-w-0">
                                            <span className="mb-1.5 block text-[11px] font-semibold text-[#17212C] sm:text-[15px]">
                                                City &amp; PIN Code{" "}
                                                <span className="text-[#D94822]">*</span>
                                            </span>

                                            <div className="flex h-[40px] min-w-0 items-center gap-2 rounded-[7px] border border-[#A7B4C5] bg-[#EDF4FF] px-3">
                                                <LineIcon
                                                    d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1116 0zM12 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                                    size={15}
                                                    className="shrink-0 text-[#64748B]"
                                                />
                                                <input
                                                    name="city"
                                                    required
                                                    placeholder="e.g. Pune, 411001"
                                                    className="w-full min-w-0 bg-transparent text-[12px] outline-none placeholder:text-[#7B8491] sm:text-[15px]"
                                                />
                                            </div>
                                        </label>
                                    </div>

                                    {/* Project scope */}
                                    <label className="block min-w-0">
                                        <span className="mb-1.5 block text-[11px] font-semibold text-[#17212C] sm:text-[15px]">
                                            Project Scope / Shadow Constraints (Optional)
                                        </span>

                                        <textarea
                                            name="scope"
                                            rows={3}
                                            placeholder="Provide roof type (RCC slab, metal shed), sanctioned grid load in kVA, or preferred battery storage requirements..."
                                            className="w-full min-w-0 resize-y rounded-[7px] border border-[#A7B4C5] bg-[#EDF4FF] px-3 py-3 text-[12px] leading-[1.6] outline-none placeholder:text-[#7B8491] sm:text-[15px]"
                                        />
                                    </label>

                                    <button
                                        type="submit"
                                        className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[9px] bg-[#FF6B18] px-3 py-3 text-center text-[12px] font-bold text-white transition hover:brightness-110 sm:text-[14px]"
                                    >
                                        Request Solar Feasibility Report
                                        <LineIcon d="M5 12h14M13 6l6 6-6 6" size={16} />
                                    </button>

                                    <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-[9px] font-semibold tracking-[0.025em] text-[#727782] sm:text-[11px]">
                                        <LineIcon
                                            d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11zM9 12l2 2 4-4"
                                            size={12}
                                        />
                                        100% Privacy • No Obligation • Free Institutional Solar ROI
                                        Assessment
                                    </p>
                                </form>
                            </div>
                        </div>

                        {/* Contact information cards */}
                        <aside className="flex min-w-0 flex-col gap-4 sm:gap-5">
                            {/* Engineers on call */}
                            <div className="rounded-[13px] bg-[#102743] p-3 text-white sm:p-6">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.04em] sm:text-[11px]">
                                        <span className="h-2 w-2 rounded-full bg-[#D3E3FF]" />
                                        Engineers on Call
                                    </p>

                                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-[#D3E3FF] sm:text-[11px]">
                                        Response &lt; 2 Hrs
                                    </span>
                                </div>

                                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#A3C9FF] sm:mt-5 sm:text-[11px]">
                                    Toll-Free Enterprise Line
                                </p>

                                <a
                                    href="tel:1800878786"
                                    className="mt-1 flex flex-wrap items-center gap-2 text-[16px] font-bold tracking-[-0.02em] text-white sm:text-[20px]"
                                >
                                    <LineIcon
                                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.8a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.84.58 2.8.7a2 2 0 011.73 2.03z"
                                        size={16}
                                        className="text-[#FFBFA6]"
                                    />
                                    1800-TRUSUN (878786)
                                </a>

                                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                    <a
                                        href="mailto:projects@trusunsolar.com"
                                        className="flex min-w-0 items-start gap-2 rounded-[10px] bg-white/10 p-3 text-[10px] leading-[1.6] text-[#E7EEF8] hover:bg-white/15 sm:text-[11px]"
                                    >
                                        <LineIcon
                                            d="M3 21h18M5 21V7l7-4 7 4v14M9 10h1m4 0h1m-6 4h1m4 0h1M9 21v-4h6v4"
                                            size={15}
                                        />
                                        <span className="min-w-0 break-all">
                                            <b className="block text-[12px] font-semibold sm:text-[13px]">
                                                Project Desk
                                            </b>
                                            projects@trusunsolar.com
                                        </span>
                                    </a>

                                    <a
                                        href="mailto:contact@trusunsolar.com"
                                        className="flex min-w-0 items-start gap-2 rounded-[10px] bg-white/10 p-3 text-[10px] leading-[1.6] text-[#E7EEF8] hover:bg-white/15 sm:text-[11px]"
                                    >
                                        <LineIcon
                                            d="M3 11a9 9 0 0118 0v5a2 2 0 01-2 2h-3v-6h5M3 12h5v6H5a2 2 0 01-2-2z"
                                            size={15}
                                        />
                                        <span className="min-w-0 break-all">
                                            <b className="block text-[12px] font-semibold sm:text-[13px]">
                                                General Desk
                                            </b>
                                            contact@trusunsolar.com
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Headquarters */}
                            <div className="rounded-[13px] border border-[#EDF0F5] bg-white p-3 sm:p-6">
                                <div className="flex items-start gap-3">
                                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#E5F0FF] text-[#075A9F]">
                                        <LineIcon
                                            d="M3 21V3h18v18M7 7h3m4 0h3M7 11h3m4 0h3M7 15h3m4 0h3M10 21v-3h4v3"
                                            size={17}
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h3 className="font-nav text-[15px] font-semibold leading-tight text-[#121C26] sm:text-[20px]">
                                                Corporate Headquarters
                                            </h3>

                                            <span className="rounded-full bg-[#E5F0FF] px-2.5 py-1 text-[10px] font-semibold text-[#075A9F] sm:text-[11px]">
                                                HQ
                                            </span>
                                        </div>

                                        <p className="mt-0.5 text-[10px] font-semibold text-[#727782] sm:text-[11px]">
                                            Central Command &amp; Engineering Center
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-4 text-[12px] leading-[1.65] text-[#414751] sm:text-[15px]">
                                    TruSun Energy Tower, TechPark 4, Bandra Kurla Complex (BKC),
                                    Mumbai, MH 400051, India.
                                </p>

                                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-[8px] bg-[#EDF4FF] px-3 py-3 text-[11px] font-semibold text-[#414751] sm:text-[13px]">
                                    <span className="flex items-center gap-1.5">
                                        <LineIcon
                                            d="M12 8v4l3 2M22 12a10 10 0 11-20 0 10 10 0 0120 0z"
                                            size={13}
                                        />
                                        Operational: Mon – Sat, 08:30 – 19:30 IST
                                    </span>

                                    <span className="text-[10px] font-semibold text-[#445F8B] sm:text-[11px]">
                                        IST Sync
                                    </span>
                                </div>
                            </div>

                            {/* Regional service clusters */}
                            <div className="rounded-[13px] border border-[#EDF0F5] bg-white p-3 sm:p-6">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <h3 className="flex items-center gap-2 font-nav text-[15px] font-semibold text-[#121C26] sm:text-[20px]">
                                        <LineIcon
                                            d="M12 2v4m0 12v4M2 12h4m12 0h4M5 5l3 3m8 8 3 3M19 5l-3 3m-8 8-3 3M12 9a3 3 0 100 6 3 3 0 000-6z"
                                            size={17}
                                            className="text-[#075A9F]"
                                        />
                                        Regional Service Clusters
                                    </h3>

                                    <span className="text-[10px] font-semibold tracking-wide text-[#727782] sm:text-[11px]">
                                        Active Dispatch
                                    </span>
                                </div>

                                <div className="mt-4 space-y-2">
                                    {clusters.map((cluster) => (
                                        <div
                                            key={cluster.city}
                                            className="flex min-w-0 items-center gap-2 rounded-[10px] bg-[#EDF4FF] px-3 py-3"
                                        >
                                            <LineIcon
                                                d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1116 0zM12 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                                size={16}
                                                className="shrink-0 text-[#075A9F]"
                                            />

                                            <div className="min-w-0 flex-1">
                                                <p className="text-[12px] font-semibold text-[#121C26] sm:text-[14px]">
                                                    {cluster.city}
                                                </p>
                                                <p className="mt-0.5 text-[11px] font-normal leading-[1.4] text-[#727782] sm:text-[13px]">
                                                    {cluster.area}
                                                </p>
                                            </div>

                                            <span className="flex shrink-0 items-center gap-1 rounded-full bg-[#E2EBF7] px-2 py-1 text-[10px] font-medium text-[#414751] sm:text-[11px]">
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#D95716]" />
                                                Active
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </section>
        </main>
    );
}