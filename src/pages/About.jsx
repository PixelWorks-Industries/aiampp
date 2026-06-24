import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal.jsx';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <span>About</span>
            </div>
            <h1 className="display">Who you'll work with.</h1>
            <p className="lede">High-stakes transformation for CEOs and PE-backed businesses <b>ready to reinvent.</b></p>
          </ScrollReveal>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <ScrollReveal>
            <div className="profile">
              <div className="portrait">
                <img src="/assets/robert-hackl.jpg" alt="Robert Hackl, Founder and Principal of AI Amplifier Corporation" />
              </div>
              <div>
                <span className="eyebrow">Founder & President</span>
                <div className="role">Robert Hackl — AI Transformation Architect & Change Agent</div>
                <p>Bold ideas, executed. Over 30 years at the intersection of customer experience, technology, and business-model disruption, Robert has built market-leading growth organizations by turning complexity into clarity, underperformance into profitable growth, and disengaged teams into believers - work that has unlocked hidden value and contributed to more than $50B in shareholder value.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Executive track record</span>
              <p className="lead">Operator and advisor, at scale.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="track">
              <div className="trk">
                <div className="org">MCE Systems</div>
                <div className="role">Global President · CMO · Board member</div>
              </div>
              <div className="trk">
                <div className="org">Sprint</div>
                <div className="role">GM Handset Financing & Insurance · SVP Business Transformation</div>
              </div>
              <div className="trk">
                <div className="org">Vodafone DE</div>
                <div className="role">COO · Service & tele-sales frontline, Digital Transformation, CX</div>
              </div>
              <div className="trk">
                <div className="org">T-Mobile US</div>
                <div className="role">SVP Channel Management · SLT member</div>
              </div>
              <div className="trk">
                <div className="org">Tele2</div>
                <div className="role">CEO</div>
              </div>
              <div className="trk">
                <div className="org">McKinsey & Co.</div>
                <div className="role">Associate Principal</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Academic foundations</span>
              <p className="lead">Marketing, management, and entrepreneurship.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="split">
              <div className="cell">
                <div className="ck">Kellogg MBA</div>
                <p>Northwestern · Marketing major</p>
              </div>
              <div className="cell">
                <div className="ck">University of Vienna · PhD</div>
                <p>Marketing · Vienna, Austria</p>
              </div>
              <div className="cell">
                <div className="ck">HEC Paris / WU Vienna</div>
                <p>European Management (CEMS-MIM)</p>
              </div>
              <div className="cell">
                <div className="ck">WU Vienna</div>
                <p>Entrepreneurship · Master's</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <ScrollReveal>
            <img src="/assets/dotkonnekt-logo.png" alt="DotKonnekt" style={{ height: '104px', width: 'auto', display: 'block', marginBottom: '32px' }} />
            <div className="section-head">
              <span className="eyebrow">Strategic partnership · DotKonnekt</span>
              <p className="lead">Turn your AI ambition into business impact. <b>Fast.</b></p>
            </div>
            <p style={{ color: 'var(--mist)', fontSize: '18px', lineHeight: 1.6, maxWidth: '64ch', marginBottom: '40px' }}>
              With a full-stack AI Studio, domain expertise, and embedded engineering, we close the execution gap — getting AI into your systems, workflows, and teams in weeks, not years. Owned by you.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="split cols-3">
              <div className="cell deep">
                <div className="ck">Context Intelligence</div>
                <p>AI strategy and industry-aligned workflows.</p>
              </div>
              <div className="cell deep">
                <div className="ck">AI Execution Platform</div>
                <p>A full-stack Vertical AI Studio. Cloud, model, and framework agnostic.</p>
              </div>
              <div className="cell deep">
                <div className="ck">Embedded Delivery</div>
                <p>Forward Deployed Engineers + production ops.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Our values</span>
              <p className="lead">How we work — and when we say no.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="values-grid">
              <div className="val">
                <h4>Courage</h4>
                <p>Leave the industry script to change the business model.</p>
              </div>
              <div className="val">
                <h4>Urgency</h4>
                <p>Act before competitive pressure compounds.</p>
              </div>
              <div className="val">
                <h4>Independence</h4>
                <p>We sell judgment, not the answer.</p>
              </div>
              <div className="val">
                <h4>Operator ownership</h4>
                <p>Your people own the work after we hand off.</p>
              </div>
              <div className="val">
                <h4>Productized discipline</h4>
                <p>Fixed fee, fixed scope, market-ready.</p>
              </div>
              <div className="val">
                <h4>Honest fit</h4>
                <p>We tell CEOs clearly when we're not the right partner.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <ScrollReveal>
            <h2 className="display">Turn AI ambition into business impact.</h2>
            <p className="cta-sub">Fast. With one accountable team — judgment and execution in a single engagement.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link to="/contact" className="btn btn-gold">Start the conversation →</Link>
              <Link to="/services" className="btn btn-ghost">See the engagements</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
