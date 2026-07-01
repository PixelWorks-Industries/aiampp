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
            <span>North America Entry</span>
          </div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '24px' }}>Case study · Cybersecurity · North America entry</span>
          <h1 className="display">The educated early follower wins North America.</h1>
          <p className="lede">How a European cybersecurity scale-up built a $5–7M staged investment case — and the three 90-day gates that decide commit, scope, or defer.</p>
        </div>
      </section>

      <section className="stats" aria-label="Engagement at a glance">
        <div className="wrap" style={{ paddingInline: 0 }}>
          <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="stat" style={{ paddingLeft: 'var(--pad-x)' }}>
              <div className="num">10 weeks</div>
              <div className="lbl">Engagement duration</div>
            </div>
            <div className="stat">
              <div className="num">5</div>
              <div className="lbl">Executive-level operator interviews</div>
            </div>
            <div className="stat">
              <div className="num">3</div>
              <div className="lbl">90-day decision gates designed</div>
            </div>
            <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
              <div className="num">Double-digit $M</div>
              <div className="lbl">Accessible revenue · bottom-up</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Situation & complication</span>
              <p className="lead">A capital raise was on the table — but only behind a highly operational, believable entry case.</p>
            </div>
          </ScrollReveal>
          <div className="split">
            <div className="cell">
              <p>A profitable European cybersecurity scale-up with proven Tier-1 telco footprint at home — eight-figure EBITDA base, sovereign-vendor tailwind in EU.</p>
            </div>
            <div className="cell">
              <p>The board asked one question: is North America the next leg of growth, or should this capital go to RoW expansion?</p>
              <p>The CEO needed a yes / no with the operational sequence underneath — not a maybe with options.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Resolution & Deliverables</span>
              <p className="lead">Ten conversations with the people who actually decide. One framework the board could underwrite.</p>
            </div>
          </ScrollReveal>
          <div className="split">
            <div className="cell">
              <div className="ck">Double-digit $M</div>
              <p>Year-5 growth potential, bottom-up. Growth potential sized bottom-up across 55 mobile and 41 fixed operators; company-capturable revenue modeled at the operator level, with attach, pricing and rev-share assumptions stress-tested.</p>
            </div>
            <div className="cell">
              <div className="ck">Executive-level interviews</div>
              <p>Heads of product, security and VAS at Tier-1 and Tier-2 operators across Canada and the US — plus an independent advisor. Not analysts. The people who own the purchase order.</p>
            </div>
            <div className="cell">
              <div className="ck">3 × 90 days</div>
              <p>Conditional commitment framework. Three explicit gates — RFP engagement, partner LOI, US compliance readiness. Each one tested before the next dollar leaves the board.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">The Diagnostic Underneath</span>
              <p className="lead">Independent judgment, free of internal bias — and a US-grade plan.</p>
            </div>
          </ScrollReveal>
          <div className="proof-grid">
            <div className="proof"><div className="co">Key buying factors</div><p>Heat-mapped — 13 KBFs tested against five primary interviews and a competitive bench.</p></div>
            <div className="proof"><div className="co">Aligned with self-assessment</div><p>Buying factors where the client’s own read matched the operator evidence.</p></div>
            <div className="proof"><div className="co">Real gaps, under-weighted</div><p>Factors the board had been discounting — surfaced as material risk to the entry case.</p></div>
            <div className="proof"><div className="co">Emerging moats</div><p>Advantages the client did not yet know they owned — now part of the positioning.</p></div>
            <div className="proof"><div className="co">Scaling maturity analysis</div><p>A scaling-maturity analysis turned the client’s own scaling machine into a clear capability plan.</p></div>
          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
            <ScrollReveal>
                <div className="section-head">
                    <span className="eyebrow">Measurable Outcomes</span>
                    <p className="lead">A position, not a menu. Conditional on tests the board can read.</p>
                </div>
            </ScrollReveal>
            <div className="split cols-2">
                <div className="cell deep"><div className="ck">Recommendation</div><p>Canada-direct + US-via-partner hybrid · staged $5–7M envelope · breakeven Y4.</p></div>
                <div className="cell deep"><div className="ck">Three 90-day gates</div><p>3/3 hits = full commit · 2/3 = Canada-only ($2M tranche) · ≤1/3 = defer.</p></div>
                <div className="cell deep"><div className="ck">Partner shortlist</div><p>Four named candidates scored on motivation, fit and time-to-Tier-1.</p></div>
                <div className="cell deep"><div className="ck">Readiness program</div><p>US SOC 2 Type II clock started, Delaware entity scoped, OFAC / CCPA / COPPA pre-flight defined.</p></div>
                <div className="cell deep"><div className="ck">Geography-mode matrix</div><p>12 entry archetypes scored; one dominant choice fell out cleanly.</p></div>
            </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
            <div className="section-head">
                <span className="eyebrow">The Rigor Behind the Recommendation</span>
            </div>
            <p>Bottom-up TAM / SAM / SOM at the operator level · KBF heat-map across 13 buying factors · Model A / B / C deployment analysis (network DNS · cloud DNS · app-SDK) · 5-year EBITDA case with peak-invest envelope · partner motivation scorecard · 90-day gate framework with explicit pass / fail criteria.</p>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
            <div className="section-head">
                <span className="eyebrow">What we deliberately built first</span>
                <p className="lead">The case to defer — tested before the case to enter.</p>
            </div>
            <p>The strongest argument against: Three legitimate defer arguments tested in full: vendor recognition gap, EU capital opportunity cost, and unresolved product gaps. Each was addressable in two quarters, not twelve.</p>
            <p>The decision to enter is only defensible because the case against it was tested first.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
            <div className="section-head">
                <span className="eyebrow">What we deliberately did not do</span>
                <p className="lead">Operator ownership over consultant theatre.</p>
            </div>
            <p>No scenario decks, No three-horizon frameworks, No optionality matrices, No analyst-only desk research. The empirical backbone is five operator conversations, on the record.</p>
        </div>
      </section>
      
      <section className="block alt">
        <div className="wrap">
          <div className="callout">
            <div className="ck">Considering North America?</div>
            <p>This is what the North America Entry Sprint produces — a board-grade position with the tests built in. Not "options to explore."</p>
            <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/contact" className="btn btn-gold">Talk to Robert →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
