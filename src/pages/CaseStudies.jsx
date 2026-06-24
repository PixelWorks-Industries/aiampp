import { Link } from 'react-router-dom';

export default function CaseStudies() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span>Case Studies</span>
          </div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '24px' }}>The AI Amplifier Effect · Proof in two industries</span>
          <h1 className="display">AI amplifies who you already are.</h1>
          <p className="lede">Intelligence is not judgment — and AI always <b>borrows</b> judgment. The companies that win keep three controls human, then wire three gears of AI behind them. Here is the rule, and the proof.</p>
        </div>
      </section>

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

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Proof — current case studies</span>
          </div>
          <div className="eng-list">
            <Link className="eng" to="/vodafone-trade-in">
              <div className="idx">01</div>
              <div className="title">Vodafone Trade-In</div>
            </Link>
            <Link className="eng" to="/davids-bridal">
              <div className="idx">02</div>
              <div className="title">David's Bridal</div>
            </Link>
            <Link className="eng" to="/cyan-security">
              <div className="idx">03</div>
              <div className="title">North America Market entry case study</div>
            </Link>
          </div>
        </div>
      </section>

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
              <p>Powerful intelligence pointed at a problem the team did not deeply understand. Without the steering, the model produced confident answers that clinicians could not trust.</p>
            </div>
            <div className="cell">
              <div className="ck">Negative example · Gearbox & driver missing</div>
              <h3>Air Canada</h3>
              <p>An AI assistant invented a refund policy and the company was held to it. No responsible-AI gearbox, no human owning the promise — the brand absorbed the cost.</p>
            </div>
          </div>
        </div>
      </section>
      
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
  );
}
