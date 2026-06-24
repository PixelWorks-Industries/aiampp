import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function ValueCreationAudit() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/services">Services</Link>
            <span className="sep">/</span>
            <span>Value Targeting</span>
          </div>
          <h1 className="display">Value Targeting</h1>
          <p className="lede">Where is the next $X million of EBITDA hiding — in the portfolio company you own, or the one you're about to buy? A one-month diagnostic with an attack plan that accelerates the exit — then a kick-start to hidden value extraction.</p>
        </div>
      </section>

      <section className="stats">
        <div className="wrap" style={{ paddingInline: 0 }}>
          <div className="stats-grid">
            <div className="stat" style={{ paddingLeft: 'var(--pad-x)' }}>
              <div className="num">1 month</div>
              <div className="lbl">Diagnostic + exit-acceleration attack plan</div>
            </div>
            <div className="stat">
              <div className="num">6</div>
              <div className="lbl">Dimensions — revenue to org to AI</div>
            </div>
            <div className="stat">
              <div className="num">$150K</div>
              <div className="lbl">Min scope · 4 seats / quarter</div>
            </div>
            <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
              <div className="num">18 mo</div>
              <div className="lbl">EBITDA lever horizon</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Where the next value lives</span>
              <p className="lead">Three realities to act on <b>the exit window doesn't wait, but the value is already inside the asset, owned or prospective.</b></p>
            </div>
          </ScrollReveal>
          <div className="trigger-grid three">
            <div className="trigger">
              <div className="tn">52%</div>
              <h4>The exit backlog is real</h4>
              <p>of buyout inventory has been held more than four years — 16,000 companies in the exit backlog. Hold periods are at a historic high of 6.6 years, up from 6.1 on average over 2011–20.</p>
              <div className="src">Sources: McKinsey GPMR 2026 · Beating the Odds</div>
            </div>
            <div className="trigger">
              <div className="tn">19%</div>
              <h4>The plateau hides the next thesis</h4>
              <p>early-exit rate today, collapsed from 30% before. Meanwhile continuation vehicles tripled — from ~$38B in 2020 to $115B in 2025 — as LPs demand cash. The plateau is also where the AI value-levers are most underpriced.</p>
              <div className="src">Sources: Dechert · CAIA · Syndikos</div>
            </div>
            <div className="trigger">
              <div className="tn">1 month</div>
              <h4>The value is already there</h4>
              <p>1 month is all it takes for Value Targeting to surface where the next EBITDA is hiding — durable revenue, pricing leverage, and AI value-levers the original thesis missed, or that a new thesis can be built on.</p>
              <div className="src">Sources: AI Amplifier</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
