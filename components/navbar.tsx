"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/lib/site-content";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
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
                AI
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
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </Section>

        {/* Fine terracotta rule */}
        <div className="mt-4 mx-auto max-w-6xl px-6">
          <div className="h-px bg-linear-to-r from-transparent via-primary/25 to-transparent shadow-[0_1px_rgba(255,255,255,0.1)]" />
        </div>
      </header>

      {/* ── Mobile Sidebar ── */}

      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none",
        )}
        aria-hidden="true"
        onClick={closeMenu}
      />

      {/* Sidebar panel */}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[70] w-72 max-w-[85vw] bg-background shadow-xl transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex h-full flex-col">
          {/* Close button */}
          <div className="flex items-center justify-end px-5 pt-5">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col gap-2 px-6 pt-6">
            {siteContent.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-display text-lg text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom branding */}
          <div className="border-t border-border px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display text-sm">
                  AI
                </span>
              </div>
              <span className="font-display text-base tracking-wide text-foreground">
                {siteContent.siteName}
              </span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              {siteContent.footer.tagline}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
