import Logo from "./Logo";

const stats = [
  { number: "50+",  label: "Projects Done" },
  { number: "30+",  label: "Happy Clients" },
  { number: "5+",   label: "Years Experience" },
  { number: "99%",  label: "Satisfaction Rate" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0D1B2A] flex items-center overflow-hidden px-6 md:px-12"
    >
      {/* Radial glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3B8EE0]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full bg-[#1B5FA8]/8 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl pt-28 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#3B8EE0]/15 border border-[#3B8EE0]/30 text-[#6BB3F0] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6BB3F0] animate-pulse-dot" />
          Technology Consultancy
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.12] mb-6">
          Transforming Ideas Into{" "}
          <span className="brand-gradient-text">Digital Excellence</span>
        </h1>

        {/* Description */}
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
          Trignotech is your end-to-end technology partner — from Salesforce
          solutions and full-stack development to DevOps, AI-powered chatbots,
          and seamless cloud deployments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="#services"
            className="brand-gradient text-white font-semibold px-8 py-3.5 rounded-full hover:shadow-[0_12px_35px_rgba(59,142,224,0.45)] hover:-translate-y-0.5 transition-all duration-300 no-underline"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="text-white font-semibold px-8 py-3.5 rounded-full border border-white/25 hover:border-[#6BB3F0] hover:text-[#6BB3F0] transition-all duration-300 no-underline"
          >
            Let&apos;s Talk →
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-white">{s.number}</div>
              <div className="text-xs text-white/45 uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating logo — hidden on small screens */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 z-10 items-center justify-center">
        <div className="animate-float">
          <Logo size={320} />
        </div>
        {/* Glow ring behind logo */}
        <div className="absolute w-72 h-72 rounded-full bg-[#3B8EE0]/20 blur-3xl -z-10" />
      </div>
    </section>
  );
}
