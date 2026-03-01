const services = [
  {
    icon: "☁️",
    title: "Salesforce Development",
    description:
      "Expert Salesforce CRM customization, implementation, and integration. From Sales Cloud to Service Cloud — we maximize your Salesforce ROI with custom solutions built for your workflows.",
    tags: ["Sales Cloud", "Service Cloud", "Apex / LWC", "Flows & Triggers"],
  },
  {
    icon: "💻",
    title: "Full Stack Development",
    description:
      "Beautiful, performant web applications built with modern frameworks. Our full-stack team delivers pixel-perfect designs alongside rock-solid backend architecture.",
    tags: ["React / Next.js", "Node.js", "UI/UX Design", "REST & GraphQL"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile apps for iOS and Android. We handle everything from design through App Store and Play Store deployment with CI/CD pipelines.",
    tags: ["Flutter", "React Native", "iOS / Android", "App Store Deploy"],
  },
  {
    icon: "💳",
    title: "Payment Portal Integration",
    description:
      "Secure and seamless payment integrations for your web and mobile platforms. We support all major payment gateways with PCI-compliant implementations.",
    tags: ["Stripe", "PayPal", "Razorpay", "PCI Compliant"],
  },
  {
    icon: "🚀",
    title: "DevOps & Cloud Deployment",
    description:
      "End-to-end DevOps with CI/CD pipelines, containerization, and scalable cloud infrastructure on AWS and GCP for maximum reliability and uptime.",
    tags: ["AWS", "GCP", "Docker / K8s", "CI/CD Pipelines"],
  },
  {
    icon: "🤖",
    title: "AI Chatbots & SEO",
    description:
      "Custom AI-powered chatbots trained on your business context to engage customers 24/7. Paired with advanced SEO strategies to drive organic growth.",
    tags: ["RAG Chatbots", "LangChain / OpenAI", "Technical SEO", "Analytics"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 fade-in">
          <span className="text-[#3B8EE0] text-xs font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mt-3 mb-4">
            End-to-End Technology Services
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            From strategy to deployment, we deliver comprehensive digital solutions
            tailored to your business needs.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="fade-in group relative bg-[#F3F4F6] rounded-2xl p-7 border border-transparent
                         hover:bg-white hover:border-[#3B8EE0]/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]
                         hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] brand-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon */}
              <div className="w-14 h-14 brand-gradient rounded-[14px] flex items-center justify-center text-2xl mb-5">
                {s.icon}
              </div>

              <h3 className="text-lg font-bold text-[#0D1B2A] mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[#3B8EE0] bg-[#3B8EE0]/10 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
