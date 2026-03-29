'use client';

import { motion } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Check } from 'lucide-react';

const ApiShowcase = () => {
  const code = `bash
POST /api/v1/subscriptions
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "name": "GitHub Pro",
  "price": 4,
  "currency": "USD",
  "frequency": "monthly",
  "renewalDate": "2025-05-01"
}

// ✓ Reminder auto-scheduled via QStash
// ✓ Email alert queued via Resend
// ✓ Rate limit: 100 req/min (Arcjet)`;

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display mb-4 italic">Built for developers</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative group"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-teal to-cyan rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
        
        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-2 text-xs font-mono text-gray-500">api/v1/subscriptions</span>
          </div>
          
          <pre className="p-6 md:p-8 overflow-x-auto">
            <code className="font-mono text-sm md:text-base leading-relaxed text-gray-300">
              {code.split('\n').map((line, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-gray-600 select-none w-4 text-right">{i + 1}</span>
                  <span className={line.startsWith('//') ? 'text-teal/70 italic' : ''}>
                    {line}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {['JWT Secured', 'Auto-scheduled', 'Email delivered'].map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
            <Check className="w-4 h-4 text-teal" />
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApiShowcase;
