import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Commercial Junk Removal",
    description:
      "Professional cleanup for offices, retail spaces, warehouses, and construction sites. We handle large-scale projects efficiently.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Residential Junk Removal",
    description:
      "Clear out your home, garage, attic, or basement. From single items to full property cleanouts, we've got you covered.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Appliance Removal",
    description:
      "Safe and eco-friendly disposal of refrigerators, washers, dryers, stoves, and all types of household appliances.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    title: "Landscape Waste Removal",
    description:
      "Yard debris, tree trimmings, brush, and green waste. Keep your outdoor space clean and beautiful all year round.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

function ServiceCard({
  service,
  className,
  ...props
}: React.ComponentProps<"div"> & { service: Service }) {
  return (
    <div
      data-slot="service-card"
      className={cn(
        "group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2",
        className,
      )}
      {...props}
    >
      {/* Image Placeholder */}
      <div
        data-slot="service-image-placeholder"
        className="flex overflow-hidden relative justify-center items-center bg-gradient-to-br aspect-[4/3] from-muted to-muted/50"
      >
        <div className="absolute inset-0 transition-colors duration-500 bg-secondary/10 group-hover:bg-primary/10" />
        <span className="z-10 text-sm font-medium text-muted-foreground/50">
          [Service Image]
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex gap-3 items-center">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {service.icon}
          </div>
          <h3 className="text-2xl tracking-wide font-display text-foreground">
            {service.title.toUpperCase()}
          </h3>
        </div>
        <p className="leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>

      {/* Accent border on hover */}
      <div className="absolute right-0 bottom-0 left-0 h-1 transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 bg-primary" />
    </div>
  );
}

function Services({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="services"
      className={cn("py-20 sm:py-28 bg-background", className)}
      {...props}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl tracking-wide sm:text-5xl md:text-6xl font-display text-foreground">
            OUR SERVICES
          </h2>
          <div className="mx-auto mb-6 w-24 h-1 bg-primary" />
          <p className="text-lg text-muted-foreground">
            From small cleanups to large-scale removals, we handle it all with
            professionalism and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Services };
