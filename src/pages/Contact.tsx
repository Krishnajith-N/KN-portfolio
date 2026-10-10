import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Globe, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ContactForm } from '../components/ContactForm';
import { PageTransition } from '../components/PageTransition';

export const Contact: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin': return <Linkedin size={22} />;
      case 'Instagram': return <Instagram size={22} />;
      case 'Globe': return <Globe size={22} />;
      case 'Mail': return <Mail size={22} />;
      default: return <Globe size={22} />;
    }
  };

  return (
    <PageTransition>
      <div className="w-full pt-32 pb-24 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 relative z-10">
          
          {/* PAGE HEADER */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-charcoal border border-brand-white/10 text-xs font-mono text-brand-orange">
              <Sparkles size={14} className="animate-spin-slow" />
              <span>LET'S CREATE SOMETHING REMARKABLE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-brand-offwhite leading-[1.05]">
              HAVE A GOOD <br />
              <span className="text-brand-orange">PROJECT IN MIND?</span>
            </h1>

            <p className="text-brand-grey text-base sm:text-lg md:text-xl leading-relaxed">
              Let's talk about your brand, your goals, and what we could create together.
            </p>
          </div>

          {/* MAIN CONTACT CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Links & Info */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Direct Email Card */}
              <div className="p-8 rounded-3xl bg-brand-charcoal border border-brand-white/10 space-y-4">
                <span className="text-xs font-mono text-brand-orange tracking-widest uppercase block">
                  // DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xl md:text-2xl font-bold font-display text-brand-offwhite hover:text-brand-orange transition-colors break-all flex items-center gap-2 group"
                  data-cursor="EMAIL"
                >
                  <span>{siteConfig.emailPlaceholder}</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                </a>
                <p className="text-xs text-brand-grey font-mono">
                  Preferred for campaign briefs, RFP proposals, and full strategy retainer inquiries.
                </p>
              </div>

              {/* Social Channels List */}
              <div className="space-y-6">
                <span className="text-xs font-mono text-brand-grey tracking-widest uppercase block">
                  // CONNECT ON SOCIAL CHANNELS
                </span>

                <div className="grid grid-cols-1 gap-4">
                  {siteConfig.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl bg-brand-charcoal/60 border border-brand-white/10 hover:border-brand-orange/50 flex items-center justify-between group transition-all duration-300"
                      data-cursor="CONNECT"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-brand-black text-brand-orange group-hover:scale-110 transition-transform">
                          {getSocialIcon(social.iconName)}
                        </div>
                        <div>
                          <span className="text-sm font-bold font-display text-brand-offwhite block group-hover:text-brand-orange transition-colors">
                            {social.name}
                          </span>
                          <span className="text-xs font-mono text-brand-grey">
                            {social.placeholderText}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight size={18} className="text-brand-grey group-hover:text-brand-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Banner */}
              <div className="p-6 rounded-2xl bg-brand-black border border-brand-white/10 flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <span className="text-xs font-mono text-brand-offwhite block font-bold">
                    CURRENT AVAILABILITY: {siteConfig.availabilityText}
                  </span>
                  <span className="text-[11px] font-mono text-brand-grey">
                    Accepting new projects for Q4 & 2025 campaign rollouts.
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};
