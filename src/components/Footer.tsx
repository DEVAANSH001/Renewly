import React from 'react';
import { Github, Twitter, Linkedin, Youtube } 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-24 pb-12 px-4 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              
              <span className="text-white font-medium tracking-tight text-xl">Renewly</span>
            </div>
            <p className="text-gray-400 text-sm max-w-[240px] leading-relaxed mb-6 font-body">
              Automatically track your subscriptions and never miss a renewal again.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-body">
              <li className="hover:text-white cursor-pointer transition-colors">Features</li>
              <li className="hover:text-white cursor-pointer transition-colors">How it works</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Docs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-body">
              <li className="hover:text-white cursor-pointer transition-colors">Changelog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Security</li>
              <li className="hover:text-white cursor-pointer transition-colors">Status</li>
              <li className="hover:text-white cursor-pointer transition-colors">Brand</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-body">
              <li className="hover:text-white cursor-pointer transition-colors">About</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Philosophy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-body">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
              <li className="hover:text-white cursor-pointer transition-colors">GDPR</li>
              <li className="hover:text-white cursor-pointer transition-colors">Legal Policies</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-body">
          <p>© 2025 Renewly. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" /> All systems operational
            </span>
            <span>Built with Node.js · MongoDB · Upstash · Arcjet · Resend</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
