"use client";
import { Container, Icon, paths } from "./ui";

const sol: [string, string?][] = [["Industrial Solar", "MW"], ["Commercial Solar", "C&I"], ["Turnkey EPC"], ["Rooftop Solar"], ["Solar Water Pumping"], ["Grid Consultancy"]];
const co = ["Home Overview", "About Us", "Why TruSun", "Delivered Assets", "Solar Engineering Guide", "Govt Subsidies"];
const legal = ["Privacy Policy", "Terms of Engineering", "Grid Compliance & SLAs", "Sitemap"];
const social = ["M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18", "M4 4h16v16H4zM8 16v-4M12 16V8M16 16v-2", "M4 4l16 8-16 8 3-8z", "M4 14v-2a8 8 0 0116 0v2M4 14h3v5H4zM17 14h3v5h-3z"];

export default function Footer() {
  return (
    <footer className="bg-[#071a2f] text-white">
      <Container className="pt-14 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_1.3fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img src="/logo.png" alt="" className="h-10 w-auto rounded bg-white p-0.5" />
              <span className="text-xl"><b className="font-semibold">TruSun</b> <span className="font-light text-white/80">Enterprises</span> <i className="text-[#FF6B18]">•</i></span>
            </a>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/60">Engineering institutional-grade solar generation infrastructure, AI string telemetry, and balance-sheet grade clean energy assets engineered for 25+ years.</p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[13px]"><i className="h-2 w-2 rounded-full bg-emerald-400" />120+ MWp Active Telemetry Fleet</span>
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[.1em] text-white/50">Follow our grid updates</p>
            <div className="mt-3 flex gap-3">
              {social.map((d, i) => <a key={i} href="#" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-[#FF6B18]"><Icon d={d} size={15} /></a>)}
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[.12em]">Solutions</h4>
            <ul className="mt-5 space-y-3.5 text-[15px] text-white/70">
              {sol.map(([n, b]) => (
                <li key={n} className="flex items-center justify-between gap-3"><a href="#solutions" className="hover:text-[#FF6B18]">{n}</a>{b && <span className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-semibold">{b}</span>}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[.12em]">Company</h4>
            <ul className="mt-5 space-y-3.5 text-[15px] text-white/70">
              {co.map((n) => <li key={n}><a href="#home" className={n === "About Us" ? "font-semibold text-[#FF6B18]" : "hover:text-[#FF6B18]"}>{n}{n === "About Us" && " •"}</a></li>)}
            </ul>
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between text-[13px]"><b className="uppercase tracking-[.1em]">Project Briefing</b><span className="text-[12px] font-semibold text-[#FF6B18]">• Quarterly Tech</span></div>
              <p className="mt-4 text-[14px] leading-relaxed text-white/60">Subscribe for institutional solar LCOE models, bi-facial technology briefs, and grid parity research.</p>
              <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="corporate.email@domain.com" aria-label="Email" className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white placeholder:text-white/40" />
                <button type="submit" aria-label="Subscribe" className="grid w-12 place-items-center rounded-lg bg-accent"><Icon d={paths.arrow} size={18} /></button>
              </form>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a href="tel:18008787866" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/20 text-[#FF6B18]"><Icon d={paths.phone} size={16} /></span>
                <span className="leading-tight"><small className="block text-[10px] font-semibold uppercase tracking-wide text-white/60">Hotline 24/7</small><b className="text-[14px]">1800-TRUSUN</b></span>
              </a>
              <a href="mailto:pro@trusunenergy.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sky-400/20 text-sky-300"><Icon d={paths.mail} size={16} /></span>
                <span className="min-w-0 leading-tight"><small className="block text-[10px] font-semibold uppercase tracking-wide text-white/60">Institutional Desk</small><b className="break-all text-[14px]">pro@trusunenergy.com</b></span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 py-6 text-[13px] text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} TruSun Enterprises Pvt. Ltd. All rights reserved.</span>
            <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[12px]">ISO 9001:2015 &amp; MNRE Registered EPC</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legal.map((l) => <a key={l} href="#" className="hover:text-white">{l}</a>)}
            <a href="#home" className="border-l border-white/15 pl-6 hover:text-white">Back to Top ↑</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
