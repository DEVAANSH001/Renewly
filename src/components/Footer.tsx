import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub as Github } from 'react-icons/fa';

const MAIN_API_URL = 'https://renewly-api-fl2k.onrender.com/api';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-24 pb-12 px-4 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-white font-medium tracking-tight text-xl">Renewly</span>
            </div>
            <p className="text-gray-400 text-sm max-w-[360px] leading-relaxed mb-6 font-body">
              Track subscriptions, use the docs, and connect directly to the live Render API when you're ready to integrate.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="https://github.com/DEVAANSH001" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6 text-sm">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-body">
                <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
                <li><Link to="/docs" className="hover:text-white transition-colors">Docs</Link></li>
                <li><a href={MAIN_API_URL} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Live API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm">Status</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-body">
                <li className="text-teal">API endpoint is live</li>
                <li>Render base URL configured</li>
                <li>Docs page available</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-body">
          <p>© 2025 Renewly. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
           
            <span>Built with Node.js · MongoDB · Upstash · Arcjet</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
