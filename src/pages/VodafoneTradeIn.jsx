import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/ScrollReveal';

export default function VodafoneTradeIn() {
  return (
    <>
      <Helmet>
        <title>Vodafone UK Trade-In · Case Study · AI Amplifier Corporation</title>
      </Helmet>

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
            <p className="lede">Vodafone UK treated device trade-in as what it really is - a trust problem, not a valuation problem - and amplified it with the same three gears.</p>
          </div>
        </section>

        <ScrollReveal>
          <section className="stats" aria-label="Outcomes at a glance">
            <div className="wrap" style={{ paddingInline: 0 }}>
              <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div className="stat" style={{ paddingLeft: 'var(--pad-x)' }}>
                  <div className="num">1.5×</div>
                  <div className="lbl">Trade-in volume · vs. industry</div>
                </div>
                <div className="stat">
                  <div className="num">150%</div>
                  <div className="lbl">Evaluation accuracy · margins up</div>
                </div>
                <div className="stat">
                  <div className="num">43</div>
                  <div className="lbl">NPS uplift · vs. industry 11</div>
                </div>
                <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
                  <div className="num">+12 pts</div>
                  <div className="lbl">Brand opinion · 42% favorable vs. industry 30%</div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="block">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">Same pattern, different industry</span>
                <p className="lead">A phone trade-in looks like a valuation problem. <b>It is a trust problem.</b></p>
              </div>
              <div className="fut-grid">
                <div className="fut-card">
                  <div className="ck">Friction</div>
                  <p>An opaque, manual and slow valuation the customer can't follow.</p>
                </div>
                <div className="fut-card">
                  <div className="ck">Uncertainty</div>
                  <p>Will the offer hold? Am I getting a fair number?</p>
                </div>
                <div className="fut-card">
                  <div className="ck">Trust</div>
                  <p>Belief that the operator is acting in the customer's interest.</p>
                </div>
              </div>
              <p className="notfor" style={{ marginTop: '30px' }}><b>Source:</b> Vodafone.</p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="block alt">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">What drives trade-in value</span>
                <p className="lead">AI grades each driver like the best human would - and a smart agent guides the customer.</p>
              </div>
              <div className="trigger-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
                <div className="trigger"><div className="tn">Screen</div><h4>Screen condition</h4><div className="lbl">See · Know</div></div>
                <div className="trigger"><div className="tn">Camera</div><h4>Camera & lens</h4><div className="lbl">See</div></div>
                <div className="trigger"><div className="tn">Frame</div><h4>Back & frame</h4><div className="lbl">See · Know</div></div>
                <div className="trigger"><div className="tn">Battery</div><h4>Battery health</h4><div className="lbl">Pass / Fail</div></div>
                <div className="trigger"><div className="tn">Tests</div><h4>Functional tests</h4><div className="lbl">Pass / Fail</div></div>
              </div>
              <div className="callout" style={{ marginTop: '28px' }}>
                <div className="ck">Do · Smart agent</div>
                <p style={{ fontSize: 'clamp(17px, 1.7vw, 20px)' }}>Repair-to-trade-in offer · New phone selection · Rate-plan upsell · VAS cross-sell.</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="block">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">From a painful trade-in to a price guarantee</span>
                <p className="lead">The three gears in synch enable a trusted experience.</p>
              </div>
              <div className="gear-grid">
                <div className="gear">
                  <div className="grole">01 · Perceptive AI</div>
                  <div className="gword">SEE</div>
                  <div className="glede">The device, in milliseconds.</div>
                  <p>Captures screen, camera, frame and condition engaging the customer live.</p>
                </div>
                <div className="gear">
                  <div className="grole">02 · Analytical AI</div>
                  <div className="gword">KNOW</div>
                  <div className="glede">Graded against validated insights.</div>
                  <p>Benchmarks each device against millions of prior valuations to set a fair, confident price.</p>
                </div>
                <div className="gear">
                  <div className="grole">03 · Generative AI</div>
                  <div className="gword">DO</div>
                  <div className="glede">The next best step, guided.</div>
                  <p>Presents the guaranteed offer and the right next move for the customer.</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="block alt">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">Measurable outcomes</span>
                <p className="lead">Trust, made operational - and measured. AI made the promise more credible, not just the process more digital.</p>
              </div>
              <div className="proof-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div className="proof">
                  <div className="metric">1.5×</div>
                  <div className="co">Trade-in volume</div>
                  <p>Versus industry baseline.</p>
                </div>
                <div className="proof">
                  <div className="metric">150%</div>
                  <div className="co">Evaluation accuracy</div>
                  <p>Enabling the price guarantee, with margins up 150%.</p>
                </div>
                <div className="proof">
                  <div className="metric">43</div>
                  <div className="co">NPS uplift</div>
                  <p>NPS 43 vs. industry 11.</p>
                </div>
                <div className="proof">
                  <div className="metric">+12 pts</div>
                  <div className="co">Brand opinion</div>
                  <p>42% favorable vs. industry 30%.</p>
                </div>
              </div>
              <p className="notfor" style={{ marginTop: '34px' }}><b>Source:</b> Vodafone.</p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="block">
            <div className="wrap">
              <div className="callout">
                <div className="ck">Where would the amplifier rule apply?</div>
                <p>Bridal and telecom share nothing - except a customer with friction, doubt, and a decision to trust. <b>That is where AI earns the right to act.</b></p>
                <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  <Link to="/contact" className="btn btn-gold">Talk to Robert →</Link>
                  <Link to="/case-studies" className="btn btn-ghost">Back to the framework</Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
