"use client";

import * as React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PHONE_NUMBER = "(520) 555-JUNK";

function Hero({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="hero"
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Background Image Placeholder - Tucson Arizona */}
      <div className="absolute inset-0 z-0">
        <div
          data-slot="hero-background-placeholder"
          className="flex justify-center items-center w-full h-full bg-gradient-to-br from-secondary/90 via-secondary/70 to-primary/40"
        >
          <Image
            src="/hero-image.avif"
            className="object-cover object-center absolute w-full h-full"
            alt="Tucson Arizona Background Image"
            width={1920}
            height={1080}
          />
        </div>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 mx-auto text-center sm:px-6 lg:px-8">
        <div className="mx-auto space-y-8 max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-5xl tracking-wide leading-none text-white sm:text-6xl md:text-7xl lg:text-8xl font-display text-shadow-lg">
            QUALITY JUNK REMOVAL
          </h1>

          {/* Subheadline */}
          <p className="mx-auto max-w-3xl text-lg leading-relaxed sm:text-xl md:text-2xl text-white/90 text-shadow">
            At Joe&apos;s Junk Removal LLC, we specialize in efficient and
            reliable junk removal services for residential and commercial
            spaces. Let us take care of your unwanted items, leaving your space
            clean and clutter-free.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\D/g, "")}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "text-lg px-8 py-6 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105",
              )}
            >
              Call {PHONE_NUMBER} Today!
            </a>
          </div>

          {/* Trust Badge */}
          <div className="flex flex-wrap gap-6 justify-center items-center pt-6 text-sm text-white/80">
            <div className="flex gap-2 items-center">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Family Owned</span>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Free Estimates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 animate-bounce -translate-x-1/2">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

export { Hero, PHONE_NUMBER };
