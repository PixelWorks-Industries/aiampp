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
          <p className="lede">AI Amplifier provides the <b>judgment</b>. DotKonnekt provides the <b>execution engine</b>. A 1-month decision-grade agentic roadmap, then live workflows in 1 quarter — not a POC.</p>
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
              <div className="lbl">Sprint to production</div>
            </div>
            <div className="stat">
              <div className="num">2–3</div>
              <div className="lbl">Workflows in live operation</div>
            </div>
            <div className="stat" style={{ paddingRight: 'var(--pad-x)' }}>
              <div className="num">1 team</div>
              <div className="lbl">AI Amplifier with DotKonnekt</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Beyond the pilot</span>
              <p className="lead">Why the 12% who reach production with agentic AI are compounding their lead — <b>and how to be among them.</b></p>
            </div>
          </ScrollReveal>
          <div className="trigger-grid three">
            <div className="trigger">
              <div className="tn">40%</div>
              <h4>The agentic wave is here</h4>
              <p>of enterprise apps will feature agentic AI by 2026, up from just 5% in 2025. The operators building agentic workflows now set the bar competitors will be measured against in 2027.</p>
              <div className="src">Sources: Gartner</div>
            </div>
            <div className="trigger">
              <div className="tn">88%</div>
              <h4>The 12% in production are pulling away</h4>
              <p>of AI agent projects never reach production. The 12% who do earn 171% ROI globally — 192% in the U.S. — and the gap to everyone else compounds every quarter.</p>
              <div className="src">Sources: Gartner · MIT · Deloitte / Accenture 2026</div>
            </div>
            <div className="trigger">
              <div className="tn">34%</div>
              <h4>Scope discipline decides</h4>
              <p>of failures are scope creep; 27% insufficient tool or data access; 14% security blockers. AI itself is rarely the problem — governance, infrastructure, and scope are. Each one is solvable with a joint operating model — strategy plus execution in one accountable team.</p>
              <div className="src">Sources: Digital Applied 2026 · synthesis of Gartner + McKinsey + IDC</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
