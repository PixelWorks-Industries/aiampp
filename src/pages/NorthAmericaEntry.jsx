import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function NorthAmericaEntry() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/services">Services</Link>
            <span className="sep">/</span>
            <span>North America Entry</span>
          </div>
          <h1 className="display">Market Entry · North America Entry Sprint</h1>
          <p className="lede">
            Bottom-up sizing and operator interviews produce a market-defensible attack plan — a clear go / no-go in 6–8 weeks. Readiness, not "options to explore."
          </p>
        </div>
      </section>

      <section className="stats">
        <div className="wrap" style={{ paddingInline: 0 }}>
          <div className="stats-grid">
            <div className="stat" style={{ paddingLeft: 'var(--pad-x)' }}>
              <div className="num">6-8 weeks</div>
              <div className="lbl">Engagement duration</div>
            </div>
            <div className="stat">
              <div className="num">$95K</div>
              <div className="lbl">Fixed-fee</div>
            </div>
            <div className="stat">
              <div className="num">Bottom-up</div>
              <div className="lbl">Sizing + independent interviews</div>
            </div>
            <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
              <div className="num">Defensible</div>
              <div className="lbl">Go / no-go decision</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The Sprint</span>
            <p className="lead">Bottom-up independent validation of your North America entry thesis.</p>
          </div>
          <div className="split">
            <div className="cell">
              <div className="ck">The Problem</div>
              <p>Top-down market sizing and analyst reports aren't enough to bet the company on. A North America entry is a massive capital and opportunity-cost commitment.</p>
            </div>
            <div className="cell">
              <div className="ck">The Solution</div>
              <p>Independent operator interviews and bottom-up sizing to validate your entry thesis before you commit the capital.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Deliverables</span>
            <p className="lead">A market-defensible attack plan.</p>
          </div>
          <div className="proof-grid">
            <div className="proof">
              <div className="metric">Bottom-up Sizing</div>
              <p>Operator-level TAM / SAM / SOM modeling.</p>
            </div>
            <div className="proof">
              <div className="metric">Operator Evidence</div>
              <p>8-15 independent interviews with decision-makers.</p>
            </div>
            <div className="proof">
              <div className="metric">Go / No-go Decision</div>
              <p>Defensible framework for capital allocation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="callout">
            <div className="ck">Ready to enter?</div>
            <p>Start with the North America Entry Sprint. A clear go / no-go in 6–8 weeks.</p>
            <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/contact" className="btn btn-gold">Do the Sprint →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
