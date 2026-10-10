import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Linkedin, Instagram, Globe, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin': return <Linkedin size={18} />;
      case 'Instagram': return <Instagram size={18} />;
      case 'Globe': return <Globe size={18} />;
      case 'Mail': return <Mail size={18} />;
      default: return <Globe size={18} />;
    }
  };

  return (
    <footer className="bg-brand-charcoal text-brand-offwhite border-t border-brand-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-white/10">
          
          {/* Main Footer Brand Header */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-4xl md:text-5xl font-bold font-display tracking-tight text-brand-offwhite">
                {siteConfig.name.toUpperCase()}
              </span>
              <span className="text-brand-orange text-4xl md:text-5xl font-bold">.</span>
            </Link>
            <p className="text-brand-grey max-w-md text-sm md:text-base leading-relaxed">
              {siteConfig.role} — Blending creative storytelling, thoughtful strategy, and content that connects brands with real audiences.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-brand-orange">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
              <span>MADE WITH INTENTION.</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-brand-grey tracking-widest uppercase mb-4">
              // INDEX
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-brand-orange transition-colors">HOME</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-orange transition-colors">ABOUT</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-brand-orange transition-colors">WORK</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-orange transition-colors">CONTACT</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono text-brand-grey tracking-widest uppercase mb-4">
              // CONNECT
            </h4>
            <div className="flex flex-col gap-3">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-brand-offwhite hover:text-brand-orange transition-colors group"
                  data-cursor="CONNECT"
                >
                  <span className="p-2 rounded-full bg-brand-black border border-brand-white/10 group-hover:border-brand-orange transition-colors">
                    {getSocialIcon(social.iconName)}
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-brand-grey font-mono">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-brand-offwhite hover:text-brand-orange transition-colors group"
            data-cursor="TOP"
          >
            <span>BACK TO TOP</span>
            <span className="p-2 rounded-full bg-brand-black border border-brand-white/10 group-hover:bg-brand-orange group-hover:text-brand-black transition-all">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
