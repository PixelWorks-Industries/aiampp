import { Link } from 'react-router-dom';
import EqWave from '../components/EqWave';
import FloatingLines from '../components/FloatingLines';
import ScrollReveal from '../components/ScrollReveal';

const proofs = [
  { metric: '5× volume', company: 'Vodafone · Xchange', text: 'Trade-in volume vs. price guarantee. NPS +32 over industry.', path: '/vodafone-trade-in' },
  { metric: 'NPS 19 → 73', company: "David's Bridal · Pearl AI", text: 'Built with DotKonnekt. Addressable market widened from ~$4B (dresses) to ~$65B (full wedding journey).', path: '/davids-bridal' },
  { metric: '$2B+ new SOM', company: 'European Cyber Security Company', text: 'Targeted entry strategy with position, product roadmap, operator-led attack plan and 5 year BC', path: '/north-america-entry' }
];

const engagements = [
  {
    idx: '01',
    kicker: 'Front Door',
    title: 'The AI Amplifier Briefing',
    path: '/ai-amplifier-briefing',
    top: '1 month',
    sub: 'Market-ready attack plan',
    note: 'then one quarter to production'
  },
  {
    idx: '02',
    kicker: 'Strategy + Execution',
    title: 'Agentic Operating Model',
    path: '/agentic-operating-model',
    top: '1 month',
    sub: 'Decision-grade agentic roadmap',
    note: 'then one quarter to production'
  },
  {
    idx: '03',
    kicker: 'Value Creation',
    title: 'Value Targeting',
    path: '/value-targeting',
    top: '1 month',
    sub: 'Hidden EBITDA located and sized',
    note: 'Kick start hidden value extraction'
  },
  {
    idx: '04',
    kicker: 'Market Entry',
    title: 'North America Entry Sprint',
    path: '/north-america-entry',
    top: '6-8 weeks',
    sub: 'Defensible go / no-go',
    note: 'Market-ready attack plan'
  }
];

export default function Home() {
  return (
    <>
      <section className="hero" style={{ position: 'relative' }}>
        <FloatingLines
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
          rotation={90}
          speed={0.2}
          colors={['#212255']}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.15}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
        />
        <div className="wrap hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-main">
            <span className="eyebrow">Deep customer insight → AI strategy that holds → shipped in a quarter</span>
            <h1 className="display">Reinvent your business model before the industry reinvents it for you.</h1>
            <p className="hero-sub">
              For mid-market CEOs and PE operating partners ready to compound their advantage in the AI era, and shape the industry rather than follow it.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-gold">Start with the Briefing →</Link>
              <Link to="/services" className="btn btn-ghost">See the four engagements</Link>
            </div>
          </div>
          <div className="hero-aside">
            <EqWave />
            <p className="hero-tag">
              We answer one decision in one month. The rigor of a top-tier strategy house, plus an Enterprise AI platform that ships to production, owned by your team.
            </p>
            <span className="hero-domain">www.aiamplifier.com</span>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="stats" aria-label="Key figures">
          <div className="wrap" style={{ paddingInline: 0 }}>
            <div className="stats-grid">
              <div className="stat" style={{ paddingLeft: 'var(--pad-x)' }}>
                <div className="num">$50B+</div>
                <div className="lbl">shareholder value generated</div>
              </div>
              <div className="stat">
                <div className="num">30 years</div>
                <div className="lbl">operator + advisor</div>
              </div>
              <div className="stat">
                <div className="num">1 month</div>
                <div className="lbl">to market-ready attack plan</div>
              </div>
              <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
                <div className="num">1 quarter</div>
                <div className="lbl">to production</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="block" id="promise">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">THE OPPORTUNITY AND THE AI AMPLIFIER PROMISE</span>
              <p className="lead">
                Many expensive AI strategy decks survive the boardroom. <b>Almost none survive the customer.</b>
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="promise-cols">
              <div className="pcard">
                <Link to="/" className="picon">
                  <img className="plogo-amp" src="/assets/logo-white.png" alt="AI Amplifier Corporation" />
                </Link>
                <h3>AI Amplifier <span>· The decision</span></h3>
                <p>One decision matters: reinvent your business model now, or play catch-up in it. We answer it in one month, with one accountable team.</p>
              </div>
              <div className="pcard">
                <div className="picon">
                  <img className="pphoto" src="/assets/robert-hackl.jpg" alt="Robert Hackl" />
                </div>
                <h3>Robert Hackl <span>· The insight</span></h3>
                <p>
                  $50B+ in shareholder value created across telecom and enterprise technology. The three things AI can't bring to your board: deep customer insight,
                  industry-rule independence, and the operator's judgment of what to do next.
                </p>
              </div>
              <div className="pcard">
                <div className="picon">
                  <img className="plogo-dk" src="/assets/dotkonnekt-logo.png" alt="DotKonnekt" />
                </div>
                <h3>DotKonnekt <span>· The engine</span></h3>
                <p>Full-stack enterprise AI platform with zero cloud, model, and framework lock-in. Built by embedded engineers, owned by your team. A proven execution engine in one engagement.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="promise-close">
              The work moves you past AI exploration. After our joint success, the only question you will ask: <b>what should we attack next?</b>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="block alt" id="proof">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head center">
              <span className="eyebrow">PROOF — THREE INDUSTRIES, SAME PATTERN</span>
              <p className="lead">Customer truth, turned into measurable value.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="proof-grid mid-wide" style={{ justifyContent: 'center' }}>
              {proofs.map((item) => (
                <Link key={item.company} to={item.path} className="proof">
                  <div className="metric">{item.metric}</div>
                  <div className="co">{item.company}</div>
                  <p>{item.text}</p>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="block" id="engagements">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">FOUR FLAGSHIP ENGAGEMENTS</span>
              <p className="lead">Productized. Fixed fee, fixed scope, market-ready.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="eng-list">
              {engagements.map((item) => (
                <Link key={item.idx} className="eng" to={item.path}>
                  <div className="idx">{item.idx}</div>
                  <div>
                    <div className="kicker">{item.kicker}</div>
                    <div className="title">{item.title}</div>
                  </div>
                  <div className="meta">
                    <div className="meta-top">
                      <b>{item.top}</b> · {item.sub}
                    </div>
                    <div className="meta-sub">{item.note}</div>
                  </div>
                  <div className="go" aria-hidden="true">→</div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap">
          <ScrollReveal>
            <h2 className="display">Start the conversation.</h2>
            <p className="cta-sub">
              If the next nine months will decide your AI position — start here. We respond personally, within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="cta-row">
              <div className="cta-contacts">
                <div className="cc-item">
                  <div className="k">Email</div>
                  <div className="v gold">advisory@aiamplifier.com</div>
                </div>
                <div className="cc-item">
                  <div className="k">Website</div>
                  <div className="v">www.aiamplifier.com</div>
                </div>
                <div className="cc-item">
                  <div className="k">Jurisdiction</div>
                  <div className="v">Incorporated in Florida, USA</div>
                </div>
              </div>
              <Link to="/contact" className="btn btn-gold">Start here →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
