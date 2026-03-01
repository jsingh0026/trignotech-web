import Logo from "./Logo";

const serviceLinks = [
  "Salesforce", "Full Stack", "Mobile Apps",
  "Payment Integration", "DevOps & Cloud", "AI & SEO",
];

const companyLinks = ["About Us", "Testimonials", "Contact"];

const socialLinks = ["LinkedIn", "Twitter / X", "GitHub", "Instagram"];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white/55 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-3 no-underline mb-4">
              <Logo size={34} />
              <span className="text-white text-lg font-bold tracking-tight">
                Trigno<span className="text-[#6BB3F0]">tech</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed">
              Your end-to-end technology consultancy partner, delivering
              innovative digital solutions that drive real business results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/45 hover:text-[#6BB3F0] transition-colors no-underline"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((c) => (
                <li key={c}>
                  <a
                    href={`#${c.toLowerCase().replace(/\s/g, "")}`}
                    className="text-sm text-white/45 hover:text-[#6BB3F0] transition-colors no-underline"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Connect</h4>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-white/45 hover:text-[#6BB3F0] transition-colors no-underline"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <span>© 2025 Trignotech. All rights reserved.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-[#6BB3F0] transition-colors no-underline">Privacy Policy</a>
            <span className="text-white/20">·</span>
            <a href="#" className="hover:text-[#6BB3F0] transition-colors no-underline">Terms of Service</a>
          </span>
        </div>

      </div>
    </footer>
  );
}
