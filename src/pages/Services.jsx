import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span>Services</span>
          </div>
          <h1 className="display">Four flagship engagements.</h1>
          <p className="lede">Each is productized — <b>fixed fee, fixed scope, market-ready</b>. Start at the front door, or enter where the pressure already is. One accountable team throughout.</p>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <div className="svc-grid">

            <Link className="svc" to="/ai-amplifier-briefing">
              <div className="svc-idx">01 · Front Door</div>
              <h3>The AI Amplifier Briefing</h3>
              <div className="svc-kick">Independent · Attack-ready</div>
              <p>One decision, answered in a month: reinvent your business model now, or lead the next cycle. A diagnostic sharper than your last consulting engagement — guaranteed.</p>
              <div className="chips">
                <span className="chip"><b>1 mo</b> attack plan</span>
                <span className="chip"><b>$95K</b> fixed-fee</span>
                <span className="chip">3 outputs</span>
              </div>
              <span className="go">Explore the Briefing →</span>
            </Link>

            <Link className="svc" to="/agentic-operating-model">
              <div className="svc-idx">02 · Strategy + Execution</div>
              <h3>Agentic Operating Model</h3>
              <div className="svc-kick">With DotKonnekt</div>
              <p>AI Amplifier provides the judgment. DotKonnekt provides the execution engine that ships it. A decision-grade agentic roadmap in one month, then live workflows in a quarter, owned by your team. No lock-in.</p>
              <div className="chips">
                <span className="chip"><b>1 mo</b> agentic roadmap</span>
                <span className="chip">1 quarter to production</span>
                <span className="chip">2–3 workflows</span>
              </div>
              <span className="go">Explore the model →</span>
            </Link>

            <Link className="svc" to="/value-targeting">
              <div className="svc-idx">03 · Value Creation</div>
              <h3>Value Targeting</h3>
              <div className="svc-kick">For founders & PE operating partners</div>
              <p>Where is the next $X million of EBITDA hiding — and what's stopping you from pulling it? Six dimensions diagnosed, with an exit-acceleration attack plan in one month.</p>
              <div className="chips">
                <span className="chip"><b>1 mo</b> attack plan</span>
                <span className="chip">6 dimensions</span>
                <span className="chip">3–5 levers</span>
              </div>
              <span className="go">Explore Value Targeting →</span>
            </Link>

            <Link className="svc" to="/market-entry-sprint">
              <div className="svc-idx">04 · Market Entry</div>
              <h3>North America Entry Sprint</h3>
              <div className="svc-kick">Bottom-up · Independent · Attack-ready</div>
              <p>Bottom-up sizing and corporate-buyer interviews produce a market-defensible attack plan — a clear go / no-go in 6–8 weeks. Readiness, not "options to explore."</p>
              <div className="chips">
                <span className="chip"><b>6–8 weeks</b></span>
                <span className="chip">$95K fixed-fee</span>
                <span className="chip">8–15 interviews</span>
              </div>
              <span className="go">Explore the Sprint →</span>
            </Link>

          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <div className="callout">
            <div className="ck">Where to start</div>
            <p>Not sure which door is yours? <b>Start with the Briefing.</b> It's the front door — one month to a market-ready attack plan, and the honest basis for everything that follows. If by Day 10 it isn't sharper than your last engagement, we refund the full fee.</p>
            <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/ai-amplifier-briefing" className="btn btn-gold">Start with the Briefing →</Link>
              <Link to="/contact" className="btn btn-ghost">Talk to Robert</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
