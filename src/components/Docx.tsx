'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { 
  Search, 
  ChevronRight, 
  Copy, 
  Check, 
  Lock, 
  User, 
  CreditCard, 
  Zap, 
  Menu, 
  X,
  ExternalLink,
  Terminal,
  
} 

from 'lucide-react';
import { FaGithub as Github, FaTwitter as Twitter,  } from 'react-icons/fa';


const sidebarItems = [
  {
    title: 'Overview',
    items: [
      { name: 'Introduction', id: 'introduction' },
      { name: 'Quick Start', id: 'quick-start' },
      { name: 'Authentication', id: 'authentication' },
    ]
  },
  {
    title: 'Authentication',
    items: [
      { name: 'Sign Up', id: 'auth-sign-up' },
      { name: 'Sign In', id: 'auth-sign-in' },
      { name: 'Sign Out', id: 'auth-sign-out' },
    ]
  },
  {
    title: 'Users',
    items: [
      { name: 'Get All Users', id: 'users-get-all' },
      { name: 'Get User by ID', id: 'users-get-id' },
      { name: 'Update User', id: 'users-update' },
    ]
  },
  {
    title: 'Subscriptions',
    items: [
      { name: 'List Subscriptions', id: 'subs-list' },
      { name: 'Create Subscription', id: 'subs-create' },
      { name: 'Get Details', id: 'subs-details' },
      { name: 'Cancel Subscription', id: 'subs-cancel' },
      { name: 'Upcoming Renewals', id: 'subs-upcoming' },
    ]
  },
  {
    title: 'Workflows',
    items: [
      { name: 'Trigger Reminders', id: 'workflow-reminders' },
    ]
  },
  {
    title: 'Resources',
    items: [
      { name: 'Error Codes', id: 'error-codes' },
      { name: 'Rate Limits', id: 'rate-limits' },
    ]
  }
];

