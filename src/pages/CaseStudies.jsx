import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Case Studies · AI Amplifier Corporation</title>
      </Helmet>

      <main>
        {/* HERO */}
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <span>Case Studies</span>
            </div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '24px' }}>Insights & Case studies</span>
            <h1 className="display">AI amplifies who you already are.</h1>
            <p className="lede">Intelligence is not judgment. We are letting agentic AI making decisions before teaching it what matters most: good human judgment. Sometimes it borrows from a prompt we typed in a hurry. Sometimes from the average of the internet. Sometimes from the company that built the system long before we showed up. The problem is that we rarely know whose judgment it is borrowing, and a generation that already trusts almost nothing is now being asked to trust decisions no one can explain. The companies that win keep three controls human, then wire three gears of AI behind them. Here is the approach, and the proof.</p>
          </div>
        </section>

        {/* THE AMPLIFIER RULE */}
        <section className="stats" aria-label="The amplifier rule">
          <div className="wrap" style={{ paddingInline: 0 }}>
            <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="stat" style={{ paddingLeft: 'var(--pad-x)' }}>
                <div className="num">5%</div>
                <div className="lbl"><b style={{ color: 'var(--white)' }}>Amplified value</b> — three controls present. Friction and uncertainty removed, trust delivered, at scale.</div>
              </div>
              <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
                <div className="num" style={{ color: 'var(--mist-dim)' }}>95%</div>
                <div className="lbl"><b style={{ color: 'var(--white)' }}>Amplified noise</b> — controls missing. Expensive, confident-sounding mistakes.</div>
              </div>
            </div>
          </div>
        </section>

        {/* THREE CONTROLS */}
        <section className="block">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Why this moment is different</span>
              <p className="lead">Three controls must stay <b>human.</b></p>
              <p style={{ fontSize: '19px', color: 'var(--mist)', marginTop: '18px' }}>Otherwise the model will invent — with confidence.</p>
            </div>
            <div className="ctrl-grid">
              <div className="ctrl">
                <div className="cnum">01</div>
                <div className="ctag">The Steering</div>
                <h3>Deep customer understanding</h3>
                <p>Knowing where the journey breaks, where doubt accumulates, and where the customer stops believing. AI cannot earn the right to act without it.</p>
              </div>
              <div className="ctrl">
                <div className="cnum">02</div>
                <div className="ctag">The Gearbox</div>
                <h3>Responsible AI framework</h3>
                <p>Guardrails that make every action fair, explainable and reversible. Not the brake — the gearbox that lets you scale safely.</p>
              </div>
              <div className="ctrl">
                <div className="cnum">03</div>
                <div className="ctag">The Driver</div>
                <h3>Human leadership</h3>
                <p>The courage to leave the industry script, sign up for the promise, and own the outcome. Judgment stays with people.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS WITHOUT THE CONTROLS */}
        <section className="block alt">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">When the controls are missing</span>
              <p className="lead statement">Your ghost Formula One car with an empty seat <b>is ready to crash your brand.</b></p>
            </div>
            <div className="split">
              <div className="cell">
                <div className="ck">Negative example · The steering missing</div>
                <h3>IBM Watson Health</h3>
                <p>IBM Watson Health had powerful AI but weak steering — it did not sufficiently reflect how clinicians actually make decisions. Intelligence, without the trust of the people whose judgment mattered most. $4b dollar invested, mostly written off, some parts sold.</p>
              </div>
              <div className="cell">
                <div className="ck">Negative example · Gearbox &amp; driver missing</div>
                <h3>Air Canada</h3>
                <p>Air Canada's chatbot invented a refund promise the company never intended to make — weak gearbox, weak driver: not enough controls, accountability, or reversibility. The court saw what customers already knew: when the AI speaks to the customer, the brand is speaking. Total damage was estimated at $15-25M</p>
              </div>
            </div>
          </div>
        </section>

        {/* THE STEERING: FRICTION / UNCERTAINTY / TRUST */}
        <section className="block">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">The steering · Before the model, the moment</span>
              <p className="lead">Find where the customer slows down, hesitates, abandons, or stops believing.</p>
              <p style={{ fontSize: '19px', color: 'var(--mist)', marginTop: '18px' }}>That is where AI earns the right to act.</p>
            </div>
            <div className="fut">
              <div className="fut-row">
                <div className="futk">Friction</div>
                <div className="futv">The signal — where the journey breaks. Process makes the customer work harder than they should. <b>Steps repeat. Forms multiply. Energy drains.</b></div>
              </div>
              <div className="fut-row">
                <div className="futk">Uncertainty</div>
                <div className="futv">The doubt — where doubt accumulates. The customer cannot predict what happens next. <b>The price might change. The promise might bend.</b></div>
              </div>
              <div className="fut-row">
                <div className="futk">Trust</div>
                <div className="futv">The belief — where AI earns belief. The customer wonders whether the business acts in their interest. <b>Trust must be designed, not declared.</b></div>
              </div>
            </div>
          </div>
        </section>

        {/* THE THREE GEARS OF AI */}
        <section className="block alt">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">The three gears of AI</span>
              <p className="lead">Once the human moment is clear, wire three gears in sequence — and turn a transaction into a relationship.</p>
            </div>
            <div className="gear-grid">
              <div className="gear">
                <div className="grole">01 · Perceptive AI</div>
                <div className="gword">SEE</div>
                <div className="glede">Detects live friction.</div>
                <p>Vision, voice, behavior, language. Senses the signals the customer cannot easily explain.</p>
              </div>
              <div className="gear">
                <div className="grole">02 · Analytical AI</div>
                <div className="gword">KNOW</div>
                <div className="glede">Reads uncertainty.</div>
                <p>Connects the signal to value, risk, and timing. Decides what the moment means.</p>
              </div>
              <div className="gear">
                <div className="grole">03 · Generative AI</div>
                <div className="gword">DO</div>
                <div className="glede">Acts on trust.</div>
                <p>Executes the promise, explains the choice, reassures at the moment of truth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* THE GEARBOX */}
        <section className="block">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">The gearbox · Responsible AI</span>
              <p className="lead">Responsible AI is not the brake. <b>It is the gearbox.</b></p>
            </div>
            <div className="two-col">
              <div>
                <div className="fut">
                  <div className="fut-row" style={{ gridTemplateColumns: '170px 1fr' }}>
                    <div className="futk">Friction</div>
                    <div className="futv">Make it easier — <b>without taking control.</b></div>
                  </div>
                  <div className="fut-row" style={{ gridTemplateColumns: '170px 1fr' }}>
                    <div className="futk">Uncertainty</div>
                    <div className="futv">Provide clarity — <b>without false certainty.</b></div>
                  </div>
                  <div className="fut-row" style={{ gridTemplateColumns: '170px 1fr' }}>
                    <div className="futk">Trust</div>
                    <div className="futv">Make decisions <b>fair, explainable, reversible.</b></div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
                <div className="qblock">
                  <p>"Irresistibly alluring today. A force unto itself tomorrow. Scale trust before you scale tech."</p>
                  <div className="qby">Noelle Russell — Scaling Responsible AI (Wiley, 2025)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE PROOF — CASE STUDY CARDS */}
        <section className="block alt">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">The proof · Same pattern, different industry</span>
              <p className="lead">Two businesses that kept the controls human — and amplified the value.</p>
            </div>
            <div className="eng-list">
              <Link className="eng" to="/davids-bridal">
                <div className="idx">01</div>
                <div>
                  <div className="kicker">Retail · Bridal · The Pearl app</div>
                  <div className="title">David's Bridal</div>
                </div>
                <div className="meta">
                  <div className="meta-top"><b>1 → 18-month</b> relationship · NPS 19 → 73</div>
                  <div className="meta-sub">$4B dresses → $65B full-journey market</div>
                </div>
                <div className="go" aria-hidden="true">→</div>
              </Link>
              <Link className="eng" to="/vodafone-trade-in">
                <div className="idx">02</div>
                <div>
                  <div className="kicker">Telecom · UK device trade-in</div>
                  <div className="title">Vodafone UK Trade-In</div>
                </div>
                <div className="meta">
                  <div className="meta-top"><b>5× trade-in volume</b> · NPS +32 over industry</div>
                  <div className="meta-sub">From a painful trade-in to a price guarantee</div>
                </div>
                <div className="go" aria-hidden="true">→</div>
              </Link>
              <Link className="eng" to="/north-america-entry">
                <div className="idx">03</div>
                <div>
                  <div className="kicker">Cybersecurity · NA market entry</div>
                  <div className="title">Cyan Security AG</div>
                </div>
                <div className="meta">
                  <div className="meta-top"><b>6 weeks</b> · Board-ready recommendation</div>
                  <div className="meta-sub">High-stakes North America validation</div>
                </div>
                <div className="go" aria-hidden="true">→</div>
              </Link>
            </div>
          </div>
        </section>

        {/* TAKEAWAY / CTA */}
        <section className="block">
          <div className="wrap">
            <div className="callout">
              <div className="ck">The takeaway</div>
              <p>AI amplifies who you already are. <b>Winners have the courage to see the customer differently</b> — despite industry rules — and deploy all three gears of AI with human controls.</p>
              <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <Link to="/services" className="btn btn-gold">See the engagements →</Link>
                <Link to="/contact" className="btn btn-ghost">Talk to Robert</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
