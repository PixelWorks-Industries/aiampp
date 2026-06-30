import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

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
            <h1 className="display">Who you&apos;ll work with.</h1>
            <p className="lede">High-stakes transformation for CEOs and PE-backed businesses ready to reinvent.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <ScrollReveal>
            <div className="profile">
              <div className="portrait">
                <img src="/assets/robert-hackl.jpg" alt="Robert Hackl, Founder and President of AI Amplifier Corporation" />
              </div>
              <div>
                <span className="eyebrow">Founder &amp; President</span>
                <div className="role">Robert Hackl - Operator. Builder. AI-era CEO partner.</div>
                <p>
                  Bold ideas, executed. Over 30 years at the intersection of customer experience, technology, and business-model disruption, Robert has built market-leading
                  growth organizations by turning complexity into clarity, underperformance into profitable growth, and disengaged teams into believers - work that has
                  unlocked hidden value and contributed to more than $50B in shareholder value.
                </p>
                <p>
                  As Global President, CMO, and Board Director at MCE Systems, he repositioned the company from a product vendor to a platform-led AI innovator in device
                  lifecycle management - forging strategic partnerships with AWS and TELUS, and launching the telecom&apos;s industry&apos;s first agentic AI deployment in smart
                  device care. His teams won 11 global gold technology awards and were named Telecoms Marketing Team of the Year, 2023. Before all of this, he built his
                  transformation foundation at McKinsey &amp; Company, advising boards on large-scale, mostly B2B transformations.
                </p>
                <p>Fellow of The Marketing Academy. Writes on transformation, customer experience, and AI for Medium and Forbes.</p>
                <p>&quot;My time with Robert was career-defining. He helped us break industry rules, deliver what others could not, and unlock my leadership potential.&quot;</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="block alt">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">Executive track record - operator and advisor, at scale</span>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="track">
              <div className="trk">
                <div className="org">MCE Systems</div>
                <div className="role">Global President - CMO - Board member</div>
              </div>
              <div className="trk">
                <div className="org">Sprint</div>
                <div className="role">GM Handset Financing &amp; Insurance - SVP Business Transformation</div>
              </div>
              <div className="trk">
                <div className="org">Vodafone DE</div>
                <div className="role">COO - Service &amp; tele-sales frontline, Digital Transformation, CX</div>
              </div>
              <div className="trk">
                <div className="org">T-Mobile US</div>
                <div className="role">SVP Channel Management - SLT member</div>
              </div>
              <div className="trk">
                <div className="org">Tele2</div>
                <div className="role">CEO</div>
              </div>
              <div className="trk">
                <div className="org">McKinsey &amp; Co.</div>
                <div className="role">Associate Principal</div>
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
              <span className="eyebrow">Strategic partnership - DotKonnekt</span>
              <p className="lead">Turn your AI ambition into business impact. <b>Fast.</b></p>
            </div>
            <p style={{ color: 'var(--mist)', fontSize: '18px', lineHeight: 1.6, maxWidth: '64ch', marginBottom: '40px' }}>
              With a full-stack AI Studio, domain expertise, and embedded engineering, we close the execution gap - getting AI into your systems, workflows, and teams in
              weeks, not years. Owned by you.
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
              <p className="lead">How we work - and when we say no.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="values-grid">
              <div className="val">
                <h4>Courage</h4>
                <p>Break the industry rule when the rule was wrong.</p>
              </div>
              <div className="val">
                <h4>Urgency</h4>
                <p>One month to decide, one quarter to ship.</p>
              </div>
              <div className="val">
                <h4>Independence</h4>
                <p>We sell judgment, not answers.</p>
              </div>
              <div className="val">
                <h4>Operator ownership</h4>
                <p>Your team runs it after we leave. No retainer, no dependency.</p>
              </div>
              <div className="val">
                <h4>Productized discipline</h4>
                <p>Fixed fee, fixed scope, market-ready.</p>
              </div>
              <div className="val">
                <h4>Honest fit</h4>
                <p>We turn down the engagements we can&apos;t win for you.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <ScrollReveal>
            <h2 className="display">Turn AI ambition into business impact.</h2>
            <p className="cta-sub">One month to a strategy that holds. One quarter to one that ships. One team, all the way through.</p>
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
