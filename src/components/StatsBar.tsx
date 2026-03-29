import React, { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, suffix = "", prefix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const StatsBar: React.FC = () => {
  return (
    <section className="py-20 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-around gap-12 md:gap-0 relative z-10">
        <div className="text-center md:w-1/3">
          <div className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-2">
            <CountUp end={100} prefix="< " suffix="ms" />
          </div>
          <p className="text-gray-400 font-body uppercase tracking-widest text-xs sm:text-sm">API Response Time</p>
        </div>

        <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="text-center md:w-1/3">
          <div className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-2">
            <CountUp end={100} suffix=" req/min" />
          </div>
          <p className="text-gray-400 font-body uppercase tracking-widest text-xs sm:text-sm">Rate Limit (Arcjet)</p>
        </div>

        <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="text-center md:w-1/3">
          <div className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-2">
            <CountUp end={3} suffix=" Providers" />
          </div>
          <p className="text-gray-400 font-body uppercase tracking-widest text-xs sm:text-sm">QStash · Resend · Arcjet</p>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
    </section>
  );
};

export default StatsBar;
