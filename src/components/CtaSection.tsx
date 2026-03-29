import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@blinkdotnew/ui';
import { ArrowRight } 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-teal/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-8 leading-tight tracking-tighter"
        >
          Stop losing money to forgotten subscriptions.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl font-body max-w-2xl mx-auto mb-12"
        >
          Join developers who track smarter with Renewly. Start tracking for free today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <Button className="h-16 px-10 rounded-full bg-gradient-to-r from-teal to-cyan text-black hover:opacity-90 border-none text-xl font-bold group shadow-[0_0_40px_rgba(0,245,160,0.3)] hover:shadow-[0_0_60px_rgba(0,245,160,0.5)] transition-all duration-300">
            Get Started Free <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
