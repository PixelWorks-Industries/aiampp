import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import VodafoneTradeIn from './pages/VodafoneTradeIn.jsx';
import DavidsBridal from './pages/DavidsBridal.jsx';
import CyanSecurity from './pages/CyanSecurity.jsx';
import Audit from './pages/Audit.jsx';
import AgenticOperatingModel from './pages/AgenticOperatingModel.jsx';
import ValueCreationAudit from './pages/ValueCreationAudit.jsx';
import MarketEntrySprint from './pages/MarketEntrySprint.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading && <Loader onFinished={() => setLoading(false)} />}
      <BrowserRouter>
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/vodafone-trade-in" element={<VodafoneTradeIn />} />
            <Route path="/davids-bridal" element={<DavidsBridal />} />
            <Route path="/cyan-security" element={<CyanSecurity />} />
            <Route path="/ai-amplifier-briefing" element={<Audit />} />
            <Route path="/agentic-operating-model" element={<AgenticOperatingModel />} />
            <Route path="/value-targeting" element={<ValueCreationAudit />} />
            <Route path="/market-entry-sprint" element={<MarketEntrySprint />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
