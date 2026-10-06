import type { ReactNode } from "react";

export const wrap = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-14";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${wrap} ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[13px] font-semibold uppercase tracking-[.12em] text-[#FF6B18] ${className}`}>{children}</p>;
}

export function Icon({ d, size = 18, className = "" }: { d: string; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d={d} />
    </svg>
  );
}

export const paths = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  check: "M5 13l4 4L19 7",
  chevron: "M6 9l6 6 6-6",
  trend: "M3 17l6-6 4 4 8-8M15 7h6v6",
  bolt: "M13 2L4 14h7l-1 8 9-12h-7z",
  shield: "M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z",
  badge: "M12 2l2.4 2.2 3.2-.3.9 3.1 2.8 1.7-1.2 3 1.2 3-2.8 1.7-.9 3.1-3.2-.3L12 22l-2.4-2.2-3.2.3-.9-3.1-2.8-1.7 1.2-3-1.2-3 2.8-1.7.9-3.1 3.2.3zM8.5 12l2.5 2.5 4.5-5",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  cal: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  mail: "M3 5h18v14H3zM3 7l9 6 9-6",
  info: "M12 8h.01M11 12h1v5h1M12 21a9 9 0 100-18 9 9 0 000 18z",
};
