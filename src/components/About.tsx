const features = [
  "Agile Development",
  "Scalable Architecture",
  "24/7 Support",
  "Certified Engineers",
  "On-time Delivery",
  "NDA Protected",
];

const techStack = [
  "Salesforce", "React", "Next.js", "Node.js", "Flutter",
  "React Native", "AWS", "GCP", "Docker", "Kubernetes",
  "Python", "TypeScript", "PostgreSQL", "MongoDB",
  "Stripe", "LangChain", "OpenAI",
];

export default function About() {
  return (
    <section id="about" className="bg-[#F3F4F6] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — text */}
        <div className="fade-in">
          <span className="text-[#3B8EE0] text-xs font-semibold uppercase tracking-widest">
            About Trignotech
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mt-3 mb-5">
            Your Trusted Technology Partner
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            At Trignotech, we bridge the gap between cutting-edge technology and
            real-world business outcomes. We don&apos;t just build software — we
            engineer solutions that scale, perform, and drive growth.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our multidisciplinary team of engineers, designers, and strategists
            brings deep expertise across cloud, mobile, web, and enterprise
            platforms to deliver transformative digital experiences.
          </p>

          {/* Feature checklist */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2.5 text-sm font-medium text-[#0D1B2A]">
                <span className="w-5 h-5 rounded-full brand-gradient text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                  ✓
                </span>
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Right — tech stack card */}
        <div className="fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <h3 className="text-lg font-bold text-[#0D1B2A] mb-1">
              Tech Stack We Work With
            </h3>
            <p className="text-sm text-gray-400 mb-5">
              Battle-tested technologies for robust solutions
            </p>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="bg-[#F3F4F6] border border-black/8 text-[#1B2A3B] text-sm font-medium px-3.5 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
