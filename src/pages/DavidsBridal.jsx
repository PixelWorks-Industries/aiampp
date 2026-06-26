import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/ScrollReveal';

export default function DavidsBridal() {
  return (
    <>
      <Helmet>
        <title>David's Bridal · Case Study · AI Amplifier Corporation</title>
      </Helmet>

      <main>
        {/* HERO */}
        <section className="page-hero">
          <div className="wrap">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <Link to="/case-studies">Case Studies</Link>
              <span className="sep">/</span>
              <span>David's Bridal</span>
            </div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '24px' }}>Proof 01 · Retail · Bridal · Executed by Dotkonnekt</span>
            <h1 className="display">From one dress to an 18 month relationship.</h1>
            <p className="lede"><b>David's Bridal</b> kept the steering human, then wired three gears of AI behind the Pearl app — turning a single transaction into the entire wedding journey.</p>
          </div>
        </section>

        {/* SPEC BAND */}
        <ScrollReveal>
          <section className="stats" aria-label="Outcomes at a glance">
            <div className="wrap" style={{ paddingInline: 0 }}>
              <div className="stats-grid">
                <div className="stat" style={{ paddingLeft: 'var(--pad-x)' }}>
                  <div className="num">1 → 18m</div>
                  <div className="lbl">Dress transaction becomes a planning relationship</div>
                </div>
                <div className="stat">
                  <div className="num">16×</div>
                  <div className="lbl">Market expansion · $4B → $65B addressable</div>
                </div>
                <div className="stat">
                  <div className="num">+54</div>
                  <div className="lbl">NPS uplift · rose from 19 to 73</div>
                </div>
                <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
                  <div className="num">90%</div>
                  <div className="lbl">Of brides make their first stop at David's</div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* THE MOMENT */}
        <section className="block">
          <ScrollReveal>
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">The bride's emotional journey</span>
                <p className="lead statement">Every bride feels happy for 15 minutes after the "yes" — <b>then panic sets in.</b></p>
              </div>
              <div className="split">
                <div className="cell">
                  <div className="ck">The human moment</div>
                  <p>The dress is the start, not the finish. What follows is 300 tasks, a moving budget, and a calendar that runs to the wedding day — all carried by someone doing this for the first time.</p>
                </div>
                <div className="cell">
                  <div className="ck">The opportunity</div>
                  <p>A brand trusted at the most emotional moment of the journey is uniquely positioned to support everything that comes after it — if it can do so with confidence, not friction.</p>
                </div>
              </div>
              <p className="notfor" style={{ marginTop: '30px' }}><b>Source:</b> Kelly Cook interviews with Future Commerce and PYMNTS.</p>
            </div>
          </ScrollReveal>
        </section>

        {/* THE STEERING */}
        <ScrollReveal>
          <section className="block alt">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">The steering · Understanding the bride</span>
                <p className="lead">Seventy-five years of bridal credibility, pointed at the real moment.</p>
              </div>
              <div className="two-col">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', justifyContent: 'center' }}>
                  <div>
                    <div className="metric">100M+</div>
                    <p>women dressed over 75 years — fueling trust, knowledge, and bridal credibility.</p>
                  </div>
                  <div>
                    <div className="metric">90%</div>
                    <p>of brides make their first stop at David's — an early signal and unmatched reach.</p>
                  </div>
                </div>
                <div className="fut">
                  <div className="fut-row">
                    <div className="futk">Friction</div>
                    <div className="futv">300 tasks, moving all the time.</div>
                  </div>
                  <div className="fut-row">
                    <div className="futk">Uncertainty</div>
                    <div className="futv">Anxiety about <b>what</b> — and about budget.</div>
                  </div>
                  <div className="fut-row">
                    <div className="futk">Trust</div>
                    <div className="futv">Who can really help?</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* THE GEARS */}
        <section className="block">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">All three gears at work · The Pearl app</span>
              <p className="lead">See, know, and do — in sequence, for every bride.</p>
            </div>
            <div className="gear-grid">
              <div className="gear">
                <div className="grole">01 · Perceptive AI</div>
                <div className="gword">SEE</div>
                <div className="glede">Detects live friction.</div>
                <p>Reads style, mood, and inspiration the bride cannot easily put into words.</p>
              </div>
              <div className="gear">
                <div className="grole">02 · Analytical AI</div>
                <div className="gword">KNOW</div>
                <div className="glede">Her moving reality.</div>
                <p>Holds the budget, the calendar, and the 300 tasks — and how they shift week to week.</p>
              </div>
              <div className="gear">
                <div className="grole">03 · Generative AI</div>
                <div className="gword">DO</div>
                <div className="glede">The next best step.</div>
                <p>Guides the bride to what matters now, and reassures her at every decision.</p>
              </div>
            </div>
          </div>
        </section>

        {/* THE GEARBOX / AGENT TEAM */}
        <ScrollReveal>
          <section className="block alt">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">The journey, empowered · The gearbox in place</span>
                <p className="lead">A team of agents, orchestrated — with guardrails on every action.</p>
              </div>
              <div className="orch">
                <div className="orch-core">
                  <div className="oc-name">Pearl</div>
                  <div className="oc-role">Orchestration</div>
                  <div className="oc-sub">Semantic search · persistent memory. One brain that remembers the bride and coordinates the specialists.</div>
                </div>
                <div className="orch-agents">
                  <div className="agent"><h4>Task management</h4><p>End-to-end task lifecycle.</p></div>
                  <div className="agent"><h4>Budget intelligence</h4><p>Forecasts and anomaly detection.</p></div>
                  <div className="agent"><h4>Milestone agent</h4><p>Planning to wedding day.</p></div>
                  <div className="agent"><h4>Vendor recommendation</h4><p>Location, budget, style.</p></div>
                  <div className="agent"><h4>Content recommendation</h4><p>Themes and inspiration.</p></div>
                  <div className="agent" style={{ background: 'var(--navy-deep)', borderColor: 'rgba(227,181,76,0.3)' }}><h4 style={{ color: 'var(--gold)' }}>The gearbox</h4><p>Continuous evals · guardrails · policy compliance · safe execution.</p></div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* OUTCOMES */}
        <ScrollReveal>
          <section className="block">
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">Measurable outcomes</span>
                <p className="lead">A business model change, executed with excellence.</p>
                <p style={{ fontSize: '19px', color: 'var(--mist)', marginTop: '18px' }}>Supporting the bride's planning with confidence unlocked the entire vendor and media marketplace.</p>
              </div>
              <div className="proof-grid">
                <div className="proof">
                  <div className="metric">1 → 18m</div>
                  <div className="co">The relationship</div>
                  <p>One dress transaction becomes an 18-month planning relationship.</p>
                </div>
                <div className="proof">
                  <div className="metric">16×</div>
                  <div className="co">Market expansion</div>
                  <p>Addressable market widened from $4B in dresses to $65B across the full journey.</p>
                </div>
                <div className="proof">
                  <div className="metric">+54</div>
                  <div className="co">NPS uplift</div>
                  <p>Net Promoter Score rose from 19 to 73.</p>
                </div>
              </div>
              <p className="notfor" style={{ marginTop: '34px' }}><b>Source:</b> David's Bridal Pearl announcement · Glassbox case study.</p>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <section className="block alt">
            <div className="wrap">
              <div className="callout">
                <div className="ck">Same pattern, your industry</div>
                <p>The amplifier rule does not belong to bridal. <b>See the customer differently, keep the controls human, wire the three gears</b> — and a transaction becomes a relationship.</p>
                <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  <Link to="/vodafone-trade-in" className="btn btn-gold">Next: Vodafone UK Trade-In →</Link>
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
