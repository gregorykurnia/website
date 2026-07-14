"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 glass-header border-b border-outline-variant/30 transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
        <a href="/" className="flex items-center">
          <Image
            src="/deus-logo.jpg"
            alt="DEUS"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-xl">
          <div className="relative dropdown">
            <button className="flex items-center gap-1 text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md">
              Products{" "}
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className="dropdown-content border border-outline-variant/30">
              <a
                className="block px-md py-sm hover:bg-surface-container-low transition-colors text-label-md"
                href="/discover"
              >
                Discover
              </a>
              <a
                className="block px-md py-sm hover:bg-surface-container-low transition-colors text-label-md"
                href="#"
              >
                Enhance
              </a>
            </div>
          </div>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md"
            href="#"
          >
            About
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md"
            href="#"
          >
            Insights
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md"
            href="#"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-md">
          <a
            aria-label="Chat with us on WhatsApp"
            className="p-2 bg-green-500/10 text-green-600 rounded-full hover:bg-green-500/20 transition-all flex items-center justify-center"
            href="https://wa.me/"
          >
            <svg
              className="lucide lucide-message-circle"
              fill="none"
              height="20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="20"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </a>
          <button
            aria-label="Book a Demo"
            className="bg-primary-container text-on-primary-container px-lg py-sm rounded-full font-label-md text-label-md hover:scale-105 active:scale-95 transition-all duration-150"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </header>
  );
}
