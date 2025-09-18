export default function Portfolio() {
  const nav = [
    { label: "About", href: "#about" },
    { label: "Valuation Models", href: "#valuation" },
    { label: "Derivatives & Trading", href: "#derivatives" },
    { label: "Portfolio Strategy", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  // ---------------------------- PROJECT DATA ----------------------------
  const valuation = [
    {
      title: "Breville Equity Research Report – ACF5130",
      summary:
        "Comprehensive equity analysis of Breville Group (ASX: BRG), covering 20 years of earnings quality, DuPont financial analysis, five-year forecasts, WACC (10.24%), and multiple valuation approaches (FCFF, DDM, and Relative). Valued equity at ~$4.0B (~$28/share) vs. market price $32, leading to a Sell recommendation.",
      links: [
        { label: "Full Report (PDF)", href: "/files/Instructions-Individual-Project-2024.pdf" },
        { label: "Model (XLSX)", href: "/files/ACF-Individual-Assignment-Model.xlsx" },
        { label: "Earnings Quality Model (XLSX)", href: "/files/BRG-Earnings-Quality.xlsx" },
      ],
      tags: ["Equity Research", "Valuation", "WACC", "FCFF", "DDM"],
    },
    {
      title: "M&A Valuation Report – Seven Group Holdings & Viva Energy",
      summary:
        "Analysed Seven Group Holdings’ potential acquisition of Viva Energy: standalone DCF (negative equity value due to leverage), relative valuation (EV/EBITDA & EV/EBIT), and synergy valuation (20% operating income uplift). Found synergy-driven EV of ~$9.7B and implied share price $4.45 vs. $3.38, recommending a 20–30% control premium via a cash/equity mix.",
      links: [
        { label: "Report (PDF)", href: "/files/MA-Major-Assignment-Sravanth-Saranu.pdf" },
        { label: "Model (XLSX)", href: "/files/MA-Major-Assignment-Model.xlsx" },
      ],
      tags: ["M&A", "DCF", "Relative Valuation", "Synergies", "Deal Structure"],
    },
    {
      title: "A2 Milk – Capital Structure & NPV",
      summary:
        "Analysed A2 Milk’s capital structure, WACC, and FX risk; modelled forward/option hedges; valued Japan expansion at ~AUD $25m NPV using parity-consistent discounting.",
      links: [
        { label: "Report (DOCX)", href: "/files/BFF5956-A2-Report.docx" },
        { label: "Model (XLSX)", href: "/files/BFF5956-A2-Model.xlsx" },
      ],
      tags: ["DCF", "WACC", "FX Hedging"],
    },
  ];

  const derivatives = [
    {
      title: "Rotman Portfolio Manager – Options Trading Simulation",
      summary:
        "Managed a US$1M simulated options portfolio across five strategies (calendar, theta, vega, gamma, mono-directional). Generated a 4.5% return in under a month using Greeks for hedging and risk control.",
      links: [], // no files
      tags: ["Options", "Greeks", "Risk Management", "Trading"],
    },
  ];

  const portfolio = [
    {
      title: "Financial Advisory Report – Investment Strategy (BFF5270)",
      summary:
        "Advised an experienced property developer: shift SAA from 50/50 to 70/30 growth/defensive, reallocate gold to international equities, continue passive funds; assessed ethics/legality around insider information and advised against; no TAA needed given horizon.",
      links: [{ label: "Report (PDF)", href: "/files/Case-Study-Report.pdf" }],
      tags: ["Financial Advisory", "Asset Allocation", "Passive Funds", "Ethics"],
    },
    {
      title: "Applied Investment Group Project – BFF5220",
      summary:
        "Studied size & momentum effects using CAPM and Fama-French 3/5/6. Backtested long-short portfolios on 150 stocks over four weeks (−5.9%); concluded factor payoffs are time-varying and market-sensitive.",
      links: [{ label: "Report (DOC)", href: "/files/Applied-Investment-Group-Report.doc" }],
      tags: ["Factor Investing", "Backtesting", "Momentum", "Size Effect"],
    },
  ];

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sravanth-saranu/" },
    { label: "Email", href: "mailto:sravanthsaranu08@gmail.com" },
  ];

  // ---------------------------- UI --------------------------------------
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
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Finance Portfolio</h1>
              <p className="mt-4 text-neutral-300 text-base md:text-lg leading-relaxed">
                Master of Advanced Finance graduate (Monash; WAM 75.56). Hands-on work across valuation, derivatives,
                and portfolio strategy. Built from real projects and models used in class and independent work.
              </p>
              <p className="mt-4 text-neutral-300">
                Originally inspired by the power of compounding and investing during the COVID-19 pandemic, I began
                investing at 18 with earnings from my time as a professional gamer. What began with IPOs soon expanded
                into equity research and corporate finance, and by my final year I had outperformed academically while
                connecting theory to real-world investing - a journey that led me to pursue advanced finance in Australia
                and commit myself fully to a future in finance.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="px-4 py-2 rounded-2xl border border-neutral-700 hover:border-neutral-500 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
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
            Let’s connect. I welcome opportunities across finance where strong analytical, valuation, and problem-solving
            skills can create impact. For collaborations, references, or access to models, reach out directly:
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="px-4 py-2 rounded-2xl border border-neutral-700 hover:border-neutral-500 text-sm"
                target="_blank"
                rel="noopener noreferrer"
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
      <div className="flex items-end justify-start">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {items.map((p) => <Card key={p.title} {...p} />)}
      </div>
    </section>
  );
}

function Card({ title, summary, links, tags }) {
  return (
    <div className="rounded-2xl border border-neutral-800 p-5 hover:border-neutral-600 transition-shadow shadow-xl/10">
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
              className="text-sm underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
