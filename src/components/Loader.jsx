import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loader({ onFinished }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    // Subtle pulse animation
    gsap.to('.loader-logo', { opacity: 0.5, duration: 1, yoyo: true, repeat: -1, ease: "power1.inOut" });

    // Fade out after a short duration
    gsap.to(loaderRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 1.5,
      onComplete: () => {
        onFinished();
      }
    });
  }, [onFinished]);

  return (
    <div ref={loaderRef} className="loader-overlay">
      <img src="/assets/logo-white.png" alt="AI Amplifier" className="loader-logo" />
    </div>
  );
}
