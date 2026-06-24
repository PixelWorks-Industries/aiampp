import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function DavidsBridal() {
  return (
    <main>
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
          <h1 className="display">From one dress to an 18-month relationship.</h1>
          <p className="lede"><b>David's Bridal</b> kept the steering human, then wired three gears of AI behind the Pearl app — turning a single transaction into the entire wedding journey.</p>
        </div>
      </section>

      <section className="stats" aria-label="Outcomes at a glance">
        <div className="wrap" style={{ paddingInline: 0 }}>
          <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
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

      <section className="block">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <span className="eyebrow">The bride's emotional journey</span>
              <p className="lead statement">Every bride feels happy for 15 minutes after the "yes" — <b>then panic sets in.</b></p>
            </div>
          </ScrollReveal>
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
      </section>
    </main>
  );
}
