import React from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';
import { Bell, Zap, Shield, ArrowRight } 

from 'lucide-react';

const MAIN_API_URL = 'https://renewly-api-fl2k.onrender.com/api';

const badges = [
  { icon: <Bell className="w-4 h-4 text-teal" />, text: "Automated Reminders" },
  { icon: <Zap className="w-4 h-4 text-cyan" />, text: "<100ms API" },
  { icon: <Shield className="w-4 h-4 text-teal" />, text: "Arcjet Protected" },
];

const techStack = [
  "Node.js", "MongoDB", "Upstash QStash", "Arcjet", "Resend", "JWT", "Redis"
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <VideoPlayer 
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="w-full h-[80vh] absolute top-1/2 -translate-y-1/2 hero-video-mask"
          opacity={0.3}
        />
      </div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-2"
            >
              {badge.icon}
              <span className="text-sm text-gray-300 font-body">{badge.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-8xl lg:text-9xl font-display text-white leading-[0.9] tracking-tighter mb-8 max-w-4xl"
        >
          Track every subscription. <br />
          <span className="text-gray-400">Miss none. Ever.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-xl mb-12 font-body"
        >
          Renewly automatically tracks your subscriptions and sends
          renewal reminders before you're charged — powered by a live Render API.
        </motion.p>

        <div className="mb-10 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs md:text-sm text-gray-300 flex items-center gap-3">
          <span className="uppercase tracking-[0.2em] text-gray-500">Live API</span>
          <a href={MAIN_API_URL} target="_blank" rel="noreferrer" className="font-mono text-teal break-all hover:text-cyan transition-colors">
            {MAIN_API_URL}
          </a>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-24"
        >
          <a href={MAIN_API_URL} target="_blank" rel="noreferrer" className="inline-flex h-14 items-center px-8 rounded-full bg-white text-black hover:bg-gray-200 border-none text-lg font-medium group transition-all">
            Open Live API <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/docs" className="inline-flex h-14 items-center px-8 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 text-lg backdrop-blur-sm">
            View API Docs
          </a>
        </motion.div>

        {/* Tech Marquee */}
        <div className="w-full relative overflow-hidden h-12 flex items-center">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center gap-x-12 grayscale opacity-40 whitespace-nowrap"
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={i} className="text-white font-mono text-xs tracking-widest uppercase px-6">
                {tech}
              </span>
            ))}
          </motion.div>
          {/* Fading edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
