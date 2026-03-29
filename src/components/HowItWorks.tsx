import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Add Subscriptions",
    description: "Name, price, renewal date, currency",
  },
  {
    number: "02",
    title: "We Schedule Reminders",
    description: "QStash handles the job queue automatically",
  },
  {
    number: "03",
    title: "Get Smart Alerts",
    description: "Reminder hits your inbox or Telegram before you're charged",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4"
          >
            Set it. Forget it.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-body"
          >
            Three simple steps to never miss a payment again.
          </motion.p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-0">
          {/* Dotted Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] border-t-2 border-dotted border-teal/20 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative z-10 flex flex-col items-center text-center md:w-1/3 px-8 group"
            >
              <div className="w-24 h-24 rounded-full bg-black border-2 border-teal flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,245,160,0.1)] group-hover:shadow-[0_0_40px_rgba(0,245,160,0.3)] group-hover:scale-110 transition-all duration-500 bg-gradient-to-br from-black to-teal/5">
                <span className="text-3xl font-display text-teal group-hover:text-cyan transition-colors duration-500">{step.number}</span>
              </div>
              <h3 className="text-2xl font-body font-bold text-white mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 font-body leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
