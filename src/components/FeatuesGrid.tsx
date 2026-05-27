import React from 'react';
import { motion } from 'framer-motion';
import { Shield, LayoutDashboard, Clock, Mail, ShieldCheck, Zap, MessageCircle }

from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-teal" />,
    title: "Secure Auth",
    description: "JWT bearer auth for protected subscription and user routes. Rate limited to 100 req/min via Arcjet.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-cyan" />,
    title: "Subscription CRUD",
    description: "Create, update, delete, and view all your subscriptions in one dashboard.",
  },
  {
    icon: <Clock className="w-6 h-6 text-teal" />,
    title: "Smart Reminders",
    description: "Renewal alerts auto-scheduled via Upstash QStash. Set it once, forget it.",
  },
  {
    icon: <Mail className="w-6 h-6 text-cyan" />,
    title: "Email Alerts",
    description: "Transactional emails sent via Resend — lands in inbox, not spam.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-teal" />,
    title: "Telegram Notifications",
    description: "Get instant renewal alerts delivered straight to your Telegram account.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan" />,
    title: "Bot Protection",
    description: "Arcjet guards every endpoint from abuse, bots, and brute force.",
  },
  {
    icon: <Zap className="w-6 h-6 text-teal" />,
    title: "Lightning Fast",
    description: "Redis caching delivers <100ms response times across all API routes.",
  },
];

const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 px-4 bg-black relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-teal/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6"
          >
            Everything your subscriptions need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-body max-w-2xl mx-auto"
          >
            A full suite of tools built for speed, security, and developer experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/4 border border-white/8 backdrop-blur-sm rounded-2xl p-8 hover:border-teal/30 hover:bg-white/6 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-body font-semibold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
