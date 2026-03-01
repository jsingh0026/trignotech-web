'use client';

import { useRef, useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

const contactDetails = [
  { icon: Mail, label: 'Email Us', value: 'info@trignotech.com' },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Available Globally · Remote-First',
  },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
];

const services = [
  'Salesforce Development',
  'Full Stack Development',
  'Mobile App Development',
  'Payment Integration',
  'DevOps & Cloud',
  'AI Chatbots & SEO',
  'Multiple Services',
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '');
    console.log('first', process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    formData.append('from_name', 'Trignotech Website');
    formData.append('subject', 'New Contact Form Inquiry - Trignotech');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus('sent');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
        {/* Left — info */}
        <div className="fade-in">
          <span className="text-[#3B8EE0] text-xs font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mt-3 mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Have a project in mind? Reach out and let&apos;s discuss how
            Trignotech can help you achieve your technology goals.
          </p>

          <div className="flex flex-col gap-5">
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 bg-[#3B8EE0]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#3B8EE0]" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">
                    {label}
                  </div>
                  <div className="text-sm font-semibold text-[#0D1B2A] mt-0.5">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="fade-in bg-[#F3F4F6] rounded-2xl p-8 md:p-10">
          <h3 className="text-xl font-bold text-[#0D1B2A] mb-7">
            Send Us a Message
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0D1B2A] mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="John"
                  required
                  className="w-full px-4 py-3 bg-white border-[1.5px] border-black/10 rounded-xl text-sm text-[#0D1B2A] placeholder-gray-300 focus:outline-none focus:border-[#3B8EE0] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0D1B2A] mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Doe"
                  required
                  className="w-full px-4 py-3 bg-white border-[1.5px] border-black/10 rounded-xl text-sm text-[#0D1B2A] placeholder-gray-300 focus:outline-none focus:border-[#3B8EE0] transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-[#0D1B2A] mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                required
                className="w-full px-4 py-3 bg-white border-[1.5px] border-black/10 rounded-xl text-sm text-[#0D1B2A] placeholder-gray-300 focus:outline-none focus:border-[#3B8EE0] transition-colors"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-xs font-semibold text-[#0D1B2A] mb-1.5">
                Company{' '}
                <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                className="w-full px-4 py-3 bg-white border-[1.5px] border-black/10 rounded-xl text-sm text-[#0D1B2A] placeholder-gray-300 focus:outline-none focus:border-[#3B8EE0] transition-colors"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-xs font-semibold text-[#0D1B2A] mb-1.5">
                Service Interested In
              </label>
              <select
                name="service"
                required
                defaultValue=""
                className="w-full px-4 py-3 bg-white border-[1.5px] border-black/10 rounded-xl text-sm text-[#0D1B2A] focus:outline-none focus:border-[#3B8EE0] transition-colors appearance-none"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-[#0D1B2A] mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project, timeline, and goals..."
                rows={4}
                className="w-full px-4 py-3 bg-white border-[1.5px] border-black/10 rounded-xl text-sm text-[#0D1B2A] placeholder-gray-300 focus:outline-none focus:border-[#3B8EE0] transition-colors resize-y"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="brand-gradient text-white font-semibold py-3.5 rounded-full hover:shadow-[0_10px_30px_rgba(59,142,224,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message →'}
            </button>

            {/* Success */}
            {status === 'sent' && (
              <div className="bg-[#3B8EE0]/10 border border-[#3B8EE0]/30 text-[#3B8EE0] text-sm font-medium text-center py-3 px-4 rounded-xl">
                ✓ Message sent! We&apos;ll get back to you within 24 hours.
              </div>
            )}

            {/* Error */}
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-medium text-center py-3 px-4 rounded-xl">
                ✕ Something went wrong. Please try again or email us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
