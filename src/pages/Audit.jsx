import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function Audit() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/services">Services</Link>
            <span className="sep">/</span>
            <span>The AI Amplifier Briefing</span>
          </div>
          <h1 className="display">The AI Amplifier Briefing</h1>
          <p className="lede"><b>Independent. Market-ready. One month.</b> One decision answered with the rigor of a top-tier strategy house — lead the next cycle, or play catch-up in it.</p>
        </div>
      </section>

      <section className="stats">
        <div className="wrap" style={{ paddingInline: 0 }}>
          <div className="stats-grid">
            <div className="stat" style={{ paddingLeft: 'var(--pad-x)' }}>
              <div className="num">1 month</div>
              <div className="lbl">Fixed timeline</div>
            </div>
            <div className="stat">
              <div className="num">$95K</div>
              <div className="lbl">Fixed-fee · by application</div>
            </div>
            <div className="stat">
              <div className="num">4 / qtr</div>
              <div className="lbl">Seats - capped by design</div>
            </div>
            <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
              <div className="num">3 outputs</div>
              <div className="lbl">SLT · Attack plan · 30-day plan</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Why the window is open — for now</span>
              <p className="lead">Three realities to act on <b>before the operators who move first take the position.</b></p>
            </div>
          </ScrollReveal>
          <div className="trigger-grid three">
            <div className="trigger">
              <div className="tn">~145k</div>
              <h4>The advantage is consolidating</h4>
              <p>tech jobs cut in 2026 so far — about 979 a day. Oracle 30,000 in Q1. Amazon 16,000+. Meta 8,000. Roughly 25% attributed directly to AI and automation. The operating-cost reset is real — and it's available to whoever moves on it first.</p>
              <div className="src">Sources: TrueUp · Crunchbase · KORE1 · NPR</div>
            </div>
            <div className="trigger">
              <div className="tn">$690B</div>
              <h4>The capital is rewiring the economy</h4>
              <p>hyperscaler CapEx in 2026 — about $450B AI-specific, near 1.9% of US GDP, larger than Apollo + the Interstate Highway combined. The infrastructure is being built for you — the question is whether you're using it before your competitors do.</p>
              <div className="src">Sources: Futurum · Introl · CreditSights 2026</div>
            </div>
            <div className="trigger">
              <div className="tn">94%</div>
              <h4>The 12-month window is yours to take</h4>
              <p>of AI deployments see no significant value (McKinsey) — meaning the field is wide open for the 6% who decide with conviction. 47% of CEOs already know their AI pace is too slow. The advantage isn't AI itself — it's how fast you decide and how well you know your customer.</p>
              <div className="src">Sources: McKinsey, AI Amplifier Analysis</div>
            </div>
          </div>
          <ScrollReveal>
            <div className="wait-note">
              <p>Decide with conviction now. Three advantages compound for you. — <b>This is what the Briefing delivers.</b></p>
              <ul>
                <li><b>Channel</b>: lock distribution before AI-native firms reach your customers.</li>
                <li><b>Talent</b>: hire the AI operators who set the next 24 months of velocity.</li>
                <li><b>Pricing power</b>: set the AI cost floor before someone else sets it for you.</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <div className="callout">
            <div className="ck">The Guarantee</div>
            <p>If by <b>Day 10</b> the briefing isn’t sharper than your last consulting engagement, we refund the full fee. No questions.</p>
            <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/contact" className="btn btn-gold">Apply for a seat →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
