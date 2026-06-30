import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function AgenticOperatingModel() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/services">Services</Link>
            <span className="sep">/</span>
            <span>Agentic Operating Model</span>
          </div>
          <h1 className="display">Agentic Operating Model</h1>
          <p className="lede">
            AI Amplifier provides the <b>judgment</b>. DotKonnekt provides the <b>execution engine</b> that ships it. A one-month decision-grade agentic roadmap, then live
            workflows in one quarter - not a POC. No lock-in. Owned by your team.
          </p>
        </div>
      </section>

      <section className="stats">
        <div className="wrap" style={{ paddingInline: 0 }}>
          <div className="stats-grid">
            <div className="stat" style={{ paddingLeft: 'var(--pad-x)' }}>
              <div className="num">1 month</div>
              <div className="lbl">SLT-level decision grade agentic roadmap</div>
            </div>
            <div className="stat">
              <div className="num">1 quarter</div>
              <div className="lbl">Sprint to production - workflows in operation</div>
            </div>
            <div className="stat">
              <div className="num">1 team</div>
              <div className="lbl">AI Amplifier with DotKonnekt</div>
            </div>
            <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
              <div className="num">No lock-in</div>
              <div className="lbl">Owned by your team</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Beyond the pilot</span>
              <p className="lead">Why the operators who reach production with agentic AI are compounding their lead - and how to be among them.</p>
            </div>
          </ScrollReveal>
          <div className="trigger-grid three">
            <div className="trigger">
              <div className="tn">40%</div>
              <h4>The agentic wave is here</h4>
              <p>40% of enterprise applications will feature task-specific AI agents by 2026, up from just 5% in 2025. The operators building agentic workflows now set the bar competitors will be measured against in 2027.</p>
              <div className="src">Sources: Gartner</div>
            </div>
            <div className="trigger">
              <div className="tn">12%</div>
              <h4>The 12% in production are pulling away</h4>
              <p>88% of AI-agent projects never reach production - only about 12% make it. For the operators who do, agentic AI is already paying back: roughly $3.70 returned for every $1 invested, with value realized in about 13 months.</p>
              <div className="src">Sources: IDC / Microsoft - IDC production rate</div>
            </div>
            <div className="trigger">
              <div className="tn">61%</div>
              <h4>Scope discipline decides</h4>
              <p>61% of agentic-AI failures trace to scope creep and data quality; 27% to insufficient tool or data access; 14% to security blockers. The AI itself is rarely the problem - the operating model is.</p>
              <div className="src">Source: Digital Applied (2026)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The joint stack</span>
            <p className="lead">One accountable team. Two distinct contributions.</p>
          </div>
          <div className="split cols-3">
            <div className="cell deep">
              <div className="ck">AI Amplifier brings - The Insight</div>
              <p>Customer-truth lens, target strategic agentic-model design, business case and value tracking, change-management narrative and CEO story.</p>
            </div>
            <div className="cell deep">
              <div className="ck">DotKonnekt brings - The execution engine</div>
              <p>Context Intelligence, AI Execution Platform, and Embedded Delivery - the Vertical AI Studio.</p>
            </div>
            <div className="cell deep">
              <div className="ck">Why DotKonnekt</div>
              <p>Faster to production - lower risk - embedded partnership - deep vertical context.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What triggers the engagement</span>
            <p className="lead">For the business leader who needs production, not a deck.</p>
          </div>
          <div className="split">
            <div className="cell">
              <div className="ck">01 | Pilots not moving</div>
              <p>Stuck in POC. Board patience running out.</p>
            </div>
            <div className="cell">
              <div className="ck">02 | Competitor in production</div>
              <p>A peer has deployed. The race has started.</p>
            </div>
            <div className="cell">
              <div className="ck">03 | Roadmap demand from above</div>
              <p>The board, owner, or investor is asking what the next 18 months of AI looks like - and the answer can't be a deck.</p>
            </div>
            <div className="cell">
              <div className="ck">04 | Strategic event ahead</div>
              <p>18-24 months to an exit, IPO, or funding round.</p>
            </div>
          </div>
          <div className="callout" style={{ marginTop: '32px' }}>
            <div className="ck">Not for</div>
            <p>Lack of strategic clarity (start with the Briefing) - pilot collectors - IT-owned transformations.</p>
          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <div className="callout">
            <div className="ck">Sponsor & Deliverables</div>
            <p>
              The sponsor is the business leader - CEO, business head, or business owner - sponsoring a tactical AI roadmap and build / buy / partner decisions. Strategy
              without execution is theatre. Execution without strategy is waste.
            </p>
            <div className="split cols-3" style={{ marginTop: '24px' }}>
              <div className="cell deep">
                <div className="ck">Who</div>
                <p>The Business Leader: CEO, business head, or business owner.</p>
              </div>
              <div className="cell deep">
                <div className="ck">Then</div>
                <p>Production, not theatre.</p>
              </div>
              <div className="cell deep">
                <div className="ck">Walk out with</div>
                <p>2-3 workflows in production, governance + guardrails, market-tested value evidence, and a ready-to-execute joint team.</p>
              </div>
            </div>
            <p style={{ marginTop: '22px' }}>Beyond the pilot. The 12% who ship are already pulling away. The other 88% never get past the POC.</p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="callout">
            <div className="ck">Agentic Final Callout</div>
            <p>Strategy without execution is theatre - let's build the part that ships.</p>
            <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/contact" className="btn btn-gold">Discuss your agentic move →</Link>
              <Link to="/contact" className="btn btn-ghost">Start the Briefing</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
