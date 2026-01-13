"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface Owner {
  name: string
  role: string
  bio: string
}

const owners: Owner[] = [
  {
    name: "Joe Fautz",
    role: "Owner & Founder",
    bio: "The driving force behind Joe's Junk Removal, Joe brings dedication and a commitment to excellence to every job.",
  },
  {
    name: "Duke McAllister",
    role: "Co-Owner & Operations",
    bio: "Joe's newly married brother-in-law and invaluable partner, Duke ensures every project runs smoothly and efficiently.",
  },
]

function OwnerCard({
  owner,
  className,
  ...props
}: React.ComponentProps<"div"> & { owner: Owner }) {
  return (
    <div
      data-slot="owner-card"
      className={cn(
        "group text-center space-y-4",
        className
      )}
      {...props}
    >
      {/* Photo Placeholder */}
      <div
        data-slot="owner-photo-placeholder"
        className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center shadow-xl ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 overflow-hidden"
      >
        <div className="w-full h-full flex items-center justify-center bg-secondary/5">
          <span className="text-muted-foreground/50 text-sm font-medium">
            [Photo]
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <h3 className="font-display text-3xl tracking-wide text-foreground">
          {owner.name.toUpperCase()}
        </h3>
        <p className="text-primary font-semibold">{owner.role}</p>
        <p className="text-muted-foreground max-w-xs mx-auto">{owner.bio}</p>
      </div>
    </div>
  )
}

function OurStory({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="our-story"
      className={cn(
        "py-20 sm:py-28 bg-gradient-to-b from-muted/50 to-background",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wide text-foreground mb-4">
            OUR STORY
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />

          {/* Story Text */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <span className="text-foreground font-semibold">Joe Fautz</span>{" "}
              is the owner and founder of Joe&apos;s Junk Removal. A{" "}
              <span className="text-primary font-semibold">
                family-owned business
              </span>{" "}
              established in 2022, we are committed to providing top-notch junk
              removal services.
            </p>
            <p>
              Working alongside his invaluable newly married brother-in-law{" "}
              <span className="text-foreground font-semibold">
                Duke McAllister
              </span>
              , they have a focus on{" "}
              <span className="text-primary">yard waste disposal</span>,{" "}
              <span className="text-primary">appliance removal</span>, and{" "}
              <span className="text-primary">hoarding clean-up</span>.
            </p>
            <p className="text-foreground font-medium">
              Together, we ensure prompt and high-quality solutions for our
              customers.
            </p>
          </div>
        </div>

        {/* Owners */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-24">
          {owners.map((owner) => (
            <OwnerCard key={owner.name} owner={owner} />
          ))}
        </div>

        {/* Values */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
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
            <h4 className="font-display text-xl tracking-wide">FAMILY VALUES</h4>
            <p className="text-muted-foreground text-sm">
              We treat your property like our own
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
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
            <h4 className="font-display text-xl tracking-wide">PROMPT SERVICE</h4>
            <p className="text-muted-foreground text-sm">
              Quick response and efficient work
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
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
            <h4 className="font-display text-xl tracking-wide">QUALITY WORK</h4>
            <p className="text-muted-foreground text-sm">
              Top-notch results, every time
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { OurStory }
