import React from 'react';
import { motion } from 'framer-motion';

const BigLogoSection: React.FC = () => {
  return (
    <section className="relative py-10 bg-black flex items-center justify-center overflow-hidden">
      {/* Top Border Glow (Subtle line from the image) */}
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative group cursor-default">
        {/* The Text Container */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-[120px] md:text-[200px] lg:text-[300px] font-bold tracking-tighter leading-none select-none 
                     transition-colors duration-700 ease-in-out
                     text-[#111111] group-hover:text-[#1a1a1a]"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Renewly

          {/* Top Edge Highlight on Hover */}
          <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            Renewly
          </span>
        </motion.h2>

        {/* The "Floor" Glow Effect */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-[100px] pointer-events-none">
          {/* Subtle reflection line */}
          
          {/* Soft radial glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
      </div>
    </section>
  );
};

export default BigLogoSection;