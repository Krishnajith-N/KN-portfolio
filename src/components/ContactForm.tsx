import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

// ⬇️ WEB3FORMS ACCESS KEY ⬇️
const WEB3FORMS_ACCESS_KEY = "636616f8-dd36-47a4-aedd-97618cf16cf4";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Social Media Management',
    budget: '$1,000 - $3,000',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Social Media Management',
    'Content Strategy',
    'Digital Marketing Campaigns',
    'Content Creation',
    'Brand Communication',
    'Other / Advisory',
  ];

  const budgetRanges = [
    '< $1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000+',
    'Flexible / Undetermined',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Project Details).');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          company: formData.company || 'N/A',
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          subject: `New Project Inquiry from ${formData.name} (${formData.service})`,
          from_name: "Krishnendhu Portfolio Contact Form",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error while submitting. Please check your connection.');
    }
  };

  return (
    <div className="w-full bg-brand-charcoal/90 p-8 md:p-12 rounded-3xl border border-brand-white/10 shadow-2xl relative overflow-hidden">

      {/* Header */}
      <div className="space-y-3 mb-8">
        <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">// DIRECT PROJECT INQUIRY</span>
        <h3 className="text-2xl md:text-3xl font-bold font-display text-brand-offwhite">
          START A CONVERSATION
        </h3>
        <p className="text-brand-grey text-sm">
          Fill in the details below or email directly at{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-brand-orange underline">
            {siteConfig.emailPlaceholder}
          </a>
        </p>
      </div>

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-2xl bg-brand-black/80 border border-brand-orange/40 text-center space-y-4 my-8"
        >
          <div className="w-16 h-16 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <h4 className="text-2xl font-bold font-display text-brand-offwhite">
            THANK YOU FOR REACHING OUT!
          </h4>
          <p className="text-brand-grey text-sm max-w-md mx-auto">
            Your inquiry details have been captured. A mail window has also opened to send your direct message. Krishnendhu will respond within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="px-6 py-2.5 rounded-full bg-brand-black border border-brand-white/20 text-xs font-mono text-brand-orange hover:border-brand-orange transition-colors"
          >
            SEND ANOTHER MESSAGE
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === 'error' && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-400 text-xs font-mono flex items-center gap-3">
              <AlertCircle size={18} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-brand-grey tracking-wider uppercase block">
                YOUR NAME *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-3.5 rounded-xl bg-brand-black border border-brand-white/10 text-brand-offwhite placeholder:text-brand-grey/40 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-brand-grey tracking-wider uppercase block">
                YOUR EMAIL *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. sarah@brand.com"
                className="w-full px-4 py-3.5 rounded-xl bg-brand-black border border-brand-white/10 text-brand-offwhite placeholder:text-brand-grey/40 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-brand-grey tracking-wider uppercase block">
                COMPANY / BRAND (OPTIONAL)
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Studio Aura"
                className="w-full px-4 py-3.5 rounded-xl bg-brand-black border border-brand-white/10 text-brand-offwhite placeholder:text-brand-grey/40 text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>

            {/* Service */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-brand-grey tracking-wider uppercase block">
                SERVICE REQUIRED
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-brand-black border border-brand-white/10 text-brand-offwhite text-sm focus:outline-none focus:border-brand-orange transition-colors"
              >
                {services.map((item) => (
                  <option key={item} value={item} className="bg-brand-black text-brand-offwhite">
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget Selection */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-brand-grey tracking-wider uppercase block">
              ESTIMATED PROJECT BUDGET (OPTIONAL)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {budgetRanges.map((range) => (
                <button
                  type="button"
                  key={range}
                  onClick={() => setFormData((prev) => ({ ...prev, budget: range }))}
                  className={`px-3 py-2 rounded-lg text-xs font-mono border transition-all ${formData.budget === range
                      ? 'bg-brand-orange text-brand-black font-bold border-brand-orange'
                      : 'bg-brand-black border-brand-white/10 text-brand-grey hover:text-brand-offwhite'
                    }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Message Details */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-brand-grey tracking-wider uppercase block">
              PROJECT DETAILS & GOALS *
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, timeline, goals, or what challenges you're facing..."
              className="w-full px-4 py-3.5 rounded-xl bg-brand-black border border-brand-white/10 text-brand-offwhite placeholder:text-brand-grey/40 text-sm focus:outline-none focus:border-brand-orange transition-colors"
              required
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            data-cursor="SEND"
            className="w-full py-4 rounded-xl bg-brand-orange text-brand-black font-bold font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-brand-orange-dark hover:text-brand-offwhite transition-all duration-300 shadow-xl"
          >
            {status === 'submitting' ? (
              <span>SENDING INQUIRY...</span>
            ) : (
              <>
                <span>SEND PROJECT INQUIRY</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
