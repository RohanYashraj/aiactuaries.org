"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 py-4 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent md:py-5",
      )}
    >
      <Section as="div" className="flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={closeMenu}
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-primary-foreground font-display text-sm">
              S
            </span>
          </div>
          <span className="font-display text-lg tracking-wide text-foreground">
            {siteContent.siteName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex"
          aria-label="Main navigation"
        >
          {siteContent.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors duration-250 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted md:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Section>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] bottom-0 z-50 bg-background/98 backdrop-blur-md transition-all duration-500 ease-in-out md:hidden",
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 invisible pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-center justify-center gap-8 p-8 h-full">
          {siteContent.nav.links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={cn(
                "font-display text-3xl text-foreground transition-all duration-300 hover:text-primary",
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground max-w-[200px]">
              {siteContent.footer.tagline}
            </p>
          </div>
        </nav>
      </div>

      {/* Fine terracotta rule */}
      <div className="mt-4 mx-auto max-w-6xl px-6">
        <div className="h-px bg-linear-to-r from-transparent via-primary/25 to-transparent shadow-[0_1px_rgba(255,255,255,0.1)]" />
      </div>
    </header>
  );
}
