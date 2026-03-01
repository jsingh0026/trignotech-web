const testimonials = [
  {
    initials: "RS",
    name: "Rahul Sharma",
    role: "VP of Sales, NovaCorp",
    quote:
      "Trignotech completely transformed our Salesforce setup. They automated 60% of our sales process and the custom dashboards give us insights we never had before. Exceptional work.",
  },
  {
    initials: "EP",
    name: "Emily Parker",
    role: "CEO, ShopBridge Inc.",
    quote:
      "We needed a full e-commerce platform with a mobile app in 4 months. Trignotech delivered on time, on budget, and the UI is stunning. Our conversion rate jumped 35% after launch.",
  },
  {
    initials: "AK",
    name: "Arjun Kumar",
    role: "CTO, HelpdeskPro",
    quote:
      "Their AI chatbot trained on our product documentation cut our support tickets by 40%. Customers get instant, accurate answers at any hour. Best investment we've made this year.",
  },
  {
    initials: "ML",
    name: "Marie Laurent",
    role: "Engineering Lead, Streamify",
    quote:
      "Trignotech migrated our entire infrastructure to AWS with zero downtime. They set up auto-scaling, monitoring, and our deployment pipeline. The app is now 3× faster and costs less.",
  },
  {
    initials: "JT",
    name: "James Thornton",
    role: "Founder, PayEase",
    quote:
      "The payment gateway integration was flawless. They connected three providers with robust error handling. Transactions are smooth, secure, and customers love the experience.",
  },
  {
    initials: "SP",
    name: "Sanya Patel",
    role: "Marketing Director, GreenLeaf",
    quote:
      "Our SEO rankings went from page 4 to top 3 for our key terms within 5 months. Trignotech's technical SEO team knows their craft. Organic traffic is up 180%.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-[#0D1B2A] py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#3B8EE0]/8 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14 fade-in">
          <span className="text-[#6BB3F0] text-xs font-semibold uppercase tracking-widest">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Trusted by businesses across industries to deliver technology that
            makes a real difference.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="fade-in bg-white/5 border border-white/10 rounded-2xl p-7
                         hover:bg-white/8 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="text-yellow-400 text-base mb-4 tracking-wide">
                ★★★★★
              </div>

              <p className="text-white/75 text-sm leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 brand-gradient rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/45 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
