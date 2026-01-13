"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Placeholder data for work gallery
const workImages = [
  { id: 1, alt: "Before and after garage cleanup" },
  { id: 2, alt: "Yard waste removal project" },
  { id: 3, alt: "Appliance removal from home" },
  { id: 4, alt: "Commercial property cleanout" },
  { id: 5, alt: "Hoarding cleanup transformation" },
  { id: 6, alt: "Construction debris removal" },
  { id: 7, alt: "Estate cleanout project" },
  { id: 8, alt: "Backyard debris hauling" },
]

function WorkImage({
  image,
  size = "default",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  image: { id: number; alt: string }
  size?: "default" | "large"
}) {
  return (
    <div
      data-slot="work-image"
      className={cn(
        "group relative overflow-hidden rounded-xl bg-gradient-to-br from-muted to-muted/50 cursor-pointer",
        size === "large" ? "aspect-square md:aspect-[4/3]" : "aspect-square",
        className
      )}
      {...props}
    >
      {/* Image Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-secondary/5 group-hover:bg-primary/10 transition-colors duration-300">
        <span className="text-muted-foreground/50 text-sm font-medium text-center px-4">
          [Project Image {image.id}]
        </span>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-white text-sm font-medium">{image.alt}</p>
      </div>

      {/* Zoom Icon */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
          />
        </svg>
      </div>
    </div>
  )
}

function OurWork({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="our-work"
      className={cn("py-20 sm:py-28 bg-background", className)}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wide text-foreground mb-4">
            OUR WORK
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            See the difference we make. Check out some of our recent projects
            and transformations.
          </p>
        </div>

        {/* Gallery Grid - Masonry-style layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* First row - 2 regular + 1 large */}
          <WorkImage image={workImages[0]} />
          <WorkImage image={workImages[1]} />
          <WorkImage
            image={workImages[2]}
            size="large"
            className="md:col-span-2 md:row-span-2"
          />
          <WorkImage image={workImages[3]} />
          <WorkImage image={workImages[4]} />

          {/* Second row */}
          <WorkImage
            image={workImages[5]}
            size="large"
            className="col-span-2 md:col-span-1 md:row-span-1"
          />
          <WorkImage image={workImages[6]} />
          <WorkImage image={workImages[7]} />
        </div>

        {/* Before/After Indicator */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-destructive/30" />
            <span>Before</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-accent" />
            <span>After</span>
          </div>
          <span className="text-muted-foreground/50">|</span>
          <span>Hover over images for details</span>
        </div>
      </div>
    </section>
  )
}

export { OurWork }
