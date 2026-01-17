"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface Owner {
  name: string;
  role: string;
  bio: string;
}

const owners: Owner[] = [
  {
    name: "Joe Fautz",
    role: "Owner & Founder",
    bio: "The driving force behind Joe's Junk Removal, Joe brings dedication and a commitment to excellence to every job.",
  },
  {
    name: "Duke McAllister",
    role: "Tell me the role pls",
    bio: "Joe's newly married brother-in-law and invaluable partner, Duke ensures every project runs smoothly and efficiently.",
  },
];

function OwnerCard({
  owner,
  className,
  ...props
}: React.ComponentProps<"div"> & { owner: Owner }) {
  return (
    <div
      data-slot="owner-card"
      className={cn("group text-center space-y-4", className)}
      {...props}
    >
      {/* Photo Placeholder */}
      <div
        data-slot="owner-photo-placeholder"
        className="flex overflow-hidden justify-center items-center mx-auto w-48 h-48 bg-gradient-to-br rounded-full ring-4 shadow-xl transition-all duration-300 sm:w-56 sm:h-56 from-muted to-muted/50 ring-primary/20 group-hover:ring-primary/40"
      >
        <div className="flex justify-center items-center w-full h-full bg-secondary/5">
          <span className="text-sm font-medium text-muted-foreground/50">
            [Photo]
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <h3 className="text-3xl tracking-wide font-display text-foreground">
          {owner.name.toUpperCase()}
        </h3>
        <p className="font-semibold text-primary">{owner.role}</p>
        <p className="mx-auto max-w-xs text-muted-foreground">{owner.bio}</p>
      </div>
    </div>
  );
}

function OurStory({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="our-story"
      className={cn(
        "py-20 sm:py-28 bg-gradient-to-b from-muted/50 to-background",
        className,
      )}
      {...props}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl tracking-wide sm:text-5xl md:text-6xl font-display text-foreground">
            OUR STORY
          </h2>
          <div className="mx-auto mb-8 w-24 h-1 bg-primary" />

          {/* Story Text */}
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Joe Fautz</span>{" "}
              is the owner and founder of Joe&apos;s Junk Removal. A{" "}
              <span className="font-semibold text-primary">
                family-owned business
              </span>{" "}
              established in 2022, we are committed to providing top-notch junk
              removal services.
            </p>
            <p>
              Working alongside his invaluable newly married brother-in-law{" "}
              <span className="font-semibold text-foreground">
                Duke McAllister
              </span>
              , they have a focus on{" "}
              <span className="text-primary">yard waste disposal</span>,{" "}
              <span className="text-primary">appliance removal</span>, and{" "}
              <span className="text-primary">hoarding clean-up</span>.
            </p>
            <p className="font-medium text-foreground">
              Together, we ensure prompt and high-quality solutions for our
              customers.
            </p>
          </div>
        </div>

        {/* Owners */}
        <div className="flex flex-col gap-12 justify-center items-center sm:flex-row sm:gap-16 lg:gap-24">
          {owners.map((owner) => (
            <OwnerCard
              key={owner.name}
              owner={owner}
            />
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 gap-8 mx-auto mt-20 max-w-4xl sm:grid-cols-3">
          <div className="space-y-3 text-center">
            <div className="flex justify-center items-center mx-auto w-16 h-16 rounded-full bg-primary/10">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl tracking-wide font-display">
              FAMILY VALUES
            </h4>
            <p className="text-sm text-muted-foreground">
              We treat your property like our own
            </p>
          </div>

          <div className="space-y-3 text-center">
            <div className="flex justify-center items-center mx-auto w-16 h-16 rounded-full bg-primary/10">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl tracking-wide font-display">
              PROMPT SERVICE
            </h4>
            <p className="text-sm text-muted-foreground">
              Quick response and efficient work
            </p>
          </div>

          <div className="space-y-3 text-center">
            <div className="flex justify-center items-center mx-auto w-16 h-16 rounded-full bg-primary/10">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h4 className="text-xl tracking-wide font-display">QUALITY WORK</h4>
            <p className="text-sm text-muted-foreground">
              Top-notch results, every time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { OurStory };