const CodeBlock = ({ code, language = 'bash' }: { code: string, language?: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="absolute top-3 right-3 z-10">
        <button 
          onClick={copyToClipboard}
          className="p-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
        >
          {copied ? <Check className="w-4 h-4 text-teal" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/5">
          <Terminal className="w-3 h-3 text-gray-500" />
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{language}</span>
        </div>
        <pre className="p-5 overflow-x-auto">
          <code className="font-mono text-sm text-gray-300 leading-relaxed">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

const EndpointTable = ({ endpoints }: { endpoints: any[] }) => (
  <div className="my-8 overflow-hidden border border-white/10 rounded-xl bg-white/[0.02]">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-white/10 bg-white/5">
          <th className="px-4 py-3 text-xs font-mono text-gray-500 uppercase tracking-widest">Endpoint</th>
          <th className="px-4 py-3 text-xs font-mono text-gray-500 uppercase tracking-widest">Method</th>
          <th className="px-4 py-3 text-xs font-mono text-gray-500 uppercase tracking-widest">Path</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white/5">
        {endpoints.map((ep, i) => (
          <tr key={i} className="hover:bg-white/[0.02] transition-colors">
            <td className="px-4 py-4 text-sm font-medium text-white">{ep.name}</td>
            <td className="px-4 py-4">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                ep.method === 'GET' ? 'bg-blue-500/10 text-blue-400' :
                ep.method === 'POST' ? 'bg-green-500/10 text-green-400' :
                ep.method === 'PUT' ? 'bg-yellow-500/10 text-yellow-400' :
                'bg-red-500/10 text-red-400'
              }`}>
                {ep.method}
              </span>
            </td>
            <td className="px-4 py-4 text-sm font-mono text-gray-400">{ep.path}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const tocItems = [
  { name: 'Introduction', id: 'introduction', level: 0 },
  { name: 'Quick Start', id: 'quick-start', level: 0 },
  { name: 'Base URL', id: 'quick-start', level: 1 },
  { name: 'Authentication', id: 'authentication', level: 1 },
  { name: 'Endpoint Index', id: 'endpoint-index', level: 0 },
  { name: 'Authentication API', id: 'auth-api', level: 1 },
  { name: 'Users API', id: 'users-api', level: 1 },
  { name: 'Subscriptions API', id: 'subs-api', level: 1 },
  { name: 'Error Codes', id: 'error-codes', level: 0 },
  { name: 'Rate Limits', id: 'rate-limits', level: 0 },
];

const TableOfContents = ({ activeId }: { activeId: string }) => {
  return (
    <aside className="hidden xl:block w-64 pt-16 px-6 sticky top-0 h-screen overflow-y-auto">
      <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
        <Menu className="w-3 h-3" /> On this page
      </h4>
      <div className="relative">
        {/* Vertical Line Container */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />
        
        <ul className="space-y-0 relative">
          {tocItems.map((item, i) => {
            const isActive = activeId === item.id;
            return (
              <li key={i} className="relative">
                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div 
                    layoutId="active-toc"
                    className="absolute left-0 w-px bg-teal z-10 h-full shadow-[0_0_8px_#00F5A0]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <button 
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`
                    block w-full text-left py-2 pr-4 transition-all duration-200 text-xs
                    ${item.level === 1 ? 'pl-6' : 'pl-4'}
                    ${isActive ? 'text-teal font-medium' : 'text-gray-500 hover:text-gray-300'}
                  `}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0% -80% 0%',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll('section[id], div[id]');
    sections.forEach((section) => {
      if (tocItems.some(item => item.id === section.id)) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-teal selection:text-black">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-teal rounded flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-black rounded-sm" />
          </div>
          <span className="font-medium tracking-tight">Renewly Docs</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-400">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="max-w-[1600px] mx-auto flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-72 bg-black border-r border-white/5 pt-24 lg:pt-8 px-6 overflow-y-auto transition-transform lg:translate-x-0 lg:static
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="mb-10 hidden lg:flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-teal rounded flex items-center justify-center">
                <div className="w-3.5 h-3.5 border-2 border-black rounded-sm" />
              </div>
              <span className="text-lg font-medium tracking-tight">Renewly</span>
            </Link>
          </div>

          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-teal/50 transition-colors"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-gray-500 font-mono">
              Ctrl K
            </div>
          </div>

          <nav className="space-y-8 pb-20">
            {sidebarItems.map((group, i) => (
              <div key={i}>
                <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">{group.title}</h4>
                <ul className="space-y-1">
                  {group.items.map((item, j) => (
                    <li key={j}>
                      <button 
                        onClick={() => {
                          setActiveSection(item.id);
                          setIsSidebarOpen(false);
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group ${
                          activeSection === item.id ? 'bg-teal/10 text-teal' : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                        {activeSection === item.id && <div className="w-1 h-1 rounded-full bg-teal shadow-[0_0_8px_#00F5A0]" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 pt-24 lg:pt-16 pb-32 px-6 lg:px-16">
          <div className="max-w-3xl">
            {/* Introduction */}
            <section id="introduction" className="mb-20 scroll-mt-24">
              <h1 className="text-4xl md:text-5xl font-display mb-6 italic">Overview</h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Renewly API documentation. A comprehensive API for managing user subscriptions with automated renewal reminders. Get started in minutes with our RESTful endpoints.
              </p>
              <div className="flex gap-4">
                <button className="px-4 py-2 glass rounded-lg text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
                  <Copy className="w-4 h-4" /> Copy Markdown
                </button>
                <button className="px-4 py-2 glass rounded-lg text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
                  Open <ChevronRight className="w-4 h-4 rotate-90" />
                </button>
              </div>
            </section>

            <section id="quick-start" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-display mb-6 italic">Quick Start</h2>
              <p className="text-gray-400 mb-6">
                The fastest way to integrate Renewly is via our simple REST API. No complex OAuth flows — just a simple Bearer token.
              </p>
              
              <h3 className="text-xl font-medium mb-4">Base URL</h3>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl font-mono text-sm text-teal flex justify-between items-center">
                https://renewly-api.onrender.com/api
                <Copy className="w-4 h-4 text-gray-500 cursor-pointer hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-medium mt-10 mb-4">Authentication</h3>
              <p className="text-gray-400 mb-4">
                All requests require a JWT token passed as a Bearer token in the <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono">Authorization</code> header.
              </p>
              <CodeBlock 
                code={`curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
"https://renewly-api.onrender.com/api/subscriptions"`} 
              />
            </section>

            {/* Endpoints Index */}
            <section id="endpoint-index" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-display mb-8 italic">Endpoint Index</h2>
              
              <div id="auth-api" className="scroll-mt-24">
                <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-teal" /> Authentication
                </h3>
                <EndpointTable endpoints={[
                  { name: 'Register User', method: 'POST', path: '/auth/sign-up' },
                  { name: 'Sign In', method: 'POST', path: '/auth/sign-in' },
                  { name: 'Sign Out', method: 'POST', path: '/auth/sign-out' },
                ]} />
              </div>

              <div id="users-api" className="scroll-mt-24">
                <h3 className="text-xl font-medium mt-12 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-teal" /> Users
                </h3>
                <EndpointTable endpoints={[
                  { name: 'Get All Users', method: 'GET', path: '/users' },
                  { name: 'Get User by ID', method: 'GET', path: '/users/:id' },
                  { name: 'Update User', method: 'PUT', path: '/users/:id' },
                ]} />
              </div>

              <div id="subs-api" className="scroll-mt-24">
                <h3 className="text-xl font-medium mt-12 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-teal" /> Subscriptions
                </h3>
                <EndpointTable endpoints={[
                  { name: 'List All', method: 'GET', path: '/subscriptions' },
                  { name: 'Create New', method: 'POST', path: '/subscriptions' },
                  { name: 'Get Details', method: 'GET', path: '/subscriptions/:id' },
                  { name: 'Cancel', method: 'PUT', path: '/subscriptions/:id/cancel' },
                  { name: 'Upcoming', method: 'GET', path: '/subscriptions/upcoming-renewals' },
                ]} />
              </div>
            </section>

            {/* Error Codes */}
            <section id="error-codes" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-display mb-8 italic">Error Codes</h2>
              <div className="overflow-hidden border border-white/10 rounded-xl bg-white/[0.02]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-4 py-3 text-xs font-mono text-gray-500 uppercase tracking-widest">Status</th>
                      <th className="px-4 py-3 text-xs font-mono text-gray-500 uppercase tracking-widest">Meaning</th>
                      <th className="px-4 py-3 text-xs font-mono text-gray-500 uppercase tracking-widest">Common Cause</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { status: '400', meaning: 'Bad Request', cause: 'Missing required parameter' },
                      { status: '401', meaning: 'Unauthorized', cause: 'Invalid or missing JWT token' },
                      { status: '404', meaning: 'Not Found', cause: 'Resource does not exist' },
                      { status: '429', meaning: 'Rate Limited', cause: 'Too many requests (Arcjet protection)' },
                      { status: '500', meaning: 'Server Error', cause: 'Internal server issue' },
                    ].map((err, i) => (
                      <tr key={i}>
                        <td className="px-4 py-4 font-mono text-sm text-white">{err.status}</td>
                        <td className="px-4 py-4 text-sm text-gray-300">{err.meaning}</td>
                        <td className="px-4 py-4 text-sm text-gray-500">{err.cause}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                All errors return a JSON body with an <code className="bg-white/10 px-1 py-0.5 rounded text-xs font-mono">error</code> field.
              </p>
              <CodeBlock 
                code={`{
  "success": false,
  "message": "Unauthorized",
  "error": "Invalid or missing token"
}`} 
              />
            </section>

            {/* Rate Limits */}
            <section id="rate-limits" className="mb-20 scroll-mt-24">
              <h2 className="text-3xl font-display mb-6 italic">Rate Limits</h2>
              <p className="text-gray-400 leading-relaxed">
                To ensure platform stability, we enforce rate limits on all API endpoints using Arcjet. The default limit is <span className="text-white font-medium">100 requests per minute</span> per IP address.
              </p>
              <div className="mt-8 p-6 glass rounded-2xl flex items-start gap-4">
                <Zap className="w-6 h-6 text-teal shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Need higher limits?</h4>
                  <p className="text-sm text-gray-500 mb-4">Contact our sales team for enterprise plans with custom rate limits and dedicated support.</p>
                  <button className="text-sm text-teal hover:underline flex items-center gap-1">
                    Contact Sales <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Right Sidebar - TOC */}
        <TableOfContents activeId={activeSection} />
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
              <div className="w-2.5 h-2.5 border-2 border-black rounded-sm" />
            </div>
            <span className="text-sm font-medium tracking-tight">Renewly</span>
          </div>
          <p className="text-xs text-gray-600">© 2025 Renewly. All rights reserved.</p>
          <div className="flex gap-6">
            <Github className="w-4 h-4 text-gray-600 hover:text-white transition-colors" />
            <Twitter className="w-4 h-4 text-gray-600 hover:text-white transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}
