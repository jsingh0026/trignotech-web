"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-[#0D1B2A]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.35)]"
            : "bg-[#0D1B2A]/80 backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 no-underline">
          <Logo size={38} />
          <span className="text-white text-xl font-bold tracking-tight">
            Trigno<span className="text-[#6BB3F0]">tech</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/75 hover:text-[#6BB3F0] text-sm font-medium transition-colors duration-200 no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="brand-gradient text-white text-sm font-semibold px-5 py-2 rounded-full hover:shadow-[0_8px_25px_rgba(59,142,224,0.4)] transition-all duration-300 hover:-translate-y-0.5 no-underline"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-[#0D1B2A]/98 flex flex-col items-center justify-center gap-10">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={close}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-white text-2xl font-semibold no-underline hover:text-[#6BB3F0] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="text-[#6BB3F0] text-2xl font-semibold no-underline hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      )}
    </>
  );
}
