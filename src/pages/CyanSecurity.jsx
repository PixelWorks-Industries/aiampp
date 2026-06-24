import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function CyanSecurity() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/case-studies">Case Studies</Link>
            <span className="sep">/</span>
            <span>North America Market entry case study</span>
          </div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '24px' }}>Case Study · North America Market Entry</span>
          <h1 className="display">North America Market entry case study</h1>
          <p className="lede"><b>North America Market entry case study</b> · a 6-week Sprint, bottom-up validation, and a market-defensible attack plan.</p>
        </div>
      </section>


      <section className="stats" aria-label="Engagement at a glance">
        <div className="wrap" style={{ paddingInline: 0 }}>
          <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="stat" style={{ paddingLeft: 'var(--pad-x)' }}>
              <div className="num">6 weeks</div>
              <div className="lbl">Engagement duration</div>
            </div>
            <div className="stat">
              <div className="num">10</div>
              <div className="lbl">Corporate-buyer interviews</div>
            </div>
            <div className="stat">
              <div className="num">8 of 13</div>
              <div className="lbl">Key buying factors validated</div>
            </div>
            <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
              <div className="num">1 output</div>
              <div className="lbl">Market-defensible attack plan</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Situation & complication</span>
              <p className="lead">Capital on the table. Sixty days to a defensible answer.</p>
            </div>
          </ScrollReveal>
          <div className="split">
            <div className="cell">
              <div className="ck">Context</div>
              <p>An established European cybersecurity provider with a proven Tier-1 telco footprint — and 60 days to decide whether North America was the next leg of growth.</p>
            </div>
            <div className="cell">
              <div className="ck">Challenge</div>
              <p>A decision of this size, made without bottom-up sizing, localized buyer evidence, or targeted positioning, would put significant capital against legacy industry assumptions — exactly the path that takes 75% of expansions short.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">The approach</span>
              <p className="lead">Bottom-up validation of market entry.</p>
            </div>
          </ScrollReveal>
          <div className="split">
            <div className="cell">
              <div className="ck">Discovery</div>
              <p>Corporate-buyer interviews conducted to validate key buying factors.</p>
            </div>
            <div className="cell">
              <div className="ck">Validation</div>
              <p>Key buying factors validated through data-driven analysis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Outcomes</span>
              <p className="lead">A market-defensible attack plan.</p>
            </div>
          </ScrollReveal>
          <div className="ticks">
            <div className="tick">Market entry validated.</div>
            <div className="tick">Defensible positioning identified.</div>
            <div className="tick">Capital allocation optimized.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
