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
          <p className="lede">
            Where is the next $X million of EBITDA hiding - in the portfolio company you own, or the one you're about to buy? A one-month diagnostic with an attack plan
            that accelerates the exit - then a kick-start to hidden value extraction.
          </p>
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
              <div className="lbl">Dimensions - revenue to org to AI</div>
            </div>
            <div className="stat">
              <div className="num">$150K</div>
              <div className="lbl">Min scope</div>
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
              <p className="lead">Three realities to act on - the exit window doesn't wait, but the value is already inside the asset, owned or prospective.</p>
            </div>
          </ScrollReveal>
          <div className="trigger-grid three">
            <div className="trigger">
              <div className="tn">16,000</div>
              <h4>The exit backlog is real</h4>
              <p>Companies in the exit backlog. Hold periods are at a historic high of 6.6 years, up from 6.1 on average over 2011-20.</p>
              <div className="src">Sources: McKinsey GPMR 2026 - Beating the Odds</div>
            </div>
            <div className="trigger">
              <div className="tn">19%</div>
              <h4>The plateau hides the next thesis</h4>
              <p><b>19%</b> is the early-exit rate today, collapsed from <b>30%</b> before. Meanwhile continuation vehicles tripled - from ~$38B in 2020 to $115B in 2025 - as LPs demand cash.</p>
              <div className="src">Sources: Dechert - CAIA - Syndikos</div>
            </div>
            <div className="trigger">
              <div className="tn">1 month</div>
              <h4>The value is already there</h4>
              <p>1 month is all it takes for Value Targeting to surface where the next EBITDA is hiding - durable revenue, pricing leverage, and AI value-levers the original thesis missed, or that a new thesis can be built on.</p>
              <div className="src">Sources: AI Amplifier</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <div className="callout">
            <div className="ck">Lead: Two doors. One diagnostic.</div>
            <div className="split cols-3" style={{ marginTop: '24px' }}>
              <div className="cell deep">
                <div className="ck">Door A: Founder / Scale-up CEO</div>
                <p>Founder or post-Series-C CEO of a company over $30M. The plateau is real. The board's patience is finite.</p>
              </div>
              <div className="cell deep">
                <div className="ck">Door B: PE Operating Partner</div>
                <p>An OP managing a portfolio company over $20M revenue, 18-36 months from intended exit. The original thesis needs re-underwriting.</p>
              </div>
              <div className="cell deep">
                <div className="ck">Door C: PE Deal Team</div>
                <p>Partner, Principal, or VP underwriting a target - looking for the AI value-creation thesis that justifies the bid and accelerates the eventual exit.</p>
              </div>
            </div>
            <p style={{ marginTop: '22px' }}>Not for pre-PMF or turnaround assets, pure financial restructuring plays, or CEO-replacement situations.</p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Engagement triggers</span>
            <p className="lead">Why this is the right diagnostic now.</p>
          </div>
          <div className="split cols-5" style={{ alignItems: 'stretch' }}>
            <div className="cell deep" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="ck">01 | 3-4 yrs in the hold</div>
              <p style={{ flexGrow: 1 }}>Re-underwriting cadence for active portfolio assets.</p>
            </div>
            <div className="cell deep" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="ck">02 | 18-24 mo before exit</div>
              <p style={{ flexGrow: 1 }}>Exit-readiness - close the gap to the deal-model thesis.</p>
            </div>
            <div className="cell deep" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="ck">03 | The plan signed off, not delivering</div>
              <p style={{ flexGrow: 1 }}>Budget is being missed quarter over quarter. The original Value Creation Plan needs a reset, not a relaunch.</p>
            </div>
            <div className="cell deep" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="ck">04 | The next buyer will diagnose this before you do</div>
              <p style={{ flexGrow: 1 }}>An AI-fluent acquirer will spot the value levers you haven't pulled and re-price the asset accordingly. Find them first.</p>
            </div>
            <div className="cell deep" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="ck">05 | Live bid with an AI thesis</div>
              <p style={{ flexGrow: 1 }}>Diligence window on a target where AI-amplifiable value is the bid case. The thesis needs validation before close.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Six dimensions diagnosed</span>
            <p className="lead">From customer truth to a Value Creation Plan v1.</p>
          </div>
          <div className="split cols-3">
            <div className="cell deep"><div className="ck">1. Customer truth & NRR</div></div>
            <div className="cell deep"><div className="ck">2. Pricing & packaging leverage</div></div>
            <div className="cell deep"><div className="ck">3. GTM productivity</div></div>
            <div className="cell deep"><div className="ck">4. AI value-lever map</div></div>
            <div className="cell deep"><div className="ck">5. Org maturity & bandwidth</div></div>
            <div className="cell deep"><div className="ck">6. Value Creation Plan v1</div></div>
          </div>
          <div className="callout" style={{ marginTop: '32px' }}>
            <div className="ck">The Foundation</div>
            <p>Truth: 12-20 interviews. Durable revenue located. Price: pricing opportunity sized. List-vs-realized gap closed on paper.</p>
          </div>
          <div className="callout" style={{ marginTop: '22px' }}>
            <div className="ck">Walk out with</div>
            <p>Value Creation Plan v1: 3-5 prioritized levers, customer-truth grounded. Exit-ready narrative. Clear next step: Stage 2 with DotKonnekt.</p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="callout">
            <div className="ck">Value Creation Final Callout</div>
            <p>
              Where is the next <b>$X million of EBITDA</b> hiding - owned, or about to be bought? A one-month diagnostic delivers the exit-acceleration attack plan - then
              kick-starts AI-led value extraction.
            </p>
            <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/contact" className="btn btn-gold">Discuss your value play →</Link>
              <Link to="/agentic-operating-model" className="btn btn-ghost">Then: Stage 2 execution</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
