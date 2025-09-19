import React from "react";

/**
 * Set this to the folder under /public where your files actually live.
 * - Right now your VS Code shows: public/files/drive-download-20250919T024235Z-1-001/
 * - So we use: /files/drive-download-20250919T024235Z-1-001/
 * If you later move files up to public/files, change this to "/files/".
 */
const BASE_DIR = "/files/drive-download-20250919T024235Z-1-001/";

// Helper to safely build a URL with spaces/(1) etc.
const fileUrl = (name) => encodeURI(`${BASE_DIR}${name}`);

const nav = [
  { label: "About", href: "#about" },
  { label: "Valuation Models", href: "#valuation" },
  { label: "Derivatives & Trading", href: "#derivatives" },
  { label: "Portfolio Strategy", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

// ---------------------------- DATA ------------------------------------
// Valuation projects
const valuation = [
  {
    title: "Breville Equity Research Report – ACF5130",
    summary:
      "Comprehensive equity analysis of Breville Group (ASX: BRG), earnings quality, DuPont analysis, five-year forecasts and multiple valuation approaches.",
    links: [
      { label: "Full Report (PDF)", href: fileUrl("ACF 5130 Individual report (1).pdf") },
    ],
    tags: ["Equity Research", "Valuation"],
  },
  {
    title: "Applied Investment Group Report – BFF5220",
    summary:
      "Group assignment covering equity research and portfolio implications.",
    links: [
      { label: "Report (DOCX)", href: fileUrl("BFF5220 - Group 10 Assignment  (1).docx") },
    ],
    tags: ["Research", "Portfolio"],
  },
  {
    title: "A2 Milk – Capital Structure & NPV",
    summary:
      "A2 Milk tutorial project: capital structure, WACC and parity-consistent discounting.",
    links: [
      { label: "Report (DOCX)", href: fileUrl("BFF5956 S12025 – Report – A2 - Tutorial 01 (2).docx") },
      { label: "Model (XLSX)", href: fileUrl("BFF5956 S12025 – Excel – A2 – Tutorial 01 (1).xlsx") },
    ],
    tags: ["DCF", "WACC", "FX Hedging"],
  },
  {
    title: "Earnings Quality – BRG",
    summary:
      "Earnings quality analysis for Breville Group with supporting schedules.",
    links: [
      { label: "Report (XLSX)", href: fileUrl("BRG Earnings Quality.xlsx") },
    ],
    tags: ["Quality", "Forensics"],
  },
];

// Derivatives & trading
const derivatives = [
  {
    title: "Rotman Portfolio Manager – Options Trading Simulation",
    summary:
      "Managed a US$1M simulated options portfolio using five strategies (calendar, theta, vega, gamma, mono-directional). Generated ~4.5% in under a month using Greeks for hedging and risk management.",
    links: [],
    tags: ["Options", "Greeks", "Risk"],
  },
  {
    title: "ACF Individual Assignment – Excel Model",
    summary:
      "Valuation model and analysis workbook.",
    links: [
      { label: "Model (XLSX)", href: fileUrl("ACF Individual assignement Srav.xlsx") },
    ],
    tags: ["Excel", "Valuation"],
  },
];

// Portfolio strategy / advisory
const portfolio = [
  {
    title: "MA Major Assignment – Report",
    summary:
      "Comprehensive major project submission with valuation & strategic recommendations.",
    links: [
      { label: "Full Report (PDF)", href: fileUrl("MA Major Assignment- Sravanth Saranu-34165665 (1).pdf") },
      { label: "Model (XLSX)", href: fileUrl("MA Major Assignment- Sravanth Saranu-34165665.xlsx") },
    ],
    tags: ["Strategy", "Valuation", "Model"],
  },
];

// Social / Contact links
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sravanth-saranu/" },
  { label: "Email", href: "mailto:sravanthsaranu08@gmail.com" },
];

// ---------------------------- UI --------------------------------------
export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight">Sravanth Saranu</a>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:opacity-80">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        {/* About */}
        <section id="about" className="py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                Finance Portfolio
              </h1>
              <p className="mt-4 text-neutral-300 text-base md:text-lg leading-relaxed">
                Master of Advanced Finance graduate (Monash; WAM 75.56). Hands-on work across valuation,
                derivatives, and portfolio strategy. Built from real projects and models used in class and independent work.
              </p>
              <p className="mt-4 text-neutral-300">
                Originally inspired by the power of compounding and investing during the COVID-19 pandemic,
                I began investing at 18 with earnings from my time as a professional gamer. What began with IPOs soon
                expanded into equity research and corporate finance, and by my final year I had outperformed academically
                while connecting theory to real-world investing - a journey that led me to pursue advanced finance in Australia
                and commit myself fully to a future in finance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-2xl border border-neutral-700 hover:border-neutral-500 text-sm"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 shadow-xl p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-neutral-400">Quick Stats</p>
                  <h3 className="mt-1 text-2xl font-semibold">At a Glance</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[
                    { k: "Valuation Models", v: "DCF, Comps, M&A" },
                    { k: "Derivatives", v: "Greeks, Options, Hedging" },
                    { k: "Data/Tools", v: "Excel, R, Bloomberg (basic)" },
                    { k: "Focus", v: "Finance Roles" },
                  ].map((it) => (
                    <div key={it.k} className="rounded-xl border border-neutral-800 p-3">
                      <div className="text-xs text-neutral-400">{it.k}</div>
                      <div className="text-sm mt-1">{it.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections */}
        <Section id="valuation" title="Valuation Models (DCF, Comps, M&A)" items={valuation} />
        <Section id="derivatives" title="Derivatives & Trading Simulations" items={derivatives} />
        <Section id="portfolio" title="Portfolio Strategy Reports" items={portfolio} />

        {/* Contact */}
        <section id="contact" className="py-16 border-t border-neutral-800 mt-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-neutral-300">
            Let’s connect. I welcome opportunities across finance where strong analytical and valuation skills create impact.
            For collaborations, references, or access to models, reach out directly:
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-2xl border border-neutral-700 hover:border-neutral-500 text-sm"
              >
                {s.label}
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-sm text-neutral-500">
          <div className="flex items-center justify-between">
            <p>© {new Date().getFullYear()} Sravanth Saranu</p>
            <a href="#" className="hover:opacity-80">Back to top ↑</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Section({ id, title, items }) {
  return (
    <section id={id} className="py-12 border-t border-neutral-800">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {items.map((p) => (
          <Card key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

function Card({ title, summary, links, tags }) {
  return (
    <div className="rounded-2xl border border-neutral-800 p-5 hover:border-neutral-600 transition-shadow shadow-xl/10 bg-neutral-900/30">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-neutral-300 text-sm leading-relaxed">{summary}</p>
      {Array.isArray(tags) && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full border border-neutral-700 text-neutral-300">
              {t}
            </span>
          ))}
        </div>
      )}
      {Array.isArray(links) && links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
