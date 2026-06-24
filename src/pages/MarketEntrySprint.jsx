import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function MarketEntrySprint() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/services">Services</Link>
            <span className="sep">/</span>
            <span>North America Market Entry Sprint</span>
          </div>
          <h1 className="display">North America Market Entry Sprint</h1>
          <p className="lede">Bottom-up sizing. Corporate-buyer interviews. A <b>market-defensible go / no-go — a bottom-up entry attack plan</b> in 6–8 weeks. The Sprint produces readiness — not "options to explore."</p>
        </div>
      </section>

      <section className="stats">
        <div className="wrap" style={{ paddingInline: 0 }}>
          <div className="stats-grid">
            <div className="stat" style={{ paddingLeft: 'var(--pad-x)' }}>
              <div className="num">6–8 wks</div>
              <div className="lbl">Fixed sprint window</div>
            </div>
            <div className="stat">
              <div className="num">$95K</div>
              <div className="lbl">Fixed-fee · by application</div>
            </div>
            <div className="stat">
              <div className="num">8–15</div>
              <div className="lbl">Corporate-buyer interviews</div>
            </div>
            <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
              <div className="num">75%</div>
              <div className="lbl">Fail rate without structured entry</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Why the disciplined second entrant wins</span>
              <p className="lead">Three realities to act on <b>if you intend to be the operator the pioneer made room for.</b></p>
            </div>
          </ScrollReveal>
          <div className="trigger-grid three">
            <div className="trigger">
              <div className="tn">75%</div>
              <h4>The base rate is 75%</h4>
              <p>of international expansion attempts fall short. The diligence math is stark: a $95K sprint versus a $1M–$3M+ wrong entry. The 25% who win are not the first to arrive — they are the first to arrive with bottom-up evidence.</p>
              <div className="src">Sources: Wise / Altios 2025</div>
            </div>
            <div className="trigger">
              <div className="tn">47%</div>
              <h4>First-mover advantage is a myth</h4>
              <p>first-mover failure rate, with the pioneers capturing only ~10% share at peak. The advantage accrues to the disciplined second entrant — early followers fail just 8% of the time and reach 28% share, informed by what the pioneer got wrong.</p>
            </div>
            <div className="trigger">
              <div className="tn">2–3×</div>
              <h4>The window is narrow</h4>
              <p>what late entrants pay to catch up. Channel partners, the best talent, and reference customers lock in before late arrivals.</p>
              <div className="src">Sources: AI Amplifier analysis</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
