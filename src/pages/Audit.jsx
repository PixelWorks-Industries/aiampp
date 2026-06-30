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
          <p className="lede">
            <b>Independent. Market-ready. One month.</b> One decision, answered with operator rigor: lead the next cycle, or play catch-up in it. An attack plan you can
            bet the business on.
          </p>
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
              <div className="lbl">Fixed-fee - by application</div>
            </div>
            <div className="stat">
              <div className="num">Fixed scope</div>
              <div className="lbl">Productized engagement</div>
            </div>
            <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
              <div className="num">3 outputs</div>
              <div className="lbl">SLT - Attack plan - 30-day plan</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Why the window is open - for now</span>
              <p className="lead">Three realities to act on before the operators who move first take the position.</p>
            </div>
          </ScrollReveal>
          <div className="trigger-grid three">
            <div className="trigger">
              <div className="tn">~145k</div>
              <h4>The advantage is consolidating</h4>
              <p>
                Tech jobs cut in 2026 so far - about 979 a day. Oracle 30,000 in Q1. Amazon 16,000+. Meta 8,000. Roughly 25% attributed directly to AI and automation.
                The operating-cost reset is real - and it's available to whoever moves on it first.
              </p>
              <div className="src">Sources: TrueUp - Crunchbase - KORE1 - NPR</div>
            </div>
            <div className="trigger">
              <div className="tn">$690B</div>
              <h4>The capital is rewiring the economy</h4>
              <p>
                Hyperscaler CapEx in 2026 - about $450B AI-specific, near 1.9% of US GDP, larger than Apollo + the Interstate Highway combined. The infrastructure is
                being built for you - the question is whether you're using it before your competitors do.
              </p>
              <div className="src">Sources: Futurum - Introl - CreditSights 2026</div>
            </div>
            <div className="trigger">
              <div className="tn">94%</div>
              <h4>The 12-month window is yours to take</h4>
              <p>
                94% of companies see no significant value from AI (McKinsey) - meaning the field is wide open for the 6% who decide with conviction. 47% of C-suite
                leaders already say their AI pace is too slow. The advantage isn't AI itself - it's how fast you decide, and how well you know your customer to build on
                the right foundation.
              </p>
              <div className="src">Sources: McKinsey, AI Amplifier Analysis</div>
            </div>
          </div>
          <ScrollReveal>
            <div className="wait-note">
              <p>
                Decide with conviction now. Three advantages compound for you. - <b>This is what the Briefing delivers.</b>
              </p>
              <ul>
                <li>
                  <b>Channel</b>: lock distribution before AI-native firms reach your customers.
                </li>
                <li>
                  <b>Talent</b>: hire the AI operators who set the pace of the next cycle.
                </li>
                <li>
                  <b>Pricing power</b>: set the AI cost floor before someone else sets it for you.
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <div className="callout">
            <div className="ck">What the Briefing delivers</div>
            <p>Decide with conviction now. Three advantages compound for you.</p>
            <div className="split cols-3" style={{ marginTop: '24px' }}>
              <div className="cell deep">
                <div className="ck">Channel</div>
                <p>Lock distribution before AI-native firms reach your customers.</p>
              </div>
              <div className="cell deep">
                <div className="ck">Talent</div>
                <p>Hire the AI operators who set the pace of the next cycle.</p>
              </div>
              <div className="cell deep">
                <div className="ck">Pricing power</div>
                <p>Set the AI cost floor before someone else sets it for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Who this is for</span>
            <p className="lead">Built for the CEO making the call.</p>
          </div>
          <div className="split cols-3">
            <div className="cell deep">
              <div className="ck">The CEO | Revenue $100M - $2B</div>
              <p>Privately held, family-owned, or recently public. Ready to lead the next cycle, not be repriced by it. Buyer: CEO only - $50K - $150K decision authority.</p>
            </div>
            <div className="cell deep">
              <div className="ck">What triggers the Briefing</div>
              <p>Board pressure, AI-native competition in your channel, or reinvention capital on the table.</p>
            </div>
            <div className="cell deep">
              <div className="ck">Not for</div>
              <p>CIOs / CTOs - pre-revenue founders - no defensible home position.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Process & Deliverables</span>
            <p className="lead">The 1-month diagnostic.</p>
          </div>
          <div className="split cols-3">
            <div className="cell deep">
              <div className="ck">Wk 1 | Desk Research</div>
              <p>Competitive mapping, friction analysis, and AI-exposure assessment.</p>
            </div>
            <div className="cell deep">
              <div className="ck">Wk 2 | Executive Interviews</div>
              <p>Strategic intent and fear surfaced from CEO, SLT, and board.</p>
            </div>
            <div className="cell deep">
              <div className="ck">Wk 3 | Synthesis</div>
              <p>Three Gears assessment, business-model options, and pressure test.</p>
            </div>
            <div className="cell deep">
              <div className="ck">Wk 4 | Stakeholder Alignment</div>
              <p>Findings aligned with SLT and board ahead of the board-ready recommendation.</p>
            </div>
          </div>
          <div className="callout" style={{ marginTop: '32px' }}>
            <div className="ck">Walk out with</div>
            <p>Market-ready attack plan, SLT-grade summary, 30-day action plan, and a clear next step: a Stage 2 path - or an honest no-go.</p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="callout">
            <div className="ck">The guarantee</div>
            <p>One month to a market-ready attack plan - and a defensible go / no-go. If we can't win for you, we say so before we start.</p>
            <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/contact" className="btn btn-gold">Start the Briefing →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
