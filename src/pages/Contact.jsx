import { useSearchParams } from 'react-router-dom';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const sent = searchParams.get('sent') === '1';

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <span>Contact</span>
          </div>
          <h1 className="display">Start the conversation.</h1>
          <p className="lede">If the next nine months will decide your AI position - start here. We respond personally, within 24 hours.</p>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <div className="form-grid">
            <div>
              <div
                className="col-head"
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: '13px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '30px',
                }}
              >
                Strategic inquiry · 3 fields
              </div>
              <form id="inquiry" name="strategic-inquiry" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
                <input type="hidden" name="_subject" value="New strategic inquiry — aiamplifier.com" />
                <input type="hidden" name="_next" value="https://aiamplifier.com/contact.html?sent=1" />
                <p style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <label>
                    Leave this empty: <input name="_gotcha" tabIndex="-1" autoComplete="off" />
                  </label>
                </p>
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input type="text" id="name" name="name" autoComplete="name" placeholder="Jane Calloway" required disabled={sent} />
                </div>
                <div className="field">
                  <label htmlFor="email">Corporate email address</label>
                  <input type="email" id="email" name="email" autoComplete="email" placeholder="jane@company.com" required disabled={sent} />
                </div>
                <div className="field">
                  <label htmlFor="q">What&apos;s the strategic question you keep meaning to address?</label>
                  <textarea id="q" name="q" placeholder="The question on your mind..." required disabled={sent} />
                </div>
                <button type="submit" className="btn btn-gold" disabled={sent}>
                  {sent ? 'Sent ✓' : 'Send to Robert →'}
                </button>
                <p className="form-note">
                  Applications are triaged by company stage and routed directly to Robert Hackl. No Calendly hand-off. No six-field form.
                </p>
                <div className={`form-ok ${sent ? 'show' : ''}`} id="ok">
                  Thank you — your note is on its way to Robert. Expect a personal reply within 24 hours.
                </div>
              </form>
            </div>

            <div>
              <div
                className="col-head"
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: '13px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '28px',
                }}
              >
                Who you&apos;ll hear from
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '30px' }}>
                <img
                  src="/assets/robert-hackl.jpg"
                  alt="Robert Hackl"
                  style={{ width: '66px', height: '66px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', background: '#000', border: '1px solid var(--navy-line)', flex: 'none' }}
                />
                <div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: '16px', color: 'var(--white)' }}>Robert Hackl</div>
                  <div style={{ fontSize: '13px', color: 'var(--mist-dim)', letterSpacing: '0.02em' }}>Founder &amp; President</div>
                </div>
              </div>
              <div className="aside-list">
                <div className="ai">
                  <h4>A personal reply</h4>
                  <p>Robert Hackl, personally — within 24 hours. Not a junior associate, not a calendar link.</p>
                </div>
                <div className="ai">
                  <h4>Limited capacity</h4>
                  <p>Limited capacity by design — we take on Briefings we can deliver well - not a queue of them.</p>
                </div>
                <div className="ai">
                  <h4>Not ready to talk?</h4>
                  <p>Not ready to talk? — Download the Customer Truth Test — six questions every CEO should answer before deploying AI.</p>
                </div>
              </div>

              <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '26px', marginTop: '38px', paddingTop: '34px', borderTop: '1px solid var(--navy-line)' }}>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
