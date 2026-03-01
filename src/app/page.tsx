import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trignotech",
  url: "https://trignotech.com",
  logo: "https://trignotech.com/icon.svg",
  email: "info@trignotech.com",
  description:
    "Your end-to-end technology partner — Salesforce, Full Stack, Mobile Apps, DevOps, Payment Integrations, and AI-powered Chatbots.",
  serviceType: [
    "Salesforce Development",
    "Full Stack Development",
    "Mobile App Development",
    "Payment Integration",
    "DevOps & Cloud",
    "AI Chatbots",
    "SEO",
  ],
  sameAs: [
    "https://linkedin.com/company/trignotech",
    "https://twitter.com/trignotech",
    "https://github.com/trignotech",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollAnimations />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
