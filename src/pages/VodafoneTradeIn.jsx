import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function VodafoneTradeIn() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/case-studies">Case Studies</Link>
            <span className="sep">/</span>
            <span>Vodafone UK Trade-In</span>
          </div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '24px' }}>Proof 02 · Telecom · Solving operational complexity at scale</span>
          <h1 className="display">From a painful trade-in to a price guarantee.</h1>
          <p className="lede"><b>Vodafone UK</b> treated device trade-in as what it really is — a trust problem, not a valuation problem — and amplified it with the same three gears.</p>
        </div>
      </section>

      <section className="stats" aria-label="Outcomes at a glance">
        <div className="wrap" style={{ paddingInline: 0 }}>
          <div className="stats-grid">
            <div className="stat" style={{ paddingLeft: 'var(--pad-x)' }}>
              <div className="num">5×</div>
              <div className="lbl">Trade-in volume · vs. industry 1.5×</div>
            </div>
            <div className="stat">
              <div className="num">95%</div>
              <div className="lbl">Evaluation accuracy · margins up 150%</div>
            </div>
            <div className="stat">
              <div className="num">+32</div>
              <div className="lbl">NPS uplift · 43 vs. industry 11</div>
            </div>
            <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
              <div className="num">+12 pts</div>
              <div className="lbl">Brand opinion · 42% favourable vs. industry 30%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Same pattern, different industry</span>
              <p className="lead">A phone trade-in looks like a valuation problem. <b>It is a trust problem.</b></p>
            </div>
          </ScrollReveal>
          <div className="two-col">
            <div className="ph" aria-label="placeholder" style={{ minHeight: '300px', background: 'var(--navy-panel)' }}>Customer + advisor at the trade-in counter (placeholder)</div>
            <div className="fut">
              <div className="fut-row" style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: '16px', padding: '16px 0' }}>
                <div className="futk" style={{ fontFamily: 'var(--display)', color: 'var(--gold)' }}>Friction</div>
                <div className="futv" style={{ color: 'var(--mist)' }}>An opaque, slow valuation the customer can't follow.</div>
              </div>
              <div className="fut-row" style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: '16px', padding: '16px 0' }}>
                <div className="futk" style={{ fontFamily: 'var(--display)', color: 'var(--gold)' }}>Uncertainty</div>
                <div className="futv" style={{ color: 'var(--mist)' }}>"Will the offer hold? Am I getting a fair number?"</div>
              </div>
              <div className="fut-row" style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: '16px', padding: '16px 0' }}>
                <div className="futk" style={{ fontFamily: 'var(--display)', color: 'var(--gold)' }}>Trust</div>
                <div className="futv" style={{ color: 'var(--mist)' }}>Belief that the operator is acting in the customer's interest.</div>
              </div>
            </div>
          </div>
          <p className="notfor" style={{ marginTop: '30px' }}><b>Source:</b> Vodafone.</p>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">What drives trade-in value</span>
              <p className="lead">AI grades each driver — then the agent does the rest.</p>
            </div>
          </ScrollReveal>
          <div className="trigger-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            <div className="trigger"><div className="tn">50%</div><h4>Screen condition</h4><p>See · Know</p></div>
            <div className="trigger"><div className="tn">15–20%</div><h4>Camera & lens</h4><p>See</p></div>
            <div className="trigger"><div className="tn">15%</div><h4>Back & frame</h4><p>See · Know</p></div>
            <div className="trigger"><div className="tn">10–15%</div><h4>Battery health</h4><p>Know</p></div>
            <div className="trigger"><div className="tn">Pass/Fail</div><h4>Functional tests</h4><p>Know</p></div>
          </div>
          <div className="callout" style={{ marginTop: '28px' }}>
            <div className="ck">Do · Smart agent</div>
            <p style={{ fontSize: 'clamp(17px, 1.7vw, 20px)' }}>Repair-to-trade-in offer · New phone selection · Rate-plan upsell · VAS cross-sell.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
