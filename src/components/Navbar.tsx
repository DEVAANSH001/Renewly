import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@blinkdotnew/ui';
import { ArrowRight } 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
from 'lucide-react';

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-7xl h-16 px-6 flex items-center justify-between backdrop-blur-md bg-black/40 border border-white/5 rounded-full">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium tracking-tight text-xl">Renewly</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/#features" className="text-sm text-gray-400 hover:text-white transition-colors relative group py-2">
            Features
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal to-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          <Link to="/#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors relative group py-2">
            How it Works
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal to-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          <Link to="/docs"  rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors relative group py-2">
            Docs
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal to-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-sm text-white hidden sm:flex">Log In</Button>
          <Button className="rounded-full bg-gradient-to-br from-white to-gray-300 text-black border-none hover:opacity-90 font-medium px-5 group">
            Get Started Free <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
