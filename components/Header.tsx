"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PHONE_NUMBER } from "./Hero";
import Link from "next/link";

function Header({ className, ...props }: React.ComponentProps<"header">) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#story", label: "Our Story" },
    { href: "#reviews", label: "Reviews" },
    { href: "#work", label: "Our Work" },
  ];

  return (
    <header
      data-slot="header"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5",
        className,
      )}
      {...props}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex gap-3 items-center group"
          >
            <div
              className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center font-display text-xl transition-colors duration-300",
                isScrolled
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/20 backdrop-blur-sm text-white",
              )}
            >
              JJ
            </div>
            <div
              className={cn(
                "hidden sm:block transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-white",
              )}
            >
              <span className="block text-xl tracking-wide leading-none font-display">
                JOE&apos;S JUNK
              </span>
              <span className="text-xs tracking-widest opacity-80">
                REMOVAL LLC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 items-center md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-primary",
                  isScrolled ? "text-foreground" : "text-white/90",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, "")}`}
              className={cn(
                buttonVariants({ size: "sm" }),
                "transition-all duration-300",
                !isScrolled && "shadow-lg",
              )}
            >
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors duration-300",
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/20",
            )}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-80 mt-4" : "max-h-0",
          )}
        >
          <nav
            className={cn(
              "flex flex-col gap-2 p-4 rounded-xl",
              isScrolled ? "bg-muted" : "bg-white/10 backdrop-blur-md",
            )}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300",
                  isScrolled
                    ? "text-foreground hover:bg-background"
                    : "text-white hover:bg-white/20",
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-current/10">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\D/g, "")}`}
                className={cn(buttonVariants({ size: "sm" }), "w-full")}
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Header };
