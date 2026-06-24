import { useEffect, useMemo, useState, useRef } from 'react';
import gsap from 'gsap';

function buildWave(width) {
  const count = Math.max(14, Math.min(80, Math.round(width / 15)));
  return Array.from({ length: count }, (_, i) => {
    const t = count > 1 ? i / (count - 1) : 0;
    const env = Math.pow(Math.sin(Math.PI * t), 0.7);
    const detail = 0.5 + 0.5 * Math.abs(Math.sin(t * Math.PI * 5 + 0.6));
    const height = Math.max(8, Math.round(10 + 90 * env * detail));
    return {
      height: `${height}%`,
      background: i % 2 === 1 ? '#FFFFFF' : '#E3B54C',
      opacity: (0.6 + 0.4 * (height / 100)).toFixed(2)
    };
  });
}

export default function EqWave({ className = '' }) {
  const ref = useRef(null);
  const [bars, setBars] = useState([]);

  useEffect(() => {
    function update() {
      if (!ref.current) return;
      const width = ref.current.clientWidth || 360;
      setBars(buildWave(width));
    }

    update();
    const handleResize = () => {
      window.clearTimeout(window.__eqt);
      window.__eqt = window.setTimeout(update, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (bars.length === 0) return;
    
    const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    
    // Animate all bars
    timeline.to(ref.current.querySelectorAll('span'), {
      height: (index) => {
        const h = parseInt(bars[index].height);
        return `${Math.max(5, h * (0.5 + Math.random() * 0.5))}%`;
      },
      duration: 0.8,
      ease: 'power1.inOut',
      stagger: {
        amount: 0.5,
        grid: "auto",
        from: "center"
      }
    });
  }, [bars]);

  const classNames = ['eqwave', className].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={classNames} aria-hidden="true">
      {bars.map((style, index) => (
        <span key={index} style={style} />
      ))}
    </div>
  );
}
